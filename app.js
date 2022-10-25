const express = require("express")

const app = express()
app.use(express.static("public"))

app.get("/", (request, response, next) => {
    response.sendFile( __dirname + "/views/Home.html")
})

app.get("/about", (request, response, next) => {
    response.sendFile( __dirname + "/views/About.html")
}) 

app.get("/work", (request, response, next) => {
    response.sendFile( __dirname + "/views/Works.html")
}) 

app.get("/photo-gallery", (request, response, next) => {
    response.sendFile( __dirname + "/views/Photo-Gallery.html")
}) 

app.get("/books", (request, response, next) => {
    response.sendFile( __dirname + "/views/Books.html")
}) 

app.get("/surfing", (request, response, next) => {
    response.sendFile( __dirname + "/views/Surfing-Career.html")
}) 

app.listen(3000, () => {
    console.log("server running")
})

