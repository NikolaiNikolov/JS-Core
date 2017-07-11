let isSymmetric = require('../isSymmetric').isSymmetric;
let expect = require('chai').expect;


describe('Check for symmetry', () => {
    describe('General tests', () => {
        it("should be a function", () => {
            expect(typeof isSymmetric).to.equal('function')
        })
    });

    describe('Value tests', () => {
        it("should return true with [1,2,3,5,3,2,1]", () => {
            expect(isSymmetric([1,2,3,5,3,2,1])).to.be.true;
        });
        it("should return false with [1,2,3,5,3,7,1]", () => {
            expect(isSymmetric([1,2,3,5,3,7,1])).to.be.false;
        });
        it("should return true with [1,2,3,3,2,1]", () => {
            expect(isSymmetric([1,2,3,3,2,1])).to.be.true;
        });
        it("should return false with [1,2,3,3,7,1]", () => {
            expect(isSymmetric([1,2,3,3,7,1])).to.be.false;
        });
        it("should return false with '1,2,3'", () => {
            expect(isSymmetric('1,2,3')).to.be.false;
        });
        it("should return true with [1,'pesho', {key:'value'}, [1,2,3], [1,2,3], {key:'value'}, 'pesho',1]", () => {
            expect(isSymmetric([1,'pesho', {key:'value'}, [1,2,3], [1,2,3], {key:'value'}, 'pesho',1])).to.be.true;
        });
        it("should return true with [1,'pesho', {key:'value'}, [1,2,3], {key:'value'}, 'pesho',1]", () => {
            expect(isSymmetric([1,'pesho', {key:'value'}, [1,2,3], {key:'value'}, 'pesho',1])).to.be.true;
        });
        it("should return false with [1,'pesho', {key:'value'}, [1,2,3], [1,3,3], {key:'value'}, 'pesho',1]", () => {
            expect(isSymmetric([1,'pesho', {key:'value'}, [1,2,3], [1,3,3], {key:'value'}, 'pesho',1])).to.be.false;
        });
        it("should return false with [1,'pesho', {key:'value'}, [1,2,3], {key:'value'}, 'Ivan',1]", () => {
            expect(isSymmetric([1,'pesho', {key:'value'}, [1,2,3], {key:'value'}, 'Ivan',1])).to.be.false;
        });
    });
});