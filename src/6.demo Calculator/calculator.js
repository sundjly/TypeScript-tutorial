console.log(1111);
function createButton(text, container, className) {
    var button = document.createElement('button');
    button.textContent = text;
    if (className) {
        button.className = className;
    }
    container.appendChild(button);
    return button;
}
var container = document.createElement('div');
container.classList.add('calculator');
// 声明输出框
var output = document.createElement('div');
output.className = 'calculator-output';
var span = document.createElement('span');
span.textContent = '0';
output.appendChild(span);
container.appendChild(output);
var calculatorKeys = [
    ['Clear', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
];
calculatorKeys.forEach(function (textList) {
    var div = document.createElement('div');
    div.classList.add('row');
    textList.forEach(function (text) {
        var button = createButton(text, div, "calculator-button text-" + text);
    });
    container.appendChild(div);
});
var n1;
var n2;
var operator;
// 事件委托
container.addEventListener('click', function (event) {
    // console.log(event.target.textContent)  会报错  需要判断
    if (event.target instanceof HTMLButtonElement) {
        var button = event.target;
        var text = button.textContent;
        if ('0123456789'.indexOf(text) >= 0) {
            console.log('数字');
            if (operator) {
                if (n2) {
                    n2 = parseInt(n2.toString() + text);
                }
                else {
                    n2 = parseInt(text);
                }
                span.textContent = n2.toString();
            }
            else {
                if (n1) {
                    n1 = parseInt(n1.toString() + text);
                }
                else {
                    n1 = parseInt(text);
                }
                span.textContent = n1.toString();
            }
        }
        else if ('×÷+-'.indexOf(text) >= 0) {
            console.log('操作符');
            operator = text;
        }
        else if ('='.indexOf(text) >= 0) {
            var result = void 0;
            if (operator === '+') {
                result = n1 + n2;
            }
            else if (operator === '-') {
                result = n1 - n2;
            }
            else if (operator === '×') {
                result = n1 * n2;
            }
            else if (operator === '÷') {
                if (n2) {
                    result = n1 / n2;
                    // 四舍五入
                    return span.textContent = result.toFixed(2);
                }
            }
            span.textContent = result.toString();
        }
        else if ('Clear'.indexOf(text) >= 0) {
            n1 = null;
            n2 = null;
            operator = null;
            span.textContent = '0';
        }
    }
    else {
        console.log('不是按钮的东西');
    }
});
document.body.appendChild(container);
