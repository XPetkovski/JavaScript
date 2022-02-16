console.log('control flow vezbi');

//for loops
let i = 0;
for(i = 0; i < 5; i++)
{
    console.log('in loop:', i);
}
console.log('loop finished');

const names = ['kiko', 'boris', 'misko'];

for(let i = 0; i<names.length; i++)
{
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//while loop

/*let y = 0;
while (y<=5)
{
    console.log('in loop: ', y);
    y++;
}*/

/*
while(i<names.length)
{
    console.log(names[i]);
    i++;
}*/

//if statements

const age = 20;
if(age > 20)
{
    console.log('you are over 20');
}
else
    console.log('you are under 21');

const thieves = ['makoto', 'morgana', 'yukiko'];

if(thieves.length > 2)
{
    console.log('thats a lot of ninjas');
}

//switch statement

const grade = 'A';
switch (grade)
{
    case 'A':
    console.log('You got an A');
    break;
    case 'B':
    console.log('You got an B');
    break;
    case 'C':
    console.log('You got an C');
    break;
    case 'D':
    console.log('You got an D');
    break;
    case 'E':
    console.log('You got an E');
    break;
    default:
        console.log('not a valid grade');
}

const godini = 30;

if(true)
{
    const godini = 40;
    const name = 'gojdo';
    console.log('inside 1st block: ', godini,name);

    if(true) {
        const godini = 50;
        console.log('inside 2nd block: ', godini);
        var test = 'hello';
    }
}

console.log('outside block: ', godini, name, test);
