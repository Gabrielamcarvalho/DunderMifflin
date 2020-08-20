const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');


//show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
//show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
//validate email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim()) ){
    showSuccess(input);
  }
  else {
    showError(input, 'Email is not valid');
  }

}
//check required
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
//check length*/
function checkLength(input, min, max){
  if (input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  }else if (input.value.length > max){
    showError(input, `${getFieldName(input)} must be less than ${max} characters` );
  }
  else{
    showSuccess(input);
  }
}
//
//get the name of the inputs
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email]);
  checkLength(username, 3, 15);

  checkEmail(email);

});