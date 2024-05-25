const array = [1, 2, 3, 4, 2, 3, 5, 6, 1, 7, 8, 8];

const newArray = array.filter(function(item, index, self) {
    return self.indexOf(item) === index;
});

console.log(newArray);