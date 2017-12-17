
/* function for intiating the animation on scroll */

$(function(){
  new WOW().init();  
});
/*------ navbar own customization ---- */


/*------ function for smooth scroll effect -----*/

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
/* function for nav bar collapse after clicking a section in the navbar it'll automatically close the options */
$(function(){
    $(".navbar-collapse ul li a").on("click touch",function(){
        $(".navbar-toggle").click();
    })
});