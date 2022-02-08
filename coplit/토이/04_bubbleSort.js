const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 0) return [];

  const sort = (arr) => {
    // 초기 설정을 매번 함수가 실행될 때마다 초기화 시키기 위해 블록 안에 들어옴.
    let right = arr[0];
    let isChanged = false; // 재귀 베이스 조건
    const result = [];

    arr.forEach((el, idx) => {
      // 1. 현재 요소가 전 인덱스와 바뀌었는지 검사하고,
      // 2. 바뀌었다면, 바뀐 값으로 다음 인덱스와 비교하고,
      // 3. 다음 인덱스보다 작으면, 현재 값(val)을 result에 푸쉬해주고, right 값을 다음 인덱스 값으로 변경
      // 4. 다음 인덱스보다 크면, 다음 인덱스를 result에 푸쉬하고, right 값은 유지

      const val = el === right ? el : right;
      if (el !== right) { isChanged = true; };
      if (idx === arr.length - 1) { result.push(val) }
      else {
        const next = arr[idx + 1];
        if (val <= next) {
          result.push(val);
          right = next;
        } else {
          result.push(next);
        }
      }
    })
    // 바뀐것이 없다면 그때의 결과를 리턴함.
    if (!isChanged) { return result; };
    // 바뀐 결과를 다시 사용하기 위해 재귀함.
    return sort(result);
  }
  return sort(arr);
};