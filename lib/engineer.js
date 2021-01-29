function EngineerClass (engineerData) {
    const { engineerName, engineerID, engineerEmail, engineerGitHub } = engineerData;
    this.engineerName = engineerName
    this.engineerID = engineerID
    this.engineerEmail = engineerEmail
    this.engineerGitHub = engineerGitHub
    this.getRole = () => "Engineer"
    this.getName = () => this.engineerName 
    this.getId = () => this.engineerID
    this.getEmail = () => this.engineerEmail
    this.getGithub = () => this.engineerGitHub
}

module.exports = EngineerClass;