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
  constructor(value) {
    this.value = value;
    this.next  = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value){
    this.head ={
      value: value,
      next:null,
      prev:null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(newValue){    
    const newNode =  new Node(newValue);
    newNode.prev = this.tail;
    this.tail.next= newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(newValue) {
    const newNode =  new Node(newValue);
    newNode.next = this.head;
    this.head.prev =  newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList(){
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value){
    //check params
    // debugger
    if (index <= 0) {
      this.prepend(value);
      return this;
    }
    
    if (index >= this.length-1) {
      this.append(value);
      return this;
    }
  //  debugger;

    const newNode = new Node(value);   
    //Reference to the head
    // 10-->5__-->16-->20
    const leader = this.traverseToIndex(index-1); 
    // 16-->20
    const follower = leader.next;
    newNode.prev = leader;
    // //10-->5-->99-->null
    leader.next = newNode;
     //10-->5-->99-->16-->20
    newNode.next = follower; 
    follower.prev = newNode;
    this.length++;
    console.log(this);
    return this.printList();    

  }

  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index){
   //check params

   if(index <= 0){
    let leader = this.head;
    this.head = leader.next;
    this.length--;
    return this.printList();
   }
   if(index >= this.length){
    index = this.length -1;    
   }

     const leader = this.traverseToIndex(index - 1 );   
      const unwantedNode = leader.next;   
      const follower =  unwantedNode.next;

      leader.next = follower;
      follower.prev = leader;  
   
      
      this.length--;
    console.log('this');
    console.log(this);
    return this.printList();
  }


}

const myLinkedList = new DoublyLinkedList(10);

// console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(15);
// myLinkedList.append(16);
// myLinkedList.append(20);
//  myLinkedList.prepend(1);
//  console.log(myLinkedList.prepend(1));
// myLinkedList.insert(1,999);

console.log(myLinkedList.printList());
console.log(myLinkedList.remove(1));


// console.log(myLinkedList.printList());


// console.log(myLinkedList);
// console.log(myLinkedList.prepend(0));