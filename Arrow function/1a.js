const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const printOddNumbers = array => {
    array.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};
printOddNumbers(array);
