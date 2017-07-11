let rgbToHexColor = require('../rgbToHex').rgbToHexColor;
let expect = require('chai').expect;

describe("RGB to Hex Color", () => {
    describe('General tests', () => {
        it("should be a function", () => {
            expect(typeof rgbToHexColor).to.equal('function')
        })
    });

    describe('Value tests', () => {
        it("should return #FF9EAA with (255, 158, 170)", () => {
            expect(rgbToHexColor(255, 158, 170)).to.equal("#FF9EAA");
        });

        it("should return #000000 with (0, 0, 0)", () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
        });

        it("should return #0C0D0E with (12, 13, 14)", () => {
            expect(rgbToHexColor(12, 13, 14) ).to.equal("#0C0D0E");
        });

        it("should return #0C0D0E with (255, 255, 255)", () => {
            expect(rgbToHexColor(255, 255, 255) ).to.equal("#FFFFFF");
        });

        it("should return undefined with (-1, 0, 0)", () => {
            expect(rgbToHexColor(-1, 0, 0) ).to.be.undefined;
        });

        it("should return undefined with (0, -1, 0)", () => {
            expect(rgbToHexColor(0, -1, 0) ).to.be.undefined;
        });

        it("should return undefined with (0, 0, -1)", () => {
            expect(rgbToHexColor(0, 0, -1) ).to.be.undefined;
        });

        it("should return undefined with (256, 0, 0)", () => {
            expect(rgbToHexColor(256, 0, 0) ).to.be.undefined;
        });

        it("should return undefined with (0, 256, 0)", () => {
            expect(rgbToHexColor(0, 256, 0) ).to.be.undefined;
        });

        it("should return undefined with (0, 0, 256)", () => {
            expect(rgbToHexColor(0, 0, 256) ).to.be.undefined;
        });

        it("should return undefined with (3.14, 0, 0)", () => {
            expect(rgbToHexColor(3.14, 0, 0) ).to.be.undefined;
        });

        it("should return undefined with (0, 3.14, 0)", () => {
            expect(rgbToHexColor(0, 3.14, 0) ).to.be.undefined;
        });

        it("should return undefined with (0, 0, 3.14)", () => {
            expect(rgbToHexColor(0, 0, 3.14) ).to.be.undefined;
        });

        it("should return undefined with (0, 0, 3.14)", () => {
            expect(rgbToHexColor(0, 0, 3.14) ).to.be.undefined;
        });

        it("should return undefined with (\"5\", [3], {8:9})", () => {
            expect(rgbToHexColor("5", [3], {8:9}) ).to.be.undefined;
        });
    });
});