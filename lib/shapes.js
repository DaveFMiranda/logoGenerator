// Parent Shape class constructor
class Shape {
  constructor(version, width, height, xmlns, fill, text) {
    this.version = version;
    this.width = width;
    this.height = height;
    this.xmlns = xmlns;
    this.fill = fill;
    this.text = text;
  }
  setColor(color) {
    this.fill = color;
  }
}

// Square shape constructor
class Square extends Shape {
  constructor(
    version,
    width,
    height,
    xmlns,
    fill,
    text,
    x,
    y,
    sqWidth,
    sqHeight
  ) {
    super(version, width, height, xmlns, fill, text);
    this.x = x;
    this.y = y;
    this.sqWidth = sqWidth;
    this.sqHeight = sqHeight;
  }
  render() {
    return `<rect x="50" y="0" width="200" height="200" fill="${this.fill}" />`;
  }
}

// Circle shape constructor
class Circle extends Shape {
  constructor(version, width, height, xmlns, fill, text, cx, cy, r) {
    super(version, width, height, xmlns, fill, text);
    this.cx = cx;
    this.cy = cy;
    this.r = r;
  }
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.fill}" />`;
  }
}

// Triangle shape constructor
class Triangle extends Shape {
  constructor(version, width, height, xmlns, fill, text, left, apex, right) {
    super(version, width, height, xmlns, fill, text);
    this.left = left;
    this.apex = apex;
    this.right = right;
  }
  render() {
    return `<polygon points="0 200 150 0 300 200" fill="${this.fill}" />`;
  }
}

// Exports the shape constructors
module.exports = { Triangle, Circle, Square };
