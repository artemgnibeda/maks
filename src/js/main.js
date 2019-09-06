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
