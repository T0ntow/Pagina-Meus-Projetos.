// document.getElementById('olho').addEventListener('mousedown', function() {
//     document.getElementById('pass').type = 'text';
//   });
  
//   document.getElementById('olho').addEventListener('mouseup', function() {
//     document.getElementById('pass').type = 'password';
//   });
  
//   // Para que o password não fique exposto apos mover a imagem.
//   document.getElementById('olho').addEventListener('mousemove', function() {
//     document.getElementById('pass').type = 'password';
//   });


var input = document.querySelector('.senha input');
var img = document.querySelector('.senha img');
img.addEventListener('click', function () {
  input.type = input.type == 'text' ? 'password' : 'text';
});


let form = document.getElementById('signup-form');


// Function to check that the input field is not empty while submitting
function requireValue(input) {
  return !(input.value.trim() === '');
}
// Event listener to perform the validation when user clicks on submit button
form.addEventListener('submit', (event) => {
  requiredFields.forEach((input) => {
      valid = valid|requireValue(input.input);
  });
  if (!valid) {
      event.preventDefault();
  }
});
