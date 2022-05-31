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



//O(1) Constant Time
const nemo =[0,1,2];
function findNemo(array) {
 console.log(array[0]); //O(1)
 console.log(array[1]); //O(1)
}

findNemo(nemo);//O(2) --> for convention O(1) Constant Time
