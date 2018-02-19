function begin() {
  /* Funcionalidad menú hamburguesa */
  $('.button-collapse').sideNav();

  var $areaPublication = $('#areaPublication');
  var $post = $('#post');
  var $msg = $('#msg');
  var $dataUser = $('#dataUser');

  validateiInput();
  clickPost();
  console.log('ssdsd');
  $dataUser.append('<p class="name t-g">o</p></a>');
  function validateiInput() {
    $areaPublication.on('input', function() {
      if ($areaPublication.val().length > 1) {
        $post.attr('disabled', false);
      } else {
        $post.attr('disabled', true);
        console.log('dddd');
      }
    });
  }
  function clickPost() {
    $post.on('click', function(event) {
      event.preventDefault();
      $msg.prepend(
      '<div class="header">'+
          '<div class="col s2 center-align">'+
            '<img src="../assets/images/profile_pic.jpg" alt="" class="circle responsive-img">'+
          '</div>'+
          '<div class="col s10">'+
              '<h5><strong>'+localStorage.name+' '+localStorage.lastName+'</strong></h5>'+
              '<p class="dateTime">15 ene.</p>'+
          '</div>'+
        '</div>'+
        '<div class="card-content">'+
            '<p>'+$areaPublication.val()+'</p>'+            
          // <img src="../assets/images/habitacion01.jpg" class="responsive-img" alt="">
        '</div>'+
        '<div class="card-action">'+
          '<textarea name="" id="" cols="30" rows="10" placeholder="Añadir un comentario" class="areaPublication"></textarea>'+
        '</div>'
          );
          $areaPublication.val('');
  });
  }
}


$(document).ready(begin);
    