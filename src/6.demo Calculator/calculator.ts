class Calculator {
    public container: HTMLDivElement;
    private output: HTMLDivElement;
    private span: HTMLSpanElement;
    private n1: number;
    private n2: number;
    private operator: string;
    public calculatorKeys: Array<Array<string>> = [
        ['Clear', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];

    constructor() {
        this.createContainer();
        this.createOutput();
        this.renderButtons();
        this.bindEvents();
    }

    createButton(text: string, container: HTMLDivElement, className: string): HTMLButtonElement {
        let button: HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        if (className) {
            button.className = className;
        }
        container.appendChild(button);
        return button;
    }

    createContainer() {
        let container: HTMLDivElement = document.createElement('div');
        container.classList.add('calculator');
        document.body.appendChild(container);
        this.container = container;
    }

    createOutput() {
        let output: HTMLDivElement = document.createElement('div');
        output.className = 'calculator-output';
        let span: HTMLSpanElement = document.createElement('span');
        span.textContent = '0';
        output.appendChild(span);
        this.container.appendChild(output);
        this.output = output;
        this.span = span;
    }

    bindEvents() {
        this.container.addEventListener('click', (event) => {
            // console.log(event.target.textContent)  会报错  需要判断
            if (event.target instanceof HTMLButtonElement) {
                let button: HTMLButtonElement = event.target;
                let text = button.textContent;
                // 操作数字
                if ('0123456789'.indexOf(text) >= 0) {
                    console.log('数字');
                    // 更新n2
                    if (this.operator) {
                        if (this.n2) {
                            this.n2 = parseInt(this.n2.toString() + text);
                        } else {
                            this.n2 = parseInt(text);
                        }
                        this.span.textContent = this.n2.toString();
                    } else {
                        // 更新n1
                        if (this.n1) {
                            this.n1 = parseInt(this.n1.toString() + text);
                        } else {
                            this.n1 = parseInt(text);
                        }
                        this.span.textContent = this.n1.toString();
                    }
                } else if ('×÷+-'.indexOf(text) >= 0) {
                    // update 操作符
                    this.operator = text;
                } else if ('='.indexOf(text) >= 0) {
                    let result: number
                    switch (this.operator) {
                        case '+': result = this.n1 + this.n2;
                            this.span.textContent = result.toString();
                            break;
                        case '-': result = this.n1 - this.n2;
                            this.span.textContent = result.toString();
                            break;
                        case '×': result = this.n1 * this.n2;
                            this.span.textContent = result.toString();
                            break;
                        case '÷':
                            if (this.n2) {
                                result = this.n1 / this.n2;
                                // 四舍五入
                                return this.span.textContent = result.toFixed(2);
                            } else { this.reset() }
                            break;
                        default: break;
                    }
                } else if ('Clear'.indexOf(text) >= 0) {
                    this.reset();
                }
            } else {
                console.log('不是按钮的东西')
            }
        });
    }

    renderButtons() {
        this.calculatorKeys.forEach((textList: Array<string>) => {
            let div = document.createElement('div');
            div.classList.add('row');
            textList.forEach((text: string) => {
                this.createButton(text, div, `calculator-button text-${text}`);
            });

            this.container.appendChild(div);
        });
    }

    reset() {
        // 重置
        this.n1 = null; this.n2 = null; this.operator = null;
        this.span.textContent = '0';
    }
}

new Calculator();