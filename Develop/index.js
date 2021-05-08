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
			"Provide a short description explaining the what, why, and how of your project..",
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
			"Your new README is created! Check out README.md in this directory to view it!"
		);
	});
}

//--------------- Function to initialize app
function init() {
	inquirer.prompt(questions).then((data) => {
		writeToFile("README.md", generateMarkdown(data));
	});
}
//------------- Function call to initialize app
init();
