
var obj; 
var current = 1;
var showThisMany = 3;
$.getJSON( "js/blogEntries.json", function(data) {

  obj = data;
  //document.getElementById("blogPosts").innerHTML = obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text;
  var numOfEntries = 0;
  $(".paginationButtons").append("<div class='centerText pagination whiteBackground'><a onClick='unhideGroupPrev()' href='#''>Previous</a></div>");
  $.each(obj.entries, function(index, value)
  {
    numOfEntries++;
    $(".blogPosts").append("<div class='profBoxes postContainer" + numOfEntries + "'></div>").hide();
    $(".postContainer" + numOfEntries).append("<h5 class='centerText group" + numOfEntries + "'>" + value.date + "</h5>");//.hide();
    $(".postContainer" + numOfEntries).append("<h5 class='centerText group" + numOfEntries + "'>" + value.title + "</h5>");//.hide();
    $(".postContainer" + numOfEntries).append("<p class='centerText group" + numOfEntries + "'>" + value.text + "</p>");//.hide();
    $(".group" + numOfEntries).hide();
    //$(".blogPosts").text(obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text);
  })
  for(var i = 1; i <= Math.ceil(numOfEntries/showThisMany); i++)
  {
    $(".paginationButtons").append("<div class='centerText pagination whiteBackground'><a onClick='unhideGroup(" + i + ")' href='#''>" + i + "</a></div>");
  }
  $(".paginationButtons").append("<div class='centerText pagination whiteBackground'><a onClick='unhideGroupNext()' href='#''>Next</a></div>");
  unhideGroup(1);

})

function unhideGroup(number)
{
  current = number;
  var numOfEntries = 0;
  $.each(obj.entries, function(index, value)
  {
    numOfEntries++;
    $(".postContainer" + numOfEntries).hide();
    $(".group" + numOfEntries).hide();
    //$(".blogPosts").text(obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text);
  })

  var groupNumber = showThisMany * number-2;
  for(var i = 1; i <= showThisMany; i++){
    $(".postContainer" + numOfEntries).show();
    $(".group" + groupNumber).show();
    groupNumber++;
  }
}

function unhideGroupPrev()
{
  var number = current - 1;
  var numOfEntries = 0;
  $.each(obj.entries, function(index, value)
  {
    numOfEntries++;
    $(".group" + numOfEntries).hide();
    //$(".blogPosts").text(obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text);
  })

  var showThisMany = 3;
  var groupNumber = showThisMany * number-2;
  for(var i = 1; i <= showThisMany; i++){
    $(".group" + groupNumber).show();
    groupNumber++;
  }
  current = number;
}
function unhideGroupNext()
{
  var number = current + 1;
  var numOfEntries = 0;
  $.each(obj.entries, function(index, value)
  {
    numOfEntries++;
    $(".group" + numOfEntries).hide();
    //$(".blogPosts").text(obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text);
  })

  var showThisMany = 3;
  var groupNumber = showThisMany * number-2;
  for(var i = 1; i <= showThisMany; i++){
    $(".group" + groupNumber).show();
    groupNumber++;
  }
  current = number;
}


$("#TeamProfile").click(function() {
  $("#target")
});



function findString (str) {
 if (parseInt(navigator.appVersion)<4) return;
 var strFound;
 if (window.find) {

  // CODE FOR BROWSERS THAT SUPPORT window.find

  strFound=self.find(str);
  if (!strFound) {
   strFound=self.find(str,0,1);
   while (self.find(str,0,1)) continue;
  }
 }
 else if (navigator.appName.indexOf("Microsoft")!=-1) {

  // EXPLORER-SPECIFIC CODE

  if (TRange!=null) {
   TRange.collapse(false);
   strFound=TRange.findText(str);
   if (strFound) TRange.select();
  }
  if (TRange==null || strFound==0) {
   TRange=self.document.body.createTextRange();
   strFound=TRange.findText(str);
   if (strFound) TRange.select();
  }
 }
 else if (navigator.appName=="Opera") {
  alert ("Opera browsers not supported, sorry...")
  return;
 }
 if (!strFound) alert ("String '"+str+"' not found!")
 return;
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

