// algorithm - a process or set of steps to accomplish a certain task

// How do you improve?
// 1 devise a plan for solving problems
// 2 master common problem solving patterns

// Problem solving:
// 1 undertstand the problem
// -    ask questions
// -    can you restate the problem in your own words?
// -    what are the inputs? - datatypes? limitations?
// -    what are the outputs of the solution? - datatypes? limitations?
// -    do you have enough info to solve the problem? - edgecases? missing inputs?
// -    how do label the important pieces of data?

// 2 explore concrete examples
//     create sample inputs/outputs for simple examples
//     progress to more complex inputs - capital vs lowercase letters, spaces, numbers, etc
//      then try to find/solve for edgecases - null, empty strings, etc

// 3 break it down
//      what are steps you need to take? - this forces you to understand potential problem areas
//      pseudocode and then fill in the code
//          

// 4 solve/simplify
//     solve a simpler problem first (remove a condition, parameter, etc)
//      then incorprate the more difficult element after you have a solution for the simpler problem 


// 5 look back and refactor
//      can you check result?
//      can you derive the result differently?
//      can you understand it at a glance?
//      can you improve the performance of your solution?
//      can you think of any other ways to refactor?
//      how have othe people solved this problem?



// Patterns:

// Frequency counter:
//      how often does something happen>?
// 

function countUniqueValues(arr) {
   let i = 0;
   for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
         i++;
         arr[i] = arr[j]
      }
      //         console.log(i,j)
   }
   //return the count of unique values (index of first)
   return i + 1;
}

arr = [1, 1, 1, 3, 4, 4, 6, 6, 6, 7, 8]

console.log(countUniqueValues(arr))