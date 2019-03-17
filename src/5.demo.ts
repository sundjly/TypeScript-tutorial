#!/usr/bin/env ts-node
console.log(process.argv)
// process是获取当前进程  需要安装   npm i -D  @types/node
console.log('hello world')

let add1: number = parseInt(process.argv[2]);
let add2: number = parseInt(process.argv[3]);
if (isNaN(add1) || isNaN(add2)) {
    console.log('请输入数字')
    process.exit(100);
}
console.log(add1 + add2);
console.log(add1 - add2)
// 0表示正常退出
process.exit(0);

