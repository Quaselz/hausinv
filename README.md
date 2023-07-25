# hausinv

## DOKU

## Intro

This project is made for selflearning

## Install

To install the project, you will need to run `npm run build` after `npm i` at the frontendfolder. This install all our modules and will generate a dist folder with the whole react project inside.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CLOUDINARY_API_SECRET`

`CLOUDINARY_API_KEY`

`CLOUDINARY_CLOUDNAME`

`MONGO_URI`

## Start Server

To start the project local you need to navigate into the backendfolder with the `cd` command.
Inside of the backendfolder just add `node server.js` or `node --watch server.js`to the terminal.

## REST API

to use the api for other projects while the server is running you can use `http://localhost:3000`(your server has to run local)

we use the following routes to get/post/put or delete our inventory

# get

_METHODE_

> 1. get `http://localhost:3000/api/inventory`
> 2. get `http://localhost:3000/api/inventory/:id`
> 3. post `http://localhost:3000/api/inventory`
> 4. put `http://localhost:3000/api/inventory/:id`
> 5. delete `http://localhost:3000/api/inventory/:id`

---

## **1. & 2. get**

1. gives you a array back with all objects inside our db
2. gives you a single object based on the id inside our db | id comes as a param `/:id`

the objects look like: `{ title: String, room: String, image: {url: String, imageId: String},descriptionHead: String, textfield: String, category: String}`

none property is required, but category is always _big, medium, or small_

---

## **3. post**

3. is used to create a new object inside our db

the objects look like: `{ title: String, room: String, image: {url: String, imageId: String},descriptionHead: String, textfield: String, category: String}`

none property is required, but category has to be _big, medium, or small_

data is read by the `request.body` and `request.file` while `.file`is used for the image property, where we save our imagefile

---

## **4. put**

4. is used to updates an object by id inside our db | id comes as a param `/:id`

the objects look like: `{ title: String, room: String, image: {url: String, imageId: String},descriptionHead: String, textfield: String, category: String}`

none property is required, but category has to be _big, medium, or small_

---

## **5. delete**

5. is used to delete an object by id inside our db | id comes as a param `/id`
