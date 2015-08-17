//CURRENT RESULTS AND COMMENTS:
// I was able to get all html functionality working as well as get the button to activate the function.  I could not get the updated array to live outside the scope of the function. I will continue to work on this over the weekend.
/*
  4. Write a JavaScript function that accepts an array as an argument, and returns a new array that is sorted.
  5. Write a JavaScript function that accepts an array, and returns a new array that contains elements in the array you passed in that are larger than 25.


  8. When the button is clicked retrieve the value of the input box. You should enter in a comma-delimited list of integers (e.g. 10,3,5,67,22,etc..).
  9. Convert that string of comma-delimited numbers into an array.
  10. Pass that array into the function that finds numbers higher than 25.
  11. The array that is the result of that, pass it into the function that sorts the array.
  12. Loop over the sorted array and create a DOM string that wraps a <div> element around each number (e.g. output += something).

  13. Give each <div> a class of "number".
  14. Write a CSS class that changes the font color of the even elements to red.
  15. Write a CSS class that changes the background color of the odd elements to azure.

  16. Push all of your code to Github.
  17. Send the link to your Github project to your assigned TA.
*/


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























