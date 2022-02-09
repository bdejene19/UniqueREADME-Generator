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

function renderOrderList(installStr) {
  let tempArr = installStr.split('/');
  let bulletStrs = '';
  tempArr.forEach(item => {
    bulletStrs += `<li>${item}</li>`
  })
  return bulletStrs;
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
  ## Installation Instructions\n
  <ol>
    ${renderOrderList(data.install_instructions)}
  </ol>\n
  ## Usage Info\n${data.usage_info}\n
  ## Contribution Guidelines\n${data.description}\n
  ## Test Instructions\n
  ${renderOrderList(data.test_instructions)}\n
  ## Questions\n
  * Email: ${data.email}\n
  * Portfolio: https://bdejene19.github.io/updatedPortfolio/ 

  ${renderLicenseSection('hello')}
  ${renderLicenseBadge()}

`;
}

module.exports = generateMarkdown;
