
$("dhtml").change(function () {
  $("dhtml").val()


})

$(".panel").width(($(window).width()/2)-10);
//$(".panel").height($(window).height()-(($(".upperheading").height()+$(".topContainer").height())-15))
$(".panel").height($(window).height()-50 )

$(".toggler").click(function () {
 // $("#wholeHtml").toggle("medium");

  $(this).toggleClass("active");
  var panelId = "whole" + $(this).attr("id");
  $("#" + panelId).toggleClass("hidden");
  var activePanels = 4 - $('.hidden').length;
  $(".panel").width(($(window).width() / activePanels) - 10)


})



$("textarea").on('change keyup paste', function () {
  $("iframe").contents().find("html").html($("#dhtml").val());
});









/*
$("#html").click(function () {
  $("#wholeHtml").toggle("medium");
})

$("#css").click(function () {
  if (($("#wholeJavascript").css("display")) == "none") {
    $("#wholeHtml").css("width", "30%");
    $("#wholeOutput").css("width", "40%");
    $("#wholeCss").toggle("medium");
    $("#wholeCss").css("width", "30%");
  }
  if (($("#wholeJavascript").css("display")) == "block") {
    $("#wholeCss").toggle("medium");
    $("#wholeHtml").css("width", "25%");
    $("#wholeOutput").css("width", "25%");
    $("#wholeCss").css("width", "25%");
    $("#wholeJavascript").css("width", "25%");
  }
})

$("#javascript").click(function () {
  $("#wholeHtml").css("width", "25%");
  $("#wholeOutput").css("width", "25%");
  $("#wholeCss").css("width", "25%");
  $("#wholeJavascript").toggle("medium");
  $("#wholeJavascript").css("width", "25%");

})

$("#output").click(function () {
  $("#wholeOutput").toggle();
})
*/











/*
 
$("#dhtml").keyup(renderOutput)
 
$("#dcss").keyup(renderOutput)
 
$("#djava").keyup(renderOutput)
 
 
 
 
function renderOutput()
  {	  
  var html=$("#dhtml").val();
  var css="<style>"+$("#dcss").val()+"</style>";
  var javascript="<script>"+$("#djavascript").val()+"</script>";
  
  var outputHtml=css+html+javascript;
  $("#doutput").contents(outputHtml).find("html").html(outputHtml);
  } 
*/
//$("textarea").on("change keyup paste",rederOutput);









