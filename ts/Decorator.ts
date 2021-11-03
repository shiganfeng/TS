//装饰器的执行顺序
//属性-》方法-》方法参数-》类
//如果有多个同样的装饰器，它先执行后面的

//1.类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或者替换类定于。传入一个参数

// //装饰器:普通装饰器（无法传参）
// function logClass(params:any){
//     console.log(params) //params就是当前类

//     params.prototype.apiUrl = '动态扩展属性'

//     params.prototype.run=function(){
//         console.log('run方法')
//     }
// }


// @logClass
// class HttpClient{
//     constructor(){

//     }

//     getData(){

//     }
// }

// let http:any = new HttpClient()
// console.log(http.apiUrl)
// http.run()


//装饰器:装饰器工厂（可传参）
// function logClass(params:string){
//     return function(target:any){
//         console.log(target) //target就是当前类
//         console.log(params)

//         target.prototype.apiUrl = params
//     }
// }


// @logClass('http://www.baidu.com')
// class HttpClient{
//     constructor(){

//     }

//     getData(){

//     }
// }

// let http:any = new HttpClient()
// console.log(http.apiUrl)



////修改类

// function logClass(target:any){
//     console.log(target) //target就是当前类

//     return class extends target{
//         apiUrl:any = '我是修改后的url'

//         getData(){
//             this.apiUrl+='---'
//             console.log(this.apiUrl)
//         }
//     }
// }

// @logClass
// class HttpClient{
//     public apiUrl:string;
//     constructor(){
//         this.apiUrl = '我是构造函数里面的url'
//     }
    
//     getData(){
//         console.log(this.apiUrl)
//     }
// }

// let http = new HttpClient()
// console.log(http.getData())


//类装饰器
// function logClass(params:string){
//     return function(target:any){
//         console.log('1:',target) //target就是当前类
//         console.log('2:',params)
//     }
// }

// // //属性装饰器
// function logProperty(params?:any){
//     return function(target:any, attr:any){
//         console.log('3:', target) //当前类的原型对象
//         console.log('4:', attr) //属性名称

//         target[attr] = params
//     }
// }


// @logClass('http://www.baidu.com')
// class HttpClient{
//     @logProperty('xxx')
//     public url:any | undefined;
//     constructor(){
        
//     }

//     getData(){
//         console.log('5', this.url)
//     }
// }

// let http:any = new HttpClient()
// http.getData()


//方法装饰器
    //方法装饰会在运行时传入下列三个参数
    //1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
    //2.方法的名字
    //3.方法的描述

//方法装饰器一
// function logMethods(params:any){
//     return function(target:any, methodName:any, desc:any){
//         console.log('target:', target)
//         console.log('methodName:', methodName)
//         console.log('desc:', desc)
//         console.log('params:', params)

//         target.apiUrl = 'wwww'   //扩展当前类的属性和方法
//         target.run = function(){
//             console.log('run')
//         }
//     }
// }

// class HttpClient{
//     public url:any | undefined;
//     constructor(){
        
//     }
//     @logMethods('xxxxxx')
//     getData(){
//         console.log('5', this.url)
//     }
// }

// let http:any = new HttpClient()
// http.getData()
// console.log(http.apiUrl)
// http.run()

//方法装饰器二
function logMethods(params?:any){
    return function(target:any, methodName:any, desc:any){
        console.log('target:', target)
        console.log('methodName:', methodName)
        console.log('desc:', desc.value)
        console.log('params:', params)

        //修改装饰器的方法  把装饰器方法里面传入的所有参数改为string类型

        //1.保存当前的方法
        let method = desc.value
        desc.value = function(...args:any[]){
            args = args.map(item => String(item))
            console.log(args)
            method.apply(this, args)  //修改方法，不覆盖， 要覆盖的话把这行注释掉
        }

        target.apiUrl = 'wwww'   //扩展当前类的属性和方法
        target.run = function(){
            console.log('run')
        }
    }
}

class HttpClient{
    public url:any | undefined;
    constructor(){
        
    }
    @logMethods('xxxxxx')
    getData(...args:any[]){
        console.log('getData里的args:', args)
        console.log('我是getData里面的方法')
    }
}

let http:any = new HttpClient()
http.getData(111, '123')
console.log(http.apiUrl)
http.run()

//方法传参装饰器 
    //方法装饰会在运行时传入下列三个参数
    //1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
    //2.方法的名字
    //3.参数在函数参数列表中的索引
// function logMethods(params?:any){
//     return function(target:any, methodName:any, paramsIndx:any){
//         console.log('target:', target)
//         console.log('methodName:', methodName)
//         console.log('paramsIndx:', paramsIndx)
//         console.log('params:', params)

//         target.apiUrl = params
//     }
// }

// class HttpClient{
//     public url:any | undefined;
//     constructor(){
        
//     }
    
//     getData(@logMethods('xxx') uuid:any){
//         console.log('uuid', uuid)
//     }
// }

// let http:any = new HttpClient()
// http.getData('123456')
// console.log(http.apiUrl)
