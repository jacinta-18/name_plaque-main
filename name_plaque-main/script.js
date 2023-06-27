// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');


// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}


userInput.oninput = (e)=>{
  countLeters(e.target.value)
}



const buyNow = () => {

  const inputField = document.getElementById('guessField');
  const defaultText = 'YOUR NAME';
  const maxLength = 15;

  if (inputField.value.trim() === '') {
    alert('Please input letters.');
  } else if (inputField.value.trim().toUpperCase()=== defaultText) {
    alert('Please enter your custom letters.');
    inputField.value = ''
  } else if (inputField.value.length > maxLength) {
    alert('You have exceeded the number of available letters.');
  } else {
    alert('Success! You entered a unique letter.');
  }
};

const buyNowButton = document.getElementById('buyNowButton'); 
buyNowButton.addEventListener('click', buyNow);



