// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。
class Person1 {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person1 {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误


// 由于 TS 的 class 其实就是 JS 里的 class，JS 里的 class 其实就是一个构造函数。
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter2: Greeter;
greeter2 = new Greeter();
console.log(greeter2.greet());

let greeterMaker: typeof Greeter = Greeter;  // 注意这句话
console.log(greeterMaker)
greeterMaker.standardGreeting = "Hey there!11";

let greeter3: Greeter = new greeterMaker();
console.log(greeter3.greet());


class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};