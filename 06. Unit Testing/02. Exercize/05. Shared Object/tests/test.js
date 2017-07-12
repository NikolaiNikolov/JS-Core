let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Shared Object</title>
</head>
<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>
</html>`;

describe("Shared Object Unit Tests", () => {
    describe("Initial Value Tests", () => {
        it("name initial value should be null", () => {
            expect(sharedObject.name).to.be.null;
        });
        it("income initial value should be null", () => {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe("change name tests", () => {
        it("with an empty string name should remain the same", () => {
            // let oldName = sharedObject.name;
            // sharedObject.changeName("");
            // expect(oldName).to.equal(sharedObject.name);
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });

        it("with a non-empty string name should be changed", () => {
            sharedObject.changeName("Pesho");
            expect(sharedObject.name).to.equal("Pesho");
        });

        describe("Input name tests", () => {


        });
    });

});