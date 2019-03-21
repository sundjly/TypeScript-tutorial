var Calculator = /** @class */ (function () {
    function Calculator() {
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
    Calculator.prototype.createButton = function (text, container, className) {
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
                if ('0123456789'.indexOf(text) >= 0) {
                    console.log('数字');
                    // 更新n2
                    if (_this.operator) {
                        if (_this.n2) {
                            _this.n2 = parseInt(_this.n2.toString() + text);
                        }
                        else {
                            _this.n2 = parseInt(text);
                        }
                        _this.span.textContent = _this.n2.toString();
                    }
                    else {
                        // 更新n1
                        if (_this.n1) {
                            _this.n1 = parseInt(_this.n1.toString() + text);
                        }
                        else {
                            _this.n1 = parseInt(text);
                        }
                        _this.span.textContent = _this.n1.toString();
                    }
                }
                else if ('×÷+-'.indexOf(text) >= 0) {
                    // update 操作符
                    _this.operator = text;
                }
                else if ('='.indexOf(text) >= 0) {
                    var result = void 0;
                    switch (_this.operator) {
                        case '+':
                            result = _this.n1 + _this.n2;
                            _this.span.textContent = result.toString();
                            break;
                        case '-':
                            result = _this.n1 - _this.n2;
                            _this.span.textContent = result.toString();
                            break;
                        case '×':
                            result = _this.n1 * _this.n2;
                            _this.span.textContent = result.toString();
                            break;
                        case '÷':
                            if (_this.n2) {
                                result = _this.n1 / _this.n2;
                                // 四舍五入
                                return _this.span.textContent = result.toFixed(2);
                            }
                            else {
                                _this.reset();
                            }
                            break;
                        default: break;
                    }
                }
                else if ('Clear'.indexOf(text) >= 0) {
                    _this.reset();
                }
            }
            else {
                console.log('不是按钮的东西');
            }
        });
    };
    Calculator.prototype.renderButtons = function () {
        var _this = this;
        this.calculatorKeys.forEach(function (textList) {
            var div = document.createElement('div');
            div.classList.add('row');
            textList.forEach(function (text) {
                _this.createButton(text, div, "calculator-button text-" + text);
            });
            _this.container.appendChild(div);
        });
    };
    Calculator.prototype.reset = function () {
        // 重置
        this.n1 = null;
        this.n2 = null;
        this.operator = null;
        this.span.textContent = '0';
    };
    return Calculator;
}());
new Calculator();
