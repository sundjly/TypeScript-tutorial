// 正则匹配练习  来自https://juejin.im/post/5ac1f1106fb9a028be362731

/* 
\   转义字符
* 	匹配前一个表达式0次或多次。等价于 {0,}。
+   匹配前面一个表达式1次或者多次。等价于 {1,}。
?   匹配0次或者1次,{0,1}
.   匹配除换行符之外的任何单个字符
(x) 匹配 'x' 并且记住匹配项，常用于replace
x(?=y) 匹配'x'仅仅当'x'后面跟着'y'.这种叫做正向肯定查找
x(?!y) 匹配'x'仅仅当'x'后面不跟着'y',这个叫做正向否定查找。
[xyz]  匹配方括号中的任意字符

*/

// 给定这样一个连字符串，写一个function转换为驼峰命名法形式的字符串 getElementById
let s1: string = "get-element-by-id";
function f1(s: string): string {
    return s.replace(/-\w/g, (x: string) => {
        return x.slice(1).toUpperCase();
    })
}
console.log(f1(s1))

// 判断字符串是否包含数字
let s2: string = '12saad';
function f2(s: string): boolean {
    const regx = /\d/;
    return regx.test(s)
}

console.log(f2(s2))

// 判断电话号码
let s3: string = '14660731152';
function f3(s: string): boolean {
    const regx = /^1[34578]\d{9}$/;
    return regx.test(s)
}
console.log('3', f3(s3));

/* 
给定字符串str，检查其是否符合如下格式
1.XXX-XXX-XXXX
2.其中X为Number类型
 */

let s4: string = '123-234-3213';
function f4(s: string): boolean {
    const regx = /^(\d{3}-){2}\d{4}$/;
    return regx.test(s);
}
console.log('4', f4(s4))

// hard
/* 

给定字符串 str，检查其是否符合美元书写格式

1.以 $ 开始
2.整数部分，从个位起，满 3 个数字用 , 分隔
3 如果为小数，则小数部分长度为 2
4 正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3**
*/
let s5: string[] = ['$1,023,032.03', '$2.03'];
function f5(s: string): boolean {
    const regx = /^\$\d{1,3}(,\d{3}){0,}(\.\d{2}){0,1}$/;
    return regx.test(s)
}
if (s5.every(val => f5(val))) {
    console.log('5', true)
}


/* JS实现千位分隔符 */
let s6: number = 21312312;
function f6(s: number) {
    const sStr: string = s.toString();
    // const regx = /\d{1,3}(?=(\d{3})+$)/g;
    const regx = /\d{1,3}(?=(\d{3}){1,}$)/g;
    // return sStr.replace(regx,'$&,'); //  $&表示与regx相匹配的字符串
    return sStr.replace(regx, (x) => {
        // console.log('f6', x)
        return `${x},`
    })
}
console.log('6', f6(s6));


/* 
获取 url 中的参数

1 指定参数名称，返回该参数的值 或者 空字符串
2 不指定参数名称，返回全部的参数对象 或者 {}
3 如果存在多个同名参数，则返回数组
*/
let s7 = '/zentao/js/chartjs/chart.line.min.js?v=pro6.7.3&_=1553315640088';
function getUrlParams(url: string) {
    const arr = {};
    const regx = /\?{0,1}(\w{1,})=(\w{1,})&?/g;
    url.replace(regx, (match, matchKey, matchValue): string => {
        console.log('getUrlParams', match, matchKey, matchValue);
        if (!arr[matchKey]) {
            arr[matchKey] = matchValue;
        } else {
            const temp = arr[matchKey];
            arr[matchKey] = [].concat(temp, matchValue);
        }
        return '';
    })

    return arr;
}

console.log(getUrlParams(s7));

/* 验证邮箱 */
let s8 = 'sundda@qq.com';
function isEmail(email: string) {
    const regx = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/;
    return regx.test(email);
}
console.log(isEmail(s8));

/* 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符 */

function checkPassword() {
    const regx = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;

}

/* 过滤HTML标签 */
let str: string = "<p>dasdsa</p>nice <br> test</br>"
function filterHtml(str: string) {
    var regx = /<[^<>]+>/g;
    return str.replace(regx, '');
}

console.log('str', filterHtml(str))