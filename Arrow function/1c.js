const array = [1, 2, 3, 4, 5];
const sumArray = array => {
    return array.reduce((total, num) => total + num, 0);
};
const sum = sumArray(array);
console.log(sum); 
