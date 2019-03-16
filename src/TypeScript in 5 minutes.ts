// 学习新语言必打印的hello world
console.log('hello world');

function greeter(person: number[]) {
    return "Hello, " + person;
}

let user: any = [0, 1, 2];
console.log(greeter(user));

interface Person {
    firstName: string;
    lastName: string;
}

function greeter1(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

user = { firstName: "Jane", lastName: "User" };
console.log(greeter1(user));

// 在构造函数的参数上使用public等同于创建了同名的成员变量
class Student {
    fullName: string;
    firstName: string;
    middleInitial: string;
    lastName: string;
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial
        this.lastName = lastName
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

user = new Student("Jane", "M.", "User");
console.log(greeter1(user));