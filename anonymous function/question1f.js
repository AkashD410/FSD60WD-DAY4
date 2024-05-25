const medianArray = (nums1, nums2) => {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};

const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];

const median = medianArray(nums1, nums2);
console.log(median); 
