/*-------------------------------- Constants --------------------------------*/


/*------------------------ Cached Element References ------------------------*/


const numberElements = document.querySelectorAll(".number");


const operatorElemets = document.querySelectorAll(".operator");


const equalElement = document.querySelector(".equals");


const displayElement = document.querySelector(".display");


console.log(numberElements);
console.log(operatorElemets);
console.log(equalElement);
console.log(displayElement);


/*-------------------------------- Variables --------------------------------*/
let num1;


let num2;


let operator;


let result;


/*-------------------------------- Functions --------------------------------*/


function clickOperator(event) {
  if (event.target.textContent === "C") {
    num1 = null;
    operator = null;
    num2 = null;
    displayElement.textContent = "";
  } else if (num1) {
    operator = event.target.textContent;
    displayElement.textContent = operator;
  }
}


function clickNumber(event) {
  if (!num1 && !operator && !num2) {
    num1 = event.target.textContent;
    displayElement.textContent = num1;
  } else if (num1 && !operator && !num2) {
    num1 += event.target.textContent;
    displayElement.textContent = num1;
  } else if (num1 && operator && !num2) {
    num2 = event.target.textContent;
    displayElement.textContent = num2;
  } else if (num1 && operator && num2) {
    num2 += event.target.textContent;
    displayElement.textContent = num2;
  }


}


function clickEqual(event) {
  if (operator === "+") {
    result = Number(num1) + Number(num2);
    displayElement.textContent = result;
  } else if (operator === "-") {
    result = Number(num1) - Number(num2);
    displayElement.textContent = result;
  } else if (operator === "*") {
    result = Number(num1) * Number(num2);
    displayElement.textContent = result;
  } else if (operator === "/") {
    if (Number(num1) === 0 || Number(num2) === 0) {
      displayElement.textContent = "cannot (/) by (0) ";
    } else {
      result = Number(num1) / Number(num2);
      displayElement.textContent = result;
    }
  }
}


/*----------------------------- Event Listeners -----------------------------*/


for (oneNum of numberElements) {
  oneNum.addEventListener("click", clickNumber);
}


for (oneOperator of operatorElemets) {
  oneOperator.addEventListener("click", clickOperator);
}


equalElement.addEventListener("click", clickEqual);





