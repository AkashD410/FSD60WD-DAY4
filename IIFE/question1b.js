let strArr=["hello all","good morning","good day"];
let transArray=(function(arr)
{
    return arr.map(function(str)
    {
        return str.split(' ').map(function(words)
        {
            return words.charAt(0).toUpperCase()+words.slice(1).toLowerCase();
        }).join(' ')
    })
})(strArr);

console.log(transArray);