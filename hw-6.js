// Задание 1
for (let i = 0; i<2;i++) {
    console.log('Привет!');
}

// Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4
const obj={
    Коля:'200',
    Вася:'300',
    Петя:'400'
}
for (const key in obj) {
    console.log(`${key} - зарплата ${obj[key] } долларов`);
}

// Задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
   n /= 2;
   console.log(n);
   num++;
}
console.log(`Колличество циклов ${num}`);

// Задание 6
let dayFriday = 2;
let allDay = 31;
for (let i = dayFriday; i <= allDay; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}

// Дополнительное задание 1
let k = 100;
let iterations = 0;
while (k >= 0){
    k -=7;
    console.log(k);
    iterations++;
}
console.log(`Колличество циклов ${iterations}`);

// Дополнительное задание 2
const months =[
    'January',
    'February',
    'March',
    'Apri',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

for (const key in months) {
    console.log(`${key} - ${months[key] }`);
}





// Дополнительное задание 3
const book = {
    bookName: 'Name',
    bookAuthor: 'Author',
    bookPublication: 'Age Publication',
    bookGenre: 'Genre'
}
for (const key in book) {
    console.log(`${key}: ${book[key] }`);
}

// Дополнительное задание 4
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= 1; ++i) {
   console.log(i);
    
}