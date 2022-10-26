const express = require("express")
const hbs = require("hbs")

const app = express()

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")


app.use(express.static("public"))

app.get("/", (request, response) => {
    const person = {
        namePerson : "bethany.hamilton"
    }
    response.render("Home",person)
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

