//if system is 32bit every variable uses
//4 shelves of memory to store one variable
//8 bit is a byte
//4 bytes is 32 bits in memory
const strings =['a','b','c','d'];

strings[2];// o(1)
strings.push('e'); //O(1)
//remove last item
strings.pop(); //O(1)
strings.pop(); //O(1)

//Add in the biggin
//unshift
strings.unshift('x'); //O(n)

//inser in the middle
//splice
strings.splice(2,0,'Alian');//O(n/2) --> O(n)

console.log(strings);
