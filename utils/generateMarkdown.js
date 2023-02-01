// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `[![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(license)})`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
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
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSelect = ''

  if (license != 'None') {
    licenseSelect += '##License/n'
    licenseSelect += `Please see ${renderLicenseSection} to get detailed information for this license/n`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing
  ${data.license}

  ## Table of Contents
    - Description(#Description)
    - Installation(#Installation)
    - Usage(#Usage)
    - Contributions(#Contributions)
    - Testing(#Tests)
    - [Questions](#Questions)

  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributions
  ${data.contributing}

  ## Testing
  ${data.tests}

  ## Questions
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
