// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    default:
      return ""; // Return an empty string if there is no license or an unsupported license is provided
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "GPLv3":
      return "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache":
      return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "MIT":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    case "Mozilla":
      return "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
    default:
      return ""; // Return an empty string if there is no license or an unsupported license is provided
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    return `## License\n\nThis application is covered under the ${license} license.\n\n${licenseBadge}\n\nFor more information, please visit the ${licenseLink}.`;
  }
  return "";

}// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
  ## Description
   ${data.description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Questions](#questions)


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${licenseSection}

  ## Credits 
  ${data.credits}

  ## Questions
  You can contact me with any questions below! \n\n
  GitHub: https://github.com/${data.GitHub} \n\n
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
