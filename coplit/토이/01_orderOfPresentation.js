function orderOfPresentation(N, K) {
  // TODO: 여기에 코드를 작성합니다.
  // 1. 팩토리얼 계산을 위한 내부 함수(factorial)를 만든다.
  const factorial = (num) => {
  	if (num <= 1) { return 1 };
    return num * factorial(num - 1);
  }
  // 1. 탐색 여부를 저장할 배열을 만든다.
  const isUsed = new Array(N + 1).fill(false);
  let result = 0;
  // 2. K배열을 조회하며, 그 이전까지 올 수 있는 순열의 경우를 계산한다.
  for (let i = 0; i < K.length; i++) {
    const team = K[i];
    isUsed[team] = true;
    const teamCnt = isUsed.slice(1, team).filter(el => el === false).length;
    // console.log(teamCnt)
    const caseCnt = teamCnt * factorial(N - (i + 1));
    result += caseCnt;
  }
  return result;
}