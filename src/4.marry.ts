const enum Gender {
    Male,
    Female
}

interface Man {
    gender: Gender,
    age: number,
}

interface Woman extends Man {
    description: string
}

interface Person {
    gender: Gender,
    age: number,
}
function marry(a: Man, b: Woman): [Man, Woman] {
    if (a.gender !== b.gender) {
        return [a, b]
    } else {
        throw new Error('性别相同不能结婚！')
    }
}

let result: any = marry({ gender: Gender.Male, age: 22 }, { gender: Gender.Female, age: 24, description: 'dafadsfadsf' });
console.log('sdj', result)