function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (let i = 0; i < len-1; i++) {
    for (let j =  i+1; j < len; j++) {
     if (arr[i] + arr[j] === sum) {
       return true;
     }
    }
    
  }

  return false;
}

//Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    console.log(sum,arr[i],sum - arr[i]);
    if (mySet.has(arr[i])) {
    
      return true;
    }
    // console.log(sum,arr[i],sum - arr[i]);
    mySet.add(sum - arr[i]);
    
  }
  return false;
}


 r =hasPairWithSum2([6,4,3,2,1,7], 9);
console.log(r);