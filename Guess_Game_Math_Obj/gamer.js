var wincount=0;     //Number for counting win
var lostcount=0;
for(var i=1;i<=5;i++)
{
    var guess=parseInt(prompt("Enter a number from 1 to 5 "));

    var random=Math.floor(Math.random() *5)+1; //Make a random number integer and let it guess for 1 to 5
   
    if(guess<1 || guess >5)           //I try to make if somebody wants to make guess above 5 and below 1, it will not take input
    {
    console.log("Invalid Input");
    i--;                              //It will also reduce the loop value so that it should execute again
    continue;                         //Use continue so that condition match, send it to loop
    }

    if(guess==random)
    {
        console.log("Congratulations, you guess right number");
        wincount++;
    }
    else
    {
        console.log("Sorry, you lost, the number was "+random);
        lostcount++;
    }


}
document.write("<p>Number of win ="+wincount+"<br>");   //Final output at html
document.write("<p>Number of loss ="+lostcount);
