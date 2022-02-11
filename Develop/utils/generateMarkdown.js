// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== undefined && license !== null) {
    // licenseContent = `### License Badeges \n${license}`;
    return `
      \n<img src=https://img.shields.io/badge/License-${license}-orange.svg alt=${license}>  
    `
  }

  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === null || license === undefined || license === '') {
      return '';
    } else {
      return `
        (${license}) 
      `
    }

  


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  
  if (data === null || data === undefined || data === '') {
    return '';

  } else {
    console.log('my data: ',data);
    return `## Licenses: \n ${data.licenses}\n ${renderLicenseBadge(data.licenses)}\n${renderLicenseLink(data.licenseLinks)}`

  }
}

function renderOrderList(installStr) {
  let tempArr = installStr.split('/');
  let bulletStrs = '';
  tempArr.forEach(item => {
    bulletStrs += `<pre>${item}</pre>\n`
  })
  return bulletStrs;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title} \n
  ## Table of Contents:\n
  * [Description](#description)</a>\n
  * [Installation Instructions](#installation-instructions)\n
  * [Usage Info](#usage-info)\n
  * [Test Instructions](#test-instructions)\n
  * [Questions](#questions)

  ## Description\n
  ${data.description}\n
  ## Installation Instructions\n
    ${renderOrderList(data.install_instructions)}\n
  ## Usage Info\n${data.usage_info}\n
  ${renderLicenseSection(data)}\n
  ## Contribution Guidelines\n${data.description}\n
  ## Test Instructions\n
  ${renderOrderList(data.test_instructions)}\n
  ## Questions\n
  * Github: ${data.github}\n
  * Email: ${data.email}\n
  * Portfolio: ${data.portfolioLink}\n 
  

  

`;
}

module.exports = generateMarkdown;
