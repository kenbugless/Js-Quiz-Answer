let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

//어레이에 마지막 아이템 “Zebra” 제거하기
animals.pop()
// console.log(animals)

// 주어진 어레이에 “Dog” 추가하기
animals.push("Dog")
// console.log(animals)

// 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
animals.push("Mosquito","Mouse","Mule");
// console.log(animals)

// 해당 어레이에는 "Human"이 있는가?
let check= animals.includes("Human")
// console.log(check) //없음, false

// 해당 어레이에는 “Cat” 이 있는가?
let check2 = animals.includes("Cat");
//console.log(check2) 있음, true

// "Red deer"을 "Deer"로 바꾸시오
let deer = animals.indexOf("Red deer")
//console.log(deer) 77이라고 확인
animals[animals.indexOf("Red deer")] ="Deer"
// console.log(animals)

// "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
//기존 어레이에서 제거하라 => splice를 사용하라
//splice(시작점,갯수) => 시작점부터 개수만큼 실제 배열에서 제거한다.
animals.splice(animals.indexOf("Spider"),3)
//console.log(animals)

// "Tiger"이후의 값을 제거하시오
animals.splice(animals.indexOf("Tiger"))
//console.log(animals)

// "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
// slice(시작점, 끝점): 시작점~끝점(미포함) 까지 배열을 복사해서 리턴
let newArr= animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)
console.log(newArr)
