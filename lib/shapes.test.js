// Imports shape constructors
const { Triangle, Circle, Square } = require("./shapes.js");

// Three tests to see if the shape constructors build shapes
describe("Triangle", () => {
  it("should return a string for a triangle with the given color", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="0 200 150 0 300 200" fill="blue" />'
    );
  });
});

describe("Square", () => {
  it("should return a string for a square with the given color", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<rect x="50" y="0" width="200" height="200" fill="red" />'
    );
  });
});

describe("Circle", () => {
  it("should return a string for a circle with the given color", () => {
    const shape = new Circle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="100" fill="yellow" />'
    );
  });
});
