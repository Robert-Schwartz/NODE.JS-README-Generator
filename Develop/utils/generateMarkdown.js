//---------- function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![MIT Badge](https://img.shields.io/badge/License-MIT-brightgreen)`;
  }
  else if (license === 'Apache License 2.0') {
    return `![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  else if (license === 'GNU General Public License 3.0') {
    return `![GNU General Public License 3.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  else if (license === 'BSD 3-Clause License') {
    return `![BSD 3-Clause License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } 
  else {//If there is no license, returns an empty string
    return " ";
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'Apache License 2.0') {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === 'GNU General Public License 3.0') {
    return `[GNU General Public License 3.0](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license === 'BSD 3-Clause License') {
    return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else {//If there is no license, returns an empty string
    return " ";
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `Copyright (c) 2021`;
  }
  else if (license === 'Apache License 2.0') {
    return `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/`;
  }
  else if (license === 'GNU General Public License 3.0') {
    return `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007`;
  }
  else if (license === 'BSD 3-Clause License') {
    return `BSD 3-Clause License
Copyright (c) 2021`;
  }
  else {//If there is no license, returns an empty string
    return " ";
  } }


//--------------- Function to generate markdown for README file
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Technologies] (#Technologies)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contact](#Contact)

## Technologies
${data.Technologies}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Contact
Contact me with any questions
- Github Profile: [${data.Github}](https://github.com/${data.Github}/)
- E-mail me: ${data.Email}
`;
}

module.exports = generateMarkdown;
