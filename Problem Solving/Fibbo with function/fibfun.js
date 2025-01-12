function fibbonacci(seq)   //Creating a function
{
var number0=0;
var number1=1;
for(var a=1;a<=seq;a++){
    document.write(" "+number0);
    var number3=number0+number1;
    number0=number1;
    number1=number3;
}


}
var x=Number(prompt("Enter a fibbonacci number sequence you want"));

fibbonacci(x);           //Calling a function