// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['Project title:', 'Description:', "Email:", "Github Username:",  "Portfolio Link:", 'Installation Instructions (separate steps by "/"):', 'Usage Information:', 'Contribution Guidelines:', 'Test Instructions (separate steps using "/"):', "License:", 'License Link:', 'Generated readME file name (without extension):'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let fileUppercase = fileName.toUpperCase();
    fs.writeFile(`${fileUppercase}.md`, data, (err) => err ? console.log('err') : console.log('success'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'project_title',
        }, {
            type: 'input',
            message: questions[1],
            name: 'description',
        },  {
            type: 'input',
            message: questions[2],
            name: 'email',
        }, {
            type: 'input',
            message: questions[3],
            name: 'github',
        }, {
            type: 'input',
            message: questions[4],
            name: 'portfolioLink',
        }, {
            type: 'input',
            message: questions[5],
            name: 'install_instructions',
        }, {
            type: 'input',
            message: questions[6],
            name: 'usage_info',
        }, {
            type: 'input',
            message: questions[7],
            name: 'contrib_guidelines',
        }, {
            type: 'input',
            message: questions[8],
            name: 'test_instructions',
        }, {
            type: 'input',
            message: questions[9],
            name: 'licenses'
        }, {
            type: 'input',
            message: questions[10],
            name: 'licenseLinks'
        }, {
            type: 'input',
            message: questions[11],
            name: 'fileName'
        }
    ]).then((data, err) => {
        if (err) {
            console.log('my error message: ')
        } else {
            let mdData = generateMarkdown(data)
            writeToFile(`${data.fileName}`, mdData);
            console.table(data);
        }
    })
}

// Function call to initialize app
init();
