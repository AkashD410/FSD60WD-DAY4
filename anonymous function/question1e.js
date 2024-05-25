const array = ["level", "hello", "radar", "world", "civic", "noon"];

const palindromes = array.filter(function(word) {
    
    const toLower = word.toLowerCase();
  
    return toLower === toLower.split('').reverse().join('');
});

console.log(palindromes); 
