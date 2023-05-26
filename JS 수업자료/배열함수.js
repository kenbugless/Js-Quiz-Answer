let names = ["Steven Paul Jobs",
"Bill Gates",
"Mart Elliot Zuckerberg",
"Elon Musk",
"Jeff Bezos",
"Warren Edward Buffett",
"Larry Page",
"Larry Ellison",
"Tim Cook",
"Lloyd Blankfein"
]

//
for(let i=0;i<=names.length;i++) {
  console.log(names[i])
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function printName(item) {
  console.log(item)
}

names.forEach(printName) 
//forEach(함수)를 받는다.
//모든 배열함수가 함수를 매개변수로 받는다. forEach(함수명)
//printName(item) item일 필요는 없지만, 그냥 item이라고 적어준거임
//printName이 다른 데 쓰이지 않는 것으로 확인이 됨으로, 
names.forEach(function (item) {
  console.log(item)
}) //이 방법도 가능

names.forEach((item)=>{console.log(item)}) //이 방법도 가능
names.forEach((item,index)=>{console.log(item,index)}); // index도 사용이 가능하다.

let data =names.map((item)=>{
  return item
})
console.log(data) //map은 [] 배열이 들어가 있다. map은 반드시 array를 return 한다. 
//map 같은 경우에는 반환값이 있으므로, 반드시 return을 해줘야 한다. 


//map은 주로, 한가자만 프린트 하고 싶을때
let ceoList = [
  {name:"Larry Page", age:23, ceo:true},
  {name:"Tim Cook", age:40, ceo:true},
  {name:"Elon Musk",age:55,ceo:false}
]

let data2 =ceoList.map((item)=>{
  return item.name
})

console.log(data2)


//filter는 똑같은데, 
let ceoList = [
  {name:"Larry Page", age:23, ceo:true},
  {name:"Tim Cook", age:40, ceo:true},
  {name:"Elon Musk",age:55,ceo:false}
]

let data3 =ceoList.filter((item)=>{
  return item.age ===23; //filter는 true,false로 떨어지는 경우만 
})

console.log(data3)



let data4 = names.filter((item)=>{
  return item.startsWith("L")  //L로 시작하는 단어만 나오게 된다. filter는 true로 떨어지는 값이 있으면, 다 나오게 함.
})
console.log(data4) 

let data5 = names.some((item)=>{
  return item.startsWith("L")
})
console.log(data5) //하나라도 있으면, true라고 나옴 , 없으면 false

let data6 = names.every((item)=>{
  return item.startsWith("L")
})
console.log(data6) //모든 이름이 L로 시작해? => 조건은 무조건 모두여야 함. true, false를 반환함


let data7 =  names.find((item)=>{
  return item.startsWith("L")
})
console.log(data6) //Larry Page가 나옴.

//filter와 find 차이는, 
//filter는 []이고, find는 string 타입임. filter는 조건에 해당하는 것 모두 반환함. find는 첫번 째 찾은 한개만 반환함.  

let data8= names.findIndex((item)=>{
  return item ==="Larry Page"
})
console.log(data8) //인덱스 번호를 찾아준다.