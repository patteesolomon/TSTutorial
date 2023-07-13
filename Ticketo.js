"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticketo = void 0;
class Ticketo {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        id = 0;
        name = '';
    }
    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }
    get Id() {
        return this.id;
    }
    set Id(value) {
        this.id = value;
    }
}
exports.Ticketo = Ticketo;
//# sourceMappingURL=Ticketo.js.map