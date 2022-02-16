/*function greet()
{
    for(let i=0; i<=10; i++)
    {
        console.log('hello', i);
    }
}
greet();*/
//const name = 'kiko';

/*const speak =function(name = 'boris', time = 'morning')
{
  console.log(`dobar ${time} ${name}`);
};

speak('Kiko');*/

/*const calcArea = function (radius)
{
    var area = 3.14 * radius**2;
    return area;
}*/

//arrow functions

/*const calcArea = (radius) => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is ', area);*/

/*const smetka = function(products, danok)
{
    let total = 0;
    for(let i = 0; i < products.length; i++)
    {
        total += products[i] + products[i] * danok;
    }
    return total;
}*/



// const smetka = (products, danok) =>
// {
//     let total = 0;
//     for(let i = 0; i < products.length; i++)
//     {
//         total += products[i] + products[i] * danok;
//     }
//     return total;
// }
//
// console.log(smetka([10, 15, 30],0.2));
//
// const name = 'kiko';
// const greet = () => 'helo';
//
// let resultOne = greet();
// console.log(resultOne);
//
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

/*const myFunc = (callBackFunc) =>
{
    let value = 50;
    callBackFunc(value);
};

myFunc(value =>
{
    console.log(value);
});*/
const ul = document.querySelector('.people');
const people = ['kiko', 'boris', 'misko', 'maci', 'filip'];
let html = ``;

people.forEach(person => {
//create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;


/*const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);*/

/*people.forEach((person, index) => {
    console.log(person, index);
});*/
