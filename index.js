// Imports packages and shape constructors
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

// Asks user questions to build logo
inquirer
  .prompt([
    {
      type: "input",
      message: "What three letters would you like for your logo?",
      name: "text",
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

  .then((answers) => {
    // Creates string for the text portion of the logo
    HTMLtext =
      '<text x="150" y="125" font-size="50" text-anchor="middle" fill="' +
      answers.textColor +
      '">' +
      answers.text +
      "</text>";
    // Determines which shape render function to use based on user input
    if (answers.shapeChoice === "Triangle") {
      renderTriangle(answers.shapeColor, HTMLtext);
    }
    if (answers.shapeChoice === "Circle") {
      renderCircle(answers.shapeColor, HTMLtext);
    }
    if (answers.shapeChoice === "Square") {
      renderSquare(answers.shapeColor, HTMLtext);
    }
  });

// Renders a triangle
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
  // Creates the HTML string for the .svg file
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
  // Creates the .svg file
  fs.writeFile("examples/logo.svg", triangleHTML, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

// Same as above but for a circle
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
  fs.writeFile("examples/logo.svg", circleHTML, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

// Same as above but for a square
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
  fs.writeFile("examples/logo.svg", squareHTML, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}
