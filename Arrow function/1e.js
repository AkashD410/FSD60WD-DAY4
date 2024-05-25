const array = ["level", "hello", "radar", "world", "civic", "noon"];
const isPalindrome = string => {
    const lowercaseString = string.toLowerCase();
    return lowercaseString === lowercaseString.split('').reverse().join('');
};
const palindromes = array.filter(string => isPalindrome(string));
console.log(palindromes); 