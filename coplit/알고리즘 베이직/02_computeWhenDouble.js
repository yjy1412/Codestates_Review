/*
[ 문 제 ]
연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.

[ 입출력 예시 ]
let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8
*/

function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  // 원금 = x;
  // 1년 뒤 원금 = x(1 + interestRate/100)
  let year = 0;
  let annualInterestRate = 1 + interestRate / 100;
  let principal = 1;

  while (principal < 2) {
    principal = principal * annualInterestRate;
    year += 1;
  }
  return year;
}