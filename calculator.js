// Accessing elements
const Add = document.getElementById("add");
const Subtract = document.getElementById("subtract");
const Mltiply = document.getElementById("multiply");
const Divide = document.getElementById("divide");


//declare function for addition
function add(number1, number2){
    return number1 + number2;
}
//declare function for subtraction
function subtract(number1, number2){
    return number1 - number2;
}

//declare function for multiplication
function multiply(number1, number2){
    return number1 * number2;
}

//declare function for division
function divide(number1, number2){
    return number1 / number2;
}

//Add event listeners
//Addition
Add.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value || 0)
    const number2 = parseFloat(document.getElementById('number2').value || 0)
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})

//Subtraction
Subtract.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value || 0)
    const number2 = parseFloat(document.getElementById('number2').value || 0)
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})
//Multiplication
Mltiply.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value || 0)
    const number2 = parseFloat(document.getElementById('number2').value || 0)
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})
//Division
Divide.addEventListener('click', function(){
    const number1 = parseFloat(document.getElementById('number1').value || 0)
    const number2 = parseFloat(document.getElementById('number2').value || 0)
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
})
