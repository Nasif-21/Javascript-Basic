var a=document.getElementsByTagName("h1")[0];
var b=document.getElementsByTagName("h1")[1];
var p=document.querySelector("p");


a.style.color="red";
b.style.color="blue";


var aa=document.createElement("h3");
var atext=document.createTextNode("Third new created");
aa.appendChild(atext);
a.parentNode.insertBefore(aa,b);





