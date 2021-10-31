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
interface FullName{
    firstName:string;  //注意分号结束
    secondName?:string;
}

function printName(name:FullName){

    //必须传入对象 firstName  secondName
    console.log(name.firstName+'--'+name.secondName)
}

printName({ 
    firstName:'李'
})

    