const dateInput = document.getElementById('inspectOn');

const setInputAsDate = (e) => {
  e.target.type = 'date';
};

const setInputAsText = (e) => {
  e.target.type = 'text';
};

dateInput.addEventListener('focus', setInputAsDate);
dateInput.addEventListener('blur', setInputAsText);
