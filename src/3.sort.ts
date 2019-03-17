function min(a: number, b: number): number {
    return a > b ? b : a;
}

console.log(min(1, 2))

// 函数重载
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b
}

console.log(add(1, 2))
console.log(add('1', 'dsfadf'))
// console.log(add(1, '232')) //Argument of type '1' is not assignable to parameter of type 'string'.

// 选择排序
function selectSort(a: number[]): number[] {
    for (let i = 0; i < a.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        [a[minIndex], a[i]] = [a[i], a[minIndex]];
    }
    return a
}

let b: number[] = selectSort([5, 8, 10, 4, 3, 6, 8])
console.log(b)

// 快速排序
function quickSort(arr: Array<number>): Array<number> {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left: number[] = [];
    let right: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }

    }
    return quickSort(left).concat([pivot], quickSort(right));
}

b = quickSort([1, 8, 4, 1, 2, 14, 5, 8])
console.log(b)

// 冒泡排序
function bubbleSort(arr: Array<number>): Array<number> {
    let len: number = arr.length
    for(let outer = len; outer >=2; outer --){
        for(let inner = 0; inner <=outer; inner++){
            if(arr[inner] > arr[inner+1]){
                [arr[inner],arr[inner+1]] = [arr[inner+1],arr[inner]]
            }
        }
    }
    return arr;
}

b = bubbleSort([1, 8, 4, 1, 2, 14, 5, 8])
console.log(b)

// 插入排序: 将元素插入到已排序好的数组中
function insertSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) { 
        for (let j = i; j > 0; j--) { 
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            }else{
                break;
            }
        }
        
    }
    return arr;
}

b = insertSort([1, 8, 4, 1, 2, 14, 5, 8])
console.log(b)

// 斐波那契数列
function cStairs(n:number): number{
    if(n===1 || n===2){
        return 1;
    }else{
        return cStairs(n-1) + cStairs(n-2)
    }
}

let a:any = cStairs(20);
console.log(a)