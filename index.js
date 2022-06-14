gsap.registerPlugin(MotionPathPlugin,CustomEase);

$(document).ready(function(){
    hamburgerMenu=$('button #hamburger');
    hamburgerMenu.on("click", ()=>{
        hamburgerMenu.toggleClass('.clicked');
    })
})

  /*HAMBURGER TOGGLE MENU*/
  $(document).ready(function(){ 
  menuToggle = 
  $("#menu_toggle_wrapper");
   menu = $("#menu_wrapper");

  menuToggle.on("click", () => {
     menuToggle.toggleClass("active");
     menu.toggleClass("active");
     
   });

  });
  
  

  /* CONTACT MOBILE MENU*/
  $(document).ready(function(){
    var menu =$('#contact');
    var mailButton=$("button.mail");
    $(menu).hide();
    $(mailButton).on('click',function(){
      $(menu).show();
      $('.logo').hide();
   });  
   $('.si-newmail').on('click',function(){
    $(menu).show();
    $('.logo').hide();
 }); 
 $('.menu_item:nth-child(4)').on('click',function(){
    $(menu).show();
    $('.logo').hide();
 }); 
  });


$(document).ready(function(){
  $("button.close").click(function(){
    $("#contact").hide();
    $(".logo").show();
  });
});

 
$(window).scroll(function(){
  $('.logo').hide();
})

document.getElementById("hamburger").addEventListener("click", function(){ this.classList.toggle("active"); });






  



