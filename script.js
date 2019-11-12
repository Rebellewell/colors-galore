var buttonContainer = document.getElementById('button-container');
var colorSelect = document.getElementById('select-color');
var addBtn = document.getElementById('add-new');
var remBtn = document.getElementById('remove-current');

initDropdownColors();

function addButton(color) {
  var newButton = document.createElement('button');
  newButton.innerText = color;
  newButton.value = color;
  newButton.style.backgroundColor = color;
  newButton.classList.add('button');
  buttonContainer.appendChild(newButton);
}

//Creating original buttons
function ogButtons(color) {
  var original = document.createElement('button');
  original.innerText = color;
  original.value = color;
  original.style.backgroundColor = color;
  original.classList.add('button');
  buttonContainer.appendChild(original);
}

ogButtons('Green');
ogButtons('Red');
ogButtons('Yellow');

buttonContainer.addEventListener('click', colorChange);

function colorChange(event) {
  var newColor = event.target.value;
  document.body.style.backgroundColor = newColor;
}

function initDropdownColors() {
  for (var i = 0; i < colors.length; i++) {
    addColor(colors[i]);
  }
}

function addColor(color) {
  var newColor = document.createElement('option');
  newColor.innerText = color;
  newColor.value = color;
  colorSelect.appendChild(newColor);
}

var newPopBtn = document.createElement('button');

addBtn.addEventListener('click', handleAddBtn);

function handleAddBtn() {
  if(colorSelect.value !== 'not-real-value') {
    addButton(colorSelect.value);
    removeOption(colorSelect.value);
  } else {
    alert('YOU MUST SELECT A COLOR!!');
  }
}

function removeOption(color) {
  document.querySelector('option[value=' + color + ']').remove();
}

function removeButton(color) {
  //document.querySelector('button[value=' + color + ']').remove();
  //document.buttonContainer.removeChild(color);
  var remBtn = document.getElementsByClassName('button');
}

remBtn.addEventListener('click', handleRemBtn);

function handleRemBtn() {
  removeButton(colorSelect.value);
  addColor(colorSelect.value);
  document.body.style.backgroundColor = 'white'; 
}
