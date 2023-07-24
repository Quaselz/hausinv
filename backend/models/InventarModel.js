import mongoose from "mongoose";

const inventarSchema = new mongoose.Schema({
	titel: String,
	room: String,
	image: {
		type: {
			url: String,
			imageId: String,
		},
	},
	descriptionHead: String,
	textfield: String,
	category: {
		type: String,
		enum: ["big", "medium", "small"],
	},
});

export const Inventar = mongoose.model("Inventar", inventarSchema);
