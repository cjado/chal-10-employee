const fs = require('fs/promises');
const inquirer = require('inquirer');
const Employee = require('./employee');

async function getAnswers() {
  const questions = [
    {
      type: 'input',
      name: 'employeeName',
      message: 'What is the employee name?',  
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employees email?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employees ID number?',
    },
    {
      type: 'list',
      name: 'role',
      message: 'Please select the employees role in the company.',
      choices: ['Manager', 'Intern', 'Engineer'],
    },
  ];

  const answers = await inquirer.prompt(questions);

  if (answers.role === 'Engineer') {
    const { github } = await inquirer.prompt({
      type: 'input',
      name: 'github',
      message: 'What is the engineer\'s GitHub username?',
    });
    answers.github = github;
  } else if (answers.role === 'Intern') {
    const { school } = await inquirer.prompt({
      type: 'input',
      name: 'school',
      message: 'What school is the intern attending?',
    });
    answers.school = school;
  } else if (answers.role === 'Manager') {
    const { officeNumber } = await inquirer.prompt({
      type: 'input',
      name: 'officeNumber',
      message: 'What is the manager\'s office number?',
    });
    answers.officeNumber = officeNumber;
  }

  return answers;
}

getAnswers();