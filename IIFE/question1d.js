const arr=[1,3,4,6,9,12,13,17];
const prime=[];
(function(arr)
{
   function isPrime(num)
   {
    if(num<=1)
        return false;
    for(let i=2;i*i<=num;i++)
    {
        if(num%i==0)
            return false;
    }
    return true;
   }
   return arr;
})