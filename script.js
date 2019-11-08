var buttonContainer = document.getElementById('button-container');
var colorSelect = document.getElementById('select-color');
var addBtn = document.getElementById('add-new');

initDropdownColors();

function addButton(color) {
  var newButton = document.createElement('button');
  newButton.innerText = colorSelect.value;
  newButton.value = colorSelect.value;
  newButton.style.backgroundColor = colorSelect.value;
  newButton.classList.add('button');
  buttonContainer.appendChild(newButton);
}

//Creating original buttons
function ogButtons(color) {
  var original = document.createElement ('button');
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

