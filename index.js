//Log all pairs of array
const boxes = ['a','b','c','d','e'];
function logAllPairsOfArray(array){
for (let index = 0; index < boxes.length; index++) {    
   // console.log(element);
    for (let index2 = 0 ; index2 < boxes.length; index2++) {
          let element = boxes[index];
          let element2 = boxes[index2];
          console.log(element ,element2 );           
    }
  }
}
logAllPairsOfArray(boxes);
//O(n*n ) ---> O(n^2)