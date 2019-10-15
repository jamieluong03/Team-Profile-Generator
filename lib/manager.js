const Employee = require("../lib/employee");

class Manager extends Employee {
    constructor(officeNumber){
        this.name = name;
        this.id = id;
        this.title = "Manager";
        this.email = email;

        super (name, id, email, title)
        this.officeNumber = officeNumber;

    }

    getRole(){
        return this.title;
    }
}