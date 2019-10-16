const Employee = require("../lib/employee");

class Engineer extends Employee {
    constructor(name, id, email, github){

        super (name, id, email)
        this.github = github;
        // this.name = name;
        // this.id = id;
        // this.email = email;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;

// const jam = new Engineer("Jam", 1, "jam@gmail.com", "GithubUser");
// jam.getRole();
// jam.getGithub();