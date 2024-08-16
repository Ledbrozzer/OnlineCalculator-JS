const displayOldValue = document.getElementById('old-value');
const displayCurrentValue = document.getElementById('current-value');
const numberButtons = document.querySelectorAll('.number');
const mathButtons = document.querySelectorAll('.math');
// const calculator = new Calculator();
const display = new Display(displayOldValue, displayCurrentValue);
//use the value between n°s to get that button value from the eventlistener w/ innerHTML
numberButtons.forEach(button => {
    button.addEventListener('click', () => display.includeNumber(button.innerHTML));
});
mathButtons.forEach(button => {
    button.addEventListener('click', () => display.toCompute(button.value))
});