// Sabri Abounozha Mary Nansikombi, Dennis Aguilar
let addCount = 0;
let subtractCount = 0;
let multiplyCount = 0;
let array = [];
let operations = [];
let goal = 0;
winCount = 0;
loseCount = 0;
document.getElementById("winCount").innerHTML = winCount;
document.getElementById("loseCount").innerHTML = loseCount;
newGame();

function calculate() {
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);
  let operator = document.getElementById("operator").value;
  let result;
}

function deleteChild() { // delets the numbers previewd in the boxes when a the player presses :sabri abounozha 
  var e = document.querySelector("ol");
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

function pickTwoRandoms(randomNumbers) { //allows the player to choose 2 random numbers :sabri abounozha 
  const only2randomIndexes = [];
  do {
    const rIdx = Math.floor(Math.random() * randomNumbers.length);
    if (!only2randomIndexes.includes(rIdx)) {
      //add the new index if it is not in the randomIndex already
      only2randomIndexes.push(rIdx);
    }
  } while (only2randomIndexes.length < 2);

  return [
    randomNumbers[only2randomIndexes[0]],
    randomNumbers[only2randomIndexes[1]],
  ];
}
function findARandomGoal(randomNumbers) {
  let result;
  const ops = ["-", "+", "*"];
  do {
    const op = ops[Math.floor(Math.random() * 2)];
    const [num1, num2] = pickTwoRandoms(randomNumbers);
    result = evaluateExpresion(num1, num2, op);
  } while (result <= 0);

  return result;
}

function newGame() { // this is the function that starts when a the new game button is pressed : sabri abounozha , Mary Nansikombi
  addCount = 0;
  subtractCount = 0;
  multiplyCount = 0;
  //document.getElementById("addCount").innerHTML = addCount;
  //document.getElementById("subtractCount").innerHTML = subtractCount;
  //document.getElementById("multiplyCount").innerHTML = multiplyCount;
  var e = document.querySelectorAll("li");
  document.querySelector("#turnInfo").textContent = "select a number";
  document.getElementById("random.number").disabled = false;  //this code enables the boxes to be pressed again
  document.getElementById("random.number1").disabled = false; //this code enables the boxes to be pressed again
  document.getElementById("random.number2").disabled = false; //this code enables the boxes to be pressed again 
  document.getElementById("random.number3").disabled = false; //this code enables the boxes to be pressed again

  //console.log(e[0].innerHTML);
  deleteChild();
  const randomNumbers = generateNumbers();

  //take numbers to compute goal
  goal = findARandomGoal(randomNumbers);
  document.querySelector("#goal").textContent = goal;
}

// takes two numbers and evalutes them based on whoch operator was pressed : sabri abounozha 
function evaluateExpresion(op1, op2, operator) {
  switch (operator) {
    case "-": {
      return op2 - op1;
    }
    case "*": {
      return op2 * op1;
    }
    case "+": {
      return op2 + op1;
    }
  }
}
//calculates the elements together takes the code of number 1 and 2 and equals a new value
function calculation(element, boolean) {
  if (boolean == 0) {
    operations[0] = element.innerHTML;
    return;
  } else if (array.length == 0) {
    array[0] = element; 
    element.disabled  = true;//change css property
  } else {
    const number1 = parseInt(array[0].innerHTML);
    const number2 = parseInt(element.innerHTML);
    let result = 0;
    let equation = " ";
    switch (operations[0]) {
      case "+":
        result = number1 + number2;
        equation = number1 + " + " + number2 + " = " + result;
        addCount++;
        break;
      case "-":
        result = number1 - number2;
        equation = number1 + " - " + number2 + " = " + result;
        subtractCount++;
        break;
      case "*":
        result = number1 * number2;
        equation = number1 + " * " + number2 + " = " + result;
        multiplyCount++;
        break;
      default:
        alert("Select an operator");
        return;
    }
    console.log(result);
    let listNode = document.createElement("li");
    let textNode = document.createTextNode(equation);
    listNode.appendChild(textNode);
    let colorList = document.querySelector("ol");
    colorList.appendChild(listNode);
    element.innerText = result;
    array[0].innerText = "";
    array = [];
    operations = [];

    //this function takes 2 numbers together and evalutes them to see if the player won or not 
    if (colorList.children.length >= 3 &&result === goal) {
      let winCount = parseInt(document.querySelector("#winCount").textContent);
      document.querySelector("#winCount").textContent = ++winCount;
      document.querySelector("#turnInfo").textContent = "You won";
      
    }
    //this function takes 2 numbers together and evalutes them to see if the palyer lost or not 
    if (colorList.children.length >= 3 && result !== goal) {
      document.querySelector("#loseCount").textContent = ++loseCount;
      document.querySelector("#turnInfo").textContent = "Game over! better luck next time";
    }
  }
}
//this function hides the box after it has been pressed
function hideBox() {
  var box = document.querySelector(".box");
  box.style.display = "none";
}

//window.addEventListener("DOMContentLoaded", workarea);
// this function generates random numbers in the boxes 
function generateNumbers() {
  let box1 = Math.floor(Math.random() * 10) + 1;
  let box2 = Math.floor(Math.random() * 10) + 1;
  let box3 = Math.floor(Math.random() * 10) + 1;
  let box4 = Math.floor(Math.random() * 10) + 1;

  const randomNumber = [box1, box2, box3, box4];

  console.log(document.getElementById("random.number"));
  document.getElementById("random.number").innerText = box1;
  document.getElementById("random.number1").innerText = box2;
  document.getElementById("random.number2").innerText = box3;
  document.getElementById("random.number3").innerText = box4;

  return randomNumber;
}
// this function perfroms the operation inside the work area space
function workarea() {
  const buttons = document.querySelectorAll("#operations > button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      console.log(button.innerHTML);

      const number1 = parseInt(
        document.getElementById("random.number").innerText
      );
      const number2 = parseInt(
        document.getElementById("random.number1").innerText
      );
      const number3 = parseInt(
        document.getElementById("random.number2").innerText
      );
      const number4 = parseInt(
        document.getElementById("random.number3").innerText
      );

      let result = 0;

      switch (button.innerHTML) {
        case "+":
          result = number1 + number2;
          addCount++;
          break;

        case "-":
          result = number1 - number2;
          subtractCount++;
          break;

        case "*":
          result = number1 * number2;
          multiplyCount++;
          break;

        default:
          alert("Invalid operator");
          return;
      }

      console.log(result);
    });
  }

  console.log(buttons);
}
// thsi function checks the answer of the 2 operators to see if they equal the goal or not : sabri Abounozha 
function checkAnswer() {
  let guess = parseInt(document.getElementById("guess").value);
  let operator = document.getElementById("operator").value;
  let result;
}
