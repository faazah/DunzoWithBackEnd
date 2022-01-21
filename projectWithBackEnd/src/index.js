const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://singh202:Anurag_1@cluster0.l0flr.mongodb.net/dunzoWithBackEnd")
}


const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/dunzo", (req, res) => {
    return res.render("homepage");
  });

app.listen(2345, async() => {
    try {
        await connect();
        console.log("listening to port 2345");
    } catch (error) {
        console.log(error);
    }
})