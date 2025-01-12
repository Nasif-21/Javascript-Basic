function Grade()
{

    var number=Number(prompt("Enter a number to find grade"));;
    if(number>100 || number<0)
    {
        return document.write("Invalid");
    }
    else if(number=>80 &&number<=100)
    {
        return document.write("A+");
    }



}
Grade();