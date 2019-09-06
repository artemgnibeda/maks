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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoJy5icmlmIC5idG5fd3JhcCBidXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gIGlmKCQoJy5maXJzdF9xMScpLnByb3AoJ2NoZWNrZWQnKSl7XHJcbiAgICAkKCcuYnJpZiAuYm9sZCcpLnRleHQoJ9CR0LvQsNCz0L7QtNCw0YDQuNC8INC30LAg0LLRi9Cx0L7RgCDQvdCw0YjQtdC5INC60L7QvNC/0LDQvdC40LghJyk7XHJcbiAgICAkKCcucXVpeicpLmhpZGUoKTtcclxuICAgICQoJy5idG5fd3JhcCcpLmhpZGUoKTtcclxuICAgICQoJy5hbnN3ZWFyXzEnKS5mYWRlSW4oKTtcclxuICB9XHJcbiAgZWxzZSBpZiAoJCgnLnNlY29uZF9xMScpLnByb3AoJ2NoZWNrZWQnKSkge1xyXG4gICAgJCgnLmJyaWYgLmJvbGQnKS50ZXh0KCfQkdC70LDQs9C+0LTQsNGA0LjQvCDQt9CwINCy0YvQsdC+0YAg0L3QsNGI0LXQuSDQutC+0LzQv9Cw0L3QuNC4IScpO1xyXG4gICAgJCgnLnF1aXonKS5oaWRlKCk7XHJcbiAgICAkKCcuYnRuX3dyYXAgLmNvbnN1bHQtYnRuJykuaGlkZSgpO1xyXG4gICAgJCgnLmJ0bl93cmFwIC5jb25zdWx0LWJ0bjInKS5mYWRlSW4oKTtcclxuICAgICQoJy5hbnN3ZWFyXzInKS5mYWRlSW4oKTtcclxuICB9XHJcbiAgZWxzZSBpZiAoJCgnLnRoaXJkcV8yJykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAkKCcuYnJpZiAuYm9sZCcpLnRleHQoJ9CR0LvQsNCz0L7QtNCw0YDQuNC8INC30LAg0LLRi9Cx0L7RgCDQvdCw0YjQtdC5INC60L7QvNC/0LDQvdC40LghJyk7XHJcbiAgICAkKCcucXVpeicpLmhpZGUoKTtcclxuICAgICQoJy5idG5fd3JhcCAuY29uc3VsdC1idG4nKS5oaWRlKCk7XHJcbiAgICAkKCcuYnRuX3dyYXAgLmNvbnN1bHQtYnRuMicpLmZhZGVJbigpO1xyXG4gICAgJCgnLmFuc3dlYXJfMicpLmZhZGVJbigpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgICQoJy5icmlmIC5ib2xkJykudGV4dCgn0JHQu9Cw0LPQvtC00LDRgNC40Lwg0LfQsCDQstGL0LHQvtGAINC90LDRiNC10Lkg0LrQvtC80L/QsNC90LjQuCEnKTtcclxuICAgICQoJy5xdWl6JykuaGlkZSgpO1xyXG4gICAgJCgnLmJ0bl93cmFwJykuaGlkZSgpO1xyXG4gICAgJCgnLmFuc3dlYXJfMycpLmZhZGVJbigpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vL21lbnUgYnRuXHJcbiQoJy5maXJzdC1ibG9jay1oZWFkZXIgLm1lbnVfYnRuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAkKCcubW9iX21lbnUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLm1vYl9tZW51IGEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICQoJy5tb2JfbWVudScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxufSlcclxuXHJcbnZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbnZhciBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbnZhciBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTsgLy9KYW51YXJ5IGlzIDAhXHJcbnZhciB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbnRvZGF5ID0gbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XHJcbnRvZGF5ID0gbW0gKyAnLycgKyBkZCArICcvJyArIHl5eXk7XHJcbiQoJyN0b2RheScpLmh0bWwodG9kYXkpO1xyXG4vLyAkKCcjdG9kYXkyJykuaHRtbCh0b2RheS0xNCk7Il0sImZpbGUiOiJtYWluLmpzIn0=
