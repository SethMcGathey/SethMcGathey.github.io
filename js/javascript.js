var obj = $.getJSON( "js/blogEntries.json", function(data) {
  console.log( data );
})
console.log(obj);
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


document.getElementById("blogPosts").innerHTML = obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text;