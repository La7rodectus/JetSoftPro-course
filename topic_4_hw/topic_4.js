
// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64
console.log('1) Compute the exponent of a number.\n');
const exponent = (x, n) => {
  if (n === 0) return 1;
  else {
    return n > 0 ? x * exponent(x, n - 1) : exponent(x, n + 1) / x;
  }
}

console.log('exponent(8, 2):', exponent(8, 2));
console.log('exponent(4, 4):', exponent(4, 4));
console.log('exponent(4, -2):', exponent(4, -2));
console.log('exponent(8, -3):', exponent(8, -3));


// 2. Write functions min and max that will find min and max number in array using apply
console.log('\n2) Write functions min and max that will find min and max number in array using apply.\n');

const min_v1 = (arr) => Math.min.apply(null, arr);
const max_v1 = (arr) => Math.max.apply(null, arr);

const min_v2 = (arr) => Array.prototype.sort.apply(arr, [(a, b) => a - b])[0];
const max_v2 = (arr) => Array.prototype.sort.apply(arr, [(a, b) => a - b])[arr.length - 1];

console.log('min_v1([1, 0.33, 2, 7777, 124, 13, 99.0]):', min_v1([1, 0.33, 2, 7777, 124, 13, 99.0]));
console.log('max_v1([1, 0.33, 2, 7777, 124, 13, 99.0]):', max_v1([1, 0.33, 2, 7777, 124, 13, 99.0]));

console.log('min_v2([1, 0.33, 2, 7777, 124, 13, 99.0]):', min_v2([1, 0.33, 2, 7777, 124, 13, 99.0]));
console.log('max_v2([1, 0.33, 2, 7777, 124, 13, 99.0]):', max_v2([1, 0.33, 2, 7777, 124, 13, 99.0]));

// 3. Write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, branch and color. 
//    Please make examples for three different cars
console.log(`
3) Write a function displayCarDetails that will receive as argument ownerName 
and return a string with car registration number, branch and color.
`);

const bmw = {
  brand: 'bmw',
  color: 'red',
  regNum: 'AQ 773313 BB',
};

const kia = {
  brand: 'kia',
  color: 'green',
  regNum: 'AK 947319 DS',
};

const honda = {
  brand: 'honda',
  color: 'black',
  regNum: 'AO 676776 GG',
};

function displayCarDetails(ownerName) {
  return `This ${this.color} ${this.brand} with registration number "${this.regNum}" belongs to ${ownerName}`;
};

console.log('displayCarDetails.call(bmw, \'Ivan\'):', displayCarDetails.call(bmw, 'Ivan'));
console.log('displayCarDetails.call(kia, \'Oleg\'):', displayCarDetails.call(kia, 'Oleg'));
console.log('displayCarDetails.call(honda, \'Igor\'):', displayCarDetails.call(honda, 'Igor'));

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 
console.log('\n4) We want this code to log out “hey amy”, but it logs out “hey arnold”.');

console.log(`
function greet_old(person) {
  if (person.name === 'amy') {
    return 'hey amy';
  } else {
    return 'hey arnold';
  }
}`);

function greet_old(person) {
  if (person.name === 'amy') {
    return 'hey amy';
  } else {
    return 'hey arnold';
  }
}

function greet_new(person) {
  const name = person.name === 'amy' ? person.name : 'arnold';
  return `hey ${name}`;
}

const amy = { name: 'amy' };
const ivan = { name: 'ivan' };

console.log('============DATA==========');
console.log('amy =', amy);
console.log('ivan =', ivan);

console.log('============OLD==========');
console.log('greet_old(amy):', greet_old(amy));
console.log('greet_old(ivan):', greet_old(ivan));

console.log('============NEW==========');
console.log('greet_new(amy):', greet_new(amy));
console.log('greet_new(ivan):', greet_new(ivan));

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)
console.log(`
4) We want this code to log out the numbers 0, 1, 2, 3 in that order, \
but it doesn’t do what we expect.
`);

console.log(`for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
`);

console.log('default output:');
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}

setTimeout(() => console.log('\nlet fix, output:'), 0);
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0);
}

setTimeout(() => console.log('\nIIFE fix, output:'), 0);
for (var i = 0; i < 4; i++) {
  ((i) => {
    setTimeout(() => console.log(i), 0);
  })(i);
}

setTimeout(() => console.log('\nsetTimeout pass args fix, output:'), 0);
for (var i = 0; i < 4; i++) {
  setTimeout(console.log, 0, i);
}

setTimeout(() => console.log('\nbind args fix, output:'), 0);
for (var i = 0; i < 4; i++) {
  setTimeout(console.log.bind(null, i), 0);
}

setTimeout(() => console.log('\nclosure args fix, output:'), 0);
for (var i = 0; i < 4; i++) {
  const closure = (i) => () => console.log(i);
  setTimeout(closure(i), 0);
}

