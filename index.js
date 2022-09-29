const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, id, email, role }) =>
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
  <div class="container">
    <h1 class="display-4">${name}</h1>
    <h2 class="lead">${role}</h2>
    <ul class="list-group">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: ${email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

let employees = []
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
            const htmlPageContent = generateHTML(answers);
            if (answers.continue === false) {
                // you will enter this condition if the user is done adding employees
                console.log('generate cards once quit or one at a time while making new employees')
                
                fs.appendFile('./dist/index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
            );
                // this will start a new inquirer prompt for a new employee if the user didn't choose to Quit
            } else if (answers) 
                
            newEmployee()
            
        });
}
newEmployee()