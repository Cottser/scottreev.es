/**
 * Run Javascript for the mobile collapse menu.
 */
jQuery(document).ready(function($){
  // Add the .js class if JS is enabled. CSS rules can use this. 
  $('body').addClass('js');

  // Add in the arrow element.
  $('#main-nav > h2').append('<span id="menu-arrow"></span>');

  // Turn on the menu listener.
  $('#main-nav > h2').click(function() {
    $('#menu-arrow').toggleClass('menu-open');
    $('#main-menu').slideToggle('fast');
  });

  // Solve the disappearing menu bug.
  $(window).resize(function() {
    if ($(window).width() <= 580) {
      $('#main-menu').attr('style','');
    };
  });
});
;
