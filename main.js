$(document).ready(function() {
  
$("#skills li").hover(function() {
  $(this).addClass("shake");
  $(this).addClass("animated");
   },
 function() {
  $(this).removeClass("shake");
  $(this).removeClass("animated");

 }); 
 
  
  $(".img_hover").hover(function() {
  $(this).addClass("pulse");
  $(this).addClass("animated");
  },
 function() {
  $(this).removeClass("pulse");
  $(this).removeClass("animated");

  }); 
  
});

