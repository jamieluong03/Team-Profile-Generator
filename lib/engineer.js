const Employee = require("../lib/employee");

class Engineer extends Employee {
    constructor(github){
        
        super (name, id, title)
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return ("Engineer");
    }
}