const fs = require('fs/promises');
const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');



const completedTeam = []


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
  let answers = await inquirer.prompt(questions);
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

  const employee = new Employee(answers.employeeName, answers.email, answers.id, answers.role);

  
  if (answers.github) {
    employee.github = answers.github;
  } else if (answers.school) {
    employee.school = answers.school;
  } else if (answers.officeNumber) {
    employee.officeNumber = answers.officeNumber;
  }
  completedTeam.push(employee);
  console.log(completedTeam);

  const { addAnother } = await inquirer.prompt({
    type: 'confirm',
    name: 'addAnother',
    message: 'Would you like to add another employee?',
    default: true,
  });

  
  if (addAnother) {
    await getAnswers();
  }


  return answers;
}
getAnswers()


// .then(employee => {
//   completedTeam.push(employee)
//   console.log(completedTeam);
// });
