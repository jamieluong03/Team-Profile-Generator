const Employee = require("../lib/employee");

class Intern extends Employee {
    constructor(school){
        this.name = name;
        this.id = id;
        this.title = "Intern";
        this.email = email;

        super (name, id, email, title)
        this.school = school;

    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return this.title;
    }
}