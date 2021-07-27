// hamburger_button 
$(function(){
  $('.hamburger_button').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.navcont').toggleClass('active');

  });
});