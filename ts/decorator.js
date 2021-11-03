//1.类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或者替换类定于。传入一个参数
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// function logProperty(params:any){
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
//装饰器
function logMethods(params) {
    return function (target, methodName, desc) {
        console.log('target:', target);
        console.log('methodName:', methodName);
        console.log('desc:', desc);
        console.log('params:', params);
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        console.log('5', this.url);
    };
    __decorate([
        logMethods('xxxxxx')
    ], HttpClient.prototype, "getData");
    return HttpClient;
}());
var http = new HttpClient();
http.getData();
