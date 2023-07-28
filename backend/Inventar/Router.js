import express from "express";
import {
	getAllInventory,
	getOneInventory,
	postInventory,
	putInventory,
	deleteInventory,
} from "./Controller.js";
export const routing = express.Router();

routing.get("/", getAllInventory);
routing.get("/:id", getOneInventory);
routing.post("/", postInventory);
routing.put("/:id", putInventory);
routing.delete("/:id", deleteInventory);

export default routing;
