const typesFolderMapping = {
  Atom: 'atoms',
  Molecule: 'molecules',
  Organism: 'organisms',
  Layout: 'layouts'
};

module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Component Generator',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Component Type',
        choices: Object.keys(typesFolderMapping),
        default: 'Atom',
        filter: input => typesFolderMapping[input]
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component Name',
        validate: input => {
          if (!input) return 'Please provide a name for the component.';

          const regExp = new RegExp(/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/);
          if (!regExp.test(input)) return 'The component must be in PascalCase.';

          return true;
        }
      },
      {
        type: 'confirm',
        name: 'shouldUseReactFC',
        message: 'Use React.FC?',
        default: false
      },
      {
        type: 'confirm',
        name: 'shouldIncludeStory',
        message: 'Include Story?',
        default: true
      },
      {
        type: 'confirm',
        name: 'shouldIncludeTest',
        message: 'Include Test?',
        default: true
      }
    ],
    actions: answers => {
      const componentFile = answers.shouldUseReactFC
        ? {
            type: 'add',
            path: '../src/components/{{type}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
            templateFile: 'templates/component-fc.tsx.hbs',
            skipIfExists: true
          }
        : {
            type: 'add',
            path: '../src/components/{{type}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
            templateFile: 'templates/component.tsx.hbs',
            skipIfExists: true
          };

      const actions = [
        componentFile,
        {
          type: 'add',
          path: '../src/components/{{type}}/{{kebabCase name}}/{{kebabCase name}}.types.ts',
          templateFile: 'templates/component.types.ts.hbs',
          skipIfExists: true
        },
        {
          type: 'add',
          path: '../src/components/{{type}}/{{kebabCase name}}/{{kebabCase name}}.styles.ts',
          templateFile: 'templates/component.styles.ts.hbs',
          skipIfExists: true
        },
        {
          type: 'add',
          path: '../src/components/{{type}}/{{kebabCase name}}/index.ts',
          templateFile: 'templates/component.exporter.ts.hbs',
          skipIfExists: true
        }
      ];

      if (answers.shouldIncludeStory) {
        actions.push({
          type: 'add',
          path: '../src/components/{{type}}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
          templateFile: 'templates/component.stories.tsx.hbs',
          skipIfExists: true
        });
      }

      return actions;
    }
  });
};
