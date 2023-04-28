// let menu =1;

// if(menu =1) {
//     console.log("물건 사기")
// }else if(menu =2) {
//     console.log("잔고확인")
// }else if(menu=3) {
//     console.log("히스토리확인")
// }else {
//     console.log("홈으로 돌아가기")
// }

// let menu =5;
// switch(menu /* 확인하고 싶은 것 */) {
//     case 1 :
//         console.log("물건 사기")
//         break;
//     case 2: 
//         console.log("잔고 확인")
//         break;
//     case 3:
//         console.log("히스토리 확인") 
//         break;
//     default :
//         console.log("홈으로 돌아가기")               
// }

//switch문이 좀 제한적으로 사용된다. cas가 값 1로 딱 떨어지는 경우에만 사용이 된다. 
//ex if(menu>=1 && menu <=4) 
//case는 이 경우, 2,3일텐데. 
//switch(menu) {
//     case: 2
//     case: 3
// } 이런식으로 상세하게 적어줘야 된다.


// let menu =8;
// if(menu <=3) {
//     console.log("범위안에 숫자입니다.")
// } else {
//     console.log("범위 밖의 숫자입니다.")
// }

//삼항 연산식 쓰는 법 (조건 ? true : false)
// let answer = menu<=3 ? true : false;
let menu =2;
let answer = menu <=3 ?"범위 안에 숫자입니다." :"범위 밖에 숫자입니다."
console.log(answer)