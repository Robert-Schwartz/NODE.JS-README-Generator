// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a project description.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "list",
    name: "license",
    message: "Which License(s) did you apply to your repository?",
    choices: [
        'MIT','Apache', 'None'
    ]
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
            console.log(
              "Page created! Check out README.md in this directory to see it!"
            );
    })
 }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then(data => {
        writeToFile('README.md',generateMarkdown(data))
    })
}

// Function call to initialize app
init();
