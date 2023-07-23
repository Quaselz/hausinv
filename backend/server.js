import express from "express";
import cors from "cors";
import "./config/config.js";
import "./models/index.js";
import morgan from "morgan";
import { Inventar } from "./models/InventarModel.js";
import multer from "multer";

const app = express();
const port = 3000;
const upload = multer({ storage: multer.memoryStorage() });

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUDNAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
app.post("/api/inventar", upload.single("image"), async (req, res) => {
	try {
		cloudinary.uploader
			.upload_stream(
				{ resoure_type: "image", folder: "Hausinventar" },
				async (err, result) => {
					const response = await Inventar.create({
						...req.body,
						image: { url: result.secure_url, imageId: result.public_id },
					});
					res.json(response);
				}
			)
			.end(req.file.buffer);
	} catch (err) {
		console.error(err);
		res.sendStatus(500).send(err);
	}
});

app.put("/api/inventar/:id", upload.single("image"), async (req, res) => {
	try {
		const id = req.params.id;

		if (req.file) {
			cloudinary.uploader
				.upload_stream(
					{ resource_type: "image", folder: "Hausinventar" },
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
		const deletedInventar = await Inventar.findByIdAndDelete(id);
		cloudinary.uploader.destroy(deletedInventar.image?.imageId, (err) =>
			console.log(err)
		);
		res.send("Post has been deleted");
	} catch (err) {
		console.error(err);
		res.sendStatus(500).send("deleteFehler");
	}
});

app.listen(port, () => {
	console.log("tschuuu tschuuu");
});
