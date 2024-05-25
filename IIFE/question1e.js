const array = ["level", "hello", "radar", "world", "civic", "noon"];

const palindromes = (() => {
    return array.filter(word => {
        const toLower = word.toLowerCase();
        return toLower === toLower.split('').reverse().join('');
    });
})();

console.log(palindromes); 