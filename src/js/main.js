$('.brif .btn_wrap button').click(function(){
  if($('.first_q1').prop('checked')){
    $('.brif .bold').text('Благодарим за выбор нашей компании!');
    $('.quiz').hide();
    $('.btn_wrap').hide();
    $('.answear_1').fadeIn();
  }
  else if ($('.second_q1').prop('checked')) {
    $('.brif .bold').text('Благодарим за выбор нашей компании!');
    $('.quiz').hide();
    $('.btn_wrap .consult-btn').hide();
    $('.btn_wrap .consult-btn2').fadeIn();
    $('.answear_2').fadeIn();
  }
  else if ($('.thirdq_2').prop('checked')) {
    $('.brif .bold').text('Благодарим за выбор нашей компании!');
    $('.quiz').hide();
    $('.btn_wrap .consult-btn').hide();
    $('.btn_wrap .consult-btn2').fadeIn();
    $('.answear_2').fadeIn();
  }
  else {
    $('.brif .bold').text('Благодарим за выбор нашей компании!');
    $('.quiz').hide();
    $('.btn_wrap').hide();
    $('.answear_3').fadeIn();
  }
});

//menu btn
$('.first-block-header .menu_btn').click(function(){
  $('.mob_menu').toggleClass('active');
});

$('.mob_menu a').click(function(){
  $('.mob_menu').removeClass('active');
})

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
today = mm + '/' + dd + '/' + yyyy;
$('#today').html(today);
// $('#today2').html(today-14);
