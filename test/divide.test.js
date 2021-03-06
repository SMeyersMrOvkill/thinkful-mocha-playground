const divide = require('../index');
const { expect } = require('chai');

describe('Divide function', () => {
    it('Shoiuld divide positive integers correctly', () => {
        const a = 8;
        const b = 4;
        const expectedAnswer = 2;
        const actualAnswer = divide(a, b);
        expect(actualAnswer).to.equal(expectedAnswer);
    });
    it('Should throw an error when divide by zero', () => {
        const a = 8, b = 0;
        const fn = () => {
            divide(a, b);
        }
        expect(fn).to.throw();
    });
})