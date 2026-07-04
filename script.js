// Initialize the display to 0 when the page loads
document.getElementById('display').value = '0';

function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // If current value is 0 or Error, replace it. Otherwise, append to it.
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the string expression
        display.value = eval(display.value);
    } 
    catch (error) {
        display.value = 'Error';
    }
}