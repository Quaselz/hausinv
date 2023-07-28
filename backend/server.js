import "./config/config.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import "./db/index.js";
import { v2 as cloudinary } from "cloudinary";
import { routing as InvRouting } from "./Inventar/Router.js";
import { routing as UserRouting } from "./User/Router.js";
import { setup } from "./setup.js";

const app = express();
const PORT = 3000;
const upload = multer({ storage: multer.memoryStorage() });

const FE_DIR = new URL("../frontend/dist", import.meta.url).pathname;
const FE_INDEX = new URL("../frontend/dist/index.html", import.meta.url);
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
app.use(express.static(FE_DIR));

app.use("/api/inventar", InvRouting);
app.use("/api/user", UserRouting);

app.get("*", (req, res) => res.sendFile(FE_INDEX.pathname));

app.listen(PORT, async () => {
	await setup();
	console.log(`Port läuft auf Port: ${PORT}`);
});
