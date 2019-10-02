
function eval() {
    // Do not use eval!!!
    return;
}

expr = "1 / 0";

function expressionCalculator(expr) {
    // write your solution here
  let arr=[];
  let number = [];
  let result = 0;
/*
  minus(expr);

  function minus(expr) {
    arr = expr.split('-');
    for (let i=0; i<arr.length; i++) {
      if ( arr[i].length < 3) {
       if (i != arr.length - 1 ) {
        arr[i] += " +";
        arr[i+1] = " -" + arr[i+1];
      } else {
        arr[i] = " " + parseInt(arr[i]);
      }
      result = arr.join('');

      result = plus(result);
      break;

    } else {
       number[i] = plus(arr[i]);
       break;
    }
  }

  if (result == Infinity) {
    result = "TypeError: Division by zero.";
    }

    return result;
  }

  function plus(expr) {
    arr = expr.split(' + ');
    arr.forEach((element, i) => {
      if ( element.length < 3) {
        number[i] = parseInt(element);
      } else {
        number[i] = mult(element);
        }
    });

    result = number.reduce((summ, curent) => summ + curent);
    return result;
  }

  function mult(expr) {
    let number = [];
    let arr = expr.split('*');

    arr.forEach((element, i) => {
    if ( element.length < 3) {
      number[i] = parseInt(element);
    } else {
      number[i] = division(element);
      }
  });

  let result = number.reduce((mult, curent) => mult * curent);
  return result;
}
*/

  division(expr);

  function division(expr) {
    let number = [];
    let arr = expr.split('/');

      arr.forEach((element, i) => {
      number[i] = parseInt(element);
    });

    result = number.reduce((division, curent) => division / curent);
    return result;
  }

  if (result == Infinity) {
    throw new TypeError("Division by zero.");
  }

  return result

}

expressionCalculator(expr)

module.exports = {
    expressionCalculator
}