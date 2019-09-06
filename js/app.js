let num1 = '';
let num2 = '';
let operator = '';
let total = '';

function handleNum (num) {
  if (num1 === '') {
    num1 = num;    
  } else {
    num2 = num;
  }
  displayButton(num);
};

function handleOperator (oper) {
  if (oper === 'c'){
    $('.output').text('');
    num1 = '';
    operator = '';
    num2 = '';
    total = '';
  }
  if (operator === '') {
    operator = oper;
  } else {
    handleTotal();
    operator = oper;
  };
};

function displayButton(btn) {
  console.log(btn);
  $('.output').text(btn);
};

function handleTotal() {
  if (operator != '') {
    switch (operator) {
      case '+': total = +num1 + +num2;
      displayButton(total);
      break; 
      case '-': total = +num1 - +num2;
      console.log('num1: ', num1)
      console.log('num2: ', num2)
      console.log('total after minus: ', total)
      displayButton(total);
      break; 
      case '*': total = +num1 * +num2;
      displayButton(total);
      break; 
      case '/': total = +num1 / +num2;
      displayButton(total);
      break;    
    };
  };
  updateVariables();
};

function updateVariables() {
  num1 = total;
  num2 = '';
};

  $('.button').on('click', (e)  => {
    let btn = e.target.innerHTML;
    console.log(btn);
    if (btn >= '0' && btn <= '9') {
      handleNum(btn);
    } else {
      handleOperator(btn);        
    }    
  });
