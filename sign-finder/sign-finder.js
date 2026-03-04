/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */

// ✨✨ REFERNCE ✨✨
//  https://www.npmjs.com/package/horoscope

// ✨✨ getSign ✨✨
// return astrological sign from {month, day}

// console.log(horoscope.getSign({month: 7, day: 25 }))
// // 'Leo'

// console.log(horoscope.getSign({month: 12, day: 21}))
// 'Sagittarius'

// ✨✨ getZodiacn ✨✨
// return zodiac sign from year

// console.log(horoscope.getZodiac(2015))
// 'Goat'

// console.log(horoscope.getZodiac(2016))
// 'Monkey'

import { getSign, getZodiac } from "horoscope";

const month = Number(process.argv[2]);
const day = Number(process.argv[3]);
const year = Number(process.argv[4]);

const birthstones = {
  1: "Garnet",
  2: "Amethyst",
  3: "Aquamarine",
  4: "Diamond",
  5: "Emerald",
  6: "Pearl",
  7: "Ruby",
  8: "Peridot",
  9: "Sapphire",
  10: "Opal",
  11: "Topaz",
  12: "Turquoise",
}; // Got data from data.jason in birthsone-finder.js

async function getDate() {
  const sign = getSign({ month, day });
  const zodiac = getZodiac(year);
  const birthstone = birthstones[month];
  console.log(
    `Your astrological sign is ${sign} and your zodiac sign is ${zodiac}, so your birthstone is ${birthstone}!`
  );
}
getDate();

// ✨✨ BONUS ✨✨
// Tell the user their **birthstone** based on their birth month!
