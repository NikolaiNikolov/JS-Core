let createCalculator = require('../addAndSubtract').createCalculator;
let expect = require('chai').expect;

describe("Add and subtract object", () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });

    it("should return an object", () => {
        expect(typeof calc).to.equal('object');
    });

    it("should have 0 value when created", () => {
       expect(calc.get()).to.equal(0);
    });

    it("should add", () => {
        calc.add(5);
        calc.add(3);
        expect(calc.get()).to.equal(8);
    });

    it("should subtract", () => {
        calc.subtract(5);
        expect(calc.get()).to.equal(-5);
    });

    it("should work with fractions", () => {
        calc.add(3.14);
        calc.subtract(1.13);
        expect(calc.get()).to.be.closeTo(2.01, 0.0001);
    });

    it("should work with negative numbers", () => {
        calc.add(-5);
        calc.subtract(-3);
        expect(calc.get()).to.equal(-2);
    });

    it("should not add NaNs", () => {
        calc.add("ivan");
        expect(calc.get()).to.be.NaN;
    });

    it("should not subtract NaNs", () => {
        calc.subtract("pesho");
        expect(calc.get()).to.be.NaN;
    });

    it("should work with numbers as strings", () => {
        calc.add("7");
        calc.add(1);
        expect(calc.get()).to.equal(8);
    });
});

