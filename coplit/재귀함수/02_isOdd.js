/*
[ 문 제 ]
수를 입력받아 홀수인지 여부를 리턴해야 합니다.

[ 입출력 예시 ]
let output = isOdd(17);
console.log(output); // --> true

output = isOdd(-8);
console.log(output); // --> false
*/

function isOdd(num) {
  // TODO: 여기에 코드를 작성합니다.
  if ( num === 0 ) {
    return false;
  } else if ( num === 1 ) {
    return true;
  }

  if (num < 0) {
    return isOdd(-num);
  };
  return isOdd(num - 2);
}