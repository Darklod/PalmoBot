const op = require('./operators');

var notnot = (exp) => {
  exp = exp.split('');

  var start = 0, count = 1;
  
  for (var i = 0; i < exp.length - 1; i++) {
    if (exp[i] === op.not && exp[i + 1] === op.not)
      count++;
    else {
      if (count % 2 === 0) {
        exp.splice(start, count);
      } else {
        exp.splice(start, count - 1);
      }

      start = i;
      count = 0;
    }
  }

  return exp.join('');
}

module.exports = notnot;