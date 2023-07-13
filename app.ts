// pascal naming conventions

//interface Point {
//    x: number,
//    y: number,
//    draw: () => void
//}
//import { point , Ticketo }
import { Point } from './point';
import { Ticketo } from './Ticketo';
import { RecursionTUT } from './RecursionTUT';
let point = new Point(1, 2);
let point2: Point;
let point3 = new Point;
let ticket = new Ticketo;

point.x = 10;
point.draw();

var number = 2;
let count = 2;
let q: number;
var me = "sfe";
let d: any;
let e: string;
var u: any;
let message = 'skc';
let point4 = new Point(1, 2);

let endsWithC = (<string>message).endsWith('c');

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2 };
let backgrounColor = Color.Red;

q = 6

let getDistance = (pointA: Point, pointB: Point) => {}

function doSomething() // this is an out of bounds waiting to hap
{
    var edd = new RecursionTUT();
    for (var i = 0; i < 5; i++) {
        console.log(i);
        edd.Recur(i, doSomething());
        edd.Recur(i, doSomething());
    }
    
    console.log('Finally: ' + i);
    //returns 15*2 times
    // 15 calls = of memory complexity

    //spacial complexity
    // memory used in each function call * max depth
    // it is 30

}

let log = function (message) {
    console.log(message);
}

let doLog = (message) => console.log(message);

let drawPoint = (point: { x: Point, y: Point }) => {}

doSomething();