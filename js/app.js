 (function() {
     var header = document.querySelector("#header");

     if (window.location.hash) {
         header.classList.add("headroom--unpinned");
     }

     var headroom = new Headroom(header, {
         tolerance: {
             down: 10,
             up: 20
         },
         offset: 205
     });
     headroom.init();

 }());
 document.getElementById('hamburger').addEventListener('click', checkNav);
 window.addEventListener("keyup", function(e) {
     if (e.keyCode == 27)
         closeNav();
 }, false);

 function checkNav() {
     if (document.body.classList.contains('is-active')) {
         closeNav();
     } else {
         openNav();
     }
 }

 function closeNav() {
     document.body.classList.remove('is-active');
 }

 function openNav() {
     document.body.classList.add('is-active');
 }
$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(),
            james = $('.header');

        if (scrollPos > 20) {
            james.addClass('change-color');
        } else {
            james.removeClass('change-color');
        }
    });
});