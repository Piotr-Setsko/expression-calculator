
function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
  let arr=[];
  let number = [];
  let result = 0;

  plus(expr);

  function plus(expr) {
    arr = expr.split(' + ');
    arr.forEach((element, i) => {
      if (!(isNaN(+element))) {
        number[i] = parseInt(element);
      } else {
        number[i] = minus(element);
        }
    });

    result = number.reduce((summ, curent) => summ + curent);
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

//expressionCalculator(expr)

module.exports = {
    expressionCalculator
}