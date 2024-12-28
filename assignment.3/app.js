  
                // CHAPTER : NO : 6/9  
// // QUESTION : NO : 1
// let a = 10;

// // Prepare the output
// document.write("Result:<br>");
// document.write(`The value of a is: ${a}<br>`);
// document.write("--------------------------<br><br>");

// // Pre-increment
// document.write(`The value of ++a is: ${++a}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);

// // Post-increment
// document.write(`The value of a++ is: ${a++}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);

// // Pre-decrement
// document.write(`The value of --a is: ${--a}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);

// // Post-decrement
// document.write(`The value of a-- is: ${a--}<br>`);
// document.write(`Now the value of a is: ${a}<br>`);

// QUESTION : NO : 2

// Initialize variables
// var a = 2, b = 1;

// Calculate the result
// var result = --a - --b + ++b + b--;
//  // Initialize variables
//  let a = 2;
//  let b = 1;

//  // Step 1: --a; Pre-decrement a, so a becomes 1
//  a = --a; // Decrement a
//  document.write(" --a;  <br><br>");

//  // Step 2: --a - --b; Pre-decrement b, so b becomes 0, and expression is 1 - 0 = 1
//  b = --b; // Decrement b
//  let resultStep2 = a - b;
//  document.write(" --a - --b; <br><br>");

//  // Step 3: --a - --b + ++b; Pre-increment b, so b becomes 1, and expression is 1 + 1 = 2
//  b = ++b; // Increment b
//  let resultStep3 = a - b + b;
//  document.write(" --a - --b + ++b; <br><br>");

//  // Step 4: --a - --b + ++b + b--; Use b (1) and then decrement it (b becomes 0), so expression is 2 + 1 = 3
//  let resultStep4 = a - b + ++b + b--;
//  document.write("--a - --b + ++b + b--; <br><br>");

//   // Declare the variables
//   let c = 1;
//   let d = 0;
//   let result = 3;

//   document.write("a is: " + a + "<br><br>");
//   document.write("b is: " + b + "<br><br>");
//   document.write("result is: " + result + "<br><br>");

 // QUESTION : NO : 3

//  let userName = prompt("Please enter your name:");

// alert("Hello, " + userName + "! Welcome!");

 // QUESTION : NO : 4
 // QUESTION : NO : 5

// // Step 1: Take input from the user
// let number = prompt("Enter a number to display its multiplication table:");

// // Step 2: If the user doesn't enter a number, use 5 as default
// if (number === null || number.trim() === "") {
//     number = 5; // Default value is 5
// } else {
//     number = parseInt(number); // Convert the input to an integer
// }

// // Step 3: Display the multiplication table on the document
// document.write("<h1>Multiplication Table of " + number + "</h1>");
// for (let i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

 // QUESTION : NO : 6
     // PATR : A
// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// document.write("Subject 1: " + subject1 + "<br>");
// document.write("Subject 2: " + subject2 + "<br>");
// document.write("Subject 3: " + subject3 + "<br>");

  // PATR : B

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// let totalMarks = 100;  

// document.write("Subject 1: " + subject1 + " - Total Marks: " + totalMarks + "<br>");
// document.write("Subject 2: " + subject2 + " - Total Marks: " + totalMarks + "<br>");
// document.write("Subject 3: " + subject3 + " - Total Marks: " + totalMarks + "<br>");


  // PATR : C

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");


// let totalMarks = 100;  // Total marks for each subject


// let obtainedMarksSubject1 = prompt("Enter obtained marks for " + subject1 + ":");


// document.write("Subject 1: " + subject1 + " - Total Marks: " + totalMarks + " - Obtained Marks: " + obtainedMarksSubject1 + "<br>");
// document.write("Subject 2: " + subject2 + " - Total Marks: " + totalMarks + "<br>");
// document.write("Subject 3: " + subject3 + " - Total Marks: " + totalMarks + "<br>");

  // PATR : D

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");


// let totalMarks = 100;  


// let obtainedMarksSubject1 = prompt("Enter obtained marks for " + subject1 + ":");
// let obtainedMarksSubject2 = prompt("Enter obtained marks for " + subject2 + ":");
// let obtainedMarksSubject3 = prompt("Enter obtained marks for " + subject3 + ":");


// document.write("Subject 1: " + subject1 + " - Total Marks: " + totalMarks + " - Obtained Marks: " + obtainedMarksSubject1 + "<br>");
// document.write("Subject 2: " + subject2 + " - Total Marks: " + totalMarks + " - Obtained Marks: " + obtainedMarksSubject2 + "<br>");
// document.write("Subject 3: " + subject3 + " - Total Marks: " + totalMarks + " - Obtained Marks: " + obtainedMarksSubject3 + "<br>");

  // PATR : E

// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// let totalMarks = 100; 

// let obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// let obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// let obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));


// let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

// let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td><strong>Total</strong></td><td><strong>" + (totalMarks * 3) + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td></tr>");
// document.write("<tr><td colspan='2'><strong>Percentage</strong></td><td><strong>" + percentage.toFixed(2) + "%</strong></td></tr>");
// document.write("</table>");
  
                    //  CHAPTER  : NO : 9/11
        // QUESTIION : NO : 1

    // const city = prompt('Enter Your City name');

    // if (city.toLowerCase() === "karachi") {
        // document.write("Welcome to the city of lights!");
    //   } else {
        // document.write("Welcome to " + city + "!");
    //   }

      // QUESTIION : NO : 2

    //   let gender = prompt("Please enter your gender (male/female):") .trim(); 

    //   if (gender === "male") {
    //     alert ("Good morning sir.");
    //   }  else if (gender === "female") {
    //     alert ("Good morning Ma'am.");
    //   } else {
    //     alert ("Invalid input. Please enter 'male' or 'female'.");
    //   }

     // QUESTIION : NO : 3

    //  let signalcolour =prompt("Entar the colour of the traffic signal(red,yellow,green):")

    //  if (signalcolour === "red") {
    //     alert("stop!");
    //  } else if (signalcolour === "yellow") {
    //     alert("Ready to move.");
    //  } else if (signalcolour === "green") {
    //     alert("Go!");
    //  } else {
    //     alert('Invalid input. Please enter "red", "yellow" or "green".');
    //  }

    //  // QUESTIION : NO : 4

    //  let remainingFule = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

    //  if (remainingFule < 0.25) {
    //     alert("Please refill the fuel in your car.");
    //  }  else {
    //     alert("You have enough fule.");
    //  }

     //  // QUESTIION : NO : 5

    //  var a = 4;
    //  if (++a === 5) {
    //     alert("given condition for variable a = true");
    //  }
    
    
    //   let position = prompt("Please enter your position (true/false):") .trim(); 

    //   if (position === "true") {
    //     alert ("TRUE.");
    //   }  else if (position === "false") {
    //     alert ("FALSE.");
    //   } else {
    //     alert ("Invalid input. Please enter 'TRUE' or 'FALSE'.");
    // //   }

    // if ("car" < "cat") {
    //     alert("car is smaller than cat");
    // }
    
       //  // QUESTIION : NO : 6

    //    let subject1 =parseFloat(prompt("Enter marks obtain in subject 1"));
    //    let subject2 =parseFloat(prompt("Enter marks obtain in subject 2"));
    //    let subject3 =parseFloat(prompt("Enter marks obtain in subject 3"));

    //    let totalMarks = parseFloat (prompt("Enter total marks "));

    //    let obtainMarks = subject1 + subject2 + subject3;
    //    let percentage = (obtainMarks / totalMarks) * 100;

    //    let gender;
    //    if (percentage >= 80) {
    //     gender = "A+";
    //    } else if (percentage >= 70) {
    //     gender = "A";
    // } else if (percentage >= 60) {
    //     gender = "B";
    // } else if (percentage >= 50) {
    //     gender = "C";
    //     } else {
    //         gender = "F";
    //     }

    //     document.write("<h1>Result</h2>");
    //     document.write("Total Marks: " + totalMarks + "<br>");
    //     document.write("Obtained Marks: " + obtainMarks + "<br>");
    //     document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
    //     document.write("Grade: " + gender + "<br>");

     //  // QUESTIION : NO : 8

    //  let number = parseInt(prompt("Enter a number to check if it is divisible by 3:"));
    //  if (number % 3 === 0) {
    //       alert("The number is divided by 3.");
    //  } else {
    //     alert("The number is not divided by 3.");
    //  }

    //  // QUESTIION : NO : 10

// let temperature = parseFloat(prompt("Enter the temperature:"));

// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It’s quite cold outside.");
// }

    //  // QUESTIION : NO : 11

// let firstNumber = parseFloat(prompt("Enter the first number:"));
// let secondNumber = parseFloat(prompt("Enter the second number:"));
// let operation = prompt("Enter the operation (+, -, *, /, %):").trim();


// if (operation === "+") {
//     alert("Result: " + (firstNumber + secondNumber));
// } else if (operation === "-") {
//     alert("Result: " + (firstNumber - secondNumber));
// } else if (operation === "*") {
//   alert("Result: " + (firstNumber * secondNumber));
// } else if (operation === "/") {
//     if (secondNumber !== 0) {
//         alert("Result: " + (firstNumber / secondNumber));
//     } else {
//         alert("Error: Division by zero is not allowed.");
//     }
// } else if (operation === "%") {
//     if (secondNumber !== 0) {
//         alert("Result: " + (firstNumber % secondNumber));
//     } else {
//         alert("Error: Division by zero is not allowed.");
//     }
// } else {
//     alert("Invalid operation. Please enter one of +, -, *, /, %.");
// }

                     // CHAPTER : NO : 12/13

//                 // QUESTION : NO 1
// let input = prompt("Enter a single character:");

// if (input.length !== 1) {
//     alert("Please enter only one character.");
// } else {
    
//     let asciiCode = input.charCodeAt(0);


//     if (asciiCode >= 48 && asciiCode <= 57) { 
//         alert("The given input is a number.");
//     }

//     else if (asciiCode >= 65 && asciiCode <= 90) { 
//         alert("The given input is an uppercase letter.");
//     } 
    
//     else if (asciiCode >= 97 && asciiCode <= 122) { 
//         alert("The given input is a lowercase letter.");
//     } 
//     else {
//         alert("The given input is neither a number nor a letter.");
//     }
// }


               // QUESTION : NO  : 2

// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));


// if (num1 > num2) {
//     alert("The larger number is: " + num1);
// } else if (num2 > num1) {
//     alert("The larger number is: " + num2);
// } else {
//     alert("Both numbers are equal.");
// }

              // QUESTION : NO  : 4

//   let char = prompt("Enter a single character:").toLowerCase();
 
//   if (char.length !== 1) {
//     alert("Please enter only one character.");
// } else {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         alert("True: The character is a vowel.");
//     } else {
//         alert("False: The character is not a vowel.");
//     }
// }


             // QUESTION : NO  : 7

            
// let time = parseInt(prompt("Enter the hour in 24-hour format (0 to 24):"));


// if (time >= 0 && time < 12) {
//     alert("Good Morning!");
// } else if (time >= 12 && time < 17) {
//     alert("Good Afternoon!");
// } else if (time >= 17 && time < 21) {
//     alert("Good Evening!");
// } else if (time >= 21 && time <= 24) {
//     alert("Good Night!");
// } else {
//     alert("Invalid time. Please enter an hour between 0 and 24.");
// }

