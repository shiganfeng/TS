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
// interface Animal{
//     eat():void;
// }

// interface Person extends Animal{
//     work():void;
// }

// class Programer{
//     public name:string;
//     constructor(name:string){
//         this.name = name
//     }

//     coding(code:string):void{
//         console.log(this.name+code)
//     }
// }

// class Web extends Programer implements Person{
    
//     constructor(name:string){
//         super(name)
//     }

//     eat(){
//         console.log(this.name+'eat')
//     }

//     work(){
//         console.log(this.name+'work')
//     }
// }

// let myweb = new Web('小李')
// myweb.work()
// myweb.coding('js')



//函数类型接口
// interface ConfigFn{
//     (value1:string, value2:string):string;
// }

// var setData:ConfigFn=function(value1:string, value2:string):string{
//     return value1+value2
// }

// setData('张三','吃饭')

//1.泛型接口
// interface ConfigFn{
//     <T>(value:T):T;
// }

// var getData:ConfigFn=function<T>(value:T):T{
//     return value
// }

// getData<string>('张三')

//2.泛型接口
// interface ConfigFn<T>{
//     (value:T):T;
// }

// function getData<T>(value:T):T{
//     return value
// }

// var myGetData:ConfigFn<string>=getData;
// myGetData('张三') 


//操作数据库的泛型类
// class MysqlDb<T>{
//     add(info:T):boolean{
//         console.log(info)
//         return true
//     }
// }

// //1.定义一个User类 和数据库进行映射
// class User{
//     username:string | undefined;
//     password:string | undefined;
// }

// var u = new User()
// u = {
//     username: 'sgf',
//     password: '123'
// }

// var Db = new MysqlDb<User>()
// Db.add(u)

// //2.定义一个ArticleCate类 和数据库进行映射
// class ArticleCate{
//     title:string | undefined;
//     desc:string | undefined;
//     status:number | undefined;
//     constructor(params:{
//         title:string | undefined,
//         desc:string | undefined,
//         status?:number | undefined
//     }){
//         this.title = params.title
//         this.desc = params.desc
//         this.status = params.status
//     }
// }

// var a = new ArticleCate({
//     title:'分类',
//     desc:'111'
// })

// let db1 = new MysqlDb<ArticleCate>()
// db1.add(a)



/*  */
interface DBI<T>{
    add(info:T):boolean;
    update(info:T, id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}
//要实现泛型接口，这个类也应该是一个泛型类
class MySqlb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log(info)
        return true
    }
    update(info: T, id: number): boolean {
        return true
    }
    delete(id: number): boolean {
        return true
    }
    get(id: number): any[] {
        return []
    }
    
}

class MsSqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log(info)
        return true
    }
    update(info: T, id: number): boolean {
        return true
    }
    delete(id: number): boolean {
        return true
    }
    get(id: number): any[] {
        return []
    }
    
}

//操作用户表  定义一个User类和数据表做映射
class User{
    username:string | undefined;
    password:string | undefined;
    constructor(params:{
        username:string | undefined;
        password:string | undefined;
    }){
        this.username = params.username
        this.password = params.password
    }
}


let u = new User({
    username: 'sgf',
    password: '123'
})

let oMysql = new MySqlb<User>() //类作为参数来约束传入的类型
oMysql.add(u)

let oMssql = new MsSqlDb<User>()
oMssql.add(u)


    