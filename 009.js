// 문제9 : concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.   ==>  출력 2019/04/26 11:34:27
const year = '2019';
const month = '04';
const day = '26';
const hour = '11';
const minute = '34';
const second = '27';

// 내 풀이
let result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);


// 답안지
//concat() 메서드는 매개변수로 전달된 문자열을 메서드를 호출한 문자열에 붙여 새로운 문자열로 반환합니다.
// var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

