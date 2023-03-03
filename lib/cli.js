const fs = require('fs/promises');
const inquirer = require('inquirer');
const Employee = require('./employee');

async function getAnswers() {
<<<<<<< HEAD
    const answers = await inquirer.prompt([
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
    ]);
    const {employeeName, email, id, role } = answers;

    if (answers[3] === 'Manager') {
        const roleQuestion = await inquirer.prompt([
            {
              type: 'input',
              name: 'roleAnswer',
              message: 'What is your office number?',
            }
          ]);
          const {roleAnswer} = roleQuestion;
          answers.push(roleQuestion)
    } else if (answers[3] === 'Intern') {
        const roleQuestion = await inquirer.prompt([
            {
              type: 'input',
              name: 'roleAnswer',
              message: 'What is your school did you attend?',
            }
          ]);
          const {roleAnswer} = roleQuestion;
          answers.push(roleQuestion)
    } else if (answers[3] === 'Engineer') {
        const roleQuestion = await inquirer.prompt([
            {
              type: 'input',
              name: 'roleAnswer',
              message: 'What is your github?',
            }
          ]);
          const {roleAnswer} = roleQuestion;
          answers.push(roleQuestion) 
    }
  const fileContent = '';
=======
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
>>>>>>> db58ab4d1d874d5e48775502c89300d6b9116de1

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

<<<<<<< HEAD

await fs.writeFile(id, fileContent);
=======
  return answers;
>>>>>>> db58ab4d1d874d5e48775502c89300d6b9116de1
}

getAnswers();