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

  prepend(newValue) {
    const newNode =  new Node(newValue);
    newNode.next = this.head;
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
    
    if (index >= this.length) {
      return;
    }
  //  debugger;

    const newNode = new Node(value);
    

    /**ESTO  ES LA EXPLICACION DE COMO FUNCIONA LA INSERCION */
    /*
    //******Insertaré en el segundo nodo el nuevo nodo****
    //aqui estan todos los nodos 10-->5-->16-->20 || insertar segundo nodo 999

    //Comienzo haciendo referencia a header que tiene todos 
    //los node
    let refecenHead = this.head;
    //Almaceno  desde el segundo nodo hacia adelante.
    //NOTA: AL YO  HACER (refecenHead.next) SIMPLEMENTE ESTOY ATRVESANDO
    //AL SIGUIENTE NODO PERO EN MEMORIO  ESTA EL O LOS NODOS ANTERIORES.    
    //5-->16-->20-->null
    let SecondNodeForward = refecenHead.next;
    //Al heder  en su segundo nodo (next) se le inserta el nuevo nodo
    //10-->5-->16-->20 : 
    //resultado 10-->999-->null
    refecenHead.next =newNode;
    //En el Nodo nuevo inserto en su next  los nodos desde el segundo hacia delante 
    //10-->999-->null :
    //Result: 10-->999-->5-->16-->20-->null 
    newNode.next = SecondNodeForward;
    */
 
    
    //Reference to the head
    //10-->5__-->16-->20
    const leader = this.traverseToIndex(index-1); 
    // 16-->20
    const holdingPointer = leader.next;
    // //10-->5-->99-->null
    leader.next = newNode;
     //10-->5-->99-->16-->20
    newNode.next = holdingPointer;


    this.length++;
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


}

const myLinkedList = new LinkedList(10);

// console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
// myLinkedList.prepend(1);
myLinkedList.insert(2,999);


console.log(myLinkedList.printList());


// console.log(myLinkedList);
console.log(myLinkedList.prepend(0));