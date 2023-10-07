import express  from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

app.get("/contact", (req, res) => {
    res.send(`Contact me at:
    <a href="mailto: mail@mail.com
    ">mail</a>
    `)
})

app.get("/about", (req, res) => {
    res.send("I am a developer")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})