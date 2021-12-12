const display = document.querySelector(".display");
const btns = document.querySelectorAll(".btn");
const equals = document.getElementById("#equals");

Array.from(btns).forEach(function(btn) {
    btn.addEventListener("click", function() {
        display.innerHTML += this.id;
    });
});



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
    switch (operator) {
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