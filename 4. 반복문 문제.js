문제 1
1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.

let number =0
for(let i=1;i<=100;i++) {
    number = i+number
}
console.log(number)

문제 2
1부터 100까지 홀수만 출력하자.

for(let i=1;i<=100;i++) {
   if(i%2==1) {
    console.log(i)
   }
}

문제 2.2
1부터 100까지 홀수의 합을 구해라.

let odd =0;
for(let i=1;i<=100;i++) {
    if(i%2==1) {
        odd=odd+i;
    }
}

문제 3
1부터 50까지 369결과를 프린트하자.

1
2
짝 
4
5 
짝
...생략 

28 
짝
짝 
짝
짝 
짝짝 

for(let i=1;i<=50;i++) {
    if(i)
}


문제 4
주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.

