var assignmentResults = function (pingpong) {
  var count = [];
  for (var x = 1; x <= pingpong; x++)
    if(x % 3 === 0) {
      count.push('ping');
    } else if(x % 5 === 0) {
          count.push('pong');
      } else if(x % 15 === 0) {
            count.push('pingpong');
        } else {
        count.push(x)
    }
    return count;
  };


$(document).ready(function() {
  $("form#thetest").submit(function() {
    event.preventDefault();
     var pingpong = parseInt($("input#numberinput").val());
     var result = assignmentResults(pingpong);
     console.log(result);
  });
});
