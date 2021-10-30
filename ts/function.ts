/* 函数的定义 */
//函数声明法
// function run():string {
//     return '123'
// }

//匿名函数法
// var fun1 = function():number {
//     return 123
// }
// fun1()

//定义方法传参
// function getInfo(name:string, age:number):string {
//     return `${name}---${age}`
// }
// console.log(getInfo('sgf', 24))

//匿名函数传参
// let getInfo = function(name:string, age:number):string {
//     return `${name}---${age}`
// }
// console.log(getInfo('sgf', 24))

//没有返回值的方法
// function run():void{
//     console.log('run')
// }
// run()

//方法可选参数
//es5里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
//注意：可选参数必须配置到参数的最后面
// function getInfo(name:string, age?:number):string {
//     if(age) {
//         return `${name}---${age}`
//     }else{
//         return `${name}---年龄保密`
//     }
    
// }
// console.log(getInfo('sgf'))

//默认参数
// function getInfo(name:string, age:number=23):string {
//     if(age) {
//         return `${name}---${age}`
//     }else{
//         return `${name}---年龄保密`
//     }
    
// }
// console.log(getInfo('sgf', 30))

//剩余参数
// function sum(a:number, b:number, c:number, d:number):number {
//     return a+b+c+d
// }
// console.log(sum(1,2,3,4))
function sum(a:number, ...result:number[]):number {
    return a+result.reduce((pre, cur) => {
        return pre + cur
    }, 0)
}
console.log(sum(10,1,2,3,4,5))//等价于a=10, result=[1,2,3,4,5]

//函数重载
//typescript中的重载，通过为同一个函数提供多个函数类型定义来试下多种功能的目的


