import fs from 'fs/promises';
import inquirer from 'inquirer';
async function getAnswers() {
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
    let { employeeName, email, id, role  } = answers;

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



// await fs.writeFile(fileName, fileContent);
}
getAnswers();