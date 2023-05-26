//객체 초기화 하는 방법
let name = 'noona';
let age = 17;
//let person = {name:name,age:age}
let person ={name,age} //ES6 문법 중에, 자동으로 빠르게 변경해준다.
console.log(person)
let person2 = {nameValue:name,ageValue:age}
console.log(person2)


let bts = {
  name: "방탄소년단",
  num: 7,

}
/* 
let name = bts.name
let num = bts.num
console.log(name, num)  *///방탄소년단, 7이 프린트가 된다.

let {name,num} =bts 
console.log(name, num) //방탄소년단, 7 

let array = [1,2,3]
// let a =array[0]
// let b = array[1]
// let c = array[2]

//객체처럼 하자!라고 해서, 이렇게 진화함
// let [a,b,c] =array;
// console.log(a,b,c) //1,2,3

let[a,...rest] =array
console.log(rest)

let persons = {
  name :'noona',
  age:19,
  cute:true
}
let {name,...rest} =persons
console.log(name,rest)  // noona { age: 19, cute: true } noona만 빠져나옴.


let a =[1,2]
let b= [3,4]
let c= [5,6]

// let result =a.concat(b,c)
// console.log(result) //[ 1, 2, 3, 4, 5, 6 ]

let result = [...a,...b,...c] //a 있는 내용 전부, b에 있는 내용 전부, c에 있는 내용 전부를 들고 와라
console.log(result) //[ 1, 2, 3, 4, 5, 6 ]

//함수 선언 방식

function foo() {
  console.log('hello')
}

let foo = () => {
  console.log("hello")
}
//////////return 생략을 가능케 한다. 
function foo() {
  return "haha"
}

let foo =() => "haha" //return 생략이 가능하다. 함수 안에 문장이 하나면, curly bracket도 생략이 가능하다. 
console.log(foo())

//일반 함수에는 있지만, 화살표 함수에는 this가 없다. 


let ages =17
let persons2 = {
  name :"hege",
  ages:20,
  getInfo: function () {
    //console.log(age) //age를 입력하면, 17이 출력이 된다.
    console.log(this.ages) ////this.age를 써주면, 함수 내부에 있는 age를 가지고 온다. 20이 나옴, 그게 아니고 age만 쓰면, 17이 나옴
  }
}

persons2.getInfo() //전역변수, 지역변수를 구분하기 위해서

//this는 나 자신을 불러준 객체


let ages =17
let persons2 = {
  name :"hege",
  ages:20,
  getInfo: function () {
    console.log(this.ages) //단순하게 this를 쓰면, name: "hege" , age "20", getInfo :[Function]가 나온다.

  // getInfo: () => {
  //   console.log(this.ages) => 화살표 함수는 this를 불러올 수가 없다. 
  }  
}

persons2.getInfo() //라고 검색하면 {name:"hege",age:20,getInfo:[Function]} 으로 출력된다.

//프로그래밍에서 this를 써야되는 상황이 왔으면, 일반함수를 사용해라.