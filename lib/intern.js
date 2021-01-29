function InternClass (internData) {
    const { internName, internID, internEmail, internSchool } = internData;
    this.internName = internName
    this.internID = internID
    this.internEmail = internEmail
    this.internSchool = internSchool
    this.getRole = () => "Intern"

}
module.exports = InternClass;