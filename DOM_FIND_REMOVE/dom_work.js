var link=document.getElementById("Google-Link");
link.style.color="green";
link.innerHTML="Visit Google";
link.style.fontSize="1.5rem";

//Add an element to the first div
var findDiv=document.getElementById("My-Class");  //Identify the class of the div

var newEle=document.createElement("h3");
var eleText=document.createTextNode("This is heading 3 with new element");

newEle.appendChild(eleText);  //Append the text to the new element

findDiv.appendChild(newEle); //Append the new element to the div


//Add an Elemet to the second div
var findDiv2=document.querySelector(".Cl2");  
var newAdd=document.createElement("h3");
var eleText2=document.createTextNode("This is heading 3 with new element");

newAdd.appendChild(eleText2);  
findDiv2.appendChild(newAdd); 

//Remove an element
var heading1=document.getElementsByTagName("h2")[0]; //First div, head tag 2, index 0;
findDiv.removeChild(heading1); //Remove the heading 2 from the findDiv







