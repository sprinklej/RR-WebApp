$(document).ready(function(){  
  var hands = [
    "1 - Two sets of 3",
    "2 - One set of 3 & one run of 4",
    "3 - Two runs of 4",
    "4 - Three sets of 3",
    "5 - Two sets of 3 & one run of 4",
    "6 - One set of 3 & two runs of 4",
    "7 - Three runs of 4",
    "8 - Two sets of 3 & one run of 7"
  ];
  
  var leftBtn = "<button class='btn btn-primary btn-xs btn-left' type='button'><span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span></button>";
  
  var rightBtn = "<button class='btn btn-primary btn-xs btn-right' type='button'><span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span></button>";
  
  var plusBtn = "<button class='btn btn-primary btn-xs btn-plus' type='button'><span class='glyphicon glyphicon-plus-sign' aria-hidden='true'></span></button>";
  
  // add player
  $("#addRowBtn").click(function(){
    var playerNm = "<td contenteditable='true'>Player Name</td>";
    var hand = "<td class='cntrcells leftbtncells'>" + leftBtn + "</td><td class='handCells cntrcells'>" + hands[0] + "</td><td class='cntrcells'>" + rightBtn + "</td>";
    var score = "<td contenteditable='true'>" + 0 + "</td><td>" + plusBtn + "</td><td>" + 0 + "</td>";
    var remove = "<td><button class='btn btn-danger' type='button'><span class='glyphicon glyphicon-minus' aria-hidden='true'></span></button></td>";
    
    var newRow = "<tr>" + playerNm + hand + score + remove + "</tr>";
    $("#playerTable").append(newRow);
  });
  
  // left
  $("#playerTable").on("click", ".btn-left", function(){
    var curHand = $(this).closest('td').next('td').text();
    var index = hands.indexOf(curHand);
    
    if (index > 0) {
      curHand = hands[index-1];
      $(this).closest('td').next('td').html(curHand);
    }
  }); 
  // right
  $("#playerTable").on("click", ".btn-right", function(){
    var curHand = $(this).closest('td').prev('td').text();
    var index = hands.indexOf(curHand);

    if (index < hands.length-1) {
      curHand = hands[index+1];
      $(this).closest('td').prev('td').html(curHand);
    }
  }); 
  
  $("#playerTable").on("click", ".btn-plus", function(){
    var addScore = parseInt($(this).closest('td').prev('td').text());
    if (isNaN(addScore)) {
      alert("Thats not a number");
      return;
    }
    var curScore = parseInt($(this).closest('td').next('td').text());
    
    $(this).closest('td').prev('td').html("");
    $(this).closest('td').next('td').html(addScore + curScore);
  }); 
  
  
  // remove player
  $("#playerTable").on("click", ".btn-danger", function(){
    $(this).parents('tr').first().remove();
  }); 

});


