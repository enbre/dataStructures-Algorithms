// works on lists of numbers only. Doesn't make comparisons between two elements
//  Looks at right-most digit of each element and sorts them
//  Number of passes is based on the number of digits of the longest element

const getDigit = (num, place) => {
   return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

const digitCount = (num) => {
   if (num === 0) return 1;
   return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums) => {
   let maxDigits = 0;
   for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));

   }
   return maxDigits;
}

const radixSort = (nums) => {
   //     how many times to sort 
   let maxDigitCount = mostDigits(nums);
   for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({
         length: 10
      }, () => []);
      for (let i = 0; i < nums.length; i++) {
         let digit = getDigit(nums[i], k);
         digitBuckets[digit].push(nums[i]);
      }
      //         recreates sorted array
      console.log(digitBuckets);
      nums = [].concat(...digitBuckets);
      console.log("sorted array: ", nums)
   }

   return nums
}

radixSort([5467, 24, 675, 16, 941, 3187])

// time complexity = O(nk), k=length of longest digit
// space complexity = O (n+k)