const characters = "*";  //Declare a chracter to represnt the pyramid
const count=6;            //Declare the number of rows in the pyramid
const rows=[];            //Declare an array to store the rows of the pyramid
let inverted=false;       //Declare a boolean to check if the pyramid is inverted

function rowCall(rowNum,rowColum)   //Function to create a row of the pyramid
{ 
return " ".repeat(rowColum-rowNum)+characters.repeat(2*rowNum-1)+" ".repeat(rowColum-rowNum); //Pyramid creation function
}

for(let i=1;i<=count;i++){
    if(inverted){                     //If the pyramid is inverted=false, it will run a normal pyramid
        rows.unshift(rowCall(i,count)); //Push the row to the beginning of the array based on the function
        
    }
    else{
        rows.push(rowCall(i,count));   //If the pyramid is inverted=true, it will run an inverted pyramid
    }
   
}

let result = "";
for(const row of rows)            //Loop through the rows
{
    result=result+row+'\n';       //Add the row to the result string
}

console.log(result);