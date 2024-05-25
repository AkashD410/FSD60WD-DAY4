const arr=[1,2,3,4,5,6,7,8,9,10];
// const printOdd=function(num1)
// {
//     if(num1%2!=0)
//     {
//         console.log(num1);
//     }
// }
const printOdd=function(arr)
{
    for (let i in arr) 
    {
        if(arr[i]%2!==0)
        {
            console.log(arr[i]);
        }
    }
}

printOdd(arr);


