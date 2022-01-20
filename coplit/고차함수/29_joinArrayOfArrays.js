/*
[ 문 제 ]
2차원 배열(배열을 요소로 갖는 배열)을 입력받아 배열들의 요소를 모두 담고 있는 단일 배열을 리턴해야 합니다.

[ 입출력 예시 ]
let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
*/

// ! 이중 배열을 단일 배열로 변환시키는 알고리즘
// ! Array.concat 메소드는 서로 다른 배열을 하나의 배열로 합쳐준다.(push와는 작동 방식이 다름)
function joinArrayOfArrays(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 배열요소의 요소를 결과 배열에 담는다.
  const joinedArr = arr.reduce((acc, cur) => {
    return acc.concat(cur);
  })
  return joinedArr;
}