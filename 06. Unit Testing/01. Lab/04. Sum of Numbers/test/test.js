let expect = require('chai').expect;
let sum = require('../04. Sum of Numbers');

describe('Test number sumator', function () {
    it('should return 3', function () {
        expect(sum([1,2,4,5])).to.equal(12);
    });
    it('should return 2', function () {
        expect(sum([-2, -1, 5])).to.equal(2);
    });
    it('should return 0 for []', function () {
        expect(sum([])).to.equal(0);
    });
    it('should return 3 for [1.1, 1.1, 1.1]', function () {
        expect(sum([1.1, 1.1, 1.1])).to.be.closeTo(3.3, 0.0001);
    });
    it('should return NaN for invalid data', function () {
        expect(sum(['pesho', 1.1, 1.1])).to.be.NaN;
    });
    it('should return 1 for [1]', function () {
        expect(sum([1])).to.equal(1);
    });
});