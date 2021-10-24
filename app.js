//Function for different operators.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//Function to decide with operator to run depending on user choice.
function operate(operator, a, b) {
    switch (opeartor) {
        case "+":
            add(a, b)
        break;
        case "-":
            subtract(a, b);
        break;
        case "*":
            multiply(a, b);
        break;
        case "/":
            divide(a, b);
        break;
    } 
}