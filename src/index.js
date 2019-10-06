
function eval() {
    // Do not use eval!!!
    return;
}

expr = " (  38 + 52 + 65 - 19  ) * (  72 * 3 / 36 * (  9 / 2 - 17 * 38 / 28  )  ) / 18 / 84 ";
expressionCalculator(expr)

function expressionCalculator(expr) {
    // write your solution here
  let arr=[];
  let number = [];
  let result = 0;
  let arr2 = [];
  let arr3 = 0;


  arr = expr.split('');
  brack(arr);

  //let finish = arr.findIndex(element => element==")");
  //number = arr.splice(0,finish);
  //let start = arr.findIndex(element => element=="(");
  //number = arr.splice(start+1,finish-2);
function brack(arr) {
  if ( arr.find(item => item == "(")) {
    //arr = arr.reverse();
    if ( arr.find(item => item == ")")) {

      let finish = arr.findIndex(element => element==")");
      //number = arr.splice(0,finish);
      let start = arr.findIndex(element => element=="(");
      number = arr.splice(start,finish);
      number.pop();
      number.shift();

      //number = number.join('');

      brack(number);






   // brackets(expr);
      } else {
        throw "ExpressionError: Brackets must be paired";
      }
    } else if ( arr.find(item => item == ")")) {
      throw "ExpressionError: Brackets must be paired";
    } else {
      result = plus(expr);
      return result;
    }
  }

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
           if(arr[0] == " ") {
            arr.shift() }
            if (arr2.length > 2) {
              throw "ExpressionError: Brackets must be paired";
            } else {
            arr2[1] = plus(arr2[1]);
            }
          }
          }
          if (arr[1] != undefined) {
            if ( arr2[1] < 0) {
              if (arr2[0][arr2[0].length-2] == "/" || arr2[0][arr2[0].length-2] == "*") {
              result = mult(arr2[0] + arr2[1]);
              result = plus( result + arr[1]);
            }else {
            result = plus(arr2[0] + arr2[1] + arr[1]);
            }} else {
            result = plus(arr2[0] + arr2[1] + arr[1]);
            }
            break;
          } else {
            result = plus(arr2[0] + arr2[1]);
          }


  }
  return result;
}
    }
    }


  function plus(expr) {
    let number = [];
    let arr = expr.split(' + ');
    arr.forEach((element, i) => {
      if (!(isNaN(+element))) {
        number[i] = (+element);
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
        number[i] = (+element);
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
      number[i] = +element;
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