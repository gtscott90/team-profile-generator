const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require("./src/page-template.js");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const team = []


const promptManagerInfo = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the manager's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the manager's employee ID?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the manager's email?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber",
            },
        ])
        .then((managerData) => {
            // tell the computer what to do with manager data --> use a mangaer class to make new manager object that is equal to mangagerInfo varibale 
            const {name, id, email, officeNumber} = managerData
            const manager = new Manager(name, id, email, officeNumber)
            team.push(manager)
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
        const { nextOption } = nextOptionData;
        switch (nextOption) {
            case "Add Engineer":
                promptEngineerInfo()
                break;
            case "Add Intern":
                promptInternInfo()
                break;
            default:
                fs.writeFileSync("./dist/team.html", generateHTML(team), "UTF-8")
        }
    })
}; 
const promptEngineerInfo = () => {
    inquirer       
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the engineer's employee ID?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is the engineer's GitHub Username?",
                name: "Github"
            }
        ])
        .then((engineerData) => {
            // console.log(engineerData);
            // tell the computer what to do with engineer data --> use a enginner class to make new enginner object and pushto 
            const {name, id, email, Github} = engineerData
            const engineer = new Engineer(name, id, email, Github)
            team.push(engineer)
            // console.log(engineerInfo.name)
            // console.log(team)
            nextOption()
        })
};
const promptInternInfo = () => {
    inquirer  
        .prompt([
            {
                type: "input",
                message: "What is the Intern's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the Intern's employee ID?",
                name: "id"
            },
            {
                type: "input",
                message: "What is the Intern's email?",
                name: "email"
            },
            {
                type: "input",
                message: "What school does the Intern attend?",
                name: "school"
            },
        ])
        .then((internData) => {
            // console.log(internData);
            // tell the computer what to do with engineer data --> use a enginner class to make new enginner object and pushto 
            const {name, id, email, school} = internData
            const intern = new Intern(name, id, email, school)
            team.push(intern)
            // console.log(internInfo.internName)
            // console.log(team)
            nextOption()
        })
};

