import { runInNewContext } from "vm";
import { debug } from "console";
import { kill } from "process";
import { print } from "util";

export class RecursionTUT
{
    e: number;
    constructor()
    {
        let f = [1, 2, 4, 45, 67, 3];
        var e = runInNewContext("Recur()", f); 
    }
    
    public Recur(f,e) {
        let i = 0;
        while (i < 3)
        {
            this.e = f[i] ^ 2;
            i++
            this.constructor()
            print((parseInt(e)));
            
        }
        console.log();
    }
}