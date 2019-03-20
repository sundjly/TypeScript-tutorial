console.log(1111);
function createButton(text, container, className) {
    var button = document.createElement('button');
    button.textContent = text;
    if (className) {
        button.className = className;
    }
    container.appendChild(button);
}
var container = document.createElement('div');
container.classList.add('calculator');
// 声明输出框
var output = document.createElement('div');
output.className = 'calculator-output';
output.textContent = '0';
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
        createButton(text, div, "calculator-button text-" + text);
    });
    container.appendChild(div);
});
document.body.appendChild(container);
