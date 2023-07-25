# Hausinventar_Projekt Fullstack

This project is an application where inventory items are stored in a database according to different categories. Entries can be displayed in an overview and new ones can be added and edited.

## Acknowledgements

- https://github.com/Quaselz

## Tech Stack

- Express
- React
- JavaScript
- NodeJS
- MongoDB
- Cloudinary
- CSS
- HTML

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

CLOUDINARY_API_SECRET

CLOUDINARY_API_KEY

CLOUDINARY_CLOUDNAME

MONGO_URI

## Install

To install the project, you will need to run npm run build after npm i at the frontendfolder. This install all our modules and will generate a dist folder with the whole react project inside.

## Server

To start the project local you need to navigate into the backendfolder with the cd command. Inside of the backendfolder just add node server.js or node --watch server.jsto the terminal.

## Features

- adding inventory items
- switch between different categories
- homepage with a category overview
- edit data of inventory items via formular
- change directory between pages via back button

## API Reference

to use the api for other projects while the server is running you can use http://localhost:3000(your server has to run local)

we use the following routes to get/post/put or delete our inventory

## METHODS

- get http://localhost:3000/api/inventory
- get http://localhost:3000/api/inventory/:id
- post http://localhost:3000/api/inventory
- put http://localhost:3000/api/inventory/:id
- delete http://localhost:3000/api/inventory/:id

# get

gives you a array back with all objects inside our db
gives you a single object based on the id inside our db | id comes as a param /:id
the objects look like: { title: String, room: String, image: {url: String, imageId: String},descriptionHead: String, textfield: String, category: String}

none property is required, but category is always big, medium, or small

# post

is used to create a new object inside our db
the objects look like: { title: String, room: String, image: {url: String, imageId: String},descriptionHead: String, textfield: String, category: String}

none property is required, but category has to be big, medium, or small

data is read by the request.body and request.file while .fileis used for the image property, where we save our imagefile

# put

is used to updates an object by id inside our db | id comes as a param /:id
the objects look like: { title: String, room: String, image: {url: String, imageId: String},descriptionHead: String, textfield: String, category: String}

none property is required, but category has to be big, medium, or small

# delete

is used to delete an object by id inside our db | id comes as a param /id

## Deployment

For the deployment we used Render, which will automatically build and deploy the project with every push, when connected with GitHub.

## Modules

- cors
- morgan
- multer

## Usage/Examples

Example GET Method:

app.post("/api/inventar/image", upload.single('image'),async (req,res) => {
console.log(req.file);
try {
cloudinary.uploader.upload_stream({resource_type:"image", folder:"InventarImages"},
async(err, result)=>{
const response = await Inventar.create({...req.body,
image:{url:result.secure_url, imageId: result.public_id}
})
res.json(response)
}).end(req.file.buffer)
} catch (error) {
console.log(error);
res.status(500).send("error")
}
})
