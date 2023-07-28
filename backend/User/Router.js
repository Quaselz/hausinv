import express from "express";
import {
	getAllUser,
	getOneUser,
	postUser,
	putUser,
	deleteUser,
} from "./Controller.js";
export const routing = express.Router();

routing.get("/", getAllUser);
routing.get("/:id", getOneUser);
routing.post("/:id", postUser);
routing.put("/", putUser);
routing.delete("/:id", deleteUser);
