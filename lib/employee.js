class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName = () => this.name;
    getId = () => this.id;
  }
  module.exports = Vehicle;