var subExp = (exp) => {
  if (exp.indexOf(')') === -1 || exp.indexOf('(') === -1) {   // se non trova le tonde ritorna
    return {
      start: 0,
      end: exp.length,
      value: exp
    }
  }

  exp = exp.split('')
  
  var last = 0, i = 0;
  
  while (exp[i] !== ')') {                        // fino a quando non trovo una ')'
    if (exp[i] === '(') {                         
      last = i;                                   // mi salvo la posizione dell'ultima '('
    }
    i++;
  }

  return {                                        // ritorno un oggetto con inizio e fine della sottostringa
    start: last,                                  // con parentesi comprese e il valore dentro le tonde
    end: i + 1,
    value: exp.join('').substring(last + 1, i)
  };
}

module.exports = subExp;
