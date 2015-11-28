
var obj; 
var current = 1;
var showThisMany = 3;
var numOfPages = 0;
$.getJSON( "js/blogEntries.json", function(data) {

  obj = data;
  //document.getElementById("blogPosts").innerHTML = obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text;
  var numOfEntries = 0;
  $(".paginationButtons").append("<div class='centerText pagination whiteBackground' id='prev'><a onClick='unhideGroupPrev()' href='#''>Previous</a></div>");
  $.each(obj.entries, function(index, value)
  {
    numOfEntries++;
    $(".blogPosts").append("<div class='centerText' id='content" + numOfEntries + "'>" + value.date + "</div>");
    $("#content" + numOfEntries).append("<h5 class='centerText group" + numOfEntries + "'>" + value.date + "</h5>");//.hide();
    $("#content" + numOfEntries).append("<h5 class='centerText group" + numOfEntries + "'>" + value.title + "</h5>");//.hide();
    $("#content" + numOfEntries).append("<p class='centerText group" + numOfEntries + "'>" + value.text + "</p>");//.hide();
    $(".group" + numOfEntries).hide();
    //$(".blogPosts").text(obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text);
  })
  numOfPages = Math.ceil(numOfEntries/showThisMany);
  for(var i = 1; i <= numOfPages; i++)
  {
    $(".paginationButtons").append("<div class='centerText pagination whiteBackground'><a onClick='unhideGroup(" + i + ")' href='#''>" + i + "</a></div>");
  }
  $(".paginationButtons").append("<div class='centerText pagination whiteBackground' id='next'><a onClick='unhideGroupNext()' href='#''>Next</a></div>");
  unhideGroup(1);

})

function hidePrevButton()
{
  $("#prev").hide();
}
function hideNextButton()
{
  $("#next").hide();
}
function showPrevButton()
{
  $("#prev").show();
}
function showNextButton()
{
  $("#next").show();
}

function checkHideShowPrevNext(currentNumber)
{
    if(currentNumber <= 1)
    {
      hidePrevButton();
    }else
    {
      showPrevButton();
    }

    if(currentNumber >= numOfPages)
    {
      hideNextButton();
    }else
    {
      showNextButton();
    }
}

function unhideGroup(number)
{
  current = number;
  var numOfEntries = 0;
  $.each(obj.entries, function(index, value)
  {
    numOfEntries++;
    $(".group" + numOfEntries).hide();
    //$(".blogPosts").text(obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text);
  })

  var groupNumber = showThisMany * number-2;
  for(var i = 1; i <= showThisMany; i++){
    $(".group" + groupNumber).show();
    groupNumber++;
  }
  checkHideShowPrevNext(current);
}

function unhideGroupPrev()
{
  var number = current - 1;
  if(number > 0)
  {
    var numOfEntries = 0;
    $.each(obj.entries, function(index, value)
    {
      numOfEntries++;
      $(".group" + numOfEntries).hide();
      //$(".blogPosts").text(obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text);
    })

    var groupNumber = showThisMany * number-2;
    for(var i = 1; i <= showThisMany; i++){
      $(".group" + groupNumber).show();
      groupNumber++;
    }
    current = number;
  }
  checkHideShowPrevNext(current);
}
function unhideGroupNext()
{
  var number = current + 1;
  if(number <= numOfPages)
  {
    var numOfEntries = 0;
    $.each(obj.entries, function(index, value)
    {
      numOfEntries++;
      $(".group" + numOfEntries).hide();
      //$(".blogPosts").text(obj.entries[1].date + " " + obj.entries[1].title + " " + obj.entries[1].text);
    })

    var groupNumber = showThisMany * number-2;
    for(var i = 1; i <= showThisMany; i++){
      $(".group" + groupNumber).show();
      groupNumber++;
    }
    current = number;
  }
  checkHideShowPrevNext(current);
}

//search for words in blog page
function searchFunction()
{
  var word = document.getElementById('t1').value
  //RegExp(oldWord, "g")
  //var str = "Mr Blue has a blue house and a blue car";
  var str = document.getElementById("everything").innerHTML; 
  var res = str.replace(RegExp(word, "gi"), "<mark>" + word + "</mark>");
  document.getElementById("everything").innerHTML = res;
  showPostsWhenWordFound(word);
}


function showPostsWhenWordFound(word)
{
  var num = 0;
  $.each(obj.entries, function(index, value)
  {
    num++;
    $(".group" + num).hide();
  })
  console.log("made it");
  var num = 0;
  $.each(obj.entries, function(index, value)
  {

    console.log("made it 4");
    var str = document.getElementsByClassName("group1").innerHTML; 
    console.log(word);
    console.log(str);
    console.log("made it 2");
    console.log(str.indexOf(word));
    
    console.log(str.indexOf("cat"));
    if(str.indexOf(word) != -1)
    {
      console.log("made it 3");
      $(".group" + num).show();
    }
  })
}


$("#TeamProfile").click(function() {
  $("#target")
});



/*function findString (str) {
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
 if (!strFound) alert ("String '"+ str +"' not found!")
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

