const Employee = require("../lib/employee");

class Engineer extends Employee {
    constructor(github){
        this.name = name;
        this.id = id;
        this.title = title;
        
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

