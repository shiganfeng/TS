//布尔类型(boolean) true false
// let flag: boolean = true
// console.log(flag)

//数字类型(number)
// let a: number = 123
// console.log(a)

//字符串类型(string)
// let str:string = '123'
// console.log(str)

//第一种定义数组的方式
// let arr:number[] = [1,2,3]//number类型数组
// console.log(arr)
// let arrstr:string[] = ['1', '2', '3']//string类型数组
// console.log(arrstr)

//第二种定义数组的方式
// let myarr:Array<number> = [1,2,3] //number类型数组
// let mystr:Array<string> = ['1', '2', '3', '4'] //string类型数组
// console.log(myarr)
// console.log(mystr)

//第三种定义数组的方式
// let arr:any[] = [1, '123', true]
// console.log(arr)

//元祖类型(tuple) 属于数组的一种
// let arr:[string, number, boolean]
// arr  = ['1', 1, true]
// console.log(arr)

//枚举类型
// enum Flag {success=1, error=-1}
// let f: Flag = Flag.success
// console.log(f)

// enum Color {red, blue=5, green}
// let c: Color = Color.green //没有复制的话，默认是索引值
// console.log(c)

//null 和 undefined 其他（nevre类型)数据类型的子类型
// let num: number
// console.log(num) //输出：undefined //报错

// let num: undefined
// console.log(num) //输出：undefined //正确

//定义未赋值就是undefined
// let num: number | undefined
// console.log(num)

//一个元素可能是number，可能是null，可能是undefined
// let num: number | undefined | null
// num = null
// console.log(num)

//void类型：typescript中的void表示没有任何类型，一般用于定义方法的时候没有返回值
// function run(): void{
//     console.log('run')
// }
// run()

// function run(): number{
//     console.log(123)
//     return 123
// }
// run()

//never类型：是其他类型（包括null和undefined）的子类型，代表从不会出现的值
//这意味着声明never的变量只能被never类型所赋值
// let a: never
// a = (()=>{
//     throw new Error('错误')
// })()


