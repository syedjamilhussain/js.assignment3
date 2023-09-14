//   EXERCISE 12  AND 13
//    QUESTION NUMBER 1
  let inputCharacter = prompt("Enter a single character (number or string): ")
  if (inputCharacter.length !== 1) {
      alert("Please enter a single character.");
  } else {
      var Value = inputCharacter.charCodeAt(0)
      if (Value >= 48 && Value <= 57) {
         alert("The input is a number.");
     } else if (Value >= 65 && Value <= 90) {
          alert("The input is an uppercase letter.");
     } else if (Value >= 97 && Value <= 122) {
          alert("The input is a lowercase letter.");
     } else {
          alert("The input is not a number or not an English alphabet .");
     }
 }
//   question number 2
  let num1 = (prompt("Enter the first integer:"));
   let num2 = (prompt("Enter the second integer:"))
  if (num1 > num2) {    alert(`The larger integer is: ${num1}`);
  } else if (num2 > num1) {   alert(`The larger integer is: ${num2}`);
  } else {   alert("Both integers are equal.");
  }
//    question number 3
  let num3 = (prompt("enter the number :"));
  if (num3 > 1) {   alert("this is possitive number");
  } else if (num3 < 1) {
      alert("this is negative number");
  }
  else {    alert("the number is one");
  }
    // question number 4
  let char = prompt("Enter a single character:")
   let alphabat = false
  if (char.length === 1) {
      if (char === 'a' || char === 'A' ||
         char === 'e' || char === 'E' ||
          char === 'i' || char === 'I' ||
          char === 'o' || char === 'O' ||
          char === 'u' || char === 'U') {
          alphabat = true;
     } }
  
  if (alphabat) {   alert("True - It is a vowel.");
  } else {    alert("False - It is not a vowel.");
   }
//   var char = (prompt("enter a word"));
//    var alpha = false ;
//      if (char.length === 1){
//       if (char === "a" || "A" ||
//       "e"|| "E" ||
//       "i"|| "I" ||
//       "o" || "O"||
//       "u"|| "U" ){
//     alpha = true;
      
//      } }
//       if(alpha){
//          alert("this is vowel");
//       }else{
//           alert("this is not vowel")
//       }
    // question num 5
   var pasword = (prompt("enter your pasword"))
  var pasword2 = "hello"; 
  if (pasword === pasword2 || "welcome") {    alert("pasword in correct :")  
  } else {    alert( "incorrect pasword"    )
  }
    // QUESTION NUMBER 6
  var greeting;
  var hour = 13;
  if (hour < 18) {
  alert( "Good day"); }
  else{
  alert("Good evening"); }
   
 //  QUESTION NUMBER 7
    let hours = (prompt("enter the time in hours"));
    if ( hours > 0 && hours < 12 ){    alert(" now its AM");
    }else if (hours > 12 && hours < 24 ){
     alert("this is PM"); }
    
//   CHPTER NUMBER 14 TO 16   EXERCISE

// QESTION NUMBER 1 

var student = [];
//  QUESTION NUMBER 2
let studentNames = new Array();
// adding name by (push) in fucture
 
// QUESTION NUMBER 3

var names = ["jamil" ," hussain ", "syed","akmal ",];
 
// QUESTION NUMBER 4
  var number = [1,2,3,4,5,6];

//   QUESTION NUMBER 5
let booleanArray = [true, false, true, false, true];
 
// QUESTION NUMBER 6
let mixedArray = [123, "Hello", true,  "jamil","hussain" ,1, 2, 3];

// QUESTION NUMBER 7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write(qualifications[0]+ "<br>"+ qualifications[1]  + "<br>" + qualifications[2] + "<br>" + qualifications[3]+ "<br>"
 + qualifications[4]+"<br>" + qualifications[5] + "<br>" + qualifications[6]  + "<br>" +qualifications[7] +"<br>"+"<br>" );

// QUESTION NUMBER 8
 var snam = [ "jamil","hussain","syed"];
 var score = [320,220,480];
 var percentage = [64,46,96];
  document.write("score of " +" "+snam[0]+" "+"is" +" "+score[0]+" " +"percentage"+" "+ "is"+" " +percentage[0]+"<br>");
   document.write("score of " +" "+snam[1]+" "+"is" +" "+score[1]+" " +"percentage"+" "+ "is"+" " +percentage[1]+"<br>");
   document.write("score of " +" "+snam[2]+" "+"is" +" "+score[2]+" " +"percentage"+" "+ "is"+" " +percentage[2]+"<br>"+"<br>"); 

//    QUESTION NUMBER 9
var colour = ["red","green","yellow","orange","white"];
 let userColor = prompt("What color do you want to add to the beginning?")
 document.write(colour + "<br>");
 colour.unshift (userColor);
 document.write( "after using unshift"+ " "+"<br> "+colour + "<br>")
 let userColor2 = prompt("What color do you want to add to the end?");
  colour.push(userColor2);
  document.write("after useing push"+" " +"<br>"+colour+"<br>");
 colour.unshift("black","brown");
 document.write("after using unshift again and add two more colours"+"<br>" + colour +"<br>");
 colour.shift();
 document.write("after useing shift it can remove the first colour" + "<br>"+ colour + "<br>");
  colour.pop();
  document.write("after useing pop it can remove the last colour" + "<br>"+ colour + "<br>");


 colour.splice(2,2,"purple","skin");
 document.write("after useing slice it can remove and add new coloure between your choice index :" + "<br>"+ colour + "<br>")
 colour.splice(2,2);
 document.write("after useing splice it can remove 2 colour from the given index :" + "<br>"+ colour + "<br>");
//  QUESTION NUMBER 10
 var studentScore = [320 ,220,480,120];
   studentScore.sort();
  document.write("after sort score convert into assinding order" + "<br>"+ studentScore + "<br>")
//  QUESTION NUMBER 11
 var cities = ["karachi","lahore","islamabad","quetta","peshawar"];
 var selectcities = cities.slice(1,3)
 document.write("AFTER USING SLICE IT MAKE SELECTED CITIES ARREY :" + "<br>"+ selectcities + "<br>");
//  QUESTION NUMBER 12
//  Initialize the array
var arr = ["This ", " is ", " my ", " cat"];

// Use the join method to create a single string
var resultString = arr.join("");

// Output the result
 document.write("AFTER USING JOIN METHOD IT CONVERT ARREY INTO SENTANCE :" + "<br>"+ resultString + "<br>");

//   QUESTION NUMBER 13

 var first = [1,2,3,4,5];
 var second = [6,7,8,9,10];
  var mainADD = first + second ;
  document.write(mainADD +"<br>");
    var things =["keyboard","mouse","printer","monitor"];
      things.shift();
 console.log(things);
      things.shift();
 console.log(things);
      things.shift();
 console.log(things);
      things.shift();
       console.log(things);
 
// QUESTION NUMBER 14

 var things1 =["keyboard","mouse","printer","monitor"];
       things1.pop();
  console.log(things1);
       things1.pop();
  console.log(things1);
       things1.pop();
  console.log(things1);
       things1.pop();
        console.log(things1 + "<br>");
       

// QUESTION NUMBER 15

 var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
 document.write('<select>');
 for (var i = 0; i < manufacturers.length; i++) {
     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
 }
 document.write('</select>');







