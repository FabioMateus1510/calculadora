let num1 = 0;
let operator = '';
let operation = '';
let stringOperation = '';

function display(op) {
  const visor = document.querySelector('.visor');
  visor.textContent = op;
}

function clear() {
  stringOperation = '';
  num1 = 0;
  operator = '';
  operation = '';
  display('0');
}

function calculate() {
  const num2 = parseFloat(operation);
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '×':
      result = num1 * num2;
      break;
    case '÷':
      result = num1 / num2;
      break;
  }
  num1 = result;
  operation = result.toString();
  display(operation);
}

function handleNumberClick(number) {
  stringOperation += number;
  display(stringOperation);
  if (number === '←') {
    // Se o número digitado for ← (apagar), remove o último dígito
    operation = operation.slice(0, -1);
    // display(operation);
  } else {
    // Caso contrário, adiciona o número normalmente
    operation += number;
    // display(operation);
  }
}

function handleOperatorClick(op) {
  stringOperation += op;
  display(stringOperation);
  if (operator !== '') {
    calculate();
  }
  num1 = parseFloat(operation);
  operator = op;
  operation = '';
}

function handleEqualsClick() {
  calculate();
}

function deleteDigit() {
  // Remove o último dígito digitado
  operation = operation.slice(0, -1);
  display(operation);
}

const clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', clear);

const numberBtns = document.querySelectorAll('.btn-number');
numberBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    handleNumberClick(btn.textContent);
  });
});

const operatorBtns = document.querySelectorAll('.btn-operator');
operatorBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    handleOperatorClick(btn.textContent);
  });
});

const equalsBtn = document.querySelector('.btn-equals');
equalsBtn.addEventListener('click', handleEqualsClick);

const deleteBtn = document.querySelector('.btn-delete');
deleteBtn.addEventListener('click', deleteDigit);
