# DataStructuresAlgorithmsByCourse

Udemy Master the Coding Interview: Data Structures + Algorithms

##### 1. Big O

**Official term:** Asymptotic Analysis:
It can tell us how well a problem is solved.

##### What is good or clean code?

1. **Readable**: can others understand.
1. **Scalable**: Big O notation is what allows us to measure this idea of scalable code that can scale.
   > -->Speed And ---> Memory
   > -->Readable (maintainable),Memory(Space Complexity) ,Speed(Time Complexity)

**Space Complexity:** Additional space so we don't include space taken up by the inputs.

**When a program executes,** it has two ways to remembers things, the heap and the stack.
**The heap** is usually where we store variables that we assign values to, and the stack is usually where we keep track of our function calls.

![](BigOchart.png)

- A runtime is simply how long something takes to run.

- That's what scalability means as things grow larger
  and larger

##### BIG O NOTATIONS

1. **O(n)** Linear time O(10),time O(1000)
1. **O(1)** Constant time

##### 4 Rule Book

1. Worst Case
1. Remove Constants
1. Different terms for inputs -->
   O(Arrayinput + ArrayInput2)
1. Drop Non Dominants

**Note: Different terms for inputs**

> **An easy rule of thumb is any step that happens in the same indentation. So one after another, you add.
> ![](Same%20indentations.png)
> And anything that happens with indentation that is nested. You multiply, so, again, different inputs should have different variables.
> ![](Different%20Indentation.png) > **

**Note:Drop Non Dominants**
![](Dominant%20Term.png)
O(n^2)

##### HOW TO SOLVE PROBLEMS

Company looking for:

1. Analytic Skills
2. Coding Skills
3. Technical Skills
4. Communications Skills

To solve coding problems:
**Data Structures**

- Arrays
- Stacks
- Queues
- Linked Lists
- Trees
- Tries
- Graphs
- Hash Tables,etc

**Algorithms**

- Sorting
- Dynamic Programming
- BFS + DFS (Searching)
- Recursion,etc

##### Data Structures

Is a collections of values

##### Algorithms

Are the steps or processes we put into place to manipulate these collection of values.

**Data Structures + Algorithms = Programs**

Data Structures
Is a collections of values.

##### Operations On Data Structures

- Access (lookup00)
- Searching
- Insertion
- Deletion
- Traversal
- Sorting

##### Data Structures

- **ARRAYS:**
  //if system is 32bit every variable uses
  //4 shelves of memory to store one variable
  //8 bit is a byte
  //4 bytes of 8bit each one is 32 bits in memory
  > Type of Arrays: Static Array and Dynamic array.

**//Reference type**

- //[] === [] false

//var object1 ={ value: 10}
//var object2 = object1; //true
//context vs scope
//scope
//function b(){} new scope
//COntext: is the object environment that we're in.
this === window true
this: is just refers to what object it's inside of.

- This: can be in another object.
  const object4 ={
  a: function(){
  Console.log(this);
  }
  }

**//instantiation**

![](Array%20Memory.png)

- **HASH TABLES: KEY, VALUE**
  There are many ways to call this data structure: hash maps, maps, unordered maps, dictionaries, objects.

in javascript:

map()

sets()

**type coercion javascript**: Undefined == 0 inside if().
Type coercion is the automatic or implicit conversion of values from one data type to another. For example, converting a string value to an equivalent number value. It is also known as type conversion.

##### LINKED LISTS

Operations:append,prepend

##### HOW JAVASCRIPT WORKS

what is a Program:
--allocate memory
--parse and execute

Javascript Engine: that each browser implements:
Chrome: V8 engine which reads the javascript that we write
and changes into machine executable instructions for the browser.

V8 Engine:
has two part;

----> Memory Heap
where the memory allocation happens
const a = 1 ;
\*\*Memory leak: happen when you have unused memeory,
such as let's say we're not using some variable
but it's still declare. it fills up this memory heap.

----> Call Stack
this is where your code is read and executed.
It tells you where you are in the program.

---->Javascript is a single thread language that can be non-blocking?

Asyncronous: for this we need javascript Run-Time environment which is part of the browser.
Javascript Run-time environment is inside of the browser and has web apis, event loop , callback queue. This is not part of javascript

//call stack

//web api

//callback queue

// event loop
