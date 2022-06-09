//Linked lists 

//10-->5--->16

// let myLinkedList = {
//   head:{
//     value: 10
//     next:{
//       value:5 
//       next: {
//         value:16 
//         next: null
//       }
//     }
//   }
// }

class Node {
  cunstructor(value) {
    this.value = value;
    this.next  = null;
  }
}
class LinkedList {
  constructor(value){
    this.head ={
      value: value,
      next:null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(newValue){    
    const newNode =  new Node(newValue);
    
    this.tail.next= newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode =  new Node(newValue);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

}

const myLinkedList = new LinkedList(1);

// console.log(myLinkedList);
myLinkedList.append(2);
myLinkedList.append(3);


// console.log(myLinkedList);
console.log(myLinkedList.prepend(0));