let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let mathEnforcer = require('../mathEnforcer').mathEnforcer;

describe("Math Enforcer", () => {
    describe("General tests", () => {
        it("should be an object", () => {
            expect(typeof mathEnforcer ).to.equal("object");
        });
    });
    describe("Value tests", () => {
        describe("addFive", () => {
            
            describe("Incorrect value types tests", () => {
                it("should return undefined with a string argument", () => {
                    expect(mathEnforcer.addFive('pesho')).to.be.undefined;
                });
                it("should return undefined with an array argument", () => {
                    expect(mathEnforcer.addFive([1,2,3])).to.be.undefined;
                });
                it("should return undefined with an object argument", () => {
                    expect(mathEnforcer.addFive({name: 'pesho'})).to.be.undefined;
                });
            });
            describe("Correct values tests", () => {
                it("should return 15 with 10", () => {
                    expect(mathEnforcer.addFive(10)).to.equal(15);
                });
                it("should return -5 with -10", () => {
                    expect(mathEnforcer.addFive(-10)).to.equal(-5);
                });
                it("should return 8.14 with 3.14", () => {
                    expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
                });
                it("should return 1.86 with -3.14", () => {
                    expect(mathEnforcer.addFive(-3.14)).to.be.closeTo(1.86, 0.01);
                });
            });

        });
        describe("subtractTen", () => {
            describe("Incorrect value types tests", () => {
                it("should return undefined with a string argument", () => {
                    expect(mathEnforcer.subtractTen('pesho')).to.be.undefined;
                });
                it("should return undefined with an array argument", () => {
                    expect(mathEnforcer.subtractTen([1,2,3])).to.be.undefined;
                });
                it("should return undefined with an object argument", () => {
                    expect(mathEnforcer.subtractTen({name: 'pesho'})).to.be.undefined;
                });
            });
            describe("Correct values tests", () => {
                it("should return 0 with 10", () => {
                    expect(mathEnforcer.subtractTen(10)).to.equal(0);
                });
                it("should return -20 with -10", () => {
                    expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
                });
                it("should return 7.86 with 3.14", () => {
                    expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
                });
                it("should return -13.14 with -3.14", () => {
                    expect(mathEnforcer.subtractTen(-3.14)).to.be.closeTo(-13.14, 0.01);
                });
            });

        });
        describe("mathEnforcer.sum", () => {
            describe("Incorrect value types tests", () => {
                it("should return undefined with a non-number first argument", () => {
                   expect(mathEnforcer.sum("pesho", 2)).to.be.undefined;
                });
                it("should return undefined with a non-number first argument", () => {
                    expect(mathEnforcer.sum([1,2,3], 2)).to.be.undefined;
                });
                it("should return undefined with a non-number first argument", () => {
                    expect(mathEnforcer.sum({name: 'pesho'}, 2)).to.be.undefined;
                });

                it("should return undefined with a non-number second argument", () => {
                    expect(mathEnforcer.sum(2, "pesho")).to.be.undefined;
                });
                it("should return undefined with a non-number second argument", () => {
                    expect(mathEnforcer.sum(2, [1,2,3])).to.be.undefined;
                });
                it("should return undefined with a non-number second argument", () => {
                    expect(mathEnforcer.sum(2, {name: 'pesho'})).to.be.undefined;
                });
            });
            describe("Correct values tests", () => {
                it("should return 23 with (12, 11)", () => {
                    expect(mathEnforcer.sum(12, 11)).to.equal(23);
                });
                it("should return -5 with (-12, 7)", () => {
                    expect(mathEnforcer.sum(-12, 7)).to.equal(-5);
                });
                it("should return 4.25 with (3.14, 1.11)", () => {
                    expect(mathEnforcer.sum(3.14, 1.11)).to.be.closeTo(4.25, 0.01);
                });
                it("should return -1 with (-2.11, 1.11)", () => {
                    expect(mathEnforcer.sum(-2.11, 1.11)).to.be.closeTo(-1, 0.01);
                });
            });

        });
    });
});
