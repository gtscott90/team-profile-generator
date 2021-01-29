const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getRole = () => "Intern"
    getSchool= () => this.school
}


// function InternClass (internData) {
//     const { internName, internID, internEmail, internSchool } = internData;
//     this.internName = internName
//     this.internID = internID
//     this.internEmail = internEmail
//     this.internSchool = internSchool
//     this.getRole = () => "Intern"
//     this.getName = () => this.internName 
//     this.getId = () => this.internID
//     this.getEmail = () => this.internEmail
//     this.getSchool = () => this.internSchool

// }
module.exports = Intern;