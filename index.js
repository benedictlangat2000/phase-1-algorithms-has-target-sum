function hasTargetSum(array, target) {
  // Write your algorithm here

// hasTargetSum(array, target)
//     seenNumbers = empty set

//     for num in array:
//         difference = target - num
//         if difference in seenNumbers:
//             return true
//         add num to seenNumbers

//     return false

/* 
  Write the Big O time complexity of your function here
*/
const seenNumbers = new Set();

for (const num of array) {
  const difference = target - num;
  if (seenNumbers.has(difference)) {
    return true;
  }
  seenNumbers.add(num);
}

return false;
}
/* 
  Add your pseudocode here
*/
// 1. Initialize an empty set called seen_numbers.
// 2. Iterate through the elements of the array.
// 3. For each element, calculate the complement (target - element).
// 4. Check if the complement is already in the seen_numbers set.
// 5. If the complement is in the set, return True as we found a pair.
// 6. If not, add the current element to the seen_numbers set.
// 7. If the loop completes without finding a pair, return False.


/*
  Add written explanation of your solution here
*/
// Time Complexity: The time complexity of the hasTargetSum function is O(n), 
// where n is the number of elements in the input array. This is because the function iterates through the array once, and all other operations inside the loop (such as adding and checking elements in the set) take constant time.

// Space Complexity: The space complexity is also O(n) since, 
// in the worst case, the set seenNumbers can store all elements of the array. The space required by the set grows linearly with the size of the input array.


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-3, 8, 12, 4, -11, 7], -4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 5));
// Output: false (no pair with the sum of 5 in a single-element array)

// Output: true (-3 + -11 = -4)

}

module.exports = hasTargetSum;
