const arr=[1,10,20,50,78];
let sumOfArr=0
let sum=function(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        sumOfArr+=arr[i];
    }
    return sumOfArr;
}
console.log(sum(arr));