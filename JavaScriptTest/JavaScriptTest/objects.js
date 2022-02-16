// object literals
/*const blogs = [
    { title: 'Metal i Gitari', Likes: 69 },
    { title: 'Igri i Cyberpunk', Likes: 420 }
]*/


let user = {
    name: 'Hristijan',
    surname: 'Petkovski',
    age: 21,
    email: 'kikopetko@gmail.com',
    location: 'Skopje',
    blogs: [
        { title: 'Metal i Gitari', Likes: 69 },
        { title: 'Igri i Cyberpunk', Likes: 420 }],
    login: function() {
        console.log('the user logged in');
    },
    logout: function (){
        console.log('user logged out');
    },
    logblogs(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog=>{
            console.log(blog.title + ' -', blog.Likes + ' Likes');
        })
    }
};

/*console.log(user);
console.log(user.name);

//user.age = 22;
console.log(user.age);
console.log(user['name']);
console.log(typeof user);
user.login();
user.logout();*/

 user.logblogs();
 console.log(this);


//Math object

//console.log(Math);

//RNG

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

//primitive values

/*let scoreOne = 50;
let scoreTwo = scoreOne;

//console.log(`scoreOdsane: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOdsane: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);*/

//reference values

userOne = { name: 'kiko', age: 21 };
userTwo = userOne;
//console.log(userOne, userTwo);

userOne.age = 22;
console.log(userOne, userTwo);

