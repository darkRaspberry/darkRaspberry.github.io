/* only execute this script when the document is ready */
$(document).ready(function(){
    /* function called when you click of the button */
    $(".navbutt").click(function(){
        
        /* this if else to change the text in the button*/
        if($(".navbutt").text() == "☰"){
         $(".navbutt").text("🞬");
        }else{
          $(".navbutt").text("☰");
        }
      
      /* this function toggle the visibility of our "li" elements */
      $("li").toggle("slow");
    });
  });