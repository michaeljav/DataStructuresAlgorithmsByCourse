//Reverse string

function reverse(str) {
//check input
if (!str || str.length < 2 || typeof str !== 'string') {
  return 'hmm that is not good';
}

  let string="";
  let  arry = str.split('');

  for (let index = arry.length-1; index >= 0; index--) {
    const element = arry[index];
    string += element;    
  }
  return  string;

}

let stri ='Hi My name is Andrei';

let str = reverse(stri);

function reverse2(str){
  return str.split('').reverse().join('');
}
console.log(str);
console.log(reverse2(stri));;  