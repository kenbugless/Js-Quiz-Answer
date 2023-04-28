/* 문제 1
1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.

let number =0
for(let i=1;i<=100;i++) {
    number = i+number
}
console.log(number)
 */

/* 문제 2
1부터 100까지 홀수만 출력하자.

for(let i=1;i<=100;i++) {
   if(i%2==1) {
    console.log(i)
   }
} */

/* 문제 2.2
1부터 100까지 홀수의 합을 구해라.
 */

/* let number =0;
for(let i=1 ;i<=100;i++) {
    if(i%2==1) {
        number=number+i;
    }
}
console.log(number) 
 */


// 문제 3
// 1부터 50까지 369결과를 프린트하자.


// 1
// 2
// 짝 
// 4
// 5 
// 짝
// ...생략 

// 28 
// 짝
// 짝 
// 짝
// 짝 
// 짝짝 

for(let i =1;i<=50;i++) {
    let stringValue = i.toString(); /* 숫자를 문자를 분리를 해줄 것임. i.toString()에 의미는 숫자를 문자로 바꾸겠다. 39-> 3이랑 9로 인식한다. */
    let result ="";
    for(let j=0;j<=stringValue.length;j++) {
        if(stringValue[j]=="3" ||stringValue[j]=="6"|| stringValue[j]=="9") {
            result =result +짝;
        } 
    }
    console.log(result.length>0?result:i)
    }





// 문제 4
// 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
//소수는 1과 자기 자신을 제외한 모든 자연수로 나누어보면서, 나누어 떨어지는 지 확인해봐야 한다. 
// let num =12;
// let isPrime =true;

// if(num === 1) {
//     isPrime ==false;
// }
// for(let i=2 ;i <=13;i++) {
//     if(num%i==0) {
//         isPrime =false;
//     }
// }
// console.log(isPrime)

