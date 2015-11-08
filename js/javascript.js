
$.getJSON( "js/blogEntries.json", function(data) {
  var obj; 
  obj = data;
  //document.getElementById("blogPosts").innerHTML = obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text;
  var numOfEntries = 0;
  $(".paginationButtons").append("<div class='centerText pagination'><a>Previous</a></div>");
  $.each(obj.entries, function(index, value)
  {
    numOfEntries++;
    $(".blogPosts").append("<h5 class='centerText group" + numOfEntries + "'>" + value.date + "</h5>").hide();
    $(".blogPosts").append("<h5 class='centerText group" + numOfEntries + "'>" + value.title + "</h5>").hide();
    $(".blogPosts").append("<p class='centerText group" + numOfEntries + "'>" + value.text + "</p>").hide();
    
    //$(".blogPosts").text(obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text);
  })
  $(".paginationButtons").append("<div class='centerText pagination'><a>Next</a></div>");

  for(var i = 1; i <= numOfEntries/3; i++)
  {
    $(".paginationButtons").append("<div class='centerText pagination'><a onClick='unhideGroup(" + i + ")' href='#''>" + i + "</a></div>");
  }

})
  function unhideGroup(number)
  {
    var showThisMany = 3;
    for(var i = 1; i <= showThisMany; i++){
      var groupNumber = number;
      $(".group" + groupNumber).show();
      console.log("group" + groupNumber);
      groupNumber++;
    }
  }
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

