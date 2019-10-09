
function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
  let arr=[];
  let result = 0;
  let start = 0;

  arr = expr.split('');
  bracket(arr);


function bracket(arr) {
  if ( arr.find(item => item == "(")) {
    if ( arr.find(item => item == ")")) {
      let finish = arr.findIndex(element => element==")");
      for (let i = finish; i>0; i--){ if (arr[i] == "(") {start = i; break;}}
      arr = arr.splice(start,(finish-(start-1)));
      arr.pop();
      arr.shift();

      inside(arr);

      } else {
        throw "ExpressionError: Brackets must be paired";
      }
    } else if ( arr.find(item => item == ")")) {
      throw "ExpressionError: Brackets must be paired";
    } else {
    arr.forEach((item,i,arr) =>
    {if (item == "-") {
      arr[i] = " " + item + " ";}
    })

      arr = arr.join('');
      result = plus(arr);

      return result;
    }
  }

  function inside(expr) {
    expr = expr.join('');
    result = plus(expr);
    arr.splice(start, 0, result);

    bracket(arr);
  }

  function plus(expr) {
    let arr = expr.split(' + ');

    let number = [];
    arr.forEach((element, i) => {
      if (!(isNaN(+element))) {
        number[i] = (+element);
      } else {
        number[i] = minus(element);
        }
    });

    let result = number.reduce((result, curent) => result + curent);
    return result;
  }

  function minus(expr) {
    let arr = expr.split(' - ');

    let number = [];
    arr.forEach((element, i) => {
      if (!(isNaN(+element))) {
        number[i] = (+element);
      } else {
        number[i] = mult(element);
        }
    });

    let result = number.reduce((result, curent) => result - curent);
    return result;
  }


  function mult(expr) {
    let arr = expr.split('*');
    let number = [];

    arr.forEach((element, i) => {
    if (!(isNaN(+element))) {
      number[i] = +element;
    } else {
      number[i] = division(element);
      }
  });

  let result = number.reduce((result, curent) => result * curent);
  return result;
}

  function division(expr) {
    let arr = expr.split('/');
    let number = [];

    arr.forEach((element, i) => {
    number[i] = +element;
    });

    let result = number.reduce(
    function(division, curent) {
      if (curent == 0) throw "TypeError: Division by zero."
    return division / curent;
    });

    return result;
  }

  return result;
}

module.exports = {
    expressionCalculator
}