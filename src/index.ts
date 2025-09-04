let sales: number = 123_456_789;
let course: string = "TypeScript";
// let is_published: boolean = true;
let level;      

function render(document: any) {
    console.log(document);
}

let numbers: number[] = [1, 2, 3];
numbers.forEach(n => n.toExponential);

let user: [number, string] = [1, "Mosh"];

const enum Size { Small = 1, Medium = 2, Large = 3 }
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
let employee = { 
    id: 1, 
    name: "Mosh" };



class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }       
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }       
    getDistance(another: Point) {
        // ...
    }   
}

let point = new Point(1, 2);
point.draw();