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
//     console.log(target)

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
function logClass(params:string){
    return function(target:any){
        console.log(target) //target就是当前类
        console.log(params)
    }
}

//属性装饰器
function logProperty(params:any){
    return function(target:any, attr:any){
        console.log(target) //当前类的原型对象
        console.log(attr) //属性名称

        target[attr] = params
    }
}


@logClass('http://www.baidu.com')
class HttpClient{
    @logProperty('xxx')
    public url:any | undefined;
    constructor(){

    }

    getData(){
        console.log(this.url)
    }
}

let http:any = new HttpClient()
http.getData()
