// needs to have overlapping subproblems (things are repeated) and optimal substructure (the best solution for each of the subproblems)

// 

const fib = (num) => {
   if (num <= 2) return 1;
   return fib(num - 1) + fib(num - 2);
}
// time complexity - O (2^N) really really slow

// top down approach
//  memoization 
// recursively work through 
// to store values that we will access again so they don't need to be recalculated

const fibMemo = (num, memo = []) => {
   //     checks to see if value has already been stored
   if (memo[num] !== undefined) return memo[num];
   if (num <= 2) return 1;
   let res = fib(num - 1, memo) + fib(num - 2, memo);
   memo[num] = res;
   return res;
}
// time complexity - O (N)


// bottom up approach
// tabulation
// start from the smallest subproblem and work up

const fibTab = (num) => {
   if (num <= 2) return 1;
   let fibNums = [0, 1, 1];
   for (let i = 3; i <= num; i++) {
      fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
   }
   return fibNums[num];
}
// time complexity - O(N), better space complexity than memoized version