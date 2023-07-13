"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecursionTUT = void 0;
const vm_1 = require("vm");
const util_1 = require("util");
class RecursionTUT {
    constructor() {
        let f = [1, 2, 4, 45, 67, 3];
        var e = vm_1.runInNewContext("Recur()", f);
    }
    Recur(f, e) {
        let i;
        while (i < 3) {
            this.e = f[i] ^ 2;
            i++;
            this.constructor();
            util_1.print((parseInt(e)));
        }
        console.log();
    }
}
exports.RecursionTUT = RecursionTUT;
//# sourceMappingURL=RecursionTUT.js.map