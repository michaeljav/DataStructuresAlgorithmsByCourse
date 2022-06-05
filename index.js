//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]: 
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


//no work very well with the second example
function FirstRecurringCharacter(arr){
  
  for (let i = 0; i < arr.length; i++) {    
    for (let j = i+1; j < arr.length; j++) {
      const elementI = arr[i];
      const elementJ = arr[j];
      if (elementI === elementJ) {
        return elementI;
      }      
    }    
  }
  return undefined;
}

//O(n^2) time complexity
//O(1)  space complexity  

let v = FirstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
// console.log(v);
 v = FirstRecurringCharacter([2,1,1,2,3,5,1,2,4]);
// console.log(v);

function FirstRecurringCharacter2(arr) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(map[element]){
      return element;
    }else{
   
      map[element]=element;
    }    
  }
  return undefined;
}
//Time complexity O(n)
//Space Complexity O(n) : increase the memory
 v = FirstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);
 v = FirstRecurringCharacter2([2,1,1,2,3,5,1,2,4]);
// console.log(v);


//IT IS INCOMPLETE TRYING TO MAKE IT CORRECT LIKE NUMBER 2 USING MAP
function FirstRecurringCharacter3(arr){
  let mapStepNextRecur={};
  let steps=0;
  for (let i = 0; i < arr.length; i++) {  
      if (!mapStepNextRecur[arr[i]]) {
        mapStepNextRecur[arr[i]]=0;
      }

    for (let j = i+1; j < arr.length; j++) {
      const elementI = arr[i];
      const elementJ = arr[j];
      ++steps;
      if (elementI === elementJ) {
        mapStepNextRecur[arr[i]]=steps;
        steps = 0;
        

        break;
        //return elementI;
      }  
    }    
  }


  return undefined;
}


v = FirstRecurringCharacter3([2,5,1,2,3,5,1,2,4]);
// console.log(v);
 v = FirstRecurringCharacter3([2,1,1,2,3,5,1,2,4]);
console.log(v);