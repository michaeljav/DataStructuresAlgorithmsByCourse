//Reference type
//[] === []   false
//var object1 ={ value: 10}
//var object2  = object1;  //true
//context vs scope
//scope
//function b(){} new scope
const object4 ={
  a: function(){
    console.log(this);
      
  }
  }
  object4.a();
  console.log(this);

//instantiation 

class Player {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}


class Wizard extends Player {
  constructor(name, type) {
    super(name,type);
  }
  play(){
    console.log(`WEEEEE I am a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.introduce();
wizard1.play();
wizard2.introduce();
wizard2.play();