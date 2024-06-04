// navbar changes on scrolling  ----------------
$(document).ready(function(){
  $(window).scroll(function(){
    
    var imgInsideAnchor = $('.navbar-brand img'); //for selecting img Inside Anchor 

    if($(this).scrollTop()>220){
      $('.navbar').addClass("scrolled-navbar");
      $('.navbar').addClass("shrink-nav");
      $('.nav-link').addClass("scrolled-link");
      $('.menu-icon').addClass("menu-icon-scroll");
      
      imgInsideAnchor.css('filter', 'brightness(0) invert(0)');
    }
    else{
      $('.navbar').removeClass("scrolled-navbar");
      $('.navbar').removeClass("shrink-nav");
      $('.nav-link').removeClass("scrolled-link");
      $('.menu-icon').removeClass("menu-icon-scroll");

      imgInsideAnchor.css('filter', 'brightness(0) invert(1)');


    }
  
})
})




// typed js initialization ----------------------------------------

document.addEventListener('DOMContentLoaded', function(){
  // Initialize Typed.js
  var options = {
      strings: [ "Web Developer..","Software Developer..","Graphic Designer.."],
      typeSpeed: 80, // typing speed in milliseconds
      backSpeed: 85, // backspacing speed in milliseconds
      loop: true // loop the animation
  };

  var typed = new Typed('.auto-type', options);
});


















// const items = document.querySelectorAll('.item')


// const expand = (item, i) => {


//   items.forEach((it, ind) => {
//     if (i === ind) return
//     it.clicked = false
//   })
//   gsap.to(items, {
//     width: item.clicked ? '18%' : '12%',
//     duration: 2,
//     ease: 'elastic(1, .6)'
//   })
  
//   item.clicked = !item.clicked
//   gsap.to(item, {
//     width: item.clicked ? '38%' : '15.5%',
//     duration: 2.5,
//     ease: 'elastic(1, .3)'
//   })
// }

// items.forEach((item, i) => {
//   item.clicked = false
//   item.addEventListener('click', () => expand(item, i))
// })




