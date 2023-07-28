import fsPromise from "node:fs/promises";
import { URL } from "node:url";
import { v2 as cloudinary } from "cloudinary";
import { User } from "./User/Model.js";

const defaultUsers = [
	{
		nickname: "Gast",
		firstname: "Gast",
		surname: "Gast",
		gender: "none",
		inventar: [],
		role: "gast",
	},
	{
		nickname: "Admin",
		firstname: "Admin",
		surname: "Admin",
		gender: "none",
		inventar: [],
		role: "admin",
	},
];
let isSetup = false;

const setDefaultUser = async (defaultUsers) => {
	const imgUrl = new URL("./src/defaultUserImg.jpeg", import.meta.url);
	const imgFile = await fsPromise.readFile(imgUrl);

	defaultUsers.forEach(async (user) => {
		const isDefaultUserSetup = await User.find(user).exec();
		if (isDefaultUserSetup.length === 0) {
			try {
				cloudinary.uploader
					.upload_stream(
						{ resource_type: "image", folder: "UserImages" },
						async (err, result) => {
							const response = await User.create({
								...user,
								image: { url: result.secure_url, imageId: result.public_id },
							});
						}
					)
					.end(imgFile);
			} catch (err) {
				console.error("err", err);
			}
		}
	});
};

export const setup = async () => {
	if (isSetup) return;
	setDefaultUser(defaultUsers);
	isSetup = true;
};
