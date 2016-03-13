$( document ).ready( function() { 
  $( "#wordpressHomePage" ).show(); 
  $( "#wordpressContactPage" ).hide();
  $( "#wordpressProductPage" ).hide();
  $( "#wordpressTeamPage" ).hide();
} );

$('.wordpressHomeButton').click( function() { 
  $( "#wordpressHomePage" ).show(); 
  $( "#wordpressContactPage" ).hide();
  $( "#wordpressProductPage" ).hide();
  $( "#wordpressTeamPage" ).hide();
} );

$('.wordpressContactPageButton').click( function() { 
  $( "#wordpressHomePage" ).hide(); 
  $( "#wordpressContactPage" ).show();
  $( "#wordpressProductPage" ).hide();
  $( "#wordpressTeamPage" ).hide();
} );

$('.wordpressProductPageButton').click( function() { 
  $( "#wordpressHomePage" ).hide(); 
  $( "#wordpressContactPage" ).hide();
  $( "#wordpressProductPage" ).show();
  $( "#wordpressTeamPage" ).hide();
} );

$('.wordpressMeetTheTeamPageButton').click( function() { 
  $( "#wordpressHomePage" ).hide(); 
  $( "#wordpressContactPage" ).hide();
  $( "#wordpressProductPage" ).hide();
  $( "#wordpressTeamPage" ).show();
} );

//********** toggle menu *************
$("#menuIcon").click(function(e){
  $("#mobileButtons").slideToggle();
  e.stopPropagation(); 
});

$(document).click(function(){                   
  $("#mobileButtons").slideUp();
});