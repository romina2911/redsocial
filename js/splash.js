function begin() {
  setTimeout(redirect, 3000);
}
  
function redirect() {
  $(location).attr('href', 'views/main.html');
}
  
$(document).ready(begin);
  