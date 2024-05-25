let strArr=["hello all","good morning","good day"];
let transArray=strArr.map(function(string){
    return string.split(' ').map(function(words)
    {
        return words.charAt(0).toUpperCase()+ words.slice(1).toLowerCase();
    }).join(' ')
});

console.log(transArray);