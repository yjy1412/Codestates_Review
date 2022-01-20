/*
[ 문 제 ]
수(num)와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴해야 합니다.

[ 입출력 예시 ]
let output = drop(2, [1, -2, 1, 3]);
console.log(output); // --> [1, 3]

output = drop(5, [1, -2, 1, 3]);
console.log(output); // --> [ ]
*/

function drop(num, arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0 || num === 0) { return arr };
  
  const tail = arr.slice(1);
  return drop(num - 1, tail);
}