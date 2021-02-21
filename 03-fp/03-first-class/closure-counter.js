// const counter = () => {
//   let count = 0;

//   const increment = () => {
//     return count += 1;
//   };

//   return increment;
// };

const counter = (count = 0) => (adds = 1) => count += adds
const increment = counter()

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

console.log(' ')

const triple_counter = counter();
console.log(triple_counter(3));
console.log(triple_counter(3));
console.log(triple_counter(3));