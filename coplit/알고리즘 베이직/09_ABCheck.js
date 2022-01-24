/*
[ 문 제 ]
문자열을 입력받아 문자열 내에 아래 중 하나가 존재하는지 여부를 리턴해야 합니다.
1. 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열
2. 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열


[ 입출력 예시 ]
let output = ABCheck('lane Borrowed');
console.log(output); // --> true
*/

function ABCheck(str) {
  // code goes here
  const regExp1 = new RegExp('a\[\\w\\s\]\{3\}b', 'ig');
  const regExp2 = new RegExp('b\[\\w\\s\]\{3\}a', 'ig');

  if (regExp1.test(str)) {
    return true;
  } else if (regExp2.test(str)) {
    return true;
  } else return false;
}