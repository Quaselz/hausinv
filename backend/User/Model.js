import mongoose from "mongoose";
import InventarSchema from "../Inventar/Model.js";

const userSchema = new mongoose.Schema({
	nickname: String,
	image: {
		type: {
			url: String,
			imageId: String,
		},
	},
	firstname: String,
	surname: String,
	gender: String,
	// ggf muss Inventar noch exportiert/importiert werden
	inventar: [{ type: mongoose.Types.ObjectId, ref: "Inventar" }],
	role: {
		type: String,
		enum: ["gast", "admin", "user"],
	},
});

//User.findOneAndUpdate({upset:true}) -> better than update

export const User = mongoose.model("User", userSchema);
