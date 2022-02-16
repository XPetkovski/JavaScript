'use strict';

console.log('Hello world');
console.log('Wazzaaaaaa');

let email = 'kikopetko@gmail.com';

let age = 25;
let year = 2022;
console.log(age,year);

age = 30;
console.log(age);

const points = 100;
console.log(points);

var score = '75';
console.log(score);

//konkatenacija

let datum = age + ' ' + year;
console.log(datum);
//zimanje eden karakter
console.log(datum[3])

//dolzina na string
let name = 'kiko';
let surname = 'petkovski';
let fullname = name + ' ' + surname;
console.log(fullname.length);

//metodi
console.log(fullname.toUpperCase());

let ime_mali_bukvi = fullname.toLowerCase();
console.log(ime_mali_bukvi);
console.log(fullname, ime_mali_bukvi);

let index = email.indexOf('@');
console.log(index);

alert('Hello World');

//string methods

let result = email.lastIndexOf('k');
console.log(result);

let slice_word = email.slice(0, 4); //substring - raboti kako vo posgresql (alternativa za slice)
console.log(slice_word);

let print = `ovoj ${email} pripagja na ${fullname}`;
console.log(print);

let html = `
    <h2>${email}</h2>
    <p>Belongs to: ${fullname}</p>
    <span>This blog is called ${name}blog</span>
`;

console.log(html);

// array syntax

let thieves = ['ann', 'ryuji', 'makoto'];
console.log(thieves);
let zapirka_thieves = thieves.join(',');
console.log(zapirka_thieves);

let bool_result = email.includes('!');
let names_result = thieves.includes('ryuji');
console.log(names_result);
console.log(bool_result);

score = Number(score);
console.log(score + 1);