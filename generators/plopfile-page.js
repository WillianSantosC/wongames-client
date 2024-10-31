module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("basics", {
    description: "Create a Page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the page?",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}/index.tsx",
        templateFile: "templates/pages/Pages.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}/stories.tsx",
        templateFile: "templates/pages/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}/styles.tsx",
        templateFile: "templates/pages/styles.tsx.hbs",
      },
    ], // array of actions
  });
};
