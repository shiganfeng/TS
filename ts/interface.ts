//属性接口   对json的约束


//ts中定义方法
// function printLabel():void {
//     console.log('printLabel')
// }

//ts中定义方法传入参数
// function printLabel(label:string):void{
//     console.log(label)
// }


//ts中自定义方法传入参数对json进行约束
// function printLabel(labelInfo:{label:string}):void{
//     console.log(labelInfo.label)
// }

// printLabel({label: 'label'}) //正确写法


//接口：行为和动作的规范，对批量方法进行约束


//就是传入对象的约束   属性接口
// interface FullName{
//     firstName:string;  //注意分号结束
//     secondName:string;
// }

// function printName(name:FullName){

//     //必须传入对象 firstName  secondName
//     console.log(name.firstName+'--'+name.secondName)
// }

// let obj = {
//     age: 18,    
//     firstName:'张',
//     secondName:'三'
// }

// printName(obj)  //如果obj定义在外面，则obj包含firstName和secondName这两个属性就行
//                 //如果obj定义在里面，只能这样写法printName({firstName:'张',secondName:'三'})



// interface FullName{
//     firstName:string;  //注意分号结束
//     secondName:string;
// }

// function printName(name:FullName){

//     //必须传入对象 firstName  secondName
//     console.log(name.firstName+'--'+name.secondName)
// }

// function printInfo(info:FullName){

//     //必须传入对象 firstName  secondName
//     console.log(info.firstName+'--'+info.secondName)
// }

// let obj = {
//     age: 18,    
//     firstName:'张',
//     secondName:'三'
// }

// printName(obj)  //如果obj定义在外面，则obj包含firstName和secondName这两个属性就行
//                 //如果obj定义在里面，只能这样写法printName({firstName:'张',secondName:'三'})

// printInfo({ 
//     firstName:'李',
//     secondName:'四'
// })


//接口：可选属性
// interface FullName{
//     firstName:string;  //注意分号结束
//     secondName?:string;
// }

// function printName(name:FullName){

//     //必须传入对象 firstName  secondName
//     console.log(name.firstName+'--'+name.secondName)
// }

// printName({ 
//     firstName:'李'
// })


//函数类型接口：对方法传入的参数以及返回值进行约束

//加密的函数类型接口
// interface encrypt{
//     (key:string, value:string):string;
// }

// let md5:encrypt = function(key:string, value:string):string{
//     //模拟操作
//     return key+':'+value
// }

// console.log(md5('name', '张三'))

//可选参数

// interface encrypt{
//     (key:string, value?:string):string;
// }

// let md5:encrypt = function(key:string, value:string | undefined):string{
//     //模拟操作
//     return key+':'+value
// }

// console.log(md5('name'))


//可索引接口  对数组的约束(不常用)
//ts中定义数组的方式
// var arr:number[] = [1, 3]
// var arr1:Array<any> = ['1', 2]

// interface UserArr{
//     [index:number]:string;  //索引值是number, value值是string
// }

// let arr:UserArr = ['123', 'sgf']
// console.log(arr[1])


//可索引接口  对对象的约束(不常用)

// interface UserObj{
//     [index:string]:string
// }

// let arr:UserObj = {
//     name: 'sgf'
// }


//类类型接口：对类的约束  和抽象类有点相似
// interface Animal{
//     name:string;
//     eat(str:string):void;
// }

// class Dog implements Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name
//     }

//     eat():void{
//         console.log(this.name+'吃粮食')
//     }
// }

// let mydog = new Dog('小黑')
// mydog.eat()

// class Cat implements Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name
//     }

//     eat(food:string):void{
//         console.log(this.name+'吃'+food)
//     }  
// }

// let mycat = new Cat('小花')
// mycat.eat('mouse')


//接口扩展，接口可以继承接口
interface Animal{
    eat():void;
}

interface Person extends Animal{
    work():void;
}

class Programer{
    public name:string;
    constructor(name:string){
        this.name = name
    }

    coding(code:string):void{
        console.log(this.name+code)
    }
}

class Web extends Programer implements Person{
    
    constructor(name:string){
        super(name)
    }

    eat(){
        console.log(this.name+'eat')
    }

    work(){
        console.log(this.name+'work')
    }
}

let myweb = new Web('小李')
myweb.work()
myweb.coding('js')

    