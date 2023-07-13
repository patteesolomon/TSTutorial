"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    //private x: number;
    //private y: number;
    // the ? allows for no initial values to be
    // set upon object instatiation
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another) {
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0. ');
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0. ');
        this._y = value;
    }
}
exports.Point = Point;
//# sourceMappingURL=point.js.map