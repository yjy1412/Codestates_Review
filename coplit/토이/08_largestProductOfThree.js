const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 1. 양수 중 가장 큰 수 3개를 곱해 값을 저장한다.
  // 음수, 양수를 구분하여 리스트를 만든다.
  const plus = [];
  const minus = [];
  arr.forEach(el => { el >= 0 ? plus.push(el) : minus.push(el) });
  // 각 리스트를 크기 순으로 정렬한다.
  const plusSort = plus.sort((a, b) => b - a);  // 내림차순
  const minusSort = minus.sort((a, b) => a - b);  // 오름차순
  const plusLen = plusSort.length;
  const minusLen = minusSort.length;
  // 2. 최대값을 구하는 3 가지 경우 별 합을 구한다.
  let result = [];
	// 1) 음수 2, 양수 1
  if (minusLen >= 2 && plusLen >= 1) {
    const product = minusSort[0] * minusSort[1] * plusSort[0];
    result.push(product);
  }
	// 2) 양수 3
  if (plusLen >= 3) {
    const product = plusSort[0] * plusSort[1] * plusSort[2];
    result.push(product);
  }
	// 3) 음수 3
  if (plusLen === 0 && minusLen >= 3) {
    const product = minusSort[minusLen - 1] * minusSort[minusLen - 2] * minusSort[minusLen - 3];
    result.push(product);
  }
  // 3. 위 3 경우의 결과 중 큰 수를 리턴한다.
  return Math.max(...result);
};