/*
# 문제42 : 2020년

2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

**제한 조건**
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

let month = + prompt('월을 입력하세요.');
let day = + prompt('일을 입력하세요.');

// 예외처리
const REPLAY_MSG= ' 다시 입력해 주세요';
const month30 = [4, 6, 9, 11];

function 예외처리함수(월, 일){
    if(월 > 12){
        month = + prompt('해당 달은 실제로 없는 날입니다.' + REPLAY_MSG);
    }else if(일 > 31){
        day = + prompt('해당 일자는 실제로 없는 날입니다.' + REPLAY_MSG);
    }else if(월===2 && 일 > 29){
        day = + prompt('2월은 29일까지 있습니다.' + REPLAY_MSG);
    }else if(month30.includes(월) && 일 > 30 ){
        day = + prompt(월+'월은 30일까지 있습니다.' + REPLAY_MSG);
    }else{
        return month,day;
    }
    return 예외처리함수(month, day);
}

// 요일을 구하는 함수
function 요일함수(month, day){
    const 요일리스트 = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const 날짜  = new Date(`2020-${month}-${day}`).getDay();
    console.log(요일리스트[날짜]);
}

예외처리함수(month,day);
요일함수(month, day);




/*
답안지

const month = prompt('월을 입력하세요.');
const date = prompt('일을 입력하세요.');

function solution(a,b){
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    const x = new Date('2020-'+a+'-'+b);
    return day[x.getDay()];
}
console.log(solution(month, date));
*/