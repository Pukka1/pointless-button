//Get add_button
let button = document.querySelector('.add-button'), count = 0;

//when user presses the add_button
button.addEventListener('click', increaseNumber);

//Get +1 from add button function
function increaseNumber() {
  count += 1;

  button.innerHTML = count;
}
