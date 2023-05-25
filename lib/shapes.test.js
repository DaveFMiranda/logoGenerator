const fs = require('fs');
const Triangle = require('./shapes.js'); // Assuming you have a Triangle module
const renderTriangle = require('../index.js');

describe('renderTriangle', () => {
    it('should generate correct triangleTestHTML', () => {
        const mockTriangle = {
            width: '300',
            height: '200',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            left: '0 200 ',
            apex: '150 0 ',
            right: '300 200'
        };
// INSERT THE TEST HERE? ASK CHAT GPT TO DO IT USING only expect and toEqual

    }
    
    
    
    )



}



)

/*
// Import the function to be tested




describe('renderTriangle', () =>{
    it('should create a text string for drawing a triangle with the given color', ()=> {
    const testTriangle = new renderTriangle();
    testTriangle.setColor("blue");
    expect(triangleTestHTML).toEqual('<polygon points="0 200 150 0 300 200" fill="blue" />');
    });

});
*/
// add a test for each shape
/*const testTriangle = new renderTriangle();
testTriangle.setColor("blue");
expect(testTriangle.render()).toEqual('<polygon points="0 200 150 0 300 200" fill="blue" />');
*/

// output is triangleTestHTML

