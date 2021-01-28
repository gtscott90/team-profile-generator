const fs = require('fs');
const inquirer = require('inquirer');
let managerInfo = null
const engineerArray = []
const internArray = []

function ManagerClass (managerData) {
    const { managerName, managerID, managerEmail, managerPhone } = managerData;
    this.managerName = managerName
    this.managerID = managerID
    this.managerEmail = managerEmail
    this.managerPhone = managerPhone
    this.getManagerName = () => this.managerName
}

function EngineerClass (engineerdata) {

}
const promptManagerInfo = () => {
    inquirer
    // manager prompts 
    .prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is the manager's employee ID?",
            name: "managerID",
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "What is the manager's office phone number?",
            name: "managerPhone",
        },
    ])
    .then((managerData) => {
        // console.log(managerData);
        // tell the computer what to do with manager data --> use a mangaer class to make new manager object that is equal to mangagerInfo varibale 
        managerInfo = new ManagerClass(managerData)
        console.log(managerInfo.getManagerName())
        console.log(managerInfo.managerName)
        nextOption()
    })
       
}
promptManagerInfo()

const nextOption = () => {
    inquirer
    // next prompts
    .prompt([
    {
        type: "list",
        message: "What do you want to do next?",
        choices: ["Add Engineer", "Add Intern", "Finished Building the Team"],
        name: "nextOption"
    }])
    .then((nextOptionData) => {
        console.log(nextOptionData);
        switch (nextOptionData) {
            case "Add Engineer":
                promptEngineerInfo()
                break;
            case "Add Intern":
                promptInternInfo()
                break;
            default:
                // TO DO: add generagte HTML function here
        }
    })
}; 
const promptEngineerInfo = () => {
    inquirer       
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "engineerName",
            },
            {
                type: "input",
                message: "What is the engineer's employee ID?",
                name: "engineerID"
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is the engineer's GitHub Username?",
                name: "engineerGitHub"
            }
        ])
        .then((engineerData) => {
            console.log(engineerData);
            // tell the computer what to do with engineer data --> use a enginner class to make new enginner object and pushto 
            engineerInfo = new engineerClass(engineerData)
            
            console.log(engineerInfo.engineerName)
            // nextOption()
        })
};
//     // intern prompts
//     .prompt([
//         {
//             type: "input",
//             message: "What is the Intern's name?",
//             name: "managerName",
//         },
//         {
//             type: "input",
//             message: "What is the Intern's employee ID?",
//             name: "managerID"
//         },
//         {
//             type: "input",
//             message: "What is the Intern's email?",
//             name: "managerEmail"
//         },
//         {
//             type: "input",
//             message: "What school does the Intern attend?",
//             name: "internSchool"
//         },
//     ])


//     .then((managerData) => {
//         console.log(managerData);
//         const { name, location, iceCream, hogwarts, githubName, fighter } = data;
//         console.log(name);
//         const generateHTML = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
// <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi my name is ${name}</h1>
//     <p class="lead">I am from ${location}</p>
//     <p class="lead">My favorite ice creams are ${iceCream}</p>
//     <p class="lead">${hogwarts} is my Hogwarts house</p>
//     <p class="lead">My github name is ${githubName}</p>
//     <p class="lead">${fighter} is my favorite Street Figher character </p>
//   </div>
// </div>

// </body>
// </html>
//         `;
    //     fs.writeFile("index.html", generateHTML, err => 
    //     err ? console.log(err) : console.log("Success!"))
    // })