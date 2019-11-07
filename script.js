var buttonContainer = document.getElementById('button-container');

function addButton(color){
  var newButton = document.createElement('button');
  newButton.innerText = color;
  newButton.value = color;
  newButton.style.backgroundColor = color;
  //button.classList.add('button');
  buttonContainer.appendChild(newButton);
}

addButton('green');
addButton('red');
addButton('yellow');

buttonContainer.addEventListener('click', colorChange);

function colorChange(event) {
  var newColor = event.target.value;
  document.body.style.backgroundColor = newColor;
}

