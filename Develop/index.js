//function init() { 

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
        message: 'Give me a description of your project.'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Table of Contents?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Is there any installation instructions included?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be used?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What licenses did you use?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Any tests that were done?'
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
.then(function(data){
    writeToFile("README.md", markdown(data));
    console.log(data)
})

