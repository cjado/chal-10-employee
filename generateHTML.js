const Header = require('./generateheader')
const Footer = require('./generatefooter')

let generateHTML = function(data) {
    let finalString = ""
    finalString = finalString + Header()
    for(i = 0; i < data.length; i ++) {
        let employeeType = data[i].getRole();
        switch(employeeType) {
            case "Engineer" : 
                finalString = finalString + generateEngineerHtml(data[i])
                break;
            case "Manager" : 
                finalString = finalString + generateManagerHtml(data[i])
                break;

            case "Intern" : 
                finalString = finalString + generateInterHtml(data[i])
                break;

        }
    }
    finalString = finalString + Footer()
    console.log(finalString)
    return finalString;
}

function generateEngineerHtml(engineer){
    return `
    <div id="Engineer">
    <p> Engineer Name - ${engineer.getName()} </p>
    <p> Engineer Email - ${engineer.getEmail()} </p>
    <p> Engineer Id - ${engineer.getId()} </p>
    <p> Engineer Github - ${engineer.getGithub()} </p>
    </div>
    `
}

function generateManagerHtml(manager){
    return `
    <div id="Manager">
    <p> Manager Name - ${manager.getName()} </p>
    <p> Manager Email - ${manager.getEmail()} </p>
    <p> Manager Id - ${manager.getId()} </p>
    <p> Manager Officenumber - ${manager.getOfficeNumber()} </p>
    </div>
    `
}

function generateInterHtml(intern){
    return `
    <div id="Intern">
    <p> Intern Name - ${intern.getName()} </p>
    <p> Intern Email - ${intern.getEmail()} </p>
    <p> Intern Id - ${intern.getId()} </p>
    <p> Intern School - ${intern.getSchool()} </p>
    </div>
    `
}

module.exports = generateHTML