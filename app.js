const display = document.querySelector(".display");
const btns = document.querySelectorAll(".btn");

Array.from(btns).forEach(function(btn) {
    btn.addEventListener("click", function() {
        display.innerHTML += btn.id;
    });
});

document.getElementById("C").addEventListener("click", function() {
    display.innerHTML = "";
})

document.getElementById("delete").addEventListener("click", function() {
    display.innerHTML = display.innerHTML.slice(0, -1);
})


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