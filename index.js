// PSEUDOCODE ======================

// DEPENDENCES ======================
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "scr");
const outputPath = path.join(OUTPUT_DIR, "Createam.html");

const render = require("./lib/HtmlRender");


let employees = [];

function creaManager() {
	inquirer.prompt([  
        {
            type: "input",
            name: "name",
            message: "Provide employee name",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee ID?",
        },
         {
            type: "input",
            name: "email",
            message: "Enter in employee email",
        },
        // manager questions
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
      
        },
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager);
        begin();
    })
}
function creaEngineer() {
    inquirer.prompt([  
        {
            type: "input",
            name: "name",
            message: "Provide employee name",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee ID?",
        },
        {
            type: "input",
            name: "email",
            message: "Enter in employee email",
        },
        {
            type: "input",
            name: "github",
            message: "What is the GitHub username?",
        }, 
    ]).then(answers => {
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
        begin()
    })
}

function creaIntern() {
    inquirer.prompt([  
        {
            type: "input",
            name: "name",
            message: "Provide employee name",
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee ID?",
        },
         {
            type: "input",
            name: "email",
            message: "Enter in employee email",
        },
        {
            type: "input",
            name: "school",
            message: "Which schol did you graduate from",
        }, 
    ]).then(answers => {
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
        employees.push(intern);
        begin();
    })
};

function creaTeam() {
    fs.writeFileSync(outputPath, render(employees))
};

function begin() {
    inquirer.prompt(
        {
            type: "list",
            name: "options",
            message: "Select the Role below?",
            choices: ["Add Manager", "Add Engineer", "Add Intern", "Create Team"],
        }
    
    ).then(answers => 
		{
        switch(answers.options) 
		{
            case "Add Manager" :
                creaManager();
            break;
            
			case "Add Engineer" :
                creaEngineer(); 
            break;
            case "Add Intern" :
                creaIntern(); 
            break;
           
			case "Create Team" :
                creaTeam(); 
            break;
           
			default : 
            begin();

        }
    })
};
begin();