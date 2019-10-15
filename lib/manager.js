const Employee = require("../lib/employee");

class Manager extends Employee {
    constructor(officeNumber){

        super (name, id, title)
        this.officeNumber = officeNumber;

    }

    getRole(){
        return ("Manager");
    }
}