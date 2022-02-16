//const para = document.querySelector('p');
//const para = document.querySelector('.error');
// const para = document.querySelector('body > h1'); //copy selector u browser
// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');
//
// console.log(paras);
// console.log(errors);

//get element by ID
// const title = document.getElementById('page-title');
// console.log(title);

//get elements by class-name
// const errors = document.getElementsByClassName('error');
// console.log(errors);

//get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);


/*
const para = document.querySelector('p');
// para.innerText += " Hello nigga!";

const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// })

const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML += '<h2>THIS IS A NEW H2</h2>'; //dodavanje nov header

const people = ['kiko', 'misko', 'boris'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});*/

/*const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.zamunda.net');
link.innerText = 'Zamunda.net';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green;');*/

/*const title = document.querySelector('h1');
title.style.margin='50px';
title.style.fontSize = '40px'; //manipuliranje so style*/

/*const content = document.querySelector('p');
console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');*/

const paras = document.querySelectorAll('p');
paras.forEach(p => {
    //console.log(p.textContent); //text content > innertext
    if(p.textContent.includes("error"))
    {
        p.classList.add('error');
    }
    else if (p.textContent.includes('success'))
    {
        p.classList.add('success');
    }
});
