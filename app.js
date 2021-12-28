const displayScreen = document.querySelector(".displayScreen");
const numberButtons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operate");

let valueInput = 0;
let valueInput2 = 0;
let sum = 0;

Array.from(numberButtons).forEach(function(numbers) {
    numbers.addEventListener("click", function() {
        displayScreen.innerHTML += numbers.id;
        valueInput2 = displayScreen.innerHTML;
    })
})

Array.from(operators).forEach(function(operators) {
    operators.addEventListener("click", function() {
        valueInput = displayScreen.innerHTML;
        displayScreen.innerHTML = "";
        sum = calculate(operators.id, valueInput, valueInput2);
    })
})

document.getElementById("equals").addEventListener("click", function() {
    displayScreen.innerHTML = sum;
})

document.getElementById("C").addEventListener("click", function() {
    displayScreen.innerHTML = "";
    valueInput = 0;
    valueInput2 = 0;
})

document.getElementById("delete").addEventListener("click", function() {
    displayScreen.innerHTML = displayScreen.innerHTML.slice(0, -1);
})


//Function to decide with operator to run depending on user choice.
function calculate(op, a, b) {
    switch (op) {
        case "plus":
            return a + b;
        case "minus":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
    } 
}