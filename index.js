//Implementing a array

class MyArray {
  constructor(){
    this.length =0;
    this.data ={};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length -1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  
  shiftItems(ind) {
    for (let index = ind; index < this.length - 1; index++) {
      console.log(index);
      this.data[index] = this.data[index+1];      
    }
    delete this.data[this.length-1];
    this.length--;
  }

}

const newArray = new MyArray();
newArray.push('Miahe')
newArray.push('you')
newArray.push('I')
newArray.push('Mi')
console.log(newArray);
// newArray.pop();
let removed=newArray.delete(0);
console.log(removed);
console.log(newArray);
//console.log(newArray.get(0));