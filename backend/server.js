import express from "express";
import cors from "cors";
import "./models/index.js";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/api/inventar", (req, res) => {
	res.send("get");
});
app.get("/api/inventar/:id", (req, res) => {
	res.send("getSingle");
});
app.post("/api/inventar", (req, res) => {
	res.send("post");
});
app.put("/api/inventar/:id", (req, res) => {
	res.send("put");
});
app.delete("/api/inventar/:id", (req, res) => {
	res.send("delete");
});

app.listen(port, () => {
	console.log("tschuuu tschuuu");
});
