const Employee = require("../lib/employee");

class Intern extends Employee {
    constructor(school){
        this.name = name;
        this.id = id;
        this.title = title;

        super (name, id, title)
        this.school = school;

    }

    getSchool(){

    }

    getRole(){
        return ("Intern");
    }
}