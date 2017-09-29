$(function(){
 
 var buzzer = $("#buzzer")[0],
     count = parseInt($("#num").html()),
    count2 = parseInt($("#breakNum").html());
 
/* buzzer.play();*/
 
 $("#session").hide();
 
 $("#start").click(function() {
  var counter = setInterval(timer,1000);
  count *= 60;
  
  function timer() {
   $("#start, #m5time, #m5break, #a5time, #a5break, #title1, #reset #breakNum, #num").hide();
   
  }
 });
 
 $("#m5time").click(function(){
  if (count > 0){
   count -= 5;
   $("#num").html(count);
  }
  event.preventDefault();
 });
 
  $("#a5time").click(function(){
   count += 5;
   $("#num").html(count);
  event.preventDefault();
 });
 
 
  $("#m5Break").click(function(){
  if (count2 > 0){
   count2 -= 5;
   $("#breakNum").html(count2);
  }
  event.preventDefault();
 });
 
  $("#a5Break").click(function(){
   count2 += 5;
   $("#breakNum").html(count2);
  event.preventDefault();
 });
 
 
 
 
/*$("#reset").click(function(){
 location.reload(); */
   $("#reset").click(function() {
    history.go(0);
 
});
});
