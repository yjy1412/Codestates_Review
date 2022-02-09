const sudoku = function (board) {
  // TODO: 여기에 코드를 작성합니다.
  // 1. 박스 위치를 알려 줄 map 배열을 만든다.
  const len = board.length;
  const boxes = [
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
  ];

  // 2. 해당 행, 열에 값이 있는 지 여부를 판단할 false map을 만들어준다.
  const blanks = [];
  const rowUsed = [];
  const colUsed = [];
  const boxUsed = [];
  for (let i = 0; i < len; i++) {
    // 해당 위치의 수(num_ 1 ~ 9)에 해당하는 인덱스를 사용했다면, true로 바꿔줘야 하므로 len + 1 해준다.
    rowUsed.push(Array(len + 1).fill(false));
    colUsed.push(Array(len + 1).fill(false));
    boxUsed.push(Array(len + 1).fill(false));
  }

  // 3. board 배열의 정보 참조하여, 앞에서 만든 map 배열에 반영한다.
  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      const num = board[row][col];

      if (num === 0) {
        // 값이 0이라면(현재 값을 모른다면)
        blanks.push([row, col]);
      } else {
        // 값이 있다면, 사용된 값(더 이상 사용할 수 없는 수)으로 처리해라.
        const box = boxes[row][col];
        rowUsed[row][num] = true;
        colUsed[col][num] = true;
        boxUsed[box][num] = true;
      }
    }
  }

  // 4. 해당 위치(행,열)에 사용할 수 있는 수 인지 판단할 함수(isValid)를 만든다.
  const isValid = (row, col, num) => {
    const box = boxes[row][col];
    return !rowUsed[row][num] && !colUsed[col][num] && !boxUsed[box][num];
  }

  // 5. 사용할 수 있는 수라면, 이를 board에 반영하는 함수(toggleNum)을 만든다.
  const toggleNum = (row, col, num) => {
    // board의 해당 위치에 값을 입력한다.
    board[row][col] = num;
    
    // row, col, box의 해당 넘버를 사용한 것으로 수정한다.
    const box = boxes[row][col];
		// 다시 되돌려야 하는 경우가 있기 때문에
    rowUsed[row][num] = !rowUsed[row][num];
    colUsed[col][num] = !colUsed[col][num];
    boxUsed[box][num] = !boxUsed[box][num];
  }

  // 6. board의 0 위치 정보를 담고 있는 blanks 배열을 참조하여, 수도쿠를 완성한다.
  const make_sudoku = (idx, blanks, board) => {
    // 재귀 탈출 조건으로, 만약, 입력받은 인덱스가 blanks의 길이(왜냐하면, 인덱스 + 1을 입력받기 때문에)와 같다면, 종료.
    if (idx === blanks.length) { return true };

    const [row, col] = blanks[idx];
    // 기존 0 값을 갖는 인덱스에 1~9사이의 숫자를 넣어본다.
    for (let num = 1; num <= 9; num++) {
      // 만약, 어떤 수가 유효하다면,
      if (isValid(row, col, num) === true) {
        // 유효한 수를 일단 반영한다.
        toggleNum(row, col, num);
        // 그리고, 다음 0 값을 갖는 인덱스(blanks[idx + 1])로 넘어가 반영한 보드가 계속 유효한지 확인하는 과정을 반복해라.
        if (make_sudoku(idx + 1, blanks, board)) {
          // 결국, 모든 인덱스에서 유효한 값을 찾아 board에 반영했다면, 종료해라.
          return true;
        };
        // blanks의 마지막 요소에 도달하기 전, 결국 유효한 보드를 만들지 못했다면, 원래대로 돌리고, 다음 숫자로 넘어가라.
        toggleNum(row, col, num);
      }
    }
    // 모든 숫자(1~9 사이의)에서 다음 인덱스로 넘어가는 유효한 숫자를 찾지 못했다면, 해당 재귀는 종료해라.
    return false;
  }
  make_sudoku(0, blanks, board);
  return board;
};