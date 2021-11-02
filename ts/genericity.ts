//泛型就是解决 类 接口 方法的复用性，以及对不特定数据类型的支持


//只能返回string类型数据
// function getData(value:string):string{
//     return value
// }

//同时返回string number类型   （可以用any,放弃了类型检查）

//泛型，可以支持不特定的数据类型  要求：传入参数和返回的参数一致
//泛型函数
// function getData<T>(value:T):T{
//     return value
// }

// getData<number>(123)
// getData<string>('sgf')

// function getData1<T>(value:T):any{
//     return value
// }

// getData1<number>(123)
// getData1<string>('sgf')

//泛型类  例如需要同时支持返回数字和字符串两种类型
// class MinClass {
//     public list:number[] = [];

//     add(num:number){
//         this.list.push(num)
//     }

//     min():any{
//         let minNum = this.list.length ? this.list[0] : '数组为空'
//         this.list.sort(function(a, b){
//             return a-b
//         })
//         minNum = this.list.length ? this.list[0] : '数组为空'
//         return minNum
//     }
// }

// let mymin = new MinClass()
// console.log(mymin.min())
// mymin.add(4)
// mymin.add(5)
// mymin.add(1)
// mymin.add(3)
// console.log(mymin.min())


//类的泛型
class MinClass<T> {
    public list:T[] = [];

    add(value:T):void{
        this.list.push(value)
    }

    min():T{
        let minNum = this.list[0]
        this.list.sort(function(a:any, b:any){
            return a-b
        })
        minNum = this.list[0]
        return minNum
    }
}

let mymin = new MinClass<string>() //实例化类，并且制定了类的T代表的类型是string
mymin.add('1')
mymin.add('2')

