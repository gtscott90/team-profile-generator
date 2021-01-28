const fs = require('fs');
const inquirer = require('inquirer');

// storage variables for team data
let managerInfo = null
const engineerArray = []
const internArray = []

function ManagerClass (managerData) {
    const { managerName, managerID, managerEmail, managerPhone } = managerData;
    this.managerName = managerName
    this.managerID = managerID
    this.managerEmail = managerEmail
    this.managerPhone = managerPhone
    this.getManagerName = () => this.managerName // TO DO maybe include more of these? not necessary but idk if they're needed for the requirements 
}

function EngineerClass (engineerData) {
    const { engineerName, engineerID, engineerEmail, engineerGitHub } = engineerData;
    this.engineerName = engineerName
    this.engineerID = engineerID
    this.engineerEmail = engineerEmail
    this.engineerGitHub = engineerGitHub
}

function InternClass (internData) {
    const { internName, internID, internEmail, internSchool } = internData;
    this.internName = internName
    this.internID = internID
    this.internEmail = internEmail
    this.internSchool = internSchool

}
const promptManagerInfo = () => {
    inquirer
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
    .prompt([
    {
        type: "list",
        message: "What do you want to do next?",
        choices: ["Add Engineer", "Add Intern", "Finished Building the Team"],
        name: "nextOption"
    }])
    .then((nextOptionData) => {
        console.log(nextOptionData);
        const { nextOption } = nextOptionData;
        switch (nextOption) {
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
            engineerInfo = new EngineerClass(engineerData)
            engineerArray.push(engineerInfo)
            console.log(engineerInfo.engineerName)
            console.log(engineerArray)
            nextOption()
        })
};
const promptInternInfo = () => {
    inquirer  
        .prompt([
            {
                type: "input",
                message: "What is the Intern's name?",
                name: "internName",
            },
            {
                type: "input",
                message: "What is the Intern's employee ID?",
                name: "internID"
            },
            {
                type: "input",
                message: "What is the Intern's email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What school does the Intern attend?",
                name: "internSchool"
            },
        ])
        .then((internData) => {
            console.log(internData);
            // tell the computer what to do with engineer data --> use a enginner class to make new enginner object and pushto 
            internInfo = new InternClass(internData)
            internArray.push(internInfo)
            // console.log(internInfo.internName)
            console.log(internArray)
            nextOption()
        })
};

// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};

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