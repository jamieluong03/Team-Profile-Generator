const fs = require("fs");
const employee = require("./lib/employee");
const engineer = require ("./lib/engineer");
const intern = require ("./lib/intern");
const manager = require ("./lib/manager");

const inquirer = require ("inquirer");

function promptUser(){
    return inquirer.prompt([
    {
        type: "input",
        message: "What is the Manager's name?",
        name: "name",
        validate: function validateManager(name) {
            return name !== '';
        }
    },
    {
        type: "input",
        message: "What is the manager's ID?",
        name: "id",
        validate: function validateID(name) {
            return name !== '';
        }
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
        validate: function validateEmail(name) {
            return name !== '';
        }
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officenumber",
        validate: function validateOfficeNum(name) {
            return name !== '';
        }
    },
    {
        type: "list",
        message: "Would you like to add another employee?",
        choices: ["Engineer", "Intern", "No, I don't want to add another employee"],
        name: "employee",
    }
    ]);
};

function internQuestion (){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name",
            validate: function validateManager(name) {
                return name !== '';
            }
        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "id",
            validate: function validateID(name) {
                return name !== '';
            }
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email",
            validate: function validateEmail(name) {
                return name !== '';
            }
        },
        {
            type: "input",
            message: "What is tbe intern's school name?",
            name: "school"
        }
    ])
        .then(function ({name, id, email, school}){
            console.log({name, id, email, school});
            console.log(name, id, email, school);

        });
};

function engineerQuestion (){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name",
            validate: function validateManager(name) {
                return name !== '';
            }
        },
        {
            type: "input",
            message: "What is the engineer's ID?",
            name: "id",
            validate: function validateID(name) {
                return name !== '';
            }
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email",
            validate: function validateEmail(name) {
                return name !== '';
            }
        },
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github"
        }
    ])
        .then(function({name, id, email, github}){
            console.log({name, id, email, github});
            console.log(name, id, email, github);
        });
};


promptUser()
    .then(function({name, id, email, officenumber, employee}){

        this.name = name;
        this.email = email;
        this.id = id;
        this.officenumber = officenumber;
        this.employee = employee;

        if (employee === "Engineer"){
            return engineerQuestion();
        } else if (employee === "Intern"){
            return internQuestion();
        } else {
            console.log(employee);
        }
    });