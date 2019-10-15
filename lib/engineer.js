const Employee = require("../lib/employee");

class Engineer extends Employee {
    constructor(github){
        this.name = name;
        this.id = id;
        this.title = "Engineer";
        this.email = email;
        
        super (name, id, email, title)
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return this.title;
    }
}

