const Employee = require('./employee');

 ManagerClass (managerData) {
    const { managerName, managerID, managerEmail, managerPhone } = managerData;
    this.managerName = managerName
    this.managerID = managerID
    this.managerEmail = managerEmail
    this.managerPhone = managerPhone
    
    this.getRole = () => "Manager"
    this.getName = () => this.managerName 
    this.getId = () => this.managerID
    this.getEmail = () => this.managerEmail
    this.getOfficeNumber = () => this.managerPhone
    
}
module.exports = ManagerClass;