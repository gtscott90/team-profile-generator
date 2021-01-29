
function InternClass (internData) {
    const { internName, internID, internEmail, internSchool } = internData;
    this.internName = internName
    this.internID = internID
    this.internEmail = internEmail
    this.internSchool = internSchool
    this.getRole = () => "Intern"
    this.getName = () => this.internName 
    this.getId = () => this.internID
    this.getEmail = () => this.internEmail
    this.getSchool = () => this.internSchool

}
module.exports = InternClass;