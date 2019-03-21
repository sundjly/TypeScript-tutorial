# TypeScript-tutorial
### 记录一下自己学习TypeScript的历程

## 前言

TypeScript 增加了代码的可读性和可维护性，包容性也非常好，具有自动的类型推论。
- 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了
- 可以在编译阶段就发现大部分错误，比在js在运行时候出错好
- 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等

对于TypeScript学习这儿给出了一些参考：
1. 首先当然是官网  [TypeScript官网](https://www.tslang.cn/docs/home.html)
2. 推荐github上star很高的 [TypeScript-tutorial](https://github.com/xcatliu/typescript-tutorial/blob/master/introduction/what-is-typescript.md#typescript-%E5%A2%9E%E5%8A%A0%E4%BA%86%E4%BB%A3%E7%A0%81%E7%9A%84%E5%8F%AF%E8%AF%BB%E6%80%A7%E5%92%8C%E5%8F%AF%E7%BB%B4%E6%8A%A4%E6%80%A7)


## 首先安装并调试
有关学习参考了  https://segmentfault.com/a/1190000011935122   搭建了typescript的运行环境，直接配合vs code 的dubug就可以查看相关的结果，非常的方便。具体可以查看[这里](docs/1.安装.md)

>点开 VSCode 的内置终端就可以运行命令行很方便。不过有的时候会遇到奇怪的问题，遇到问题你就改用 Git Bash 即可。


## 使用最新的js一些语法
配置es2015(或者更高级的)，添加`tsconfig.json`
```
{
  "compilerOptions": {
        "lib": [
            "es2015"
        ]
    }
}
```

## demo
在src中按照数字大小依次排列了demo，可以跟随demo一起了解
