// 문제 1
// 유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오
let userValue = 1;
if(userValue <0) {
    console.log("음성")
}else if(userValue >0) {
    console.log("양성")
}else if(userValue =0) {
    console.log("0입니다.")
}

// 문제 2
// 나는 대학교 교수다. 레포트 점수에따라 등급을 매기는 프로그램을 만드시오
// 90~100 : A
// 80~89 : B
// 70~79 : C
// 60~69 : D
// less than 59 : F

let studentGrade = 84;
if(studentGrade >= 90 && studentGrade <= 100) {
    console.log("A");
} else if(studentGrade >= 80 && studentGrade < 90) {
    console.log("B");
} else if(studentGrade >= 70 && studentGrade < 80) {
    console.log("C");
} else if(studentGrade >= 60 && studentGrade < 70) {
    console.log("D");
} else {
    console.log("F");
}


// 문제 3
// 한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다
// let skills = ["HTML","CSS","Javascript","React"]
// Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

// input : let skills = ["HTML","CSS","Javascript","React"]
// output: 합격 

// input:let skills = ["HTML","CSS","Javascript"] 
// output: 예비 

// input:let skills = ["HTML","CSS"] 
// output: 탈락

let skills =["HTML","CSS"]

if(skills.includes("Javascript")&&skills.includes("React")) {
    console.log("합격")
}else if(skills.includes("Javascript")||skills.includes("React")) {
    console.log("에비")
}else if(!skills.includes("Javascript")&&!skills.includes("React")) {
    console.log("탈락")
}