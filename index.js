
$(function(){
 
 var buzzer = $("#buzzer")[0],
     count = parseInt($("#num").html()),
    count2 = parseInt($("#breakNum").html());
 
 $("#m5time").click(function(){
  if (count > 0){
   count -= 5;
   $("num").html(count);
  }
  event.preventDefault();
 });
 
  $("#a5time").click(function(){
   count += 5;
   $("num").html(count);
  event.preventDefault();
 });
 
 
 
 
 
})
