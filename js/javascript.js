
$.getJSON( "js/blogEntries.json", function(data) {
  var obj; 
  obj = data;
  //document.getElementById("blogPosts").innerHTML = obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text;
  

  $.each(obj.entries, function(index, value)
  {
    $(".blogPosts").append("<h5 class='centerText pagination'>" + value.date + "</h5>").hide();
    $(".blogPosts").append("<h5 class='centerText pagination'>" + value.title + "</h5>").hide();
    $(".blogPosts").append("<p class='centerText pagination'>" + value.text + "</p>").hide();
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

/*showPage = function(page) {
    $(".pagination").hide();
    $(".pagination").each(function(n) {
        if (n >= pageSize * (page - 1) && n < pageSize * page)
            $(this).show();
    });        
}*/

