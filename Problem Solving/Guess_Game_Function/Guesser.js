function Guess()
{
var wincount=0;
var lostcount=0;


for(var a=1;a<=5;a++)
{
    var inp=Number(prompt("Enter your numbers: "));
    var random=Math.floor(Math.random()*5)+1;
    if(inp<1 || inp>5)
    {
        a--;
        continue;
    }
    if(inp==random)
    {
    console.log("Congratulations, you guessed right!");
    wincount++;
    }
    else
    {
    console.log("Oops, you guessed wrong !,the number was = "+random);
    lostcount++;
    }

}




document.write("Wincount is = "+wincount+"<br>");
document.write("Lostcount is= "+lostcount);

}

Guess();
