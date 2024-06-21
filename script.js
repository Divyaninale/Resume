
$(document).ready(function () {
  $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');

      if ($(window).scrollTop() > 0) {
          $('.top').show();
      } else {
          $('.top').hide();
      }
  }); // Close the on 'scroll load' block

  // Smooth scroll
  $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
              scrollTop: $($(this).attr('href')).offset().top,
          },
          500,
          'linear'
      );
  });
});





  // AOS.init({
  //   duration: 1000,
  //   once: true,
  //});
  
  
  
  // function reveal() {
  //   var reveals = document.querySelectorAll(".reveal");
  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals[i].getBoundingClientRect().top;
  //     var elementVisible = 0;
  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add("anim");
  //     }
  //     else {
  //       reveals[i].classList.remove("anim");
  //     }
  //   }
  // }
  // window.addEventListener("scroll", reveal);
  // reveal();
  