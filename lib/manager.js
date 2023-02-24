const Employee = require('./employee')

class Manager extends Employee() {
    constructor (name, email, id, github) {
        super(name, email, id)
        this.github = github;
        this.role = "Manager";
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return this.role
    }
}

module.exports = Manager