// used to store key-value pairs
// like arrays, but not ordered

// really fast for finding, adding and removing values
// 
// // nearly every programming language has some form of hash tables and very commonly used
// python: dictionaries, JS: objects and maps, Java, Go, Scala: maps, Ruby: hashes


// in order to look up values, we need a way to convert keys to valid array idices
// these are called hash functions
// 
// hash - one way function that takes any size input and returns a fixed size output. one way means you cannot find input with only the output
// fast - constant time
// doesn't cluster outputs at specific indices. multiple inputs can have the same output, but they need to be distributed evenly
// deterministic - same input always yeilds same output

// using a prime number in the hash function helps to spread out the data and minimize collisions
// 

const hash = (key, arLen) => {
   let total = 0;
   let weirdPrime = 31;
   //     sets the maximum length to 100
   for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * weirdPrime + value) % arLen;
   }
   return total;
}