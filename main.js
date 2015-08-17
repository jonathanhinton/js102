//CURRENT RESULTS AND COMMENTS:
// I was able to get all html functionality working as well as get the button to activate the function.  I could not get the updated array to live outside the scope of the function. I will continue to work on this over the weekend.

// UPDATE 8/17 GOT IT WORKING!


var button = document.getElementById("submit")
var DOMinate = document.getElementById("aPlaceToCallHome")
var numArray = [];
var nums;
var userString;
var userInput;
var userArray = [];
var print = '';

// this function will help sort larger numbers
function sortNumber(a, b) {
  return a - b;
}

//this function takes the user input and splits it at the comma and creates an array
//I could not get the numArray in the function to exist outside of the function
function getUserInput(userInput) {
  userInput = document.getElementById("numberInput").value;
  userString = userInput.split(", ").sort(sortNumber);
  console.log(userString);
  return find_sort();
}

function find_sort() {
  for (i = 0; i < userString.length; i ++) {
    var nums = userString[i];
    if (nums > 25) {
      print += "<div class='numbers'>" + nums + "</div>";
    }
  }
  return DOMinate.innerHTML = print;
}
button.onclick = getUserInput;























