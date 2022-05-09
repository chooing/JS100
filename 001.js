// 문제1 : 배열의 삭제
// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
const nums = [100, 200, 300, 400, 500];

// 내 풀이
const answer =nums.filter(x => x!==400 && x!==500);

// 답안지
// nums.pop();
// nums.pop();