var num=prompt("Enter a number");
num=parseInt(num);

if(num>100 || num<0)
    document.write("Invalid output");
else if(num<=100 && num>=80)
    document.write("A+");
else if(num<=79 && num>=70)
    document.write("A");
    else
    document.write("F");