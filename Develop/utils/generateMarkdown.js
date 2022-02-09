// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseContent = '';
  if (license !== undefined && license !== null) {
    licenseContent = `### License Badeges \n${license}`;
  }

  return licenseContent;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `### Licenses: \n${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title} \n
  ## Table of Contents:\n
  * <a href='## Description'>${data.description}</a>\n
  * ${data.install_instructions}\n
  * ${data.usage_info}\n
  * ${data.test_instructions}\n
  * ${data.questions}

  ## Description\n${data.description}\n
  ## Installation Instructions\n${data.install_instructions}\n
  ## Usage Info\n${data.usage_info}\n
  ## Contribution Guidecolines\n${data.description}\n
  ## Test Instructions\n${data.test_instructions}\n
  ## Questions\n
  * email: bdejene19@gmail.com
  * portfolio: https://bdejene19.github.io/updatedPortfolio/ 

  ${renderLicenseSection('hello')}
  ${renderLicenseBadge()}

`;
}

module.exports = generateMarkdown;
