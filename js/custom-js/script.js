const dateInput = document.getElementById('inspectOn');

const setInputAsDate = (e) => {
  console.log(e.target.type);
  e.target.type = 'date';
};

const setInputAsText = (e) => {
  console.log(e.target.type);
  e.target.type = 'text';
};

dateInput.addEventListener('focus', setInputAsDate);
dateInput.addEventListener('blur', setInputAsText);
