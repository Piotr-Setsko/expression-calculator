function eval() {
    // Do not use eval!!!
    return;
}

expr = " 64 + 19 - 77 - 93 ";

function expressionCalculator(expr) {
    // write your solution here
  let arr=[];
  let number = [];
  let result = 0;

  minus(expr);

  function minus(expr) {
    arr = expr.split(' - ');
    for(let i = 0; i < arr.length; i++) {
      if (i != arr.length - 1 ) {
        arr[i] += " +";
        arr[i+1] = " -" + arr[i+1];
      } else {
        arr[i] = " " + parseInt(arr[i]);
      }
    }
    result = arr.join('');

    plus(result);
  }

  function plus(expr) {
    arr = expr.split(' + ');
    arr.forEach((element, i) => {
      if ( element.length > 3) {
        number[i] = mult(element);
      } else {
        number[i] = parseInt(element);
        }
    });

    result = number.reduce((summ, curent) => summ + curent);
  }

  function mult(expr) {
    let number = [];
    let arr = expr.split(' * ');

    arr.forEach((element, i) => {
    if ( element.length > 3) {
      number[i] = division(element);
    } else {
      number[i] = parseInt(element);
      }
  });

  let result = number.reduce((mult, curent) => mult * curent);
  return result;
}

  function division(expr) {
    let number = [];
    let arr = expr.split(' / ');

      arr.forEach((element, i) => {
      number[i] = parseInt(element);
    });

    let result = number.reduce((division, curent) => division / curent);
    if (result == Infinity) {
    result =  "TypeError: Division by zero.";

    }

    return result;
  }

  return result
}

expressionCalculator(expr)

module.exports = {
    expressionCalculator
}