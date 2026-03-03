/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */

//import the moment node module

import moment from "moment";
// console.log(momemt);

// get user input
let year = Number(process.argv[2]);
console.log(year);

// https://momentjs.com/docs/#/query/

// moment().isLeapYear();
// moment#isLeapYear // returns true if that year is a leap year, and false if it is not.

// moment([2000]).isLeapYear() // true
// moment([2001]).isLeapYear() // false
// moment([2100]).isLeapYear() // false

// write a program that determines if the input year is a leap year or not?
// console that info in the terminal
//
// if year is leap year
// moment([2000]).isLeapYear() // true
// console.log year is a leap year
// else
// console.log(`${year} is not a leap year. No birthday for Phil.`);

if (moment([year]).isLeapYear() === true) {
  console.log(`${year} is a leap year! Phil get's a birthday!`);
} else {
  console.log(`${year} is not a leap year. No birthday for Phil.`);
}
