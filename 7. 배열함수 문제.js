모든 문제에는 다음 배열이 쓰입니다.

let names = [
  "Steven Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

map 문제
모든 이름을 대문자로 바꾸어서 출력하시오.
let upperCaseName =names.map((item)=>item.toUpperCase())
console.log(upperCaseName)

성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
let firstNames = names.map((item)=>item.split(' ')[0])
console.log(firstNames)

이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
let initialOnly = names.map((item) => {
  let splitName = item.split(" ");
  let initial = "";
  splitName.forEach((nameItem) => (initial += nameItem[0]));
  return initial;
})
console.log(initialOnly)


filter 문제
이름에 a를 포함한 사람들을 출력하시오.
let includeA = names.filter((item)=>item.includes('a'))
console.log(includeA)

이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
let doubleLetter =  names.filter((item) => {
  let splitName = item.split("");
  return splitName.some((letter, index) => letter == splitName[index + 1]);
})

console.log(doubleLetter)

some 문제
전체 이름의 길이가 20자 이상인 사람이 있는가?
console.log(names.some((item)=>item.length>=20))


성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
console.log(names.some((item)=>{
  let splitName = item.split(' ')
  splitName.pop()
  return splitName.some(eachName=>eachName.toLocaleLowerCase().includes("p"))
}))


every 문제
모두의 전체 이름의 길이가 20자 이상인가?
console.log(names.every(item=>item.length>=20))


모두의 이름에 a 가 포함되어 있는가?
console.log(names.every(item=>item.includes('a')))


find 문제
전체 이름의 길이가 20자 이상인 사람을 찾으시오.
console.log(names.find(item=>item.length>=20))


미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
console.log(names.find(item=>item.split(' ').length>=3))


findIndex 문제
전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
console.log(names.findIndex(item=>item.length>=20))


미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
console.log(names.findIndex(item=>item.split(' ').length>=3))
