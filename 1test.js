// Q1.Write a function that takes a string and returns a new string with all the words reversed using the spread operator.
// function str (str) {
//     newStr= " "; 
//  newStr =[...str].reverse().join('');
//  return newStr;
// } 
// console.log(str("WeCode Academy"));


//Q2. Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.

// let arr = [1, 2, 3, 4, 5, ];
// function removearr (...arr) {
// arr.shift(); 
// return arr; 
// } 
// console.log(removearr); 
 

// Q3.Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array

// let Arr = [1, 2, 3, 4, 5,]; 
// let Arr1 = [6, 7, 8, 9, 10,]; 

// function test([...arr]) { 
// return Arr;

// }
//  console.log(test([...Arr, ...Arr1]));


//Q.6 Create an array of numbers. Now change the position of each element with their next element.

// let arr = [1,2,3,4,5,6,7] ;
// function test (arr) { 
 
//  let newarr= [];

// for (let i= 0; i<arr.length; i=i+2){
// if(i+1<arr.length) {
//     newarr[i]=arr[i+ 1]; 
//     arr[i] =newarr [i+1];
// }else {

//     newarr[i] = arr[i];

// }
// }
// return newarr;
//  }
// console.log(test(arr)); 



// Q7.Ask  user below questions
// What is your age  : 12
// What is your mobile : 9581894461
// What is your address : Jaipur Now create an object and use enhanced object literal property computation to create below object

// let age= Number(prompt("What is your age"))
// let mobilenumber = Number (prompt("What is yor mobilenumber"))
// let address = Number(prompt("What is your address")) 
// let obj = { 
//     ["My age + age"]:age, 
// [mobilenumber]: mobilenumber, 
// [address+age+mobilenumber]:address 
// }
// console.log(obj); 



// Q9.Take a number and check if number is greater than 80 or not. If yes then assign 100 to number else assign 200. Use short circuiting whereever possible. 

// let num = 85 ;

// if (num >80) {

// console.log(num&&100);
// } 
// else {
//     console.log(num&&200);
// } 



// Q.10 Create an array of 10 numbers. Now create a new array of 0 and 1 using Array destructring based on if number is odd then 1 else 0
// Array : [1,2,3,4,5,6,7,8,9]
// Output: [1,0,1,0,1,0,1,0,1,0] 

// let arr = [1, 2, 3, 4, 5, 6, 7]; 
// function test([...arr]) {
//     let newArr = [];  
//     for(let i =0; i<arr.length;i++){
//         if (arr[i] % 2 ===0) {
//             newArr.push(0);
//  } 
//  else{ 
//     newArr.push(1);

//  }
//     }

//     return newArr;

// } 

// console.log(test(arr)); 



// Q15. Given a string, reverse the order of the words in the string. For example, "the quick brown fox" becomes "fox brown quick the". 
// let str = "the quick brown fox";
// let ans = str.split(" "); 
// console.log(ans.reverse().join(" ")); 


