function Billioner(ccv)
{
if(ccv>=1e9)
{
   return(ccv/1e9).toFixed(1)+"B";
}
else if(ccv>=1e6)
{
    return(ccv/1e6).toFixed(1)+"M";
}
}

var number=Number(prompt("Enter a number"));
console.log(Billioner(number));