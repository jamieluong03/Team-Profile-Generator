const fs = require("fs");
const employee = require("./lib/employee");
const Engineer = require ("./lib/engineer");
const Intern = require ("./lib/intern");
const Manager = require ("./lib/manager");
const inquirer = require ("inquirer");

let managerArr = [];
let internArr = [];
let engineerArr = [];

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
        this.employee = employee;

        const newManager = new Manager ({name, id, email, officenumber});
        managerArr.push(newManager);

        if (employee === "Engineer"){
            return engineerQuestion();
        } else if (employee === "Intern"){
            return internQuestion();
        }
    
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
        .then(function (name, id, email, school, employee){
            // console.log({name, id, email, school, employee});
            this.employee = employee;

            const newIntern = new Intern (name, id, email, school);
                internArr.push(newIntern);

            if (employee === "Engineer"){
                return engineerQuestion();
            } else if (employee === "Intern"){
                return internQuestion();
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
            // console.log({name, id, email, github, employee});
            // console.log(name, id, email, github);
            const newEngineer = new Engineer (name, id, email, github);
                engineerArr.push(newEngineer);

            this.employee = employee;

            if (employee === "Engineer"){
                return engineerQuestion();
            } else if (employee === "Intern"){
                return internQuestion();
            } else {
                return;
                // for (i = 0; i < engineerArr.length; i++){
                // const newEngineer = new Engineer (name, id, email, github);
                // engineerArr.push(newEngineer);
                // console.log(engineerArr);
                // }

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


function generateHTML(){
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="./style.css">

</head>
<body>
  <div class="jumbotron" id="navcolor">
      <h1 class="display-4 text-center">My Team</h1>
  </div>
<div class="container">

<div class="row" id="manager"></div>
<div class="row" id="engineer"></div>
<div class="row" id="intern"></div>

</div>

</body>
</html>`
}

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


// make an array to push into it after every input
// sort array to different jobs 

fs.writeFile("main.html", generateHTML(), function(err){
    const outputPath = path.resolve('./output', "output", "main.html");
    if (err){
        throw err
    };
    console.log("Your team is ready!");
});