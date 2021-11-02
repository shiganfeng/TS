import { MsSqlDb } from "./db";

//命名空间
export namespace A{
    //操作用户表  定义一个User类和数据表做映射
    export class UserClass{
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


export let userModal = new MsSqlDb<UserClass>()//类作为参数来约束传入的类型
}

export namespace B{
    //操作用户表  定义一个User类和数据表做映射
    export class UserClass{
        name:string | undefined;
        desc:string | undefined;
        constructor(params:{
            name:string | undefined;
            desc:string | undefined;
        }){
            this.name = params.name
            this.desc = params.desc
        }
    }
    
    
    export let userModal = new MsSqlDb<UserClass>()//类作为参数来约束传入的类型
    }
