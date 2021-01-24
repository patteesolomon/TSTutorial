export class Point
{
    //private x: number;
    //private y: number;

    // the ? allows for no initial values to be
    // set upon object instatiation
    constructor(private _x?: number, private _y?: number)
    {
    }

    public draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getDistance(another: Point) {

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
