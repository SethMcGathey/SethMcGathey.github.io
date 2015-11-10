"use strict";

$(document).ready(function() {
    {
      if($(window).width() < 992){
          $(document).ready(function(){
            $(".tan").hide();
            $(".red").hide();
            $(".green").hide();
            $(".teal").hide();
            $(".blue").hide();
            $(".lightGreen").hide();
          });
        };


          $(document).ready(function(){
            $("#workHistory").click(function(){
                $(".tan").toggle("slow");
                $(".red").toggle("slow");
            });
          });


          $(document).ready(function(){
            $("#hobbies").click(function(){
                $(".green").toggle("slow");
                $(".teal").toggle("slow");
            });
          });

          $(document).ready(function(){
            $("#programming").click(function(){
                $(".blue").toggle("slow");
                $(".lightGreen").toggle("slow");
            });
          });
      }
      if($(window).width() > 992){
          $(document).ready(function(){
            $(".tan").show();
            $(".red").show();
            $(".green").show();
            $(".teal").show();
            $(".blue").show();
            $(".lightGreen").show();
          });
        };
  });

$(window).resize(function() {
    {
      if($(window).width() < 992){
          $(document).ready(function(){
            $(".tan").hide();
            $(".red").hide();
            $(".green").hide();
            $(".teal").hide();
            $(".blue").hide();
            $(".lightGreen").hide();
          });
        };
      if($(window).width() > 992){
          $(document).ready(function(){
            $(".tan").show();
            $(".red").show();
            $(".green").show();
            $(".teal").show();
            $(".blue").show();
            $(".lightGreen").show();
          });
        };
  };
});

    
    //on hover show seths paragraph hide others
    $(document).ready(function()
    {
    	$("#leftHomePic").hover(function()
    	{
        	$(".beckyParagraph").hide();
        	$(".bothParagraph").hide();
        	$(".sethParagraph").show();
        }, 
        function()
        {
        	$(".beckyParagraph").hide();
        	$(".bothParagraph").show();
        	$(".sethParagraph").hide();
    	});
	});
    //on hover show beckys paragraph hide others
    $(document).ready(function()
    {
    	$("#rightHomePic").hover(function()
    	{
        	$(".beckyParagraph").show();
        	$(".bothParagraph").hide();
        	$(".sethParagraph").hide();
        }, 
        function()
        {
        	$(".beckyParagraph").hide();
        	$(".bothParagraph").show();
        	$(".sethParagraph").hide();
    	});
	});
	//on no hover show both paragraph hide others
	$(document).ready(function()
    {
    	$(".beckyParagraph").hide();
        $(".sethParagraph").hide();
	});
	
	

    $(document).ready( function (){
      var bgcolor;
     $(".no-gutter").on(
        {
         mouseenter: function(){ 
          $(".color, .subjectImg", this).hide();
          $(".bw, .subjectImg", this).show();
          bgcolor = $(".subjectText", this).css("background-color");
          console.log(bgcolor);
          $(".subjectText", this).css("background-color", "#ffffff");
         },
         mouseleave: function(){ 
          $(".bw, .subjectImg", this).hide();
          $(".color, .subjectImg", this).show();
          $(".subjectText", this).css("background-color", bgcolor);
         }
        }
       );
     });
    