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
            name: "another",
        }  
    ])
    .then(function({another}){
        if (another === "Engineer"){
            return engineerQuestion();
        } else if (another === "Intern"){
            return internQuestion();
        } else {
            return;
        }
    })
}

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
        },
        {
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "No, I don't want to add another employee"],
            name: "another",
        }
    ])
        .then(function ({name, id, email, school, another}){
            console.log({name, id, email, school, another});
            if (another === "Engineer"){
                return engineerQuestion();
            } else if (another === "Intern"){
                return internQuestion();
            } else {
                return;
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
        }
        {
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "No, I don't want to add another employee"],
            name: "another",
        }  
    ])
        .then(function({name, id, email, github}){
            console.log({name, id, email, github});
            console.log(name, id, email, github);
            if (another === "Engineer"){
                return engineerQuestion();
            } else if (another === "Intern"){
                return internQuestion();
            } else {
                return;
            }
        });
};


promptUser()
    .then(function({employee}){
        this.employee = employee;

        if (employee === "Engineer"){
            return engineerQuestion({data1});
        } else if (employee === "Intern"){
            return internQuestion({data2});
        } else if (employee === "Manager"){
            return managerQuestion({data3});
        }
    });


// appending data to html
// manager card
// `<div class="card text-white mb-3" style="max-width: 18rem;">
//   <div class="card-header bg-primary">${name}${title}</div>
//   <div class="card-body">
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">${id}</li>
//     <li class="list-group-item">${email}</li>
//     <li class="list-group-item">${officenumber}</li>
// </ul>
//   </div>
// </div>`

// engineer card
// `<div class="card text-white mb-3" style="max-width: 18rem;">
//   <div class="card-header bg-primary">${name}${title}</div>
//   <div class="card-body">
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">${id}</li>
//     <li class="list-group-item">${email}</li>
//     <li class="list-group-item">${github}</li>
// </ul>
//   </div>
// </div>`

// intern card
// `<div class="card text-white mb-3" style="max-width: 18rem;">
//   <div class="card-header bg-primary">${name}${title}</div>
//   <div class="card-body">
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">${id}</li>
//     <li class="list-group-item">${email}</li>
//     <li class="list-group-item">${school}</li>
// </ul>
//   </div>
// </div>`