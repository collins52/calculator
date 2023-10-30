//THE CODE I TRIED TO DO ALL BY MY SELF

// const a = document.querySelector('input[name = "firstTerm"]');
// const n = document.querySelector('input[name = "nthTerm"]');
// const d = document.querySelector('input[name = "commonDifference"]');
// const solve = document.getElementById("solve");
// const answer = document.getElementById("answer");

// solve.addEventListener("click", function(){
//     arithmeticProgression()
// })
// function arithmeticProgression(){
//     // const nth = (n.value - 1 )* d.value;
//     // answer.value = a.value + nth;
//     answer.value = a.value + (n.value - 1) * d.value;
// }

// function arithmeticProgression(a, n, d) {
//     return a + (n - 1) * d;
// }

/* PROBLEM in my first code i missed so many things i missed the parseFloat method. By default javascript reads the values of [<input type = "text">] as strings irrespective of if i put a number as value it'll still read as a string so i needed something that can parse my value and convert this string into a number if it is a numerical value. is it's not a numerical value it'll read NaN.
   PROBLEM 2 : I declared the const varible = input.value outside of the addeventlistener so it was unable to dectect the value of my input onclick and work with it. since i declared it outside the value is read when the page is loaded, hence the current value can't be read onclick.
   AND I WAS HERE THINKING THAT I WAS HAVING PROBLEM WITH THE OPERATORS IN answer.value = a + (n - 1) * d . i taugth maybe equal to should be === since the and + should be +++. ha ha i was jst getting it all wrong
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CODE CHAT GPT GAVE TO ME.

// Get references to the input elements and the "SOLVE" button
// const aInput = document.getElementById("firstTerm");
// const dInput = document.getElementById("commonDifference");
// const nInput = document.getElementById("nthTerm");
// const answerInput = document.getElementById("answer");
// const solveButton = document.getElementById("solve");

// Add a click event listener to the "SOLVE" button
// solveButton.addEventListener("click", function() {
    // Get the values from the input elements
    // const a = parseFloat(aInput.value); // Convert to a number
    // const d = parseFloat(dInput.value); // Convert to a number
    // const n = parseFloat(nInput.value); // Convert to a number

    // Check if the inputs are valid numbers
//     if (isNaN(a) || isNaN(d) || isNaN(n)) {
//         alert("Please enter valid numbers in all fields.");
//     } else {
//         // Calculate the nth term using the formula a + (n - 1) * d
//         const nthTerm = a + (n - 1) * d;

//         // Set the result in the "answer" input field
//         answerInput.value = nthTerm;
//     }
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CODE I CREATED MY SELF FROM CHATGPTS EXPLANATION.

solve.addEventListener("click", function(){
    arithmeticProgression()
})
function arithmeticProgression(){
     const a = parseFloat(document.querySelector('input[name = "firstTerm"]').value);
     const n = parseFloat(document.querySelector('input[name = "nthTerm"]').value);
     const d = parseFloat(document.querySelector('input[name = "commonDifference"]').value);
     const solve = document.getElementById("solve");
     const answer = document.getElementById("answer");
     
    answer.value = a + (n - 1) * d;
}
