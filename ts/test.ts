
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
