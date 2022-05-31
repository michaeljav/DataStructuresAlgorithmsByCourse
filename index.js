
//Different terms for inputs
function compressBoxesTwice(boxes, boxes2)
{
   boxes.forEach(boxes => {
     console.log(boxes);
   });

   boxes2.forEach(boxes => {
    console.log(boxes);
  });
}


//O(Arrayinput + ArrayInput2)





















// const nemo =['nemo'];
// const large = new Array(10000).fill('nemo');

// //a runtime  is simply how long  something takes to run
// function findNemo(array) {
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] === 'nemo') {
//       console.log('Found NEMO');
//     }    
//   }
// }

// findNemo(nemo);
// findNemo(large); //O(n) Linea Time to find Nemo



// //O(1) Constant Time
// const nemo =[0,1,2];
// function findNemo(array) {
//  console.log(array[0]); //O(1)
//  console.log(array[1]); //O(1)
// }

// findNemo(nemo);//O(2) --> for convention O(1) Constant Time






// //1.EXERCISE Calculate Big O.  NOTE THIS WAY IN INTERVIEWS YOU WON'T USE IT
// function funChallenge(input) {
//   let a = 10; //O(1)
//   a = 50 + 3;//O(1)

//   for (let i = 0; i < input.length; i++) { //O(n) --> O(input) it's going to run n times
//     anotherFunction(); //O(n)
//     let stranger = true;//O(n)
//     a++; //O(n)
//   }
//   return a;//O(1)
// }

//First
//O(1) = 1 + 1 + 1
//O(n) = n + n + n + n

//Second
//3
//4n

//Third
//Big O(3 + 4n)


//********THE WAY TO USE IN INTERVIEW IS SIMPLER*****
//Big O(n)




// //2.EXERSICE
// function anotherFunChallenge(input) {
//   let a = 5;
//   let b = 10;
//   let c = 50;
//   for (let i = 0; i < input; i++) { //O(n)
//     let x = i + 1;
//     let y = i + 2;
//     let z = i + 3;

//   }
//   for (let j = 0; j < input; j++) { //O(n)
//     let p = j * 2;
//     let q = j * 2;
//   }
//   let whoAmI = "I don't know";
// }
// //O(4 + 5n)
// //O(n)