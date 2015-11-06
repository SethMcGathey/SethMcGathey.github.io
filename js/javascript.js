
$.getJSON( "js/blogEntries.json", function(data) {
  var obj; 
  obj = data;
  //document.getElementById("blogPosts").innerHTML = obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text;
  

  $.each(obj.entries, function(index, value)
  {
    $(".blogPosts").append("<h5 class='centerText'>" + value.date + "</h5>");
    $(".blogPosts").append("<h5 class='centerText'>" + value.title + "</h5>");
    $(".blogPosts").append("<p>" + value.text + "</p>");
    //$(".blogPosts").text(obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text);
  })
})
  /*.success(function() {
    console.log( "second success" );
  })
  .error(function() {
    console.log( "error" );
  })
  .complete(function() {
    console.log( "complete" );
  });*/
 
// Perform other work here ...
 
// Set another completion function for the request above
/*obj.complete(function() {
  console.log( "second complete" );
});*/


