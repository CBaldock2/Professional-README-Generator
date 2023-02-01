// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const { generate } = require('rxjs');
const generateMarkdown = require('./utils/generateMarkdown');
// const { title } = require('process');

// TODO: Create an array of questions for user input
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        // Validates the input
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need a title');
                return false;
            }
        }
    },
    // Description
    {
        type: 'input',
        message: 'What is a description of this project?',
        name: 'description',
        // Validates the input
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    // Table of Contents
    {
        type: 'input',
        message: 'Table of Contents',
        name: 'table of contents',
        // Validates the input
        validate: (value) => { if (value) { return true } else { return 'You need a table of contents' } }
    },
    // Installaion
    {
        type: 'input',
        message: 'How do you install this project',
        name: 'installation',
        // Validates the input
        validate: (value) => { if (value) { return true } else { return 'You need installation notes' } }
    },
    // Usage
    {
        type: 'input',
        message: 'How do you use this project?',
        name: 'usage',
        // Validates the input
        validate: (value) => { if (value) { return true } else { return 'You need usage notes ' } }
    },
    // License
    {
        type: 'input',
        message: 'What license does this project have?',
        name: 'license',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
        // Validates the input
        validate: (value) => { if (value) { return true } else { return 'You need a License' } }
    },
    // Contributions
    {
        type: 'input',
        message: 'How can someone contribute to this project',
        name: 'contributing',
        // Validates the input
        validate: (value) => { if (value) { return true } else { return 'You need a to explain how to contribute if aplicable' } }
    },
    // Tests
    {
        type: 'input',
        message: 'Wite any tests for this project here',
        name: 'tests',
        // Validates the input
        validate: (value) => { if (value) { return true } else { return 'You need tests' } }
    },
    // GitHub Username
    {
        type: 'input',
        message: 'Enter you GitHub username',
        name: 'github',
        // Validates the input property
        validate: (value) => { if (value) { return true } else { return 'You need contact information' } }
    },
    // Email Address
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
        // Validates the input property
        validate: (value) => { if (value) { return true } else { return 'You need contact information' } }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to the README!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile('README.md', generateMarkdown(userInput));
        });
};

// Function call to initialize app
init();
