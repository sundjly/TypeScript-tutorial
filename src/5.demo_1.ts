#!/usr/bin/env ts-node
// 运行 `npx ts-node 5.demo_1.ts`
console.log('hello world')
// 家谱

// class Person {
//     public children: Person[] = []; // Person类型的数组，初始值赋值为[](不然为undefined)
//     constructor(public name: string) { }
//     // addChild(child: Person|Person[]): void {
//     //     if(Object.prototype.toString.call(child) === "[object Array]"){
//     //         const preChildren: Person[] = this.children;
//     //         this.children = [...preChildren, ...child]
//     //     }
//     // }

//     addChild(child: Person): void {
//         this.children.push(child)
//     }

//     introduceFamily(): void {
//         console.log(this.name);
//         this.children.forEach(child => {
//             child.introduceFamily();
//         })
//     }
// }


function createTabs(n: number): string {
    return '----'.repeat(n);
}

class Person {
    public children: Person[] = [];
    constructor(public name: string) { }
    addChild(child: Person[]): void {
        const perChildren: Person[] = this.children;
        this.children = [...perChildren, ...child]
    }
    introduceFamily(n?: number): void {
        n = n || 0;
        console.log(`${createTabs(n)}${this.name}`);
        this.children.forEach(person => {
            person.introduceFamily(n + 1);
        });
    }
}

const grandPa = new Person('老王');
const person1 = new Person('儿子1');
const person2 = new Person('儿子2');
const child11 = new Person('孙子1');
const child12 = new Person('孙子12');
const child21 = new Person('孙子2');
const child22 = new Person('孙子3');

grandPa.addChild([person1, person2]);

person1.addChild([child11, child12]);
person2.addChild([child21, child22]);

grandPa.introduceFamily();
