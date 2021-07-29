
$(function(){
  // hamburger_button 
  $('.hamburger_button').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.navcont').toggleClass('active');

  });
  // slide
  var slides = document.querySelector('.slides'),
      slide = document.querySelectorAll('.slides li'),
      curentIdx = 0,
      slideCount = slide.length,
      slideWidth =1100,
      slideMargin = 50,
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next');
      
      slides.style.width = (slideWidth + slideWidth)*slideCount-slideMargin +'px';
      function moveSlide(num){
        slides.style.left=-num*900+'px';
        curentIdx=num;
      }
      nextBtn.addEventListener('click',function(){
        if(curentIdx<slideCount){
          moveSlide(curentIdx + 1);
          console.log(curentIdx);
        }else{
          moveSlide(0);
        };
      });
      prevBtn.addEventListener('click',function(){
        if(curentIdx>0){
          moveSlide(curentIdx - 1);
          console.log(curentIdx);
        }else{
          moveSlide(slideCount-3);
        };
      });
     

});