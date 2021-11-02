interface DBI<T>{
    add(info:T):boolean;
    update(info:T, id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}
//要实现泛型接口，这个类也应该是一个泛型类
export class MySqlb<T> implements DBI<T>{
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

export class MsSqlDb<T> implements DBI<T>{
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
