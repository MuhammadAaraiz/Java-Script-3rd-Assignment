// Q1
// var student = [];
// Q2
// Q3
// var hello = [""];
// var world = [""];
// Q4
// var num1 = [];
// var num2 = [];
// // Q5
// var num1 = [];
// var num1 = [];

// Q6
// var arr = ["hello sir","waleed","Aaraiz","abc"];
// console.log(arr);

// // Q7
// var qualifications = [];
// qualifications[0] = "<b><i>1)Qualifications ";
// qualifications[1] = "<br> <br>2)SSC";
// qualifications[2] = "<br>3)HSC";
// qualifications[3] = "<br>4)BSC";
// qualifications[4] = "<br>5)BS";
// qualifications[5] = "<br>6)BCOM";
// qualifications[6] = "<br>7)MS";
// qualifications[7] = "<br>8)M.PHIL";
// qualifications[8] = "<br>9)PHD";

// document.write(qualifications)

// Q8
//  var arr = [320];
//  var arr5 = [230];
//  var arr2 = [480];
//  var total = (500)
//  var arr1 = (arr * 100 / total)
// var arr3 =(arr5 * 100 / total)
// var arr4 =(arr2 * 100 / total)

//  document.write( " Score of Michael is " + arr + ". percentage: "+ arr1 + "%");

//  document.write("<br> Score of John is " + arr5  + ". percentage: " + arr3 + "%")

//  document.write("<br> Score of Tony is " + arr2 + ". percentage: "+arr4 + "%")




// // Q9
// // Initialize an array with color names
// var colors = ["Red", "Green", "Blue"];

// // Display the array elements in your browser
// console.log("Original Array:", colors);

// // a. Add a color to the beginning of the array
// var colorToAddAtStart = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddAtStart);

// // Display the updated array in your browser
// console.log("Array with Color Added at the Beginning:", colors);

// // b. Add a color to the end of the array
// var colorToAddAtEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddAtEnd);

// // Display the updated array in your browser
// console.log("Array with Color Added at the End:", colors);

// // c. Add two more colors to the beginning of the array
// colors.unshift("Purple", "Yellow");

// // Display the updated array in your browser
// console.log("Array with Two Colors Added at the Beginning:", colors);

// // d. Delete the first color in the array
// colors.shift();

// // Display the updated array in your browser
// console.log("Array with First Color Deleted:", colors);

// // e. Delete the last color in the array
// colors.pop();

// // Display the updated array in your browser
// console.log("Array with Last Color Deleted:", colors);

// // f. Add a color at a specific index
// var indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
// var colorToAddAtIndex = prompt("Enter a color to add at the specified index:");
// colors.splice(indexToAddColor, 0, colorToAddAtIndex);

// // Display the updated array in your browser
// console.log("Array with Color Added at Specified Index:", colors);

// // g. Remove colors at a specific index
// var indexToRemoveColor = parseInt(prompt("Enter the index to remove color(s):"));
// var numberOfColorsToRemove = parseInt(prompt("Enter the number of colors to remove:"));
// colors.splice(indexToRemoveColor, numberOfColorsToRemove);

// // Display the updated array in your browser
// console.log("Array with Color(s) Removed at Specified Index:", colors);


// // Q10
// // Initialize an array with student scores
// var studentScores = [320, 230, 480, 120, ];

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//     return a - b;
// });

// // Display the sorted array
// console.log("Sorted Student Scores (Ascending Order):", studentScores);





// // Q11

// // Initialize an array with city names
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// // Initialize an empty array to store selected cities
// var selectedCities = [];

// // Copy three array elements from cities to selectedCities
// selectedCities = cities.slice(2, 4);

// // Display the selected cities array
// console.log("Selected Cities:", selectedCities);




// // Q12

// var arr = ["This", "is", "my", "cat"];

// // Use the join() method to create a single string
// var singleString = arr.join(" ");

// // Display the single string
// console.log("Single String:", singleString);


// // Q13
// // Initialize an empty array
// var fifoArray = [];

// // Add values to the array using push (First In)
// fifoArray.push("Keyboard,mouse,moniter,printer");
// fifoArray.push("Keyboard");
// fifoArray.push("mouse");
// fifoArray.push("printer");
// fifoArray.push("moniter");
// // Access values in the order they were stored (First Out)
// var firstOut = fifoArray.shift(); // Removes and returns "Value 1"
// var secondOut = fifoArray.shift(); // Removes and returns "Value 2"
// var thirdOut = fifoArray.shift(); // Removes and returns "Value 3"
// var fourthOut = fifoArray.shift(); // Removes and returns "Value 4"
// var fifthOut = fifoArray.shift(); // Removes and returns "Value 5"
// // Display the values
// console.log("Devices:\n",firstOut);
// console.log("Out:\n", secondOut);
// console.log("Out:\n", thirdOut);
// console.log("Out:\n", fourthOut);
// console.log("Out:\n", fifthOut);







// // Q14

// // Initialize an empty array
// var lifoArray = [];

// // Add values to the array using unshift (Last In)
// lifoArray.unshift("keyboard");
// lifoArray.unshift("mouse");
// lifoArray.unshift("printer");
// lifoArray.unshift("moniter");
// lifoArray.unshift("keyboard,mouse,printer,moniter");

// // Access values in reverse order (First Out)
// var lastOut = lifoArray.shift(); // Removes and returns "Value 1"
// var secondLastOut = lifoArray.shift(); // Removes and returns "Value 2"
// var thirdLastOut = lifoArray.shift(); // Removes and returns "Value 3"
// var fourthLastOut = lifoArray.shift(); // Removes and returns "Value 3"
// var fifthLastOut = lifoArray.shift(); // Removes and returns "Value 3"
// // Display the values
// console.log("Devices:\n",lastOut);
// console.log("Out:\n",secondLastOut);
// console.log("Out:\n",thirdLastOut);

// console.log("Out:\n",fourthLastOut);
// console.log("Out:\n",fifthLastOut);





// // Q15

// // Array of phone manufacturers
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Start generating HTML
// document.write("<select>");

// // Loop through the manufacturers array to create option elements
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }

// // End the select element
// document.write("</select>");


