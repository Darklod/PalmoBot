const op = require('./operators');

var evaluate = (exp) => {
    console.log('exp: ', exp + " - length:" + exp.length);

    switch (exp.length) {
        case 1:
            return exp;                                       // se è un carattere ritornalo 
        case 2:
            if (exp[0] === op.not){
                return !(exp[1] * 1) * 1;                     // se sono due caratteri fai la not 
            } else {
                console.log('err:  operator error 1');
            }
            break;                        
        default:                                              // se sono di più calcola l'operazione binaria
            for (var o in op) {
                if (op[o] === op.not) continue;

                if (exp.indexOf(op[o]) !== -1) {
                    var arr = exp.split(op[o]);

                    var a = parseInt(arr[0]);
                    var b = parseInt(arr[1]);

                    console.log("a:" + a);
                    console.log("b:" + b);
                    
                    switch (op[o]) {
                        case op.and:
                            result = a & b;
                            break;
                        case op.or:
                            result = a | b; 
                            break;
                        case op.implication:
                            result = !a | b; 
                            break;
                        default:
                            console.log('err:  operator error 2', op[o]);
                    }
                    
                    if (exp.length) result += exp.substring(3);
                    
                    return result;
                }
            }
            break;      
    }

    return exp;
}

module.exports = evaluate;