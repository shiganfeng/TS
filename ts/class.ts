//1.ts中定义类
// class Person{
//     name:string; //属性，前面省略了public关键字

//     constructor(n:string){ //构造函数，实例化类的时候触发的方法
//         this.name = n
//     }

//     run():void{
//         console.log(this.name)
//     }
// }

// let p = new Person('张三')
// p.run()

// class Person{
//     name:string; //属性，前面省略了public关键字

//     constructor(n:string){ //构造函数，实例化类的时候触发的方法
//         this.name = n
//     }

//     getName():string{
//         return this.name
//     }
//     setName(name:string):void{
//         this.name = name
//     }
// }

// let p = new Person('张三')
// console.log(p.getName())
// p.setName('李四')
// console.log(p.getName())

//2.ts中实现继承 extends
// class Person{
//     name:string;

//     constructor(name:string){
//         this.name = name
//     }

//     run():string{
//         return this.name
//     }
// }

// let p = new Person('李四')
// // console.log(p.run())

// class Web extends Person{
//     constructor(name:string){
//         super(name)
//     }

//     run():string{
//         return '子类的run方法'
//     }

//     work():void{
//         console.log('work')
//     }
// }

// let w = new Web('张三')
// console.log(w.run())

//3.类里面的修饰符 typescript里面定义属性的时候给我们提供了三种修饰符
/* 
    public          :共有 在类里面，子类，类外面都可以访问
    protected       :保护类型  在类里面，子类里面可以访问，在类外无法访问
    private         :私有类型  在类里面可以访问，子类和类外都无法访问

    属性如果不加修饰符，默认为共有public
*/

/* public共有 */
// class Person{
//     public name:string; //共有属性

//     constructor(name:string){
//         this.name = name
//     }

//     run():string{
//         return this.name
//     }
// }

// let p = new Person('李四')
// console.log(p.name) //类外可以访问

// class Web extends Person{
//     constructor(name:string){
//         super(name)
//     }

//     run():string{
//         return '子类的run方法'
//     }

//     work():string{
//         return `${this.name}在工作`
//     }
// }

// let w = new Web('张三')
// console.log(w.work())

/* protected类型 */
// class Person{
//     protected name:string; //保护属性

//     constructor(name:string){
//         this.name = name
//     }

//     run():string{
//         return this.name
//     }
// }

// let p = new Person('李四')
// // console.log(p.name) //类外无法访问

// class Web extends Person{
//     constructor(name:string){
//         super(name)
//     }

//     run():string{
//         return '子类的run方法'
//     }

//     work():string{
//         return `${this.name}在工作`
//     }
// }

// let w = new Web('张三')
// console.log(w.work())

/* private类型 */
// class Person{
//     private name:string; //保护属性 只能在Person类内部使用

//     constructor(name:string){
//         this.name = name
//     }

//     run():string{
//         return this.name
//     }
// }

// let p = new Person('李四')
// // console.log(p.name) //类外无法访问

// class Web extends Person{
//     constructor(name:string){
//         super(name)
//     }

//     run():string{
//         return '子类的run方法'
//     }

//     work():string{
//         return `${this.name}在工作` 
//     }
// }

// let w = new Web('张三')
// console.log(w.work())



//静态属性 静态方法
// class Person {
//     public name:string
//     public age:number=20
//     //静态属性
//     static sex:string = '男'

//     constructor(name:string) {
//         this.name = name
//     }
//     //实例方法
//     run():void{
//         console.log(`${this.name}在运动`)
//     }
//     work():void{
//         console.log(`${this.name}在工作`)
//     }

//     //静态方法  里面没法直接调用类里面的属性
//     static print():void{
//         console.log('print方法')
//         console.log('print方法'+Person.sex)
//         // console.log('print方法'+this.age)
//     }
// }

// let p = new Person('张三')
// p.run()
// Person.print() //调用静态方法
// console.log(Person.sex) //调用静态属性


//多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
//多态属于继承
// class Animal {

//     public name:string

//     constructor(name:string){
//         this.name = name
//     }

//     eat(){
//         console.log('吃的方法')
//     }
// }

// class Dog extends Animal {
//     constructor(name:string) {
//         super(name)
//     }

//     eat():string{
//         return this.name+'吃肉'
//     }
// }

// class Cat extends Animal {
//     constructor(name:string) {
//         super(name)
//     }

//     eat():string{
//         return this.name+'吃老鼠'
//     }
// }


//抽象类
//ts中的抽象类，它是提供其他类继承的基类，不能直接被实例化
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//abstract 抽象方法只能放在抽象类里面

//抽象类和抽象方法用来定义标准  Animal 这个类要求它的子类必须包含eat方法
abstract class Animal {
    public name:string

    constructor(name:string) {
        this.name = name
    }
    
    abstract eat():any
}

// var a = new Animal() /* 抽象类无法实例化 */

class Dog extends Animal {
    //抽象类的子类必须实现抽象类里面的抽象方法

    constructor(name:string){
        super(name)
    }

    eat(){
        console.log(this.name+'吃粮食')
    }
}

var d = new Dog('小白')
d.eat()

