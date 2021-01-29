const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require("./src/page-template.js");

const ManagerClass = require("./lib/manager");
const EngineerClass = require("./lib/engineer");
const InternClass = require("./lib/intern");

// storage variables for team data

const team = []


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
            const managerInfo = new ManagerClass(managerData)
            team.push(managerInfo)
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
                fs.writeFile("./dist/team.html", generateHTML(team), "UTF-8")
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
            team.push(engineerInfo)
            console.log(engineerInfo.engineerName)
            console.log(team)
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
            team.push(internInfo)
            // console.log(internInfo.internName)
            console.log(team)
            nextOption()
        })
};

