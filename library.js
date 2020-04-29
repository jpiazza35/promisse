This is the shopForBeans function from the last exercise
*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
	const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
  setTimeout(()=>{
    let randomIndex = Math.floor(Math.random() * 5)
    let beanType = beanTypes[randomIndex];
    console.log(`I bought ${beanType} beans because they were on sale.`)
   resolve(beanType);
  }, 1000)
})
}

let soakTheBeans = (beanType) => {
   return new Promise((resolve, reject) => {
     console.log('Time to soak the beans.')
    setTimeout(()=>{
      console.log(`... The ${beanType} beans are softened.`)
      resolve(true)
      }, 1000)
  })
}

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log('Time to cook the beans.')
    setTimeout(()=>{
      if (isSoftened) {
        console.log('... The beans are cooked!') 
        resolve('\n\nDinner is served!')
      }
    }, 1000)
  })
}
let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans')
   }, 1000)
 })
}

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli')
   }, 1000)
 })
}

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice')
   }, 1000)
 })
}

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken')
   }, 1000)
 })
}

  
module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken,shopForBeans, soakTheBeans, cookTheBeans} 
