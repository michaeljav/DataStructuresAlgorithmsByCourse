# DataStructuresAlgorithmsByCourse
Udemy Master the Coding Interview: Data Structures + Algorithms


##### 1. Big O 

**Official term:** Asymptotic Analysis:
It can tell us how well a problem is solved.
##### What is good or clean code?
1. **Readable**: can others understand.
1. **Scalable**: Big O notation is what allows us to measure this idea of scalable code that can scale.
> -->Speed  And  ---> Memory
> -->Readable (maintainable),Memory(Space Complexity)  ,Speed(Time Complexity)

**Space Complexity:** Additional space so we don't include space taken up by the inputs.



**When a program  executes,** it has two ways to remembers things, the heap and the stack.
**The heap** is usually where we store variables that we assign values to, and the stack is usually where we keep track of our function calls.


![](BigOchart.png)
* A runtime  is simply how long  something takes to run.

* That's what scalability means as things grow larger
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
![](Same%20indentations.png)
And anything that happens with indentation that is nested. You multiply, so, again, different inputs should have different variables.
![](Different%20Indentation.png)
**

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
* Arrays
* Stacks
* Queues
* Linked Lists
* Trees
* Tries
* Graphs
* Hash Tables,etc

**Algorithms**
* Sorting
* Dynamic Programming
* BFS + DFS (Searching)
* Recursion,etc



##### Data Structures
Is a collections of values
##### Algorithms
Are the steps or processes we put into place to manipulate these collection of values.

**Data Structures + Algorithms = Programs**

Data Structures
Is a collections of values.

##### Operations On Data Structures
* Access (lookup00)
* Searching
* Insertion
* Deletion
* Traversal
* Sorting

##### Data Structures
* Arrays: 
//if system is 32bit every variable uses
//4 shelves of memory to store one variable
//8 bit is a byte
//4 bytes of 8bit each one  is 32 bits in memory
>Type of Arrays: Static Array and Dynamic  array.

**//Reference type**
* //[] === []   false

//var object1 ={ value: 10}
//var object2  = object1;  //true
//context vs scope
//scope
//function b(){} new scope
//COntext: is the object environment that we're in.
this === window  true
this: is just refers to what object it's inside of.

* This: can be in another object.
const object4 ={
    a: function(){
        Console.log(this);
        
    }
    }


**//instantiation** 



![](Array%20Memory.png)



