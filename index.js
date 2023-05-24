const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");
let HTMLtext;
let answers;

inquirer
  .prompt([
    {
      type: "input",
      message: "What three letters would you like for your logo?",
      name: "text",
      // If there's time, add something to make sure it's three characters, and to make sure it's three letters
    },
    {
      type: "input",
      message: "What color do you want the text to be?",
      name: "textColor",
    },
    {
      type: "list",
      message: "Please select a shape for your logo.",
      choices: ["Triangle", "Circle", "Square"],
      name: "shapeChoice",
    },
    {
      type: "input",
      message: "What color do you want the logo to be?",
      name: "shapeColor",
    },
  ])
  .then((userAnswers) => {
    answers = userAnswers;
    console.log(answers.text);
    console.log(answers.textColor);
    console.log(answers.shapeChoice);
    console.log(answers.shapeColor);
    HTMLtext =
      '<text x="150" y="125" font-size="50" text-anchor="middle" fill="' +
      answers.textColor +
      '">' +
      answers.text +
      "</text>";
    console.log(HTMLtext);
    if (answers.shapeChoice === "Triangle") {
      renderTriangle(answers.shapeColor, HTMLtext);
      console.log("triangle", answers.shapeChoice);
    }
    if (answers.shapeChoice === "Circle") {
      renderCircle(answers.shapeColor, HTMLtext);
      console.log("circle", answers.shapeChoice);
    }
    if (answers.shapeChoice === "Square") {
      renderSquare(answers.shapeColor, HTMLtext);
      console.log("square", answers.shapeChoice);
    }
  });
// Per Kenneth, if you have time, switch the if thens to switch case

function renderTriangle(shapeColor, HTMLtext) {
  var newTriangle = new Triangle(
    "1.1",
    "300",
    "200",
    "http://www.w3.org/2000/svg",
    shapeColor,
    HTMLtext,
    "0 200 ",
    "150 0 ",
    "300 200"
  );
  console.log(newTriangle);
  triangleHTML =
    '<svg width="' +
    newTriangle.width +
    '" height="' +
    newTriangle.height +
    '" version="' +
    newTriangle.version +
    '" xmlns="' +
    newTriangle.xmlns +
    '">' +
    '<polygon points="' +
    newTriangle.left +
    newTriangle.apex +
    newTriangle.right +
    '" fill="' +
    shapeColor +
    '" />' +
    HTMLtext +
    "</svg>";
  console.log(triangleHTML);
  fs.writeFile("logo.svg", triangleHTML, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

function renderCircle(shapeColor, HTMLtext) {
  var newCircle = new Circle(
    "1.1",
    "300",
    "200",
    "http://www.w3.org/2000/svg",
    shapeColor,
    HTMLtext,
    150,
    100,
    100
  );
  console.log(newCircle);
  circleHTML =
    '<svg width="' +
    newCircle.width +
    '" height="' +
    newCircle.height +
    '" version="' +
    newCircle.version +
    '" xmlns="' +
    newCircle.xmlns +
    '">' +
    '<circle cx="' +
    newCircle.cx +
    '" cy="' +
    newCircle.cy +
    '" r="' +
    newCircle.r +
    '" fill="' +
    shapeColor +
    '" />' +
    HTMLtext +
    "</svg>";
  console.log(circleHTML);
  fs.writeFile("logo.svg", circleHTML, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

function renderSquare(shapeColor, HTMLtext) {
  var newSquare = new Square(
    "1.1",
    "300",
    "200",
    "http://www.w3.org/2000/svg",
    shapeColor,
    HTMLtext,
    50,
    0,
    200,
    200
  );
  console.log(newSquare);
  squareHTML =
    '<svg width="' +
    newSquare.width +
    '" height="' +
    newSquare.height +
    '" version="' +
    newSquare.version +
    '" xmlns="' +
    newSquare.xmlns +
    '">' +
    '<rect x="' +
    newSquare.x +
    '" y="' +
    newSquare.y +
    '" width="' +
    newSquare.sqWidth +
    '" height="' +
    newSquare.sqHeight +
    '" fill="' +
    shapeColor +
    '" />' +
    HTMLtext +
    "</svg>";
  console.log(squareHTML);
  fs.writeFile("logo.svg", squareHTML, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

// write the file

/*
  

  /*
  function renderCircle(width, height, version, xmlns, fill, text) {
    const newCircle = new Circle(newShape, {
      cx: 150,
      cy: 100,
      r: 150,
    });
    console.log(newCircle);
    const circleHTML =
      '<svg width="' +
      width +
      '" height="' +
      height +
      '" version="' +
      version +
      '" xmlns="' +
      xmlns +
      '">' +
      '<circle cx="' +
      newCircle.cx +
      '" cy="' +
      newCircle.cy +
      '" r="' +
      newCircle.r +
      '" fill="' +
      fill +
      '" />' +
      text +
      "</svg>";
    console.log(circleHTML);
  }
*/

/*
  renderRectangle(
    newShape.width,
    newShape.height,
    newShape.version,
    newShape.xmlns,
    newShape.fill,
    newShape.text
  );
  */

/*
  renderCircle(
    newShape.width,
    newShape.height,
    newShape.version,
    newShape.xmlns,
    newShape.fill,
    newShape.text
  );
  */

//renderShape();

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
