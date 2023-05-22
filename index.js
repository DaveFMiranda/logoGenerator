const inquirer = require('inquirer');

// Questions for the user: three characters of text; text color; shape (list: circle, triangle, square); shape color
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What three letters would you like for your logo?',
      name: 'text',
      // If there's time, add something to make sure it's three characters, and to make sure it's three letters
    },
    {
      type: 'input',
      message: 'What color do you want the text to be?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Please select a shape for your logo.',
      choices: ['Triangle', "Circle", "Square"],
      name: 'shape',
    },
    {
      type: 'input',
      message: 'What color do you want the logo to be?',
      name: 'shapeColor',
    },
  ])
  .then(answers => {
      console.log(answers.text);
      console.log(answers.textColor);
      console.log(answers.shape);
      console.log(answers.shapeColor);
  })

// separate JS doc for rendering the logo
  // function that renders the shape (pull from shapes.js), make the shape a certain color
  // function that adds text to the shape (take the output of the above function and add text from user input and make it the user-specified color)
  // export those two functions

// Back here in index.js, call those functions, pass in the user inputs, and all this goes in a function that creates the file and puts the logo in it
 
// THEN!: write a test for each shape

/* Sample HTML for rendering an SVG:

<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />
// take the above line out
  <circle cx="150" cy="100" r="80" fill="green" />
  / the above line needs to be pulled from the shape renderer function
/ cx is horizontal offset from the left, cy is vertical offset from the top
// fill=${answers.shapeColor}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
//change SVG to ${answers.text}
// change fill here to ${answers.textColor}
</svg>

// Gonna have to draw the triangle:
// <polygon points="0, 200 150, 0 300, 200"
      stroke="green" fill="transparent" stroke-width="0"/>
change fill
*/