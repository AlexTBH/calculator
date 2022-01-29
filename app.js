const displayScreen1 = document.querySelector(".display1");
const numberButtons = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operate");
const displayScreen2 = document.querySelector(".display2");

let valueInput = "";
let valueInput2 = "";
let operatorInput = "";

Array.from(numberButtons).forEach(function(numbers) {
    numbers.addEventListener("click", function() {
        displayScreen1.innerHTML += numbers.textContent;
        valueInput += numbers.textContent;
    })
})

Array.from(operators).forEach(function(operators) {
    operators.addEventListener("click", function() {
        if (operatorInput != "" && valueInput != "" && valueInput2 != "") {
            totalSum();
        } else if (operatorInput != "") {
            return
        } else if (valueInput === "") {
            return
        }

        operatorInput = operators.id;
        valueInput2 = valueInput;
        valueInput = "";
        displayScreen1.innerHTML = operators.textContent;
        displayScreen2.innerHTML = valueInput2;
    })
})

document.getElementById("equals").addEventListener("click", function() {
    if (valueInput2 === "") {
        return
    } else {
        totalSum()
    }
})

function totalSum() {
    displayScreen1.innerHTML = "";
    displayScreen2.innerHTML  = calculate(operatorInput, roundNumber(valueInput2), roundNumber(valueInput));
    valueInput = displayScreen2.innerHTML;
    valueInput2 = "";
    operatorInput = "";
}

function roundNumber(number) {
    let valToInt = Number(number);
    return (Math.round(valToInt * 100)/100);
}

document.getElementById("C").addEventListener("click", function() {
    displayScreen1.innerHTML = "";
    displayScreen2.innerHTML = "";
    valueInput = "";
    valueInput2 = "";
    operatorInput = "";
})

document.getElementById("delete").addEventListener("click", function() {
    if (displayScreen1.innerHTML === "+") {
        return
    }
    if (displayScreen1.innerHTML === "-") {
        return
    }
    if (displayScreen1.innerHTML === "*") {
        return
    }
    if (displayScreen1.innerHTML === "/") {
        return
    }

    valueInput = valueInput.slice(0, -1);
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