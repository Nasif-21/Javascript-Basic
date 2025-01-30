document.querySelector("li a").innerHTML="I am changed";  //For single element
document.querySelector("li a").style.color="red";
document.querySelector("li a").style.textDecoration="none";

document.querySelectorAll("li a")[1].style.color="green"; //For multiple elements access, use querySelectorAll


document.querySelector(".my-class p").style.color="blue"; //For class
document.querySelector(".my-class h5").style.color="purple"; //For id