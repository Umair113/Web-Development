
$("dhtml").change(function () {
  $("dhtml").val()


})

$(".panel").width(($(window).width() / 2) - 10);
//$(".panel").height($(window).height()-(($(".upperheading").height()+$(".topContainer").height())-15))
$(".panel").height($(window).height() - 50)

$(".toggler").click(function () {

  $(this).toggleClass("active");
  var panelId = "whole" + $(this).attr("id");
  $("#" + panelId).toggleClass("hidden");
  var activePanels = 4 - $('.hidden').length;
  $(".panel").width(($(window).width() / activePanels) - 10)


})



$("textarea").on('change keyup paste', updateOutput)



function updateOutput() {
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + ($("#dcss").val()) +
    "</style><body>" + ($("#dhtml").val()) + "</body></html>")
  document.getElementById("doutput").contentWindow.eval($("#djavascript").val());

}



