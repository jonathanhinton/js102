//good practice is creating an input field and then having a button perform a function on it.
//SOLTUION
//

//4
var x = [8, 83, 66, 2, 9, 22];
function sortme(arrayme) {
  var newarray = arrayme.sort(function(a,b){return a-b});
  return newarray;
}

var result = sortme(x);
console.log(result);

//5
function larger25(numarray){
  var finalNums = [];
  for (var i = 0; i < numarray.length; i++) {
    if(numarray[i] > 25) {
      finalNums.push(numarray[i]);
    }
  }
  return finalNums;
}

var step5 = larger25(x);
console.log(step5);

//HTML handling using jquery

$(document).on('click', '#submit', function() {
  var step8 = $("#numberInput").val();
  var step9 = step8.split(", ").map(Number);
  var step10 = larger25(step9);
  var step11 = sortme(step10);
  appendMe(step11);
  console.log("you clickd a button", step11);
});

//12
function appendMe(finale) {
  for (var j = 0; j < finale.length; j++) {
    if (j%2 === 0) {
      $("#aPlaceToCallHome").append('<div class="numbers red">' + finale[j] + '</div>')
    } else {
      $("#aPlaceToCallHome").append('<div class="numbers azure">' + finale[j] + '</div>')
    }
    // $("#aPlaceToCallHome").append('<div class="numbers">' + finale[j] + '</div>')
  }
}
















