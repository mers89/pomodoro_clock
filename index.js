
$(document).ready(function() {
  var buzzer = $("#buzzer")[0],
    count = parseInt($("#num").html()),
    count2 = parseInt($("#breakNum").html());

  $("#session").hide();

  $("#start").click(function() {
    var counter = setInterval(timer, 1000);
    count *= 60;
    count2 *= 60;

    function timer() {
      $(
        "#start, #m5time, #a5time, #m5Break, #a5Break, #title1, #reset, #breakNum"
      ).hide();
      $("#session").show();
      $("#session").html("SESSION TIME: ");

      count -= 1;

      if (count === 0) {
        buzzer.play();
        clearInterval(counter);
        $("#num").hide();
        var counter2 = setInterval(breakTimer, 1000);
      }

      $("#num").html(count);

      if (count % 60 >= 10) {
        $("#num").html(Math.floor(count / 60) + ":" + count % 60);
      } else {
        $("#num").html(Math.floor(count / 60) + ":" + "0" + count % 60);
      }

      function breakTimer() {
        $("#session").html("BREAK TIME:");
        $("#breakNum").show();

        count2 -= 1;

        if (count2 === 0) {
          clearInterval(counter2);
          buzzer.play();
          $("#reset").show();
          $("#breakNum, #session").hide();
        }

        $("#breakNum").html(count2);
        if (count2 % 60 >= 10) {
          $("#breakNum").html(Math.floor(count2 / 60) + ":" + count2 % 60);
        } else {
          $("#breakNum").html(
            Math.floor(count2 / 60) + ":" + "0" + count2 % 60
          );
        }
      }
    }
  });

  $("#m5time").click(function() {
    if (count > 0) {
      count = 5;
      $("#num").html(count);
    }
  });

  $("#a5time").click(function() {
    count += 5;
    $("#num").html(count);
  });

  $("#m5time").click(function() {
    if (count2 > 0) {
      count2 = 5;
      $("#breakNum").html(count2);
    }
  });

  $("#a5Break").click(function() {
    count2 += 5;
    $("#breakNum").html(count2);
  });

  $("#reset").click(function() {
    history.go(0);
  });
});
