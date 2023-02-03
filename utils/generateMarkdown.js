// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `[![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)](https://opensource.org/licenses/${encodeURIComponent(license)})`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case 'MIT':
      licenseLink = 'https://mit-license.org/';
      break;
    case 'BSD':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'MPL':
      licenseLink = 'https://www.mozilla.org/en-US/MPL/2.0/';
      break;
    case 'Apache 2.0':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    default:
      licenseLink = '';
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSelect = ''

  if (license != 'None') {
    licenseSelect += '##License\n'
    licenseSelect += `Please see ${renderLicenseLink(license)} to get detailed information for this license\n`
  }
  return licenseSelect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Testing](#tests)
  - [Questions](#questions)

  
  ## Description
  <a name= 'description'></a>
  ${data.description}

  ## Installation
  <a name= 'installation'></a>
  ${data.installation}

  ## Usage
  <a name= 'usage'></a>
  ${data.usage}

  ## License
  <a name= 'license'></a>
  [${data.license}](${renderLicenseLink(data.license)})

  ## Contributions
  <a name= 'contributions'></a>
  ${data.contributing}

  ## Testing
  <a name= 'tests'></a>
  ${data.tests}

  ## Questions
  <a name= 'questions'></a>
  - If you have any other questions, you can email me at: ${data.email}
  - You can also find me [here](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
