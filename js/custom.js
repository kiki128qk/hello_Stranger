
$(function(){
  // hamburger_button 
  $('.hamburger_button').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.navcont').toggleClass('active');

  });
  
  var sliderWrapper=document.getElementsByClassName('container'),
      sliderContainer=document.getElementsByClassName('slider_container'),
      slides=document.getElementsByClassName('slide'),
      slideCount=slides.length,
      currenIndex=0,
      topHeight=0,
      navPrev=document.getElementsByClassName('prev'),
      navNext=document.getElementsByClassName('next');

  // function slideHeight(){
  //   for(var i=0;i<slideCount;i++){
  //     if(slides[i].offsetHeight>topHeight){
  //       topHeight=slides[i].offsetHeight;
  //     }
  //   }
  //   sliderWrapper[0].style.topHeight=topHeight;
  //   sliderContainer[0].style.topHeight=topHeight;
  // };
  // slideHeight();

  for(var i=0;i<slideCount;i++){
    slides[i].style.left =i*100+'%';
  }

  console.log(topHeight);

  
});