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

// While Loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
  if (i === 5) continue;
  console.log(i);
}