//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//get index.html with style.css file

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})
// how to get the css file
app.use(express.static("public")); // this is the folder where the css file is located


app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function (req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height);

    res.send("Your BMI is" + bmi);
})

app.post("/", function (req, res) {

    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)

    let result = num1 + num2;


    res.send("The result for the calculation is " + result);
})

app.listen(3000, function () {
    console.log("Server started on port 3000");
})