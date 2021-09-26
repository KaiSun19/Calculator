
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a -b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,operation){
    if (operation == "plus"){
        return add(a,b);
    }

    else if(operation == "minus"){
        return subtract(a,b);
    }

    else if(operation == "multiply"){
        return multiply(a,b);
    }

    else if(operation == "divide"){
        return divide(a,b);
    }


};


const calculator = document.querySelector(".grid-container");
const keys = calculator.querySelector(".calc_keys");
const display = calculator.querySelector(".calc_display");



keys.addEventListener("click", event => {
    if(!event.target.closest("button"))
        return

    const key = event.target
    const keyValue = key.textContent
    const displayContent = display.textContent
    const keyType = key.dataset.type;
    const {previousKeyType} = calculator.dataset;
    if(keyType === "number"){
        if(displayContent === "0"){
            display.textContent = keyValue
        }
        else if (previousKeyType == "operator"){
            display.textContent = keyValue;
        }
        else{
            display.textContent = displayContent + keyValue;
        }
    }
    if(keyType === "operator"){
        const currentActiveOperator = calculator.querySelector('[data-state = "selected"]');
        if(currentActiveOperator){
            currentActiveOperator.dataset.state = "";
        }
        calculator.dataset.previousKeyType = "operator";
        calculator.dataset.firstNumber = displayContent.replace(/\s/g, '');
        calculator.dataset.operator = key.dataset.key;
    }

    if(keyType === "equal"){
        const firstNumber = parseInt(calculator.dataset.firstNumber);
        const operator  = calculator.dataset.operator;
        const secondNumber =  parseInt(displayContent.replace(/\s/g, ''));
        let result = operate(firstNumber,secondNumber,operator);
        console.log(firstNumber,operator,secondNumber);
        display.textContent = result;
    }

    if(keyType === "clear"){
        display.textContent = display.textContent.slice(0,-1);
    }

    if(keyType === "delete"){
        display.textContent = "0"
    }

    calculator.dataset.previousKeyType = keyType;
});


window.addEventListener("keydown", (event) => {
    let keyPress = event.key;
    console.log(keyPress);
    if(keyPress == "1"){
        document.getElementById("one").click();
    }

    if(keyPress == "2"){
        document.getElementById("two").click();
    }
    if(keyPress == "3"){
        document.getElementById("three").click();
    }
    if(keyPress == "4"){
        document.getElementById("four").click();
    }
    if(keyPress == "5"){
        document.getElementById("five").click();
    }
    if(keyPress == "6"){
        document.getElementById("six").click();
    }
    if(keyPress == "7"){
        document.getElementById("seven").click();
    }
    if(keyPress == "8"){
        document.getElementById("eight").click();
    }
    if(keyPress == "9"){
        document.getElementById("nine").click();
    }
    if(keyPress == "."){
        document.getElementById("dot").click();
    }
    if(keyPress == "0"){
        document.getElementById("zero").click();
    }
    if(keyPress == "+" ){
        document.getElementById("plus").click();
    }
    if(keyPress == "-" ){
        document.getElementById("minus").click();
    }
    if(keyPress == "*" ){
        document.getElementById("times").click();
    }
    if(keyPress == "/" ){
        document.getElementById("divide").click();
    }
    if(keyPress == "Backspace"  || keyPress == "Delete" ){
        document.getElementById("clear").click();
    }
    if(keyPress == "Enter" ){
        document.getElementById("equals").click();
    }
});



