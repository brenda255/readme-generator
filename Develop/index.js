const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js')


const questions = ([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What licenses will this project use?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any.'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },



])
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("Successfully created README!"))
}


inquirer.prompt(questions)
    .then(function (data) {
        writeToFile("README.md", markdown(data));
        console.log(data)
    })

