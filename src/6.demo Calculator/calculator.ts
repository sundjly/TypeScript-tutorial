
console.log(1111)
function createButton(text: string, container: HTMLDivElement, className: string) {
    let button: HTMLButtonElement = document.createElement('button');
    button.textContent = text;
    if (className) {
        button.className = className;
    }
    container.appendChild(button);
}

let container: HTMLDivElement = document.createElement('div');
container.classList.add('calculator');
// 声明输出框
let output: HTMLDivElement = document.createElement('div');
output.className = 'calculator-output';
output.textContent = '0';
container.appendChild(output);

let calculatorKeys: Array<Array<string>> = [
    ['Clear', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
];

calculatorKeys.forEach((textList: Array<string>) => {
    let div = document.createElement('div');
    div.classList.add('row');
    textList.forEach((text: string) => {
        createButton(text, div, `calculator-button text-${text}`);
    });
    container.appendChild(div);
});

document.body.appendChild(container);
