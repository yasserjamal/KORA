
$(function () {

  

  $(".menuBtn").click(function(){

$("  .menuPhone").toggleClass("active");
$(this).find("i").toggleClass("fa-bars").toggleClass("fa-close")
  });




  $(".dropdownlistBtn").click(function () {

      $(".innerList").slideToggle();
      $(this).toggleClass("active");
  });









});