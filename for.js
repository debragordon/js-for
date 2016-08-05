// Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.

console.log("|||| Increment by 10 ||||");

var i = 0;
for (i = 5; i <= 120; i += 5) {
  console.log("Current Value: " + i);
}

// Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.

console.log("|||| Decrement by Division ||||");

var num = 4096;

for (var i = 0; i < num.length; i++) {
  num[i]
}

// console.log("I am not able to figure this out!?!?!?");

// for (var i = 4096; i <= 1; i /= 2) {
//   console.log("Current Value: " + i);
// }

// Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).

console.log("|||| Array Iteration ||||");

var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James K. Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses S. Grant", "Rutherford B. Hayes", "James Garfield", "Chester A. Arthur", "Grover Cleveland", "Benjamin Harrison", "Grover Cleveland", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren G. Harding", "Calvin Coolidge", "Herbert Hoover", "Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower", "John F. Kennedy", "Lyndon B. Johnson", "Richard M. Nixon", "Gerald R. Ford", "James Carter", "Ronald Reagan", "George H. W. Bush", "William J. Clinton", "George W. Bush", "Barack Obama", "Hillary Clinton"];

for (var i = 0; i < presidents.length; i++) {
  console.log("President: " + presidents[i]);
}

console.log("|||| Object Iteration ||||");

// Use can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() to output the names of the keys in the object.

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
  console.log("ant species: " + prop);
}





