/*
[ 문 제 ]
함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴해야 합니다.

[ 입출력 예시 ]
function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

function mul3(num) {
  return num * 3;
}

function isOdd(num) {
  return num % 2 !== 0;
}

let output = pipe(add5, square);
console.log(output(4)); // --> 81

output = pipe(square, add5, mul3);
console.log(output(4)); // --> 63

output = pipe(square, mul3, add5, add5, isOdd);
console.log(output(4)); // --> false
*/

// ! Spread syntax(전개 연산자)

function pipe(...args) {
  return (num) => {
    if (args.length === 0) {
      return;
    } else {
      let result = args[0](num);
      for (let i = 1; i < args.length; i++) {
        result = args[i](result);
      }
      return result;
    }
  }
}