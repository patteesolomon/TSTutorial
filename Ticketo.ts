export class Ticketo
{
    constructor(private name?: string, private id?: number)
    {
        id = 0;
        name = '';
    }

    get Name()
    {
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