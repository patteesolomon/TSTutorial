// pascal naming conventions
//interface Point {
//    x: number,
//    y: number,
//    draw: () => void
//}
class Point {
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another) {
    }
}
let point = new Point;
point.x = 1;
point.y = 2;
point.draw();
var number = 2;
let count = 2;
let q;
var me = "sfe";
let d;
let e;
var u;
let message = 'skc';
let endsWithC = message.endsWith('c');
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let backgrounColor = Color.Red;
q = 6;
let getDistance = (pointA, pointB) => {
};
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
let log = function (message) {
    console.log(message);
};
let doLog = (message) => console.log(message);
let drawPoint = (point) => {
};
doSomething();
//# sourceMappingURL=app.js.map