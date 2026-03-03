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

async function getDate() {
  //   console.log(getSign({ month, day }));
  //   console.log(getZodiac(year));
  const sign = getSign({ month, day });
  const zodiac = getZodiac(year);
  console.log(
    `Your astrological sign is ${sign} and your zodiac sign is ${zodiac}.`
  );
}
getDate();

// ✨✨ BONUS ✨✨
// Tell the user their **birthstone** based on their birth month!
