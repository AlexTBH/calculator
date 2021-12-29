const displayScreen1 = document.querySelector(".display1");
const numberButtons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operate");
const displayScreen2 = document.querySelector(".display2");

let valueInput = 0;
let valueInput2 = 0;
let sum = 0;

Array.from(numberButtons).forEach(function(numbers) {
    numbers.addEventListener("click", function() {
        displayScreen1.innerHTML += numbers.id;
        valueInput = displayScreen1.innerHTML;
    })
})

Array.from(operators).forEach(function(operators) {
    operators.addEventListener("click", function() {
        valueInput2 = valueInput;
        valueInput = 0;
        displayScreen2.innerHTML = valueInput2;
        displayScreen1.innerHTML = "";
    })
})

document.getElementById("equals").addEventListener("click", function() {
    displayScreen2.innerHTML = sum;
})

document.getElementById("C").addEventListener("click", function() {
    displayScreen1.innerHTML = "";
    displayScreen2.innerHTML = "";
    valueInput = 0;
    valueInput2 = 0;
})

document.getElementById("delete").addEventListener("click", function() {
    displayScreen1.innerHTML = displayScreen1.innerHTML.slice(0, -1);
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