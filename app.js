'use strict'


/*
let bank = 3; 
let sum = 5; 

const cash = bank + sum;

console.log(cash);


function calculate(cash) { 
  return cash * 2; 
}



console.log(calculate(3));

const fruits = ['apples', 'bananas' ]

fruits[fruits.length] = 'chery';

console.log(fruits);



var drawCats = function (howManyTimes) {
 for (var i = 0; i < howManyTimes; i+= 5) { 
 console.log(i + " =^.^=   =^.^=" + i);
 }
};
drawCats(32);



let string = 'Вот длинная строка camel duck';

console.log(string.slice(2))



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

let nick = 0;

// console.log(nick);

nick = 100;

nick = 'all';

console.log(nick);

var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;

console.log(secondsInAnHour)
*/
/*
let str = 'Hello';
let strTwo = 'world!'; 

// let strAll = str + ',' + ' ' + strTwo + '!';
let strAll = `${str}, ${strTwo}!`
console.log(strAll.length);


let isWeekend = false;
let hadShower = true;
let hasApple = false;

let hasOrange = true;
let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
console.log(shouldGoToSchool);
// console.log(!isWeekend);

let age = 12;

let accompanied = false;

console.log(age >= 12 || accompanied)


var dinosaurs = [ 
 "Тираннозавр", 
 "Велоцираптор", 
 "Стегозавр", 
 "Трицератопс", 
 "Брахиозавр", 
 "Птеранодон", 
 "Апатозавр", 
 "Диплодок", 
 "Компсогнат"
];

console.log(dinosaurs);


dinosaurs[0] = 'Тираннозавр рекс'; 

console.log(dinosaurs);


dinosaurs[3] = 'dog'; 
console.log(dinosaurs);


var dinosaursAndNumbers = [
  3,
  "динозавры",
  ["трицератопс", "стегозавр", 3627.5],
  10];

console.log(dinosaursAndNumbers);
console.log(dinosaursAndNumbers[2]);
console.log(dinosaursAndNumbers[dinosaursAndNumbers.length-1]);



function getArraysSum(arr1, arr2) {
  let result = 0;

  let sumArray = arr1.concat(arr2);
    console.log(sumArray);

  for (const value of sumArray) {
    result += value;
  }
  console.log(result);
  return result;
}

getArraysSum([-7, 64, -89, -63, 5], [9, 39, 5, 32, -11])
getArraysSum([1, 2, 3], [4, 5, 6])

*/
/*
var animals = []; 
animals.push("Кот");

animals.push("Пес");

animals.push("Лама");

console.log(animals);
// animals.length;

animals.push('Мавпа');
console.log(animals);

animals.unshift('1 динозавр')
console.log(animals);


let animalsList = ["Белый медведь", "Мартышка", "Кот", "Пес", "Лама"]; 
// let lastAnimal = animalsList.pop();
// let lastAnimalTwo = animalsList.pop();



console.log(animalsList); 
// console.log(lastAnimal); 
// console.log(lastAnimalTwo); 
console.log(animals.push(123))


console.log(animals.concat(animalsList))

console.log(animals.indexOf('Пес'))
console.log(animals.join('//'))

console.log(animals.pop())
console.log(animals);
console.log(animals.pop())


console.log(Math.floor(Math.random() * 10));
console.log(animals.length);
*/

/*
var dog = {
  name: "Оладушек",
  age: 6,
  color: "белый",
  bark: "Гав тяф тяф!"
};

var cat = {
  name: "Гармония",
  age: 8,
  color: "черепаховый"
};

console.log(Object.keys(dog));
console.log(Object.values(dog));



var owedMoney = {};
owedMoney["Джимми"] = 5;
owedMoney["Анна"] = 7;

console.log(owedMoney["Джимми"]);

owedMoney["Джимми"] += 4;

console.log(owedMoney);



let scores = {
  Ylia: 9,
  Anna: 3,
  Kaban: 6
};


console.log(scores);

scores.Ylia += 4;
scores.Kaban += 3;

console.log(scores);

*/
var myCrazyObject = {
  "name": "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула"
};

console.log(myCrazyObject['some array'][1])



/*
const suspects = {
      'James': ['Jacob', 'Bill', 'Lucas'],
      'Johnny': ['David', 'Kyle', 'Lucas'],
      'Peter': ['Lucy', 'Kyle'],
    };




console.log(suspects['James']);
*/
/*
var name = "Нико";
console.log("Привет, " + name);
if (name.length > 6) {
 console.log("Ну и длиннющее же у вас имя!"); } else {
 console.log("Имя у вас не из длинных.");
}


var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = false;

if (lemonChicken) {
  console.log("Отлично! Я буду курицу с лимоном!");
}
else if (beefWithBlackBean) { 
 console.log("Заказываю говядину.");
} else if (sweetAndSourPork) {
 console.log("Ладно, закажу свинину.");
} else {
 console.log("Что ж, остается рис с яйцом.");
}


let names = 'Andres'; 
names = 'Olena' 
names = 'Victor' 
// names = motherName;
let motherName = 'Olena';
let fatherName = 'Victor';

if (names === 'Andres') {
  console.log('Привіт мені!')
} else if (names === motherName) {
  console.log('Hello, mom!')
} else if (names === fatherName) {
  console.log('Hellod, dad!')
} else {
  console.log('Привіт, незнайомець!');
}





for (let i = 2; i <= 6; i++) {
  if (i === 5) {
    continue;
       }
   console.log(i)
  
}



var sheepCounted = 1;
while (sheepCounted <= 3) {
  console.log("Посчитано овец: " + sheepCounted + "!"); 
 sheepCounted++;
}
console.log("Хрррррррррр-псссс");


let value = 22; 

while (value >= 5) {
  value -= 2;
}
  
console.log(value);


var animals = ["лев", "фламинго", "белый медведь", "удав"];
for (var i = 0; i < animals.length; i++) {
 console.log("В этом зоопарке есть " + animals[i++] + ".")
}


console.log(animals.length)


// for (let i = 3; i < 1000; i *= 3) {
//   console.log(i);
// }

let ch = 3;
while (ch < 100) {
  ch *= 3;
  console.log(ch);
}

*/

let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i] + '- чудова худоба!' )
}


let alphabet = "абвгдеєжзиійклмнопрстуфхцчшщьюя";

// Math.ﬂoor(Math.random() * alphabet.length)

// console.log(Math.ﬂoor(Math.random() * alphabet.length))


let randomString = '';

for (let i = 0; i < 7; i++) {
  // randomString += Math.floor(Math.random(i) * [i]) + alphabet[i]; 
  randomString += alphabet[Math.floor(Math.random() * alphabet.length)]; 
}
console.log(randomString)


let input = 'javascript is awesome';
let output = '';


for (let i = 0; i < input.length; i++) {
  if (input[i] === 'a') {
    output += '4';
  } else if (input[i] === 'e') {
    output += '3'
  } else if (input[i] === 'i') {
    output += '1'
  } else if (input[i] === 'o') {
    output += 'O'
  }
  else {
    output += input[i];
  }
 }

console.log(output);