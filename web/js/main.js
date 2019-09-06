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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoJy5icmlmIC5idG5fd3JhcCBidXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xuICBpZigkKCcuZmlyc3RfcTEnKS5wcm9wKCdjaGVja2VkJykpe1xuICAgICQoJy5icmlmIC5ib2xkJykudGV4dCgn0JHQu9Cw0LPQvtC00LDRgNC40Lwg0LfQsCDQstGL0LHQvtGAINC90LDRiNC10Lkg0LrQvtC80L/QsNC90LjQuCEnKTtcbiAgICAkKCcucXVpeicpLmhpZGUoKTtcbiAgICAkKCcuYnRuX3dyYXAnKS5oaWRlKCk7XG4gICAgJCgnLmFuc3dlYXJfMScpLmZhZGVJbigpO1xuICB9XG4gIGVsc2UgaWYgKCQoJy5zZWNvbmRfcTEnKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAkKCcuYnJpZiAuYm9sZCcpLnRleHQoJ9CR0LvQsNCz0L7QtNCw0YDQuNC8INC30LAg0LLRi9Cx0L7RgCDQvdCw0YjQtdC5INC60L7QvNC/0LDQvdC40LghJyk7XG4gICAgJCgnLnF1aXonKS5oaWRlKCk7XG4gICAgJCgnLmJ0bl93cmFwIC5jb25zdWx0LWJ0bicpLmhpZGUoKTtcbiAgICAkKCcuYnRuX3dyYXAgLmNvbnN1bHQtYnRuMicpLmZhZGVJbigpO1xuICAgICQoJy5hbnN3ZWFyXzInKS5mYWRlSW4oKTtcbiAgfVxuICBlbHNlIGlmICgkKCcudGhpcmRxXzInKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAkKCcuYnJpZiAuYm9sZCcpLnRleHQoJ9CR0LvQsNCz0L7QtNCw0YDQuNC8INC30LAg0LLRi9Cx0L7RgCDQvdCw0YjQtdC5INC60L7QvNC/0LDQvdC40LghJyk7XG4gICAgJCgnLnF1aXonKS5oaWRlKCk7XG4gICAgJCgnLmJ0bl93cmFwIC5jb25zdWx0LWJ0bicpLmhpZGUoKTtcbiAgICAkKCcuYnRuX3dyYXAgLmNvbnN1bHQtYnRuMicpLmZhZGVJbigpO1xuICAgICQoJy5hbnN3ZWFyXzInKS5mYWRlSW4oKTtcbiAgfVxuICBlbHNlIHtcbiAgICAkKCcuYnJpZiAuYm9sZCcpLnRleHQoJ9CR0LvQsNCz0L7QtNCw0YDQuNC8INC30LAg0LLRi9Cx0L7RgCDQvdCw0YjQtdC5INC60L7QvNC/0LDQvdC40LghJyk7XG4gICAgJCgnLnF1aXonKS5oaWRlKCk7XG4gICAgJCgnLmJ0bl93cmFwJykuaGlkZSgpO1xuICAgICQoJy5hbnN3ZWFyXzMnKS5mYWRlSW4oKTtcbiAgfVxufSk7XG5cbi8vbWVudSBidG5cbiQoJy5maXJzdC1ibG9jay1oZWFkZXIgLm1lbnVfYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCgnLm1vYl9tZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xufSk7XG5cbiQoJy5tb2JfbWVudSBhJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCgnLm1vYl9tZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xufSkiXSwiZmlsZSI6Im1haW4uanMifQ==
