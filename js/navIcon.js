function begin() {
  $('.navIcons .divIcons').hover(function() {
    $('h6', this).removeClass('hidden');
  }, function() {
    $('h6', this).addClass('hidden');
  });
}
$(document).ready(begin);