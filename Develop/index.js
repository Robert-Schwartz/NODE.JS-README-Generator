//------------- Packages required for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//--------------- Array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title?",
	},
	{
		type: "input",
		name: "description",
		message:
			"Provide a short description explaining the what, why, and how of your project.",
	},
	{
		type: "input",
		name: "installation",
		message: "What are the steps required to install your project?",
	},
	{
		type: "input",
		name: "technologies",
		message: "What Technologies did you use for this project?",
	},
	{
		type: "input",
		name: "usage",
		message: "Provide usage instructions user.",
	},
	{
		type: "input",
		name: "contributions",
		message: "Please List your contributors.",
	},
	{
		type: "input",
		name: "Github",
		message: "Enter your Github Username for follow up.",
	},
	{
		type: "input",
		name: "Email",
		message: "Enter your e-mail address for follow up.",
	},
	{
		type: "list",
		name: "license",
		message: "Which License(s) did you apply to your repository?",
		choices: ["MIT", "Apache License 2.0", "GNU General Public License 3.0", "BSD 3-Clause License", "None"],
	},
];

//-------------- Function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log(
			"Your new README is created! Check out New-README.md in this directory to view it!"
		);
	});
}

//--------------- Function to initialize app
function init() {
	inquirer.prompt(questions).then((data) => {
		writeToFile("new-README.md", generateMarkdown(data));
	});
}
//------------- Function call to initialize app
init();
