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
        message: "What is your email?",
        name: "email",
        validate: function ValidateEmail(name) {
            return name !== '';
        }
    },
    {
        type: "input",
        message: "What is your ID?",
        name: "id",
        validate: function validateID(name) {
            return name !== '';
        }
    },
    {
        type: "list",
        message: "What is your role?",
        choices: ["manager, engineer, intern"],
        name: "title"
    }
    ]);
};

function internQuestion (){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your school name?",
            name: "school"
        }
    ]);
};

function engineerQuestion (){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        }
    ]);
};

function managerQuestion(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your office number?",
            name: "officenumber"
        }
    ]);
};

promptUser()
    .then(function({email, id, title}){

        this.email = email;
        this.id = id;
        this.title = title;

        if (title === "manager"){
            return managerQuestion();
        } else if (title === "engineer"){
            return engineerQuestion();
        } else if (title === "intern"){
            return internQuestion();
        }
    })