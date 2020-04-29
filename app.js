const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')
// Write your code below:


async function makeBeans (){
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner)
}

makeBeans()




// Write your code below:

async function serveDinner(){
  const vegetablePromise =  steamBroccoli();
  const starchPromise  =  cookRice();
  const proteinPromise  =  bakeChicken();
  const sidePromise  =  cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
};

serveDinner()


//* other option is

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:

async function serveDinnerAgain(){
  let  foodArray = await Promise.all([steamBroccoli(),cookRice(),bakeChicken(),cookBeans()])
  let vegetable = foodArray[0]
  let starch =  foodArray[1];
   let protein =  foodArray[2];
let side =  foodArray[3];

console.log(`Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`);
  console.log()
}

serveDinnerAgain() */
