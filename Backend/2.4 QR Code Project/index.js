/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


// Importing the inquirer, fs and qr-image npm packages
import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";

// Prompting the user to enter a URL using inquirer
inquirer.prompt([
    {
        type: "input",
        name: "url",
        message: "Enter a URL to turn into a QR code: "
    }
]).then(function (answer) {

    // Generating a QR code image using the provided URL
    const qrCode = qr.image(answer.url, { type: "png"});

    // Saving the QR code image to a file named qr.png
    qrCode.pipe(fs.createWriteStream("qr.png"))

    // Logging a message to the console indicating that the QR code has been saved
    console.log("QR code saved!");

    // Saving the user input URL to a file named url.txt using the fs module
    fs.writeFile("url.txt", answer.url, function (err){

        // Logging an error message to the console if there is an error writing to the file
        if (err) {
            console.log(err);
        }

        // Logging a message to the console indicating that the URL has been saved
        console.log("URL saved!");
    })
}).catch(function (err) {

    // Logging an error message to the console if there is an error with the inquirer prompt
    console.log(err);
});

