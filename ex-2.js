//Exercise 2: Valid Palindrome

const isPalindrome = function (s) {
  //Start Coding here
  word = s.toLowerCase().replace(/[^a-zA-Z]/g, '')
  reversed = word.split("").reverse().join("")
  if (word === reversed) {
    return true;
  } else {
    return false;
  }
};

const result1 = isPalindrome("A man, a plan, a canal: Panama");
const result2 = isPalindrome("race a car");
const result3 = isPalindrome(" ");

console.log(result1); // true
console.log(result2); // false
console.log(result3); // true
