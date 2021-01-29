function EngineerClass (engineerData) {
    const { engineerName, engineerID, engineerEmail, engineerGitHub } = engineerData;
    this.engineerName = engineerName
    this.engineerID = engineerID
    this.engineerEmail = engineerEmail
    this.engineerGitHub = engineerGitHub
    this.getRole = () => "Engineer"
}

module.exports = EngineerClass;