//A class begins with an uppercase"App.js"/"Main.js"
class Display {
    constructor(displayOldValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayOldValue = displayOldValue;
        this.calculator = new Calculator();
        this.operationType = undefined;
        //when there is not an mathfunction being used..-> Userwill especify the operator which is goingtobe used
        this.currentValue = '';
        this.oldValue = '';
        this.signs = {
            sum: '+',
            minus: '-',
            multiplication: 'x',
            division: '%',
        }
    }
    //toremove 1n°:
    delete() {
        //gonna be t currentValue but->with t last n° cut
        //->remove the last position
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
        //if the number is equal to t last value..
        //if we want to make a new calc, number is dif than the last one 
        this.operationType !== 'equal' && this.calculation();//if the  other type we digit is an operation..thn we'll make a calcule
        // and-we'll updat->currentValue to thevalue of the calculation
        this.operationType = type;
        this.oldValue = this.currentValue || this.oldValue;
        //if there's not a currenteValue->just leave the oldValue instead
        //when we had calculated, we updated t-oldValue and set t new value on the display
        this.currentValue = '';
        //new value would beset to 0, to make a new operation.. once set an operation.
        //the new value would be the old value and the new value would be 0-> to make a new operation
        this.showValues();
        //once set the operations, made the calc for the result-> can show it on the screen..

    }
    //put the value of the Display to this new number value i included 
    includeNumber(number) {
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.showValues();
        //this.currentValue + number -> so t-js-will add t number u send to t one before
        //instead of changing one number to another
        //'234' || not '2' - '3' - '4'
    }

        //method to show the values
    showValues() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayOldValue.textContent = `${this.oldValue} ${this.signs[this.operationType] || ''}`;
        //also showthe math operators that are being used, on the screen
        //signs as a part of operationType, but,
        //if press '=' -> don't wanna see none of them=> " || ''} "
    }
    //make t-calculation happen:
    calculation() {
        //convert the value tht was a string to a number..
        const oldValue = parseFloat(this.oldValue);
        const currentValue = parseFloat(this.currentValue);
        //if -> not a number..'is NaN'= won't do anything
        if( isNaN(currentValue) || isNaN(oldValue) ) return this.currentValue = this.calculator[this.operationType](oldValue, currentValue)
        //toupdate-value-using t-calculator and t-method operationType
    }
}
