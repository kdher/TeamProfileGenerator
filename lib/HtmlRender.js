const path = require("path");
const fs = require("fs");

const templatesPath = path.resolve(__dirname, "../scr");

const rendr = employees => {
  const html = [];

  html.push(employees.filter(employee => employee.getRole() === "Manager")
    .map(manager => rendrManager(manager))
  );
  html.push(employees.filter(employee => employee.getRole() === "Engineer")
    .map(engineer => rendrEngineer(engineer))
  );
  html.push(employees.filter(employee => employee.getRole() === "Intern")
    .map(intern => rendrIntern(intern))
  );

  return rendrMain(html.join(""));

};

const rendrManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesPath, "manager.html"), "utf8");
  template = replaceHolders(template, "name", manager.getName());
  template = replaceHolders(template, "role", manager.getRole());
  template = replaceHolders(template, "email", manager.getEmail());
  template = replaceHolders(template, "id", manager.getId());
  template = replaceHolders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const rendrEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesPath, "engineer.html"), "utf8");
  template = replaceHolders(template, "name", engineer.getName());
  template = replaceHolders(template, "role", engineer.getRole());
  template = replaceHolders(template, "email", engineer.getEmail());
  template = replaceHolders(template, "id", engineer.getId());
  template = replaceHolders(template, "github", engineer.getGithub());
  return template;
};

const rendrIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesPath, "intern.html"), "utf8");
  template = replaceHolders(template, "name", intern.getName());
  template = replaceHolders(template, "role", intern.getRole());
  template = replaceHolders(template, "email", intern.getEmail());
  template = replaceHolders(template, "id", intern.getId());
  template = replaceHolders(template, "school", intern.getSchool());
  return template;
};

const rendrMain = html => {
  const template = fs.readFileSync(path.resolve(templatesPath, "main.html"), "utf8");
  return replaceHolders(template, "team", html);
};

const replaceHolders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = rendr;
