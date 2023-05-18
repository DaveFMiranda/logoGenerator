const inquirer = require('inquirer');

// Questions for the user: three characters of text; text color; shape (list: circle, triangle, square); shape color
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

// separate JS doc for rendering the logo
  // function that renders the shape (pull from shapes.js), make the shape a certain color
  // function that adds text to the shape (take the output of the above function and add text from user input and make it the user-specified color)
  // export those two functions

// Back here in index.js, call those functions, pass in the user inputs, and all this goes in a function that creates the file and puts the logo in it
 

