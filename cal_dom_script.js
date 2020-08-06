//Function to get values from text input

getValues  = function(){
    number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
resultObject = {

    "number1":number1,
    "number2":number2
}
return resultObject;
}

//Function to show result

showResult = function(result){
    resultElement = document.getElementById("result");
    resultElement.innerText = result;
}


//ADDITION
plusButton = document.getElementById("addButton");
plusOperation = function(){

numberValues = getValues();
sum = parseInt(numberValues.number1) + parseInt(numberValues.number2);
showResult(sum);

}
plusButton.addEventListener("click", plusOperation)


//SUBRACTION
minusButton = document.getElementById("subButton");
minusOperation = function(){

    numberValues = getValues();
difference = parseInt(numberValues.number1) - parseInt(numberValues.number2);
showResult(difference);

}
subButton.addEventListener("click", minusOperation)

//MULTIPLICATION

multiplyButton = document.getElementById("mulButton");
multiplyOperation = function(){

    numberValues = getValues();
product = parseInt(numberValues.number1) * parseInt(numberValues.number2);
showResult(product);

}
multiplyButton.addEventListener("click", multiplyOperation)

//DIVISION

divisionButton = document.getElementById("divButton");
divisionOperation = function(){

    numberValues = getValues();
quotient = parseInt(numberValues.number1) / parseInt(numberValues.number2);
showResult(quotient);

}
divisionButton.addEventListener("click", divisionOperation)

//MODULUS
modulusButton = document.getElementById("modButton");
modulusOperation = function(){

    numberValues = getValues();
remainder = parseInt(numberValues.number1) % parseInt(numberValues.number2);
showResult(remainder);

}
modulusButton.addEventListener("click", modulusOperation)