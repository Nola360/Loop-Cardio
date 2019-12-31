// Initialization
// For Loop
for (let i = 0; i < 5; i++) {
  console.log('This is a For loop ' + i);
  if (i === 3) break;
}

// For Loop Array
const month = ['dec', 'jan', 'feb', 'march']
for (months of month) console.log(month);


//For Loop Object
const user = { 'firstName': 'Happy', 'lastName': 'New Year', 'Year': 2020 }
for (key in user) console.log(user[key]);


console.log('while loops');
console.log('while loops');
console.log('while loops');
console.log('while loops');

// While Loop
let i = 2010;
while (i <= 2020) {
  console.log(i);
  i++;
  // if (i === 2010) continue;
  // console.log(i);
}

console.log('Do while loop')
let j = 0;
do {
  i++;
  if (j === 5) continue;
  console.log(i);
} while (i < 0);


console.log('High order array')
const animals = ['lion', 'tiger', 'bear', 'fish'];

animals.forEach(animal => {
  console.log(animal);
})
