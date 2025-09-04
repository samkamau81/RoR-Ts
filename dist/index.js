"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach(n => n.toExponential);
let user = [1, "Mosh"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
let employee = {
    id: 1,
    name: "Mosh"
};
//# sourceMappingURL=index.js.map