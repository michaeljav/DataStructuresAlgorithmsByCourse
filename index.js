//
//CALL STACK : FIRST IN LAST OUT FILO
debugger;
// console.log('1');
// console.log('2');
// console.log('3');


// const one = () => {
//   const two =() => {
//     console.log('object');
//   }
//   two();
// }
// one();

// let sec = 0;
// function foo(){
//   sec++;
//   console.log(sec)
//   foo();
// }

// foo();

//call stack
//Asincronous
console.log('1');
setTimeout(() => {
  console.log('2');
}, 2000);
console.log('3');


