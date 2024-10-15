// JavaScript Document

jQuery(document).ready(function(){

  $('.navi>li').mouseover(function(){        
	  $(this).find('.submenu').stop().slideDown(500);
  }).mouseout(function(){        
	  $(this).find('.submenu').stop().slideUp(500);
  });

  $(".notice li:first").click(function () {
    $("#modal").addClass("active");
  });
  $(".btn").click(function () {
    $("#modal").removeClass("active");
  });

  $(".bntext").click(function () {
    $("#event").addClass("active");
  });
  $(".event-btn").click(function () {
    $("#event").removeClass("active");
  });

  $(".coupon-btn").click(function () {
    $("#coupon").addClass("active");
    $("#event").removeClass("active");
  });
  $(".cou-btn").click(function () {
    $("#coupon").removeClass("active");
  });

  $(".notice li:eq(1)").click(function () {
    $("#modal1").addClass("active");
  });
  $(".btn").click(function () {
    $("#modal1").removeClass("active");
  });

  $(".notice li:eq(2)").click(function () {
    $("#modal2").addClass("active");
  });
  $(".btn").click(function () {
    $("#modal2").removeClass("active");
  });
  
  $(".notice li:eq(3)").click(function () {
    $("#modal3").addClass("active");
  });
  $(".btn").click(function () {
    $("#modal3").removeClass("active");
  });
  $(".notice li:eq(4)").click(function () {
    $("#modal4").addClass("active");
  });
  $(".btn").click(function () {
    $("#modal4").removeClass("active");
  });

  // $(".notice li:eq(1)").click(function () {
  //   $("#modal2").addClass("active");
  // });

  setInterval(function(){ 
    $('.slidelist').delay(1000);
    $('.slidelist').animate({marginLeft: 0});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft: '-100%'});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft: '-200%'});
    $('.slidelist').delay(2000);
  });

  $("a[href='sdi.html']").click(function(event) {
    event.preventDefault();
    $("#image").load("sdi.html");
  });
  $("a[href='tdi.html']").click(function(event) {
    event.preventDefault();
    $("#image").load("tdi.html");
  });
  $("a[href='erdi.html']").click(function(event) {
    event.preventDefault();
    $("#image").load("erdi.html");
  });
  $("a[href='frti.html']").click(function(event) {
    event.preventDefault();
    $("#image").load("frti.html");
  });
  $("a[href='pfi.html']").click(function(event) {
    event.preventDefault();
    $("#image").load("pfi.html");
  });

  $('.logo a').click(function(event) {
    event.preventDefault();
    location.reload(); 
  });

});


