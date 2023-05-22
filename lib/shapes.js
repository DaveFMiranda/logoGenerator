// add parent object class: shapes
// add a class for each of the three shapes

// parent shape class origin
//rectangle: x, y, width, height, fill
// circle: cx, cy, r, fill
// triangle: points, fill

// need to render the text after the shape

// CHECK IT OUT! THE SHAPES object gets the constants: size, version, etc.
// the subsequent objects get separate qualities for their respective inputs
// then the shape render function creates a new instance of the proper object (triangle, circle, or square)
// and puts into it the user input or, in some cases, constants for size and such

/* <svg version="1.1"
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
/*
START WITH THIS:

// Constructor class can be used to create objects containing properties "name", "age", "breed", and the "nap()" function
class Cat {
    constructor(name, age, breed) {
      this.name = name;
      this.age = age;
      this.breed = breed;
    }
  
    nap() {
      console.log('Zzzzzzzzz');
    }
  }
  
  // Sets the variables "catOne" and "catTwo" to a Cat object and initializes with name, age, and breed properties
  const catOne = new Cat('Tom', 2, 'Shorthair');
  const catTwo = new Cat('Garfield', 3, 'Bengal');
  
  // Calling Cat's nap method
  catOne.nap();
  catTwo.nap();
  */

  // THEN call each shape with a function like so. Inside the shape function call Shape.call(property, property, property)

/*
function Dog(name, age, breed, puppies) {
  Animal.call(this, name, age, breed);
  this.puppies = puppies;
}
*/
// THEN... when you go to render the shapes, call the shape's function and pass in the proper parameters from the user input