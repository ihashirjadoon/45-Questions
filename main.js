"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
// exercise 1
// Installation of tools
// exercise 2 Printing a simple hello message
/*var p_name: string = "\nJohn";
console.log(`Hello ${p_name}! Hope you are doing well`);

// exercise 3 Making name upper and lower case by functions

console.log(p_name.toLowerCase());
console.log(p_name.toUpperCase());

// exercise 4 writing a quote
var quote: string = ('\nImran Khan once said, "You only lose when you giveup!"');
console.log(quote);

// exercise 5 storing name in a variable

var famout_person: string = 'Imran Khan'
var quote: string = (`${famout_person} once said, "You only lose when you giveup"`);
console.log(quote);

// exercise 6 using trim(); function to remove whitespaces

var person_name: string = '      \n\t   Hashir Khan         \n\t   ';
console.log(person_name);

console.log(person_name.trim());

//ecercise 7 and 8  Arithematic operations which prints 8

var add = 4 + 4;
var sub = 12 - 4;
var multi = 4 * 2;
var div  = 16 / 2

console.log(`\nAddition:${add}`);
console.log(`Subtraction:${sub}`);
console.log(`Multiplication:${multi}`);
console.log(`Division:${div}`);

// exercise 9 storing my favorite number in a variable and then printing it

var fav_num =  7;
console.log(`\nMy favorite number is ${fav_num}`);

// exercise 10

// This program is written by Hashir Khan
// This program does arithmatic operations and prints 8


var add = 4 + 4;
var sub = 12 - 4;
var multi = 4 * 2;
var div  = 16 / 2

console.log(`\nAddition:${add}`);
console.log(`Subtraction:${sub}`);
console.log(`Multiplication:${multi}`);
console.log(`Division:${div}`);

// This program is written by Hashir Khan
// This program uses trim(); function and removes white spaces from the string

var person_name: string = '      \n\t   Hashir Khan         \n\t   ';
console.log(person_name);

console.log(person_name.trim());
console.log( `\n`);

// exercise 11  storing multiple names in an array

var f_names = ['Hashir','Hassaan','Hammad','Qaeed' ];

for(let i = 0; i<f_names.length; i++){
    console.log(f_names[i])
}
console.log(`\n`)

// exercise 12 Printing a message for friends

for(let i = 0; i<f_names.length;i++){
    console.log(`Hello ${f_names[i]}, Hope you're doing well`)
}

console.log(`\n`)


// exercise 14 Making a invition message

var inv_prople = ["Juanid Khan", "Sajid Amazai", "Saifullah", "Syed Irfan"];
for (let i = 0; i < inv_prople.length; i++) {
  console.log(
    `Hey ${inv_prople[i]}, I'd like to invite you to a dinner on 8th July 8:00pm. Let me know if you up!`
  );
}
console.log(`\n`);

// exercise 15 Replacing a guest

var guest_cant_make = inv_prople.indexOf("Saifullah");

if (guest_cant_make !== -1) {
  inv_prople[guest_cant_make] = "Umair Khan ";

  for (let i = 0; i < inv_prople.length; i++) {
    console.log(
      `Hey ${inv_prople[i]}, I'd like to invite you to a dinner on 8th July 8:00pm. Let me know if you up!`
    );
  }
}

// exercise 16 This adds new guests in the array

console.log("\nGuys I found a bigger table now we can invite more people.");
inv_prople.unshift(`Jawad`);
inv_prople.splice(3, 0, "Eman");
inv_prople.push("Sara");

for (let i = 0; i < inv_prople.length; i++) {
  console.log(`Hey ${inv_prople[i]}, Your're invited to the dinner`);
}
// exercise 17

console.log(`\nSorry guys we can only invite two people to the dinner `);
console.log(`\n`);
while (inv_prople.length > 2) {
  var rem_poeple = inv_prople.pop();
  console.log(`Sorry ${rem_poeple}, we can't invite you to the dinner.`);
}

console.log(`\n`);

for (let i = 0; i < inv_prople.length; i++) {
  console.log(`Hey ${inv_prople[i]}, You're still invited to the dinner.`);
}


//exercise 18

var fav_places = ['Santiago Bernabéu ','Switzerland ','UAE', 'Zanjan', 'Austrialia'];
console.log(fav_places); // original list
console.log(fav_places.sort()); //sorted list
console.log(fav_places); // confirm the order list
console.log(fav_places.sort().reverse()); // reverse the list
console.log(fav_places); // confirm the list in still same
console.log(fav_places.reverse()); // reverse the list
console.log(fav_places.reverse()); // reverse again to restore the original list
console.log(fav_places.sort()); // sorting list in alphabetical order
console.log(fav_places.reverse());

// exercise 19

console.log(fav_places.length);
console.log(inv_prople.length);

// exercise 20

var lang = ['English','German','Russian','Urdu','Pusto','Turkish'];
console.log(lang);

// exercise 21
var person_1 = {
    name: "Hashir",
    age: 18,
    gmail: "hashir@gmai.com",
  }
  var person_2 = {
    name: "Hammad",
    age: 16,
    gmail: "hammad@gmai.com",
  }
  var person_3 = {
    name: "Qaeed",
    age: 19,
    gmail: "Qaeed@gmai.com",
  }
  
  console.log(person_1);
  console.log(person_2);
  console.log(person_3);

  // exercise 22

  var int_error = ['Hashir','Qaeed','Hammad','Mustafa'];
  // intentional error
    console.log(`Person with the first letter m ${int_error[4]}`);
    console.log(`Person with the first letter m ${int_error[3]}`);
    

  // exercise 23

var num1 = 10;
var num2 = 15;
var car_1 = 'Audi';
var car_2 = 'Rolls Royce';
var bool_1 = true;
var bool_2 = false;

console.log(`Is Audi equals to Rolls Royce? I predict False. (${car_1 == car_2})`);
console.log(`Is Audi not equals to Rolls Royce? I predict False. (${car_1 != car_2})`);
console.log(`Is 10 equals to 15? I predict False. (${num1 == num2})`);
console.log(`Is 10 not equals to 15? I predict False (${num1 == num2})`);
console.log(`Is true equals to false? I predict False ${car_1 == car_2})`);
console.log(`Is the length of Audi is equals to the length of Rolls Royce? I predict false. (${car_1.length == car_2.length})`);
console.log(`is the length of Audi is not equals to the length of Rolls Royce? I predict true. (${car_1.length != car_2.length})`);
console.log(`is the length of Audi greater than the length of Rolls Royce? I predict false. (${car_1.length > car_2.length})`);
console.log(`is the length of Rolls Royce greater than the length of Audi? I predict false. (${car_2.length > car_1.length})`);
console.log(`Is 15 greater than 10? I predict true (${num2 > num1})`);
console.log(`Is 10 greater than 15? I predict False (${num1 > num2})`);

// exercise 24 used $$ , || and did some other things

var new_array = [20,50,60];
var my_name = 'HASHIR';

console.log(`Is new_array is an array? I predict true. (${Array.isArray(new_array)})`);
console.log(`Is car_1 is an array? I predict false. (${Array.isArray(car_1)})`);
console.log(`Is my_name is is written all in upper case? I predict true (${my_name == my_name.toUpperCase()}) `);
console.log(`Is my_name is a string and in upper case? I predict ture (${my_name == my_name.toUpperCase() && typeof my_name == 'string'})`);
console.log(`Is new_array is a number and in upper case? I predict true (${Array.isArray(new_array) || typeof new_array == 'string'})`);


// exercise 25

const readlineSync = require("readline-sync");
var alien_color = readlineSync.question(`What is the color of the alien?`);

if (alien_color == "green" || alien_color == "red") {
  console.log(`Your earned 5 points`);
} else {
  console.log(`You lost the game `);
}

// exercise 26

if (alien_color == "green") {
  console.log("You just earned 5 points");
} else if (alien_color == "red") {
  console.log("You earned 10 points");
} else {
  console.log("Do you know how stupid you are?");
}

// exercise 27

if(alien_color == 'green'){
    console.log('You earned 5 point')
} else if(alien_color == 'yellow'){
    console.log('You earned 10 points')
} else if(alien_color == 'red'){
    console.log('You earned 15 points')
} else {
    console.log('You lost the game!')
}



// exercise 28

do {
  var age = readlineSync.question("What is your age?");
  if (age < 2) {
    console.log(`You're a baby`);
  } else if (age >= 2 && age < 4) {
    console.log(`You're a toodler`);
  } else if (age >= 3 && age < 13) {
    console.log(`You're a kid`);
  } else if (age >= 13 && age < 20) {
    console.log(`You're a teenager`);
  } else if (age >= 20 && age < 65) {
    console.log(`You're an adult`);
  } else if (age >= 65) {
    console.log(`You're a senior citizem`);
  }

  var response = readlineSync.keyInYNStrict("Are you satisfied?");
} while (!response);

// exercise 29

var fav_fruits =  ['Banana','Orange','Strawberry'];

if(fav_fruits.includes('Banana')){
  console.log('You really like banana!');
}
if(fav_fruits.includes('Orange')){
  console.log('You really like Orange!');
}
if(fav_fruits.includes('Strawberry')){
  console.log('You really like Strawberry!');
}
if(!fav_fruits.includes('Mango')){
  console.log(`You don't have mango in your list`);
}
if(!fav_fruits.includes('Kivi')){
  console.log(`You don't have kivi in your list`);
}



// exercise 30

var username = ["admin", "Muhammad", "Abdullah", "Abubakr", "Umer"];

for (let i = 0; i < username.length; i++) {
  if (username[i] == "admin") {
    console.log("Welcome admin! Would you like to see status report?");
  } else {
    console.log(`Hey ${username[i]}, Weolcome to your favorite coffee shop!`);
  }
}

// exercise 31

var username = ["admin", "Muhammad", "Abdullah", "Abubakr", "Umer"];

if (username.length > 0) {
  for (let i = 0; i < username.length; i++) {
    if (username[i] == "admin") {
      console.log("Welcome admin! Would you like to see status report?");
    } else {
      console.log(`Hey ${username[i]}, Weolcome to your favorite coffee shop!`);
    }
  }
} else {
  console.log(`We need to find more users!`);
}

// exercise 32

const current_users = ['Hashir','Hammad','Qaeed','Rob','Ned'];
const new_users = ['Hassaan','Ehsan','Abdullah','Rob','Ned'];

function username_avaliability (username: string) {

  return !current_users.some(user => user.toLowerCase() == username.toLowerCase());
}

for (const new_user of new_users){
  const message = username_avaliability (new_user)
  ?`Congratulations! The username ${new_user} is avaliable`
  :`The username ${new_user} is already used, Please enter a new username`;

  console.log(message);
}
// exercise 33

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var number of numbers) {
  let oridinal_suffix;
  if (number == 1) {
    oridinal_suffix = "st";
  } else if (number == 2) {
    oridinal_suffix = "nd";
  } else if (number == 3) {
    oridinal_suffix = "rd";
  } else {
    oridinal_suffix = "th";
  }
  
  console.log(`${number}${oridinal_suffix}`);
}

// exercise 34

const pizzas = ['Margherita', 'BBQ Chicken','Pepperoni'];
for (const pizza of pizzas){
  console.log(`I like ${pizza}!`)
}
console.log(`\nI really like pizza, I love to have pizza with all my friends after the game!`)
// exercise 35

const animals = ["Cheetah", "Peregrine", "Falcon", "Sailfish", "Greyhound"];

for(const animal of animals){
  console.log(`${animal} are the fastest!`)
}
console.log(`These animals can run , swim and fly so fast!`)

// exercise 36
function t_shirts() {
  var size = prompt('What size you want to order?')
  var message = prompt('What should be the message on the shirt?');
  console.log(`You have orderd the t-shirt, the size is ${size} and message on it will be ${message}!`)
  
}
t_shirts();
// exercise 37

function make_shirts(size = "large", message = "I love ts!") {
  console.log(
    `You have orderd the t-shirt, the size is ${size} and the message is  ${message}!`
    );
  }
  make_shirts();
  make_shirts("small");
  make_shirts('medium','Keep going!');
  // exercise 38
  
  function deccribe_city(city,country){
    console.log(`${city}is in ${country}`)
  }
  
  deccribe_city('Islamabad','Pakistan');
  deccribe_city('New York','USA');
  deccribe_city('Dubai','UAE');
  // exercse 39
  
  function city_country(city,country){
    return`${city},${country}`
  }
  
  console.log(city_country('Tokyo','Japan'));
  console.log(city_country('Beijing','China'));
  console.log(city_country('Tehran','Iran'));
  */
//exercise 40
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        tracks: tracks,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist 1', 'Album 1', 'track 1');
var album2 = make_album('Artist 2', 'Album 2', 'track 1');
var album3 = make_album('Artist 3', 'Album 3', 'track 1');
console.log(album1);
console.log(album2);
console.log(album3);
