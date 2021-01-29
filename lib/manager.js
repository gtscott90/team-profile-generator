const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole = () => "Manager"
    getOfficeNumber = () => this.officeNumber
}
// function ManagerClass (managerData) {
//     const { managerName, managerID, managerEmail, managerPhone } = managerData;
//     this.managerName = managerName
//     this.managerID = managerID
//     this.managerEmail = managerEmail
//     this.managerPhone = managerPhone
    
//     this.getRole = () => "Manager"
//     this.getName = () => this.managerName 
//     this.getId = () => this.managerID
//     this.getEmail = () => this.managerEmail
//     this.getOfficeNumber = () => this.managerPhone
    
// }
module.exports = Manager;