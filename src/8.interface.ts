interface Shape {
    head: string;
    body: string;
}
/* 

一般是声明类有哪些属性，方法
*/
interface Human {
    readonly name: string;
    age: number;
    shape: Shape;
    likedGame?: Array<string>;
    say(word: string): void;
}

let frank: Human = {
    name: 'sundjly',
    age: 1,
    shape: { head: 'head', body: '1' },
    say(word: string) {
        console.log(`${this.name}:${word}`)
    }

}

// 难点 ：声明了一个函数，它还有一个text2的方法   (关键词，立即执行函数)
// 来自 https://stackoverflow.com/questions/16508435/implementing-typescript-interface-with-bare-function-signature-plus-other-fields
interface MyInterface {
    (): string;
    text2(content: string);
}

const MyType = ((): MyInterface => {
    const x: any = function (): string { // Notice the any  any类型TypeScript就不会检查x的类型
        return "Some string"; // Dummy implementation 
    }
    x.text2 = function (content: string) {
        console.log(content); // Dummy implementation 
    }
    return x;
}
);

const returnMyType:MyInterface = MyType();
// 需要一定的理解
const MyType2: MyInterface = ((): MyInterface => {
    const x: any = function (): string { // Notice the any  any类型TypeScript就不会检查x的类型
        return "Some string"; // Dummy implementation 
    }
    x.text2 = function (content: string) {
        console.log(content); // Dummy implementation 
    }
    return x;
})();
