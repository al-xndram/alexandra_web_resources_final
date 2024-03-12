$(document).ready(function () {
    $("#abstract").hover(
      function () {
        $(".abstract_index").css("color", "red");
      },
      function () {
        $(".abstract_index").css("color", "steelblue");
      }
    );
  
    $(".abstract_index").click(function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
      $(".content").toggleClass("contentActive");
    });
  
  
    $(".sound_index, .abstract_index").hover(function() {
      $("audio").prop("muted", true);
      $(this).find("audio").prop("muted", false);
      
    },
    function() {
      $("audio").prop("muted", false);
      $(".content").removeClass("contentActive");
  
    });
  
  
  
  $(".sound_index").click(function(){
    
    $(this).find(".modal").addClass("active")
  })
  
  $(".close").click(function(){
    
    setTimeout(function(){
      $(".modal").removeClass("active");
    },50)
  })
  
  
  $(".abstract_index").click(function() {
    $("audio").prop("muted", true);
    
    a = document.getElementById($(this).find("audio").attr("id"));
  
    $(this).find("audio")
      .prop("muted", false);
  
  
  
  
  });
  
  
  
  });
  