import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./models/index.js";


const app = express()
const PORT = 3000;

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.get("/api/inventar", (req,res) => {
    res.send("get")
})

app.get("/api/inventar/:id", (req,res) => {
    res.send("get")
})

app.post("/api/inventar", (req,res) => {
    res.send("post")
})

app.put("/api/inventar/:id", (req,res) => {
    res.send("put")
})

app.delete("/api/inventar/:id", (req,res) => {
    res.send("delete")
})


app.listen(PORT, () => {
    console.log(`Port läuft auf Port: ${PORT}`);
})
