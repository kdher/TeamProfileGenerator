# Team Profile Generator 

Deployed video: 

## Description

We will create a command line application to build a software engineering team. The application will prompt the user to add information about the manager and team members. In this example, the team consists of a manager and a mix of engineers and interns. Once the team is built, it generates an HTML file that displays the team in a formatted team roster with the information provided by the user.
A command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:
``` 
node index.js
``` 

## Table of Contents
  * [Installation](#installation)
  * [Autor info](#Autorinfo)
  * [User Story](#UserStory)
  * [Acceptance Criteria](#AcceptanceCriteria)
  * [Technologies](#technologies)

## Autor Info
```
Eder Rodrigo Ramirez Contreras 
E-mail: Edher.fca@gmail.com
Gitgub: https://github.com/kdher/
```
 
## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Installation
To install dependencies, run npm i and install Inquirer and Jest 

## Technologies 
* Node.js
* Inquirer 
* Jest 