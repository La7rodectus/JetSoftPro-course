// 1. Recursion

//loop
// const sumUpLoop = (x) => {
// 	let result = 0;
// 	for(let i = 1; i <= x; i++ ){
// 		result += i
// 	}
// 	return result
// }

// console.log(sumUpLoop(100))

// const sumUpRecursion = (x) => {
// 	return x == 1 ? x : x + sumUpRecursion(x-1);
// }

// console.log(sumUpRecursion(100))

//Factorial

// const factorialLoop = (x) => {
// 	let res = 1;
// 	for(let i = 1; i <= x; i++){
// 		res *= i
// 	}
// 	return res;
// }
// console.log(factorialLoop(5))

// const factorialRecursion = (x) => {
// 	return x === 1 ? x : x * factorialRecursion(x-1)
// }
// console.log(factorialRecursion(5))

// // Fibonacci

// const fibonacci = (x) => {
// 	console.log(x)
// 	return x <= 1 ? x : fibonacci(x - 1) + fibonacci(x - 2)
// }

// // //why === ?
// console.log(fibonacci(7))

// 2. setTimeOut / setInterval

// setTimeOut syntax
// var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);

// setTimeout(() => {
//   console.log("this is the first message");
// }, 1000);

//what console will be first
// function foo() {
// 	console.log('timeout first');
//   }
// setTimeout(foo, 0);
// console.log('console first ');

// const timeout = setTimeout(() => {
// 	console.log('timeout')
// }, 1000);
// clearTimeout(timeout);

// setInterval syntax
// var intervalID = setInterval(func, [delay, arg1, arg2, ...]);
// setInterval(() => {
// 	console.log('i will be showen again in 1 sec')
// }, 1000)

// const callbackFunc = (a, b) => {
// 	console.log(a);
// 	console.log(b);
// }

// //why not showing ?
// setInterval(callbackFunc('another', 'setInterval'), 1000);

// setInterval(callbackFunc, 1000, 'another', 'setInterval');

// const displayInterval = setInterval(() => console.log('displayInterval'), 100);
// clearInterval(displayInterval);

// 3. Rest & Spread operators

// // SPREAD operator
// const arr = [1, 2, 3];
// const sumUp = (a, b, c) => a + b + c;

// console.log(sumUp(...arr));

// let immutableData = [1, 2, 3, 4];
// immutableData = [...immutableData, 12];
// console.log(immutableData);

// let immutableState = {
//   school: {
//     name: "Hogwarts",
//     house: {
//       name: "Ravenclaw",
//       points: 17,
//     },
//   },
// };

// immutableState = {
//   ...immutableState,
//   school: {
//     ...immutableState.school,
//     house: {
//       ...immutableState.school.house,
// 	  points: immutableState.school.house.points + 20,
// 	  teamMembers: 20
//     },
//   },
// };

// let topITCities = [
//   {
//     town: "Ivano-Frankivsk",
//   },
//   {
//     town: "Lviv",
//   },
//   {
//     town: "Vinnytsia",
//   },
// ];

// const insertItem = (array, idx, item) => {
//   return [
//     ...array.slice(0, idx),
//     item,
//     ...array.slice(idx),
//   ];
// };

// topITCities = insertItem(topITCities, 1, {town: 'Kyiv'})
//  console.log(topITCities)

// const removeItem = (array, idx) => {
//   return [...array.slice(0, idx), ...array.slice(idx + 1)];
// };
// topITCities = removeItem(topITCities, 1);
// console.log(topITCities);

// console.log(immutableState);

// REST Operator
//The rest operator is used to put the rest of some specific user-supplied values into a JavaScript array

// const myBio = (firstName, lastName, ...otherInfo) => {
//   console.log({ firstName });
//   console.log({ lastName });
//   console.log({ otherInfo });
//   return;
// };

//  myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

// //How the Rest Operator Works in a Destructuring Assignment
// //The rest operator typically gets used as a prefix of the destructuring assignment’s last variable.
// //The rest operator (...) instructs the computer to add the rest of the user-supplied values into an array. Then, it assigns that array to the otherInfo variable.
// const [firstName, lastName, ...otherInfo] = [
//   "Oluwatobi",
//   "Sofela",
//   "CodeSweetly",
//   "Web Developer",
//   "Male",
// ];

// console.log({ firstName });
// console.log({ lastName });
// console.log({ otherInfo });

// const userInfo = {
//   firstName: "Mark",
//   lastName: "Zuckerberg",
//   companyName: "Meta Platforms, Inc",
//   profession: "CEO",
//   gender: "Male",
// };

//const {firstName: name, companyName, profession, ...otherUserInfo} = userInfo;
// const {firstName: name, ...otherUserInfo, companyName, profession} = userInfo;

// console.log({ name });
// console.log({otherUserInfo});

// //In old times, rest parameters did not exist in the language, and using arguments was the only way to get all arguments of the function. And it still works, we can find it in the old code.
// //So when we need these features, then rest parameters are preferred.
// function showName() {
// 	console.log('arguments.length', arguments.length );
// 	console.log('arguments[0]', arguments[0] );
// 	console.log('arguments[1]', arguments[1] );
// }

//   // shows: 2, Julius, Caesar
//   showName("Julius", "Caesar");

//   // shows: 1, Ilya, undefined (no second argument)
//   showName("Ilya");

// //As we remember, arrow functions don’t have their own this. Now we know they don’t have the special arguments object either.
// const showArg = () => console.log('arrow func args', arguments[0]);
// showArg();

// 4. Variable scope , closures

// JavaScript has 3 types of scope:

// Block scope
// Function / Local scope
// Global scope

// var global = 'Global scope'
// console.log({global});

// if(global){
// 	let blockScope = 'Block scope';
// 	const global = 'updated by mistake Global scope'
// }
// console.log({global});
// console.log({blockScope});

//Block scope
// A block scope is the area within if, switch conditions or for and while loops.
// Generally speaking, whenever you see {curly brackets}, it is a block.
// In ES6, const and let keywords allow developers to declare variables in the block scope,
// which means those variables exist only within the corresponding block.
// "use strict"
// var person = 'Stepan';

// if(person){

// 	person = 'whatever';
// 	// let person = 'whatever';
// }
// console.log({person})

//Function scope
//Whenever you declare a variable in a function, the variable is visible only within the function.
//You can't access it outside the functioneven when declared with var.

//global scope
// function selectFruit(){
// 	//local scope
// 	let selectedFruit = 'banana';
// 	console.log('outside',{selectedFruit});
//     function selectedOrange(){
// 		//local scope 2
// 		console.log('inside',{selectedFruit});
// 		const orange ='orange';
// 		console.log('inside', {orange});
// 		selectedFruit='peach'
// 	}
// 	selectedOrange();
// 	console.log('outside new ',{selectedFruit});
// 	console.log('outside', orange)
// }


// selectFruit();


const selectAnimal = (x) => {
	var tiger = 'tiger';
	var lion = 'lion'
	return x ? console.log(tiger): console.log(lion);
}
// selectAnimal();
// console.log({lion});
// console.log({tiger});

// if(true){
// 	var bird = 'bird';
// }

// console.log({bird})

//Variables declared with the var keyword can NOT have block scope.

//Variables declared inside a { } block can be accessed from outside the block.

// 5. Functions

// 5.1 Call / Apply / Bind

// Call
//Syntax func.call(context, arg1, arg2, ...)
//The call() method calls a function with a given this value and arguments provided individually.

// function measureChocolate(country) {
//   console.log(
//     `${this.chocolate} posesses ${this.percentage}% of cacao and come from ${country}`
//   );
// }
// const whiteChoco = { chocolate: "White", percentage: "20" };
// const milkChoco = { chocolate: "Milk", percentage: "20" };
// const darkChoco = { chocolate: "Dark", percentage: "80" };
// const pinkChoco = { chocolate: "Pink", percentage: "50" };
// const anyChocolate = { chocolate: "Any", percentage: "0" };

// measureChocolate.call(whiteChoco, "Italy");
// measureChocolate.call(milkChoco, "France");
// measureChocolate.call(darkChoco, "Norway");
// measureChocolate.call(pinkChoco, "Ecuador");
// measureChocolate(anyChocolate, "Chile");

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Male(name, age) {
//   Person.call(this, name, age);
//   this.gender = "male";
// }

// function Female(name, age) {
//   Person.call(this, name, age);
//   this.gender = "female";
// }

// const chris = new Male("Chris", 30);
// const monica = new Female("Monica", 40);
// console.log({chris});
// console.log({monica});

// function greet() {
//   const reply = [
//     this.animal,
//     "typically sleep between",
//     this.sleepDuration,
//   ].join(" ");
//   console.log(reply);
// }

// const obj = {
//   animal: "cats",
//   sleepDuration: "12 and 16 hours",
// };

// greet.call(obj);

// var name = "Olya";

// function sayHello() {
//   console.log(`Hello ${this.name} !`);
// }
// sayHello.call();

//Apply
// Syntax: func.apply(context, [arg1, arg2]);
// method calls a function with a given this value, and arguments provided as an array

// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

//Bind
//The bind() method creates a new function that, when called, has its this keyword set to the provided value,
//with a given sequence of arguments preceding any provided when the new function is called.

// let name = 'horse new animal '

// const animalData = {
// 	name: 'cat',
// 	getName: function(){
// 		console.log(this)
// 		console.log(this.name);
// 	}
// }
// // animalData.getName()
// //const catData = animalData.getName;

// const catData = animalData.getName.bind(animalData);
// catData();

// const book = {
// 	title: 'Eat, Pray, Love',
// 	quote: 'I honor the divinity that resides within me.',
// 	getInfo: function(){
// 		console.log(`In ${this.title} book the most populare quote is ${this.quote}`)
// 	}
// }

// setTimeout(book.getInfo, 1000);
// // setTimeout(catData, 1000);






// //1
// setTimeout(() => book.getInfo(), 1000);

// //2
// setTimeout(book.getInfo.bind(book), 1000);

// 5.2 Arrow Function  in depth

// Has no this

// const baseballTeam = {
//   name: "Yankees",
//   players: ["Chris", "Steve", "David", "Demian"],
//   showList: () => {
//     console.log("baseballTeam", this);
//     this?.players?.forEach((x) => console.log(x));
//   },
// };
// baseballTeam.showList();

// const footballTeam = {
//   name: "Bayern",
//   players: ["Andry", "Logan", "Jake", "Vadym"],
//   showList() {
// 	  console.log(this)

//     //this?.players?.forEach((x) => console.log(x));
//   },
// };
// footballTeam.showList();

// const volleyballTeam = {
//   name: "Kentucky",
//   players: ["Megan", "Julia", "Angela", "Jessica"],
//   showList() {
//     this?.players?.forEach(function(x) {
//       console.log("volleyballTeam this", this);
//     //   x && console.log(x);
//     });
//   },
// };
// volleyballTeam.showList();
