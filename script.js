


// Write a JavaScript function to insert a string within a string at a particular position

let str ="We are learning exercises.";
let newStr = str.slice(0, 16) + "Javascript " + str.slice(16);
console.log(newStr);

// Write a JavaScript function to count the occurrence of a substring in a string.

let str1 = "My name is wecode academy and my friend name is Arun Kumar." 
let substring="is";
let count = (substring.length);
console.log(count); 


// Print Pattern using repeat function
let rows = 6;
let symbols = '*';

for (let i = 6; i >= 1; i--) {
    let spaces = ' '.repeat(rows - i);
    let stars = symbols.repeat(2 * i - 1);
    let line = spaces + stars;
    console.log(line);
  }

  
  


// Print Pattern using repeat function
let lines = 6;
let pattern = '$';

for (let i = 6; i >= 1; i++) {
    let spaces = ' '.repeat(lines - i);
    let stars = pattern.repeat(2 * i - 1);
    let d = spaces + stars;
    console.log(d);
  }

  
  