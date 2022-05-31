const nemo =['nemo'];
const large = new Array(10000).fill('nemo');

//a runtime  is simply how long  something takes to run
function findNemo(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'nemo') {
      console.log('Found NEMO');
    }    
  }
}

findNemo(nemo);
findNemo(large); //O(n) Linear Time to find Nemo