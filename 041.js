/*
# 문제41 : 소수판별

숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/

// 내 풀이
const num = + prompt('숫자를 입력하세요.');

function 에라토스테네스의체(num) {
    const arrNum = new Array(num).fill(1).map((value, index)=>value+index);
    
    arrNum.shift();
    let 길이 = arrNum.length;
    let 범위 = (num > 121)? 12:arrNum.length;
    
    for (let j = 2; j < 범위; j++) {
        for (let i = 0; i < 길이; i++) {
            if(arrNum[i] != j && arrNum[i] % j == 0){
                arrNum.splice(i,1);
            }        
        }
        길이 =arrNum.length;
    }

    if(arrNum.includes(num)){
        console.log('YES');
    }else{
        console.log('NO');
    }    
}

에라토스테네스의체(num);


/*
답안지
const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
for (let i=2; i<num; i++) {
    const result = num % i;
    if (result === 0) {
        console.log('NO');
        return false;
    }
}
if (num === 1) {
    console.log('NO');
    return;
}
    console.log('YES');
}

check_prime(num);

*/
