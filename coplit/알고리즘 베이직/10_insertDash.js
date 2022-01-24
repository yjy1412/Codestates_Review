/*
[ 문 제 ]
문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

[ 입출력 예시 ]
let output = insertDash('454793');
console.log(output); // --> 4547-9-3
*/

function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  const strToArr = str.split('');
  return strToArr.reduce((acc, cur, index) => {
    if(cur % 2 === 1 && strToArr[index - 1] % 2 === 1) {
      return acc.concat("-" + cur);
    } else {
      return acc.concat(cur);
    }
  }, "")
}