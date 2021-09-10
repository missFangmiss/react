//继承



/* function Cat(name,color){
    this.name = name;
    this.color = color;
} */

//call,apply
var obj = {
    name : '小张',
    objAge : this.age,
    myfun : function(from,to){
        console.log(this.name+this.age+from+to);//这里的this指向obj
    }
}
var db = {name:'小李',age:99}
//将obj的myfun中的this绑定到db上
//参数：实例对象，传入的参数
obj.myfun.call(db,'上海','北京') 
obj.myfun.apply(db,['上海','北京']);




//1.构造函数绑定
/* 
function Animal(){
    this.species = 'animal';
}
function Cat(name,color){
    //apply,call 将父对象的构造函数绑定在子对象上
    Animal.apply(this,arguments);
    this.name = name;
    this.color = color;
}

var cat1 = new Cat('pig','red');
console.log(cat1.species); */

//2.prototype模式
//如果猫的prototype指向的对象 是animal 那么猫的实例能继承animal
/* function Animal(){
    this.species = 'animal';
}
function Cat(name,color){
    this.name = name;
    this.color = color;
} 
// Animal.prototype.species = '222';
// Cat.prototype = Animal.prototype;
Cat.prototype = new Animal();//animal的实例中有Animal构造函数中的属性，prototype对象中没有
//后果？？？
//*因为cat1是用Cat构造函数生成的，即如果替换了prototype对象，下一步必然是为新的prototype对象加上constructor属性，并将这个属性指向原来的构造函数
Cat.prototype.constructor  = Cat;
var cat1 = new Cat('1','2');
console.log(cat1.species); */

//3直接继承prototype
function Animal(){}
Animal.prototype.spicial = 'animal';
function Cat(name,color){this.name = name ; this.color = color}
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat('1','2');
console.log(cat1.spicial);
