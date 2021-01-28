const fs = require('fs');
const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "Where are you from?",
            name: "location"
        },
        {
            type: "list",
            message: "What is your favorit ice cream?",
            choices: ["strawberry", "chocolate", "vanilla", "pistachio", "pizza"],
            name: "iceCream"
        },
        {
            type: "list",
            message: "What Hogwarts house do you belong to?",
            choices: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
            name: "hogwarts"
        },
        {
            type: "input",
            message: "What is your github name?",
            name: "githubName"
        },
        {
            type: "input",
            message: "What is your favorite Street Fighter character?",
            name: "fighter"
        },

    ])
    .then((data) => {
        console.log(data);
        const { name, location, iceCream, hogwarts, githubName, fighter } = data;
        console.log(name);
        const generateHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi my name is ${name}</h1>
    <p class="lead">I am from ${location}</p>
    <p class="lead">My favorite ice creams are ${iceCream}</p>
    <p class="lead">${hogwarts} is my Hogwarts house</p>
    <p class="lead">My github name is ${githubName}</p>
    <p class="lead">${fighter} is my favorite Street Figher character </p>
  </div>
</div>

</body>
</html>
        `;
        fs.writeFile("index.html", generateHTML, err => 
        err ? console.log(err) : console.log("Success!"))
    });