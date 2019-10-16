const Employee = require("../lib/employee");

class Engineer extends Employee {
    constructor(github){

        super (name, id, email, title)
        // this.github = github;
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }

    getGithub(){
        return this.github = this.github;
    }

    getRole(){
        return this.title = "Engineer";
    }
}

const jam = new Engineer("Jam", 1, "jam@gmail.com", "GithubUser");
jam.getRole();
jam.getGithub();