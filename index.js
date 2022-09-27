const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({name, id, email, role}) =>
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
      <li class="list-group-item">Email: ${email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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
      type: 'input',
      name: 'role',
      message: 'What is your role?',
    },
  ])
  .then()

  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });