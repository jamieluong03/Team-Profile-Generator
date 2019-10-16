const fs = require("fs");
const employee = require("./lib/employee");
const engineer = require ("./lib/engineer");
const intern = require ("./lib/intern");
const manager = require ("./lib/manager");
// const outputPath = path.resolve(_dirname, "output", "main.html");

const inquirer = require ("inquirer");

function promptUser(){
    return inquirer.prompt([
        {
            type: "list",
            message: "Please add an employee",
            choices: ["Manager", "Engineer", "Intern"],
            name: "employee",
        },
    ])
    
};

function managerQuestion(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Manager's name?",
            name: "name",
            // validate: function validateManager(name) {
            //     return name !== '';
            // }
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "id",
            // validate: function validateID(name) {
            //     return name !== '';
            // }
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email",
            // validate: function validateEmail(name) {
            //     return name !== '';
            // }
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officenumber",
            // validate: function validateOfficeNum(name) {
            //     return name !== '';
            // }
        },
        {
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "No, I don't want to add another employee"],
            name: "employee",
        }  
    ])
    .then(function({name, id, email, officenumber, employee}){
        if (employee === "Engineer"){
            return engineerQuestion();
        } else if (employee === "Intern"){
            return internQuestion();
        } else {
            return managerCard({name, id, email, officenumber, employee});
    };
    })
}

function internQuestion (){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name",
            // validate: function validateManager(name) {
            //     return name !== '';
            // }
        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "id",
            // validate: function validateID(name) {
            //     return name !== '';
            // }
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email",
            // validate: function validateEmail(name) {
            //     return name !== '';
            // }
        },
        {
            type: "input",
            message: "What is tbe intern's school name?",
            name: "school"
        },
        {
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "No, I don't want to add another employee"],
            name: "employee",
        }
    ])
        .then(function ({name, id, email, school, employee}){
            console.log({name, id, email, school, employee});
            if (employee === "Engineer"){
                return engineerQuestion();
            } else if (employee === "Intern"){
                return internQuestion();
            } else {
                return internCard({name, id, email, school, employee});
            }

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
        },
        {
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "No, I don't want to add another employee"],
            name: "employee",
        }  
    ])
        .then(function({name, id, email, github, employee}){
            console.log({name, id, email, github, employee});
            console.log(name, id, email, github);
            if (employee === "Engineer"){
                return engineerQuestion();
            } else if (employee === "Intern"){
                return internQuestion();
            } else {
                return engineerCard({name, id, email, github, employee});
            }
        });
};


promptUser()
    .then(function({employee}){
        this.employee = employee;

        if (employee === "Engineer"){
            return engineerQuestion();
        } else if (employee === "Intern"){
            return internQuestion();
        } else if (employee === "Manager"){
            return managerQuestion();
        }
    });


// appending data to html
function managerCard({data}){
    `<div class="card text-white mb-3" style="max-width: 18rem;">
    <div class="card-header bg-primary">
        <p>${name}</p
        <p>${employee}</p>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${id}</li>
    <li class="list-group-item">${email}</li>
    <li class="list-group-item">${officenumber}</li>
    </ul>
    </div>
    </div>`
};

// engineer card
function engineerCard({data}){
    `<div class="card text-white mb-3" style="max-width: 18rem;">
    <div class="card-header bg-primary">
        <p>${name}</p
        <p>${employee}</p>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${id}</li>
    <li class="list-group-item">${email}</li>
    <li class="list-group-item">${github}</li>
    </ul>
    </div>
    </div>`
};

// intern card
function internCard(){
    `<div class="card text-white mb-3" style="max-width: 18rem;">
    <div class="card-header bg-primary">
        <p>${name}</p
        <p>${employee}</p>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${id}</li>
    <li class="list-group-item">${email}</li>
    <li class="list-group-item">${school}</li>
    </ul>
    </div>
    </div>`
};