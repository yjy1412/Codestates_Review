/*

[ 문 제 ]
수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

[ 입출력 예시 ]
let output1 = powerOfTwo(16);
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false
*/

function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 2의 거듭제곱이다? 2의 배수와 차이점은 뭐지?
  if (num === 1) {
    return true;
  } else if (num % 2 === 0) {
    let x;
    while (num % 2 === 0) {
      num = num / 2;
    }
    if (num === 1) {
      return true;
    } else {
      return false;
    }
  } else return false;
}