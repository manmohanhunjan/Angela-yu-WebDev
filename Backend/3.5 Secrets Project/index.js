//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express'
import bodyParser from 'body-parser'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
let passwordCheck = false

const passwordFromForm = (req, res, next) => {
    console.log(req.body)
    let password = req.body['password']
    password === 'ILoveProgramming'
        ? (passwordCheck = true)
        : (passwordCheck = false)
    next()
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(passwordFromForm)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/check', (req, res) => {
    passwordCheck
        ? res.sendFile(__dirname + '/public/secret.html')
        : res.redirect('/')
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running at port http://localhost:${PORT}/`)
})
