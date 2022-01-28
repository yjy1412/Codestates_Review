function getDirections(matrix, from, to) {
  // TODO: 여기에 코드를 작성합니다.

  if (!matrix[from] || !matrix[to]) {
    return false;
  } else {
    if (matrix[from][to] === 1) {
      return true;
    } else {
      for (let i = 0; i < matrix[from].length; i ++) {
        if (matrix[from][i] === 1) {
          const notArrived = matrix.map(vertex => {
            vertex[from] = 0;
            return vertex;
          })
          /* console.log(matrix); */
          console.log(i, notArrived);
          if (getDirections(notArrived, i, to)) {
          	return true;
          }
        }
      }
    }
  }
  return false;
}