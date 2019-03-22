class Calculator {
    public container: HTMLDivElement;
    private output: HTMLDivElement;
    private span: HTMLSpanElement;
    private n1: string = null;
    private n2: string = null;
    private operator: string = null;
    public result: string = null;
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

    static createButton(text: string, container: HTMLDivElement, className: string): HTMLButtonElement {
        let button: HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        if (className) {
            button.className = className;
        }
        container.appendChild(button);
        return button;
    }

    createContainer():void {
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

    bindEvents():void {
        this.container.addEventListener('click', (event) => {
            // console.log(event.target.textContent)  会报错  需要判断
            if (event.target instanceof HTMLButtonElement) {
                let button: HTMLButtonElement = event.target;
                let text: string = button.textContent;
                // 操作数字
                this.updateNumbersOrOperator(text);
            }
        });
    }

    updateNumber(name: string, text: string): void {
        if (this[name]) {
            this[name] +=  text;
        } else {
            this[name] = text;
        }
        this.span.textContent = this[name];
    }

    updateNumbers(text: string): void {
        console.log('数字');
        if (this.operator) {
            // 更新n2
            this.updateNumber('n2', text)
        } else {
            // 更新n1
            this.updateNumber('n1', text)
        }
    }

    updateResult(): void {
        let result: any;
        let n1:number = parseFloat(this.n1)
        let n2:number = parseFloat(this.n2)
        switch (this.operator) {
            case '+': result = n1 + n2;
                break;
            case '-': result = n1 - n2;
                break;
            case '×': result = n1 * n2;
                break;
            case '÷':
                result = n1 / n2;
                break;
            default: break;
        }
        // 存在问题toFixed,会导致出现0.000000
        // result = result.toFixed(6);
        result = result.toPrecision(6).replace(/.0+$/,'');
        this.span.textContent = result;
        this.n1 = null;
        this.n2 = null;
        this.operator = null;
        this.result = result;
    }

    updateNumbersOrOperator(text: string): void {
        if ('0123456789.'.indexOf(text) >= 0) {
            this.updateNumbers(text)
        } else if ('×÷+-'.indexOf(text) >= 0) {
            // update 操作符
            if (this.n1 === null) {
                this.n1 = this.result;
            }
            this.operator = text;
        } else if ('='.indexOf(text) >= 0) {
            this.updateResult()
        } else if ('Clear'.indexOf(text) >= 0) {
            this.reset();
        }
    }

    renderButtons(): void {
        this.calculatorKeys.forEach((textList: Array<string>) => {
            let div = document.createElement('div');
            div.classList.add('row');
            textList.forEach((text: string) => {
                Calculator.createButton(text, div, `calculator-button text-${text}`);
            });
            this.container.appendChild(div);
        });
    }

    reset(shouldClear: boolean = true): void {
        // 重置
        this.n1 = null; this.n2 = null; this.operator = null;
        shouldClear && (this.span.textContent = '0');
    }
}

new Calculator();