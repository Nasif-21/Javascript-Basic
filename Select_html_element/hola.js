//getElementById


//document.getElementById("heading1").innerHTML="Hello";

var change=document.getElementById("heading1");
change.innerHTML="Hello";
var changeh2=document.getElementById("heading2");
changeh2.innerHTML="Bye";



//getElementsByTagName

document.getElementsByTagName("h2")[0].innerHTML="I changed";
document.getElementsByTagName("p")[1].innerHTML="I am changed";



//getElementsByClassName

document.getElementsByClassName("heading3")[0].innerHTML="3rd time I am changed";
document.getElementsByClassName("paragraph")[0].innerHTML="Nice change bro";