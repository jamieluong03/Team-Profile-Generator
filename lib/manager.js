const Employee = require("../lib/employee");

class Manager extends Employee {
    constructor(officeNumber){

    }

    getRole(){
        return ("Manager");
    }
}