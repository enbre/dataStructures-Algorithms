// linear search - going through each entry in a list/array, one by one in order
// best you can do for unsorted data
// examples: indexOf() includes() find() findIndex()

// O(n) time complexity

// let linearSearch = (arr, value)=>{
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] === value) return i;
//     }
//     return -1
//  }

//  binary search - data needs to be sorted
// much faster than linear search
// pick halfway point of data and compare it to item to be searched for
//  This allows half of data to be eliminated with each step and is repeated

// const binarySearch = (arr, val) =>{
//     let left =arr[0]
//     let right = arr[arr.length-1]
//     while (left<right){
//         let mid = arr[(arr.indexOf(right) - arr.indexOf(left))/2]
//         if (mid === val) return mid
//         else if (mid < val){
//             left ++
//         }right--
//     }
//     return -1
// }

// const binarySearch = (arr, val) =>{
//     let start =0;
//     let end = arr.length-1;
//     let mid = Math.floor((start + end)/2);

//     while (arr[mid] !== elem && start <= end){
//        if(elem <arr[mid]) end = middle-1;
//        else start = mid +1;
//        mid = Math.floor(start + end)/2;
//     }
//     return arr[mid] === elem? mid: -1;
// }

// big O notation for time
// O(log n)


// Bubble sort 
// not very effificent, not used very often
let bubble_Sort = (arr) => {
   //     console.log('testing')
   for (let i = arr.length; i > 0; i--) {
      //         console.log('test')
      for (let j = 0; j < i - 1; j++) {
         console.log(arr, arr[j], arr[j + 1])

         if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
         }

      }
      console.log('one pass complete')
   }
   return arr

}


// bubble_Sort([37,45,29,8, -3,88])

// Selection Sort:

// Not good if data is almost sorted

function selectionSort(arr) {
   const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

   for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      //         loop to find the lowest value in the array
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[j] < arr[lowest]) {
            lowest = j;
         }
      }
      if (i !== lowest) swap(arr, i, lowest);
   }
   return arr;
}

// selectionSort([0,2,34,22,10,19,16]);

// Insertion Sort - builds up the sort by gradually creating a larger portion that is sorted

function insertionSort(arr) {
   for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      //         let index = i;
      for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
         arr[j + 1] = arr[j]
         //            index = j
         arr[j] = currentVal;


      }
      //         arr[index]=currentVal;

   }

   return arr;
}

// insertionSort([2,1,7,75,9])

// generally time complexity is O(n^2). Good if data is mostly sorted (or additional data is added to sorted array)

// Bubble, Selection, and Insertion Sort are all roughly equivalent