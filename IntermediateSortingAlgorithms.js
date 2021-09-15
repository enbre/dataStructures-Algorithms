// Merge, Radix, Quick sorts:
// faster than Initial Sorts

// Merge Sort:
// Takes atvantage of the fact that all arrays of 0 or 1 length are automatically sorted. 
// Split arrays into single item arrays, then merge them. New arrays are sorted as they are merged.

// const merge = (arr1, arr2)=>{
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while (i<arr1.length && j < arr2.length){
//         if (arr2[j]> arr[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j]);
//             j++;   
//         }

//     }
//     while (i<arr1.length){
//         results.push(arr1[i])
//     }
//     while (j<arr2.lenght){
//         results.push(arr2[j])
//     }
//     return results
// }

// const mergeSort =(arr)=>{
//     if (arr.length<=1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort (arr.slice(mid));
//     return merge (left, right);

// }

// mergeSort ([10, 24, 76, 73,1], [5, 43, 72, 6, 13])

// Time complexity is O(n log n) - log n because we are splitting the array in half with each step, n for the merge action
// Space complexity is O(n)

// Quick Sort

// Pick a pivot point. All values less than the pivot are moved to the left of the pivot and all values greater than the pivot moved to the right.
// Recursive function. Return the index of the correctly placed index once the array has one pass
// 
const pivot = (arr, start = 0, end = arr.length + 1) => {
   const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

   //     assuming the pivot is always the first element
   let pivot = arr[start];
   let swapIdx = start;

   for (let i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
         swapIdx++;
         swap(arr, swapIdx, i)
      }

   }
   //     Swap the pivot from the start with the swapIdx
   swap(arr, start, swapIdx)
   //     console.log(arr, swapIdx)
   return swapIdx
}




const quickSort = (arr, left = 0, right = arr.length - 1) => {
   if (left < right) {
      let pivotIndex = pivot(arr, left, right)

      //     left
      quickSort(arr, left, pivotIndex - 1)
      //         left =
      // right
      quickSort(arr, pivotIndex + 1, right)
      //         right =
   }
   return arr;
}

console.log(quickSort([4, 8, 2, 1, 9, 7, 13, 3]))
quickSort([4, 6, 9, 1, 2, 5])

// time complexity = O (n log n) average,  O (n^2) worst case
// space complexity = O (log n)

// Bubble, Insertion, Selection, Quick, Merge sort are all forms of comparison sorting methods, looking at two elements at a time