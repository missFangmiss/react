//封装数据和方法以及从原型对象生成实例


/* var cat  = { name:'',color:''}; */
//根据此规格生成两个实例对象
//1
/* var cat1 = {}; cat1.name="1";cat1.color="red";
var cat2 = {}; cat2.name="2";cat2.color="black" */

//2 cat1和cat2没有内在的联系，不能看出是同一个原型对象的实例
/* function Cat(name,color){
    return{
        name:name,
        color:color
    }
} */
/* var cat1 = Cat('1','red');
var cat2 = Cat('2','black'); */

//3.构造函数模式 
//构造函数=>普通函数 内部使用了this变量，对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上
function Cat(name,color){
    this.name = name;
    this.color = color;
}
Cat.prototype.type='animal';
Cat.prototype.eat = function(){console.log('eat');}
//生成的实例对象 会自动含有一个constructor属性，指向他们的构造函数
var cat1 = new Cat('1','red');

console.log(cat1 instanceof Cat);//使用instanceof验证原型对象和实例之间的关系
// console.log(cat1.constructor);
console.log(Cat.prototype.constructor === cat1.constructor);
console.log(cat1.__proto__ === cat1.constructor)
//对于每个实例对象，type属性和eat方法都是一模一样的内容，每次生成一个实例，多占用一些内存
/* function Cat(name,color){
    this.name = name;
    this.color = color;
    this.type = 'animal';
    this.eat = function(){console.log('eat something')};
    
}
var cat1 = new Cat('1','red');
var cat2 = new Cat('2','black');
console.log(cat1.eat === cat2.eat); */

//js规定，每一个构造函数都有一个prototype属性，指向另一个对象，这个对象所有的属性和方法，都会被构造函数的实例继承
/* function Cat(name,color){
    this.name = name;
    this.color = color;
}

Cat.prototype.type='animal';
Cat.prototype.eat = function(){console.log('eat');}
var cat1 = new Cat('1','2');
var cat2 = new Cat('2','21');
console.log(cat1.eat === cat2.eat);
console.log(cat1.name === cat2.name);
console.log(Cat.prototype.isPrototypeOf(cat1));
console.log(cat1.hasOwnProperty('name'));//每个实例对象都有一个hasOwnProperty方法，来判断某一属性是本地属性还是继承prototype属性
console.log(cat1.hasOwnProperty('type'));
console.log('name' in cat1);//in运算符可以用来判断 某个实例是否含有某个属性，不管是不是本地属性
console.log('type' in cat1); */
//js定义class的三种方法
//在面向对象编程时，类是对象的模板，定义了同一组对象（实例）共有的属性和方法


//1.构造函数法
//使用构造函数模拟类，在其内部this关键字指代实例对象
/* function Cat(){
    this.name = 'name'
} */
//生成实例时，使用new关键字
/* var cat1 = new Cat();
console.log(cat1.name); */
//类的属性和方法 海可以定在构造函数的prototype对象之上
/* Cat.prototype.makeSound = function(){
    console.log('make sound');
} */

