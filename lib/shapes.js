class Shape {
  constructor(version, width, height, xmlns, fill, text) {
    this.version = version;
    this.width = width;
    this.height = height;
    this.xmlns = xmlns;
    this.fill = fill;
    this.text = text;
  }

  
}

// Or does it still work if we remove version and xmlns?
// insert into the above constructor the text inputs


class Square extends Shape {
  constructor(version, width, height, xmlns, fill, text, x, y, sqWidth, sqHeight){
  super(version, width, height, xmlns, fill, text);
  this.x = x;
  this.y = y;
  this.sqWidth = sqWidth;
  this.sqHeight = sqHeight;
  }
}


class Circle extends Shape {
  constructor(version, width, height, xmlns, fill, text, cx, cy, r){
  super(version, width, height, xmlns, fill, text);
  this.cx = cx;
  this.cy = cy;
  this.r = r;
  }
}



class Triangle extends Shape {
  constructor(version, width, height, xmlns, fill, text, left, apex, right){
  super(version, width, height, xmlns, fill, text);
  this.left = left;
  this.apex = apex;
  this.right = right;
  }
}
module.exports={Triangle, Circle, Square}
/*
function renderRectangle(width, height, version, xmlns, fill, text){
  const newRectangle = new Rectangle(newShape, {
x: 50,
y: 50,
rectWidth: 200,
rectHeight: 100
  })
  console.log(newRectangle);
  const rectangleHTML = '<svg width="'+width+'" height="'+height+'" version="'+version+'" xmlns="'+xmlns+'">'+'<rect x="'+newRectangle.x+'" y="'+newRectangle.y+'" width="'+newRectangle.rectWidth+'" height="'+newRectangle.rectHeight+'" fill="'+fill+'" />'+text+'</svg>';
  console.log(rectangleHTML);
}

function renderCircle(width, height, version, xmlns, fill, text){
  const newCircle = new Circle(newShape, {
cx: 150,
cy: 100,
r: 150
  })
  console.log(newCircle);
  const circleHTML = '<svg width="'+width+'" height="'+height+'" version="'+version+'" xmlns="'+xmlns+'">'+'<circle cx="'+newCircle.cx+'" cy="'+newCircle.cy+'" r="'+newCircle.r+'" fill="'+fill+'" />'+text+'</svg>';
  console.log(circleHTML);
}

function renderTriangle(width, height, version, xmlns, fill, text){
  const newTriangle = new Triangle(newShape, {
left: '0 200 ',
apex: '150 0 ',
right: '300 200'
  })
  console.log(newTriangle);
  const triangleHTML = '<svg width="'+width+'" height="'+height+'" version="'+version+'" xmlns="'+xmlns+'">'+'<polygon points="'+newTriangle.left+newTriangle.apex+newTriangle.right+'" fill="'+fill+'" />'+text+'</svg>';
  console.log(triangleHTML);
}

renderRectangle(newShape.width, newShape.height, newShape.version, newShape.xmlns, newShape.fill, newShape.text)
renderTriangle(newShape.width, newShape.height, newShape.version, newShape.xmlns, newShape.fill, newShape.text)
renderCircle(newShape.width, newShape.height, newShape.version, newShape.xmlns, newShape.fill, newShape.text)

module.exports = renderCircle;
module.exports = renderTriangle;
module.exports = renderRectangle;
module.exports = showAnswers;
*/
// then work on adding the text to the parent class

// move the render functions to index.js so they can access the user input?
// function in index.js that creates the html file

/*
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  */

// one function to build the shape, another function to render it into html

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

// PER KENNETH:
// 1. create shapes parent class
// 2. create rect, tri, circle child classes
// 3. three functions that create the specific shapes
// 4. function that lays text on the shape? (put it on the parent class?)
// assign text as a variable on the parent class
// SKIP THIS STEP 5. call text function at the very end after rendering the shape (Kenneth doesn't like .call)
// 6. function that writes the file at the end: string result from shape functions gets written to file
module.exports = renderCircle;
module.exports = renderTriangle;
module.exports = renderRectangle;
*/
