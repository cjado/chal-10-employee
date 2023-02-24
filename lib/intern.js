const Employee = require('./employee')

class Intern extends Employee() {
    constructor (name, email, id, github) {
        super(name, email, id)
        this.github = github;
        this.role = "Intern";
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return this.role
    }
}

module.exports = Intern