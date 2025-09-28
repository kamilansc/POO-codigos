"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function soma(x, y) {
    return x + y;
    /*
        if (y){
            return x + y
        }
        return x
    */
}
console.log(soma(1, 2));
let resultado = soma(1, 2);
console.log(typeof (resultado)); // 3
console.log(soma(1, "2"), typeof (soma(1, "2"))); // 12
console.log(soma(1), typeof (soma(1))); // NaN
