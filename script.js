// complete the given function

function palindrome(str){
 const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the cleaned string
  const reversedString = cleanedString.split('').reverse().join('');
  
  // Check if the cleaned string is equal to its reverse
  return cleanedString === reversedString;
}
module.exports = palindrome
