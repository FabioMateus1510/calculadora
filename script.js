const resultNumber = document.querySelector('.result-number');
const historyContainer = document.querySelector('.history-container');

let acc = 0;
let operator = '';
let numberToBeInserted = '';
let stringOperation = '';

function display(string) {
  resultNumber.textContent = string;
}

function createHistory(history) {
  const novaDiv = document.createElement('div');
  novaDiv.className = 'history';
  novaDiv.textContent = history;
  historyContainer.appendChild(novaDiv);
}

function clear() {
  stringOperation = '';
  acc = 0;
  operator = '';
  numberToBeInserted = '';
  display('0');
}

function calculate() {
  const InsertedNumber = parseFloat(numberToBeInserted); // a string inserida se torna um number
  switch (operator) {
    case '+':
      result = acc + InsertedNumber;
      break;
    case '-':
      result = acc - InsertedNumber;
      break;
    case '×':
      result = acc * InsertedNumber;
      break;
    case '÷':
      result = acc / InsertedNumber;
      break;
  }
  numberToBeInserted = '';
  5;
}

function handleNumberBtn(number) {
  stringOperation += number;
  numberToBeInserted += number;
  display(stringOperation);
}

function handleOperatorBtn(op) {
  stringOperation += op;
  if (
    stringOperation === '+' ||
    stringOperation === '-' ||
    stringOperation === '÷' ||
    stringOperation === '×'
  ) {
    numberToBeInserted = result;
    stringOperation = `${result}${op}`;
  }
  display(stringOperation);
  acc = parseFloat(numberToBeInserted); //acumulador recebe o primeiro numero inserido
  operator = op;
  numberToBeInserted = '';
}

function handleEqualsBtn() {
  calculate();
  display(result);
  const history = `${stringOperation} = ${result}`;
  createHistory(history);
  stringOperation = '';
  // numberToBeInserted = '';
}

function handleDeleteBtn() {
  // Remove o último dígito digitado
  numberToBeInserted = numberToBeInserted.slice(0, -1);
  stringOperation = stringOperation.slice(0, -1);

  display(stringOperation);
}

const numberBtns = document.querySelectorAll('.btn-number');
numberBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    handleNumberBtn(btn.textContent);
    btn.blur(); // Remover o foco do botão
  });
});

const operatorBtns = document.querySelectorAll('.btn-operator');
operatorBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    handleOperatorBtn(btn.textContent);
    btn.blur(); // Remover o foco do botão
  });
});

const equalsBtn = document.querySelector('.btn-equals');
equalsBtn.addEventListener('click', () => {
  handleEqualsBtn();
  equalsBtn.blur(); // Remover o foco do botão
});

const deleteBtn = document.querySelector('.btn-delete');
deleteBtn.addEventListener('click', () => {
  handleDeleteBtn();
  deleteBtn.blur(); // Remover o foco do botão
});

const clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', () => {
  clear();
  clearBtn.blur(); // Remover o foco do botão
});

document.addEventListener('keydown', function (event) {
  const key = event.key;

  // Verifique qual tecla foi pressionada e execute a função correspondente
  switch (key) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      handleNumberBtn(key);
      break;
    case '+':
    case '-':
      handleOperatorBtn(key);
      break;
    case '/':
      handleOperatorBtn('÷');
      break;
    case '*':
      handleOperatorBtn('×');
      break;
    case '=':
    case 'Enter':
      handleEqualsBtn();
      break;
    case 'Backspace':
      handleDeleteBtn();
      break;
    case 'Escape':
    case 'c':
    case 'C':
      clear();
      break;
  }
});
