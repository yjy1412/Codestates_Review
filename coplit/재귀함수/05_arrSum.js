/*
[ 문 제 ]
배열을 입력받아 모든 요소의 합을 리턴해야 합니다.

[ 입출력 예시 ]
let output = arrSum([-1, -2, 1, 3]);
console.log(output); // --> 1
*/

function arrSum(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) { return 0; };

  const head = arr[0];
  const tail = arr.slice(1);

  return head + arrSum(tail);
}

// 기록사항
// splice와 slice의 차이 : splice는 원본배열을 변경하고, slice는 새로운 배열을 만든다.