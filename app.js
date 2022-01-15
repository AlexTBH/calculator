const displayScreen1 = document.querySelector(".display1");
const numberButtons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operate");
const displayScreen2 = document.querySelector(".display2");

let valueInput = "";
let valueInput2 = "";
let sum = "";

Array.from(numberButtons).forEach(function(numbers) {
    numbers.addEventListener("click", function() {
        displayScreen1.innerHTML += numbers.id;
        valueInput += numbers.id;
    })
})



Array.from(operators).forEach(function(operators) {
    operators.addEventListener("click", function() {
        if (sum != "") {
            return;
        }

        sum = operators.id;
        valueInput2 = valueInput;
        valueInput = "";
        displayScreen1.innerHTML = operators.textContent;
        displayScreen2.innerHTML = valueInput2;
    })
})

document.getElementById("equals").addEventListener("click", function() {
    displayScreen1.innerHTML = "";
    displayScreen2.innerHTML = total = calculate(sum, parseInt(valueInput2), parseInt(valueInput));
    valueInput = displayScreen2.innerHTML;
})

document.getElementById("C").addEventListener("click", function() {
    displayScreen1.innerHTML = "";
    displayScreen2.innerHTML = "";
    valueInput = "";
    valueInput2 = "";
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