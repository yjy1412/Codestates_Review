function createMatrix(edges) {
	// TODO: 여기에 코드를 작성합니다.
  // 1. 그래프(인접 행렬)를 만든다.
  const maxVertex = edges.reduce((acc, cur) => {
    const fromVertex = cur[0];
    const toVertex = cur[1];

    const max = Math.max(fromVertex, toVertex);
    if (acc < max) {
      return max;
    } else return acc;
  }, 0)
  console.log(maxVertex);

  const matrixLen = maxVertex + 1;
  const matrix = new Array(matrixLen).fill(null).map(() => Array(matrixLen).fill(0))
  console.log(matrix);

  // 2. 간선 정보를 탐색하여, 이를 그래프에 반영한다.
  for (let i = 0; i < edges.length; i ++) {
    const edge = edges[i];
    const fromVertex = edge[0];
    const toVertex = edge[1];
    if (edge[2] === 'directed') {
      // 2-1. 방향 간선일 경우
      matrix[fromVertex].splice(toVertex, 1, 1);
    } else if (edge[2] === 'undirected') {
      // 2-2. 무향 간선일 경우
      matrix[fromVertex].splice(toVertex, 1, 1);
      matrix[toVertex].splice(fromVertex, 1, 1);
    }
  }
  return matrix;
}