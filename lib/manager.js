function ManagerClass (managerData) {
    const { managerName, managerID, managerEmail, managerPhone } = managerData;
    this.managerName = managerName
    this.managerID = managerID
    this.managerEmail = managerEmail
    this.managerPhone = managerPhone
    this.getName = () => this.managerName 
    this.getRole = () => "Manager"
    this.getOfficeNumber = () => this.managerPhone
}
module.exports = ManagerClass;