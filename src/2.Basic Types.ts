// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK

// x = [10, 'hello']; // Error

x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

// console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

// x[6] = true; // Error, 布尔不是(string | number)类型

console.log(x)

// enum
// enum Color {Red, Green, Blue}
enum Color {Red = 1, Green = 3, Blue = 2}
let c: Color = Color.Red;// 默认值为从0开始的编号，  Red：0，Green：1， Blue：2
console.log('sdj', c)

console.log('sdj',Color[2])// 也可以根据值找到对应的enum


function warnUser(): void {
    console.log("This is my warning message");
}
warnUser()

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// infiniteLoop()


let someValue: any = "this is a string";
// 类型推论
let strLength: number = (<string>someValue).length;
console.log(strLength)