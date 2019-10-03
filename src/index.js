
function eval() {
    // Do not use eval!!!
    return;
}

expr = "1 + 2) * 3";

function expressionCalculator(expr) {
    // write your solution here
  let arr=[];
  let number = [];
  let result = 0;
  let arr2 = [];
  let arr3 = []

  brackets(expr);

  function brackets(expr) {
    for(let i=0; i<expr.length; i++) {
      if (expr[i] == ")") {
        arr = expr.split(')');
        if(arr[arr.length-1] == " ") {
          arr.pop();
        }

        for(let i=0; i<arr.length; i++) {


        for (let j= arr[i].length; j>0; j--) {
          if (arr[i][j] == "(") {
            arr2 = arr[i].split('(');

            arr2[1] = plus(arr2[1]);
            arr2 = arr2[0] + arr2[1];
            result = plus(arr2);

          }
        }

        if (arr < 2) {
        for (let j= arr[i].length; j>0; j--) {
          if (arr[i][j] == "(") {
            throw "ExpressionError: Brackets must be paired"
          }
        }
      }
    }
  }
}

       for(let i=0; i<expr.length; i++)
       if (expr[i] == "(") {
        throw "ExpressionError: Brackets must be paired"
      }
      else {
        plus(expr);
      }


      return result;
    }


  function plus(expr) {
    let number = [];
    let arr = expr.split(' + ');
    arr.forEach((element, i) => {
      if (!(isNaN(+element))) {
        number[i] = parseInt(element);
      } else {
        number[i] = minus(element);
        }
    });

    let result = number.reduce((summ, curent) => summ + curent);
    return result;
  }

  function minus(expr) {
    let number = [];
    let arr = expr.split('-');
    arr.forEach((element, i) => {
      if (!(isNaN(+element))) {
        number[i] = parseInt(element);
      } else {
        number[i] = mult(element);
        }
    });
    let result = number.reduce((minus, curent) => minus - curent);
    return result;
  }


  function mult(expr) {
    let number = [];
    let arr = expr.split('*');

    arr.forEach((element, i) => {
    if (!(isNaN(+element))) {
      number[i] = parseInt(element);
    } else {
      number[i] = division(element);
      }
  });

  let result = number.reduce((mult, curent) => mult * curent);
  return result;
}

  function division(expr) {
    let number = [];
    let arr = expr.split('/');

      arr.forEach((element, i) => {
      number[i] = parseInt(element);
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

expressionCalculator(expr)

module.exports = {
    expressionCalculator
}