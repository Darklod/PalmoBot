const subExp = require('./subexpression');
const notnot = require('./notnot');
const evaluate = require('./evaluate');

var calculate = (exp) => {

  console.log('initial exp: ', exp + "\n");

  exp = notnot(exp);

  while (exp != 0 && exp != 1) {      // fino a quando non ottengo un valore booleano
    var sub = subExp(exp);            // prendo l'espressione dentro le tonde più interne

    var value = evaluate(sub.value);  // valuta expressione

    exp = exp.slice(0, sub.start)
        + value
        + exp.slice(sub.end);         // rimpiazzia l'espressione con la valutazione (0|1)

    console.log('res: ', exp + "\n");
    console.log('-------------------------');
  }

  console.log('final result: ', exp);

  return exp;
}

module.exports = { calculate };
