const array = [1, 2, 3, 4, 5];
const k = 3;

const rotateArray = (arr, k) => {
    return arr.concat(arr.splice(0, k % arr.length));
};

const rotatedArray = rotateArray(array, k);

console.log(rotatedArray); 
