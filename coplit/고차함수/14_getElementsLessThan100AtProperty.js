/*
[ 문 제 ]
객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 100 보다 작은 요소들만 갖는 배열을 리턴해야 합니다.

[ 입출력 예시 ]
const obj = {
  key: [1000, 20, 50, 500],
};

let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
*/

function lessThan100(number) {
  if (typeof number === "number") {return number < 100}
  else {return false}
}

function getElementsLessThan100AtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  if (Array.isArray(obj[property])) {
    return obj[property].filter(num => {
      return lessThan100(num);
    })
  } else {
    return [];
  }
}

// 변수 number의 타입이 숫자가 아닌 경우, 비교 연산자의 리턴 값은 "true"가 된다.