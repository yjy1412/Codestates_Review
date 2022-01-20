/*
[ 문 제 ]
학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴해야 합니다.

1. 남학생들의 정보는 리턴하는 배열에서 제외합니다.
2. 'grades' 속성값은 평균값(number 타입)으로 바꿉니다.

[ 입출력 예시 ]
let studentList = [
  {
    name: 'Anna',
    gender: 'female',
    grades: [4.5, 3.5, 4],
  },
  {
    name: 'Dennis',
    gender: 'male',
    country: 'Germany',
    grades: [5, 1.5, 4],
  },
  {
    name: 'Martha',
    gender: 'female',
    grades: [5, 4, 4, 3],
  },
  {
    name: 'Brock',
    gender: 'male',
    grades: [4, 3, 2],
  },
];

let output = studentReports(studentList);

console.log(output); // -->
[
  { name: 'Anna', gender: 'female', grades: 4 },
  { name: 'Martha', gender: 'female', grades: 4 },
];
*/

function studentReports(students) {
  // TODO: 여기에 코드를 작성합니다.
  const filtered = students.filter(record => {
    return record.gender === 'female';
  });

  return filtered.map(record => {
    const { name, gender, grades } = record;
    const gradesAvg = grades.reduce((acc, cur) => {
      return acc + cur;
    }) / grades.length;

    return { name, gender, grades: gradesAvg }
  })
}