import "./config/config.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import "./models/index.js";
import { Inventar } from "./models/InventarModel.js";
import { v2 as cloudinary } from "cloudinary";

const app = express();
const PORT = 3000;
const upload = multer({ storage: multer.memoryStorage() });

//Cloudinary data
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUDNAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Middelware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/api/inventar", async (req, res) => {
	const data = await Inventar.find();
	res.send(data);
});

app.get("/api/inventar/:id", async (req, res) => {
	const id = req.params.id;
	const data = await Inventar.findById(id);
	res.send(data);
});

app.post("/api/inventar/image", upload.single("image"), async (req, res) => {
	console.log(req.file);
	try {
		cloudinary.uploader
			.upload_stream(
				{ resource_type: "image", folder: "InventarImages" },
				async (err, result) => {
					const response = await Inventar.create({
						...req.body,
						image: { url: result.secure_url, imageId: result.public_id },
					});
					res.json(response);
				}
			)
			.end(req.file.buffer);
	} catch (error) {
		console.log(error);
		res.status(500).send("bababa");
	}
});

app.put("/api/inventar/:id", upload.single("image"), async (req, res) => {
	try {
		const id = req.params.id;
		//console.log(req.file.buffer);

		if (req.file) {
			cloudinary.uploader
				.upload_stream(
					{ resource_type: "image", folder: "InventarImages" },
					async (err, result) => {
						const response = await Inventar.findByIdAndUpdate(id, {
							...req.body,
							image: { url: result.secure_url, imageId: result.public_id },
						});
						cloudinary.uploader.destroy(response.image?.imageId, (err) => {
							console.log(err);
						});
						res.json(response);
					}
				)
				.end(req.file.buffer);
		} else {
			const updateInventar = await Inventar.findByIdAndUpdate(id, req.body);
			res.send(updateInventar);
		}
	} catch (err) {
		console.error(err);
		res.sendStatus(500).send(err);
	}
});

app.delete("/api/inventar/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const deleteInventar = await Inventar.findByIdAndDelete(id);
		cloudinary.uploader.destroy(deleteInventar.image?.imageId, (error) => {
			console.log(err);
		});
	} catch (error) {
		console.log(err);
		res.send("Error Image Deletion");
	}
});

app.listen(PORT, () => {
	console.log(`Port läuft auf Port: ${PORT}`);
});
