//CURRENT RESULTS AND COMMENTS:
// I was able to get all html functionality working as well as get the button to activate the function.  I could not get the updated array to live outside the scope of the function. I will continue to work on this over the weekend.



var button = document.getElementById("submit")
var DOMinate = document.getElementById("aPlaceToCallHome")
var numArray = [];

// this function will help sort larger numbers
function sortNumber(a, b) {
  return a - b;
}

//this function takes the user input and splits it at the comma and creates an array
//I could not get the numArray in the function to exist outside of the function
function getUserInput(userInput) {
  var userInput = document.getElementById("numberInput").value;
  var userString = userInput.split(", ").sort(sortNumber);
  for (i = 0; i < userString.length; i ++) {
    var nums = userString[i];
    if (nums > 25) {
    numArray += nums + ", ";
    }
  }
  console.log(userString);
  console.log(numArray);
}
// function numberWrap(numArray) {
//   for (i = 0; i < numArray.length; i++) {
//     var bigUns = numArray[i];
//     var toTheDOM;
//     toTheDOM = "<div class='number'>" + bigUns + "</div>";
//   }
//   console.log(toTheDOM);
// }
  console.log(numArray);

// DOMinate.innerHTML = toTheDOM;
button.onclick = getUserInput;























