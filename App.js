class Display {
    constructor(displayOldValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayOldValue = displayOldValue;
        this.calculator = new Calculator();
        this.operationType = undefined;
        this.currentValue = '';
        this.oldValue = '';
        this.signs = {
            sum: '+',
            minus: '-',
            multiplication: 'x',
            division: '%',
        }
    }

    delete() {
        this.currentValue = this.currentValue.toString().slice(0, -1);
        this.showValues();
    }

    removeAll() {
        this.currentValue = '';
        this.oldValue = '';
        this.operationType = undefined;
        this.showValues();
    }

    toCompute(type) {
        this.operationType !== 'equal' && this.calculation();
        this.operationType = type;
        this.oldValue = this.currentValue || this.oldValue;
        this.currentValue = '';
        this.showValues();
    }
    
    includeNumber(number) {
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.showValues();
    }

    showValues() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayOldValue.textContent = `${this.oldValue} ${this.signs[this.operationType] || ''}`;
    }
    
    calculation() {
        const oldValue = parseFloat(this.oldValue);
        const currentValue = parseFloat(this.currentValue);
        if( isNaN(currentValue) || isNaN(oldValue) ) return
        this.currentValue = this.calculator[this.operationType](oldValue, currentValue)
    }
}