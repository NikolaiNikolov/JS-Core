let lookupChar = require('../lookupChar').lookupChar;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

describe("Lookup char", () => {
    describe("General tests", () => {
        it("should be a function", () => {
            expect(typeof lookupChar).to.equal("function");
        });
    });
    describe("Value tests", () => {
        it("should return undefined with a non-string first parameter", () => {
            expect(lookupChar(12, 0)).to.be.undefined;
        });
        it("should return undefined with a non-string first parameter", () => {
            expect(lookupChar([],0)).to.be.undefined;
        });
        it("should return undefined with a non-string first parameter", () => {
            expect(lookupChar({name: 'pesho'}, 0)).to.be.undefined;
        });
        it("should return undefined with a non-string first parameter", () => {
            expect(lookupChar(2, 0)).to.be.undefined;
        });
        it("should return undefined with a non-number second parameter", () => {
            expect(lookupChar("pesho", "gosho")).to.be.undefined;
        });
        it("should return 'Incorrect index' with a negative index", () => {
            expect(lookupChar("pesho", -1)).to.equal('Incorrect index');
        });
        it("should return 'Incorrect index' with a floating point value", () => {
            expect(lookupChar("pesho", 3.14)).to.be.undefined;
        });
        it("should return 'Incorrect index' with incorrect index value", () => {
            expect(lookupChar("pesho", 5)).to.equal('Incorrect index');
        });
        it("should return correct value with correct parameters", () => {
            expect(lookupChar("pesho", 0)).to.equal('p');
        });
        it("should return correct value with correct parameters", () => {
            expect(lookupChar("stamat", 3)).to.equal('m');
        });
        it("should return correct value with correct parameters", () => {
            expect(lookupChar("ivan", 3)).to.equal('n');
        });
        it("should return correct value with correct parameters", () => {
            expect(lookupChar("5", 0)).to.equal('5');
        });
    });
});
