(function caller()
{
    var a=Number(prompt("Enter 1st number: "));
    var b=Number(prompt("Enter 2nd number "));
    var c=a+b;
    return document.write(a+b+"<br>");
})();

var exx=function expr()
{
    document.write("This is function expression");
}
exx();
// expr();   //Error message at console

//expr();