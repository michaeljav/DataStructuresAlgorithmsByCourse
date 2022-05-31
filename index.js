const nemo =['nemo'];
const large = new Array(10000).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();  
  for (let index = 0; index < array.length; index++) {
    if (array[index] === 'nemo') {
      console.log('Found NEMO');
    }
    
  }
  let t1 = performance.now();
  console.log('Call to finde Nemo took ' + (t1-t0)+ ' milliseconds');
}

findNemo(nemo);
findNemo(large);