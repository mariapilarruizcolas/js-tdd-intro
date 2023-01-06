// test/capitalizeFirst.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

// give the test suite a label using describe
//describe ('titre des test', fonction agroupant les test=>{})
describe('rectangle test', () => {
    // give the test a label using it
    it('is a square?', () => {
        //sur la fonction capitalizeFirst tu le passe la valeur 
        //javaScript et elle doit rendre JavaScript
        //assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
        //donc ici pour la fonction isSquare() si tu le passe la valeur 
        //rectangle0 et rectangle1 il va dire si c'est vrai ou faux
        const rectangle = new Rectangle(10, 10);
        const rectangle2 = new Rectangle(10, 10);
        assert.strictEqual(isSquare(rectangle[0], rectangle[1]), 'true');
        assert.strictEqual(isSquare(rectangle2[0], rectangle2[1]), 'false');
    });

    it('getArea', () => {
        const rectangle = new Rectangle(10, 5);
        assert.strictEqual(getArea(rectangle[0], rectangle[1]), result);
    });

    it('getPerimeter', () => {
        const rectangle = new Rectangle(10, 5);
        assert.strictEqual(getPerimeter(rectangle[0], rectangle[1]), result);
    });


});
;

