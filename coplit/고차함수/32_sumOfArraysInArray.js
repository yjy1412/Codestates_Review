/*
[ 문 제 ]
2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(number)의 합을 리턴해야 합니다.

[ 입출력 예시 ]
let output = sumOfArraysInArray([
  [1, 2],
  [undefined, 4, '5'],
  [9, 'hello'],
]);
console.log(output); // --> 16
*/

function sumOfArraysInArray(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 1. 2차원 배열을 1차원 배열로 변환
  const convertArr = arr.reduce((acc, cur) => {
    return acc.concat(cur)
  });

  // 2. 요소의 타입이 'number'인 것만 필터링
  const filtered = convertArr.filter(el => {
    return typeof el === 'number';
  });

  // 3. 요소의 합을 리턴
  return filtered.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
}