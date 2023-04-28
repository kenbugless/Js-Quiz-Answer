function makeBurger(type,size,num) {
console.log("매개변수 값은",type)
console.log("빵두기");
console.log("상추두기");
if(num <1) {
    return "버거 개수가 0개 입니다."
}
    if( type =="불고기") {
 console.log("고기패티두기");
    }else if(type =="새우") {
    console.log("새우패티두기")
}
console.log("뚜껑덥기");
console.log(type,"버거",size,"사이즈",num,"개 준비완료")

return "완료되었습니다."
}




function serveCoke() {
console.log("콜라통 선택")
console.log("얼음담기")
console.log("콜라담기")
}

function serveFrenchFries() {
console.log("감튀박스선택");
console.log("감튀담기");
}

let result =makeBurger("새우","L",0);
console.log("버거 프로세스 결과",result)
// serveCoke();

//return을 만나는 순간 함수가 끝나버림, 