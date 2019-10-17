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
            message: "Please add a manager first",
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
            validate: function (name) {
                return name.length > 0;
            }
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "id",
            validate: function (name) {
                return name.length > 0;
            }
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email",
            validate: function (name) {
                return name.includes("@");
            }
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officenumber",
            validate: function validateOfficeNum(name) {
                return name.length > 0;
            }
        },
        {
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "No"],
            name: "employee",
        }  
    ])
    .then(function({name, id, email, officenumber, employee}){
        this.employee = employee;

        const newManager = new Manager (name, id, email, officenumber);
        console.log(newManager);
        managerArr.push(newManager);
        
            // managerHtml.append(managerDiv);
        
            if (employee === "Engineer"){
                return engineerQuestion();
            } else if (employee === "Intern"){
                return internQuestion();
            } else {
                // console.log(internArr);
                // console.log(engineerArr);
                return teamReady();
        };
    })
    .catch(function(err){
        console.log(err);
    });
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
        },
        {
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "No"],
            name: "employee",
        }
    ])
        .then(function ({name, id, email, school, employee}){
            // console.log({name, id, email, school, employee});
            this.employee = employee;

            const newIntern = new Intern (name, id, email, school);
                internArr.push(newIntern);

            if (employee === "Engineer"){
                return engineerQuestion();
            } else if (employee === "Intern"){
                return internQuestion();
            } else {
                console.log(managerArr);
                console.log(internArr);
                console.log(engineerArr);                
                return teamReady();
            }
        })
        .catch(function(err){
            console.log(err);
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
            choices: ["Engineer", "Intern", "No"],
            name: "employee",
        }  
    ])
        .then(function({name, id, email, github, employee}){
              this.employee = employee;

              const newEngineer = new Engineer (name, id, email, github);
                engineerArr.push(newEngineer);
            if (employee === "Engineer"){
                return engineerQuestion();
            } else if (employee === "Intern"){
                return internQuestion();
            } else {
                console.log(managerArr);
                console.log(internArr);
                console.log(engineerArr);
                return teamReady();
                
            }
        })
        .catch(function(err){
            console.log(err);
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
        
    })
    .catch(function(err){
        console.log(err);
    });


function generateHTML(managerDiv){
    return `<!DOCTYPE html>
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

<div class="row" id="manager">${managerDiv}</div>
<div class="row" id="engineer"></div>
<div class="row" id="intern"></div>

</div>

</body>
</html>`
}


// engineer card
function engineerCard(engineerArr){
    let engineerHtml = $("#engineer");

    let engineerDiv = 
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
    </div>`;

    engineerHtml.append(engineerDiv);
};

// intern card
function internCard(internArr){
    let internHtml = $("#intern");

    let internDiv =
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
    </div>`;

    internHtml.append(internDiv);

};
 

function teamReady (){
        let managerDiv = managerArr.map(newManager => `<div class="card text-white mb-3" style="max-width: 18rem;">
        <div class="card-header bg-primary">
            <p>Name:${newManager.name}</p
            <p>Manager</p>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${newManager.id}</li>
        <li class="list-group-item">Email:${newManager.email}</li>
        <li class="list-group-item">Office #:${newManager.officenumber}</li>
        </ul>
        </div>
        </div>`);


    let html = generateHTML(managerDiv);
    fs.writeFile("main.html", html, function(err){
    // const outputPath = path.resolve('./output', "output", "main.html");
    if (err){
        throw err
    };
    console.log("Your team is ready!");
    // console.log(JSON.stringify(engineerArr));
    // console.log(engineerArr[1].getName());

});

};