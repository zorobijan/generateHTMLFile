const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer.js')
const Manager = require('./lib/manager.js')
const Intern = require('./lib/intern.js')

const employeesArray = []

const generateHTML = () =>
    `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
                    <title>Document</title>
                    </head>
                    <body>
                    <div class="jumbotron jumbotron-fluid">My Team
                    ${generateEmployeeCard(employeesArray)}
                    </div>
                    </div>
                    </body>
                    </html>`;

let newEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your id number?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
            },
            {
                type: 'list',
                name: 'role',
                message: 'What is your role?',
                choices: ['engineer', 'intern', 'manager']
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github address?',
                when: (answers) => {
                    if (answers.role === 'engineer') return true
                    else return false
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?',
                when: (answers) => {
                    if (answers.role === 'manager') return true
                    else return false
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where did you learn to code?',
                when: (answers) => {
                    if (answers.role === 'intern') return true
                    else return false
                }
            },
            {
                type: 'confirm',
                name: 'continue',
                message: 'Would you like to add another employee?',
            },
        ])

        .then((answers) => {
console.log(answers)
            if (answers.role === 'engineer') {
                let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                employeesArray.push(engineer)
            }
            else if (answers.role === 'manager') {
                let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                employeesArray.push(manager)
            }
            else if (answers.role === 'intern') {
                let intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                employeesArray.push(intern)
            }
            if (answers.continue === false) {

                // you will enter this condition if the user is done adding employees
                const htmlPageContent = generateHTML(employeesArray);
                fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                );
            }
            else if (answers.continue === true) {
                // this will start a new inquirer prompt for a new employee if the user didn't choose to Quit

                newEmployee()
            }

        })
}

function generateEmployeeCard(employeesArray) {
    console.log(employeesArray, "EMP ARRAY")
    let allEmployees = ""
    for (let i = 1; i < employeesArray.length; i++) {
        let employee = `<div class="container">
    <h1 class="display-4"> ${employeesArray[i].name}</h1>
    <h2 class="lead"> ${employeesArray[i].getRole()}</h2>
    <ul class="list-group">
        <li class="list-group-item">ID: ${employeesArray[i].id}</li>
        <li class="list-group-item">Email: ${employeesArray[i].email}</li>`
        if (employeesArray[i].role === "Engineer") {
            employee += `<li class="list-group-item"> ${employeesArray[i].github}</li>`;
        }
        else if (employeesArray[i].role === "Manager") {
            employee += `<li class="list-group-item">  ${employeesArray[i].officeNumber}</li>`;
        }
        else if (employeesArray[i].role === "Intern") {
            employee += `<li class="list-group-item">  ${employeesArray[i].school}</li>`;
        }
        allEmployees += employee
        console.log(allEmployees)
    }
    // will add all employees into one string
    return allEmployees
};
newEmployee();