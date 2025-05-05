const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

// Evaluates the mathematical expression in the display
function calculate() {
    try {
        // Use eval to calculate the result, but be cautious of potential risks
        display.value = eval(display.value);
    } catch (error) {
        // Show 'Error' in the display if evaluation fails
        display.value = "Error";
    }
}

// For keyboard input
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Allow digits, operators, and the decimal point
    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        appendToDisplay(key);
    }

    // "=" key for calculation
    if (key === "=") {
        calculate();
    }

    // Backspace for deleting the last character
    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Escape key for clearing the display
    if (key === "Escape") {
        clearDisplay();
    }
});