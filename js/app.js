function begin() {
  $email = $('#email');
  $password = $('#password');
  $btnLogin = $('#btnLogin');
  validateForm();
  validateBD();
}
/* Función validar campos de formulario */
function validateForm() {
  var validateEmail = false;
  var validatePassword = false; 

  function activeButton() {
    if (validateEmail && validatePassword) 
      $btnLogin.attr('disabled', false);    
  }

  function desactiveButton() {
    $btnLogin.attr('disabled', true);
  } 

  $email.on('input', function(event) {
    if ($(this).val().length >= 12) {
      validateEmail = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
 
  $password.on('input', function() {
    if ($(this).val().length >= 6) {
      validatePassword = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
}

/* Validar correo y password con BD */
function validateBD() {
  $btnLogin.on('click', function() {
    var validateData = false;
    firebase.database().ref('registro').on('child_added', function(s) {
      var user = s.val();
		  if (user.email == $email.val() && user.password == $password.val()) {
        validateData = true;
		    localStorage.email = $email.val();
        localStorage.password = $password.val();
        localStorage.name = user.nombres;
        localStorage.lastName = user.apellidos;
        $(location).attr('href', 'home.html');
      }
    });
    if (!validateData) {
      alert('Datos invalidos, Vuelva a intentarlo');
      $password.val('');
    }
  });
}

$(document).ready(begin);