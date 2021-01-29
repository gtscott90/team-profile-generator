const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, Github){
        super(name, id, email);
        this.Github = Github;
    }
    getRole = () => "Engineer";
    getGithub = () => this.Github;
}



// function EngineerClass (engineerData) {
//     const { engineerName, engineerID, engineerEmail, engineerGitHub } = engineerData;
//     this.engineerName = engineerName
//     this.engineerID = engineerID
//     this.engineerEmail = engineerEmail
//     this.engineerGitHub = engineerGitHub
//     this.getRole = () => "Engineer"
//     this.getName = () => this.engineerName 
//     this.getId = () => this.engineerID
//     this.getEmail = () => this.engineerEmail
//     this.getGithub = () => this.engineerGitHub
// }

module.exports = Engineer;