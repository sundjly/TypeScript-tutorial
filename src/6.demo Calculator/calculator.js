var Calculator = /** @class */ (function () {
    function Calculator() {
        this.n1 = null;
        this.n2 = null;
        this.operator = null;
        this.result = null;
        this.calculatorKeys = [
            ['Clear', '÷'],
            ['7', '8', '9', '×'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['0', '.', '='],
        ];
        this.createContainer();
        this.createOutput();
        this.renderButtons();
        this.bindEvents();
    }
    Calculator.createButton = function (text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        if (className) {
            button.className = className;
        }
        container.appendChild(button);
        return button;
    };
    Calculator.prototype.createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('calculator');
        document.body.appendChild(container);
        this.container = container;
    };
    Calculator.prototype.createOutput = function () {
        var output = document.createElement('div');
        output.className = 'calculator-output';
        var span = document.createElement('span');
        span.textContent = '0';
        output.appendChild(span);
        this.container.appendChild(output);
        this.output = output;
        this.span = span;
    };
    Calculator.prototype.bindEvents = function () {
        var _this = this;
        this.container.addEventListener('click', function (event) {
            // console.log(event.target.textContent)  会报错  需要判断
            if (event.target instanceof HTMLButtonElement) {
                var button = event.target;
                var text = button.textContent;
                // 操作数字
                _this.updateNumbersOrOperator(text);
            }
        });
    };
    Calculator.prototype.updateNumber = function (name, text) {
        if (this[name]) {
            this[name] += text;
        }
        else {
            this[name] = text;
        }
        this.span.textContent = this[name];
    };
    Calculator.prototype.updateNumbers = function (text) {
        console.log('数字');
        if (this.operator) {
            // 更新n2
            this.updateNumber('n2', text);
        }
        else {
            // 更新n1
            this.updateNumber('n1', text);
        }
    };
    Calculator.prototype.updateResult = function () {
        var result;
        var n1 = parseFloat(this.n1);
        var n2 = parseFloat(this.n2);
        switch (this.operator) {
            case '+':
                result = n1 + n2;
                break;
            case '-':
                result = n1 - n2;
                break;
            case '×':
                result = n1 * n2;
                break;
            case '÷':
                result = n1 / n2;
                break;
            default: break;
        }
        // 存在问题toFixed,会导致出现0.000000
        // result = result.toFixed(6);
        result = result.toPrecision(6).replace(/.0+$/, '');
        this.span.textContent = result;
        this.n1 = null;
        this.n2 = null;
        this.operator = null;
        this.result = result;
    };
    Calculator.prototype.updateNumbersOrOperator = function (text) {
        if ('0123456789.'.indexOf(text) >= 0) {
            this.updateNumbers(text);
        }
        else if ('×÷+-'.indexOf(text) >= 0) {
            // update 操作符
            if (this.n1 === null) {
                this.n1 = this.result;
            }
            this.operator = text;
        }
        else if ('='.indexOf(text) >= 0) {
            this.updateResult();
        }
        else if ('Clear'.indexOf(text) >= 0) {
            this.reset();
        }
    };
    Calculator.prototype.renderButtons = function () {
        var _this = this;
        this.calculatorKeys.forEach(function (textList) {
            var div = document.createElement('div');
            div.classList.add('row');
            textList.forEach(function (text) {
                Calculator.createButton(text, div, "calculator-button text-" + text);
            });
            _this.container.appendChild(div);
        });
    };
    Calculator.prototype.reset = function (shouldClear) {
        if (shouldClear === void 0) { shouldClear = true; }
        // 重置
        this.n1 = null;
        this.n2 = null;
        this.operator = null;
        shouldClear && (this.span.textContent = '0');
    };
    return Calculator;
}());
new Calculator();
