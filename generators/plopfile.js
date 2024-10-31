module.exports = (plop) => {
  // create your generators here
  plop.setGenerator("basics", {
    description: "Create a Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/components/Components.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/stories.tsx",
        templateFile: "templates/components/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.tsx",
        templateFile: "templates/components/styles.tsx.hbs",
      },
    ], // array of actions
  });
};
