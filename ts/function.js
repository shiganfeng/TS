/* 函数的定义 */
//函数声明法
// function run():string {
//     return '123'
// }
function getInfo(str) {
    if (typeof str === 'string') {
        return str;
    }
    else {
        return 100;
    }
}
console.log(getInfo(20));
