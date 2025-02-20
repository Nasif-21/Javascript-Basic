//Traversing the DOM (Downward) querySelector
const a=document.querySelector(".std-list-down");
const ali=a.querySelector(".student-c");
ali.style.color="red";

//Traversing the DOM (Downward) Children
const b=document.querySelector(".std-list-down");
const bchild=b.children[1];
bchild.style.color="blue";




//Traversing the DOM (Upward)
const aupp=document.querySelectorAll("li")[3];
aupp.style.color="green";


//For common
const auppp=document.querySelector("li");
auppp.style.color="yellowGreen";


//Traversing the DOM (Sideways)
const aside=document.querySelector(".std-list-side");
const aaside=aside.querySelector("li");
const bside=aaside.nextElementSibling;
bside.style.color="purple";


const cside=document.querySelectorAll("li")[7];
const cbefore=cside.previousElementSibling;
cbefore.style.color="orange";