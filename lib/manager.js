const Employee = require("../lib/employee");

class Manager extends Employee {
    constructor(officeNumber){
        this.name = name;
        this.id = id;
        this.title = title;

        super (name, id, title)
        this.officeNumber = officeNumber;

    }

    getRole(){
        return ("Manager");
    }
}