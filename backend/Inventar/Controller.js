import { Inventar } from "./Model.js";

export const getOneInventory = async (req, res) => {
	const id = req.params.id;
	const data = await Inventar.findById(id);
	res.send(data);
};
export const getAllInventory = async (req, res) => {
	const data = await Inventar.find();
	res.send(data);
};
export const postInventory = async (req, res) => {
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
};
export const putInventory = async (req, res) => {
	try {
		const id = req.params.id;
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
};
export const deleteInventory = async (req, res) => {
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
};
