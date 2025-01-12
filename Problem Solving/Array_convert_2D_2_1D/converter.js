/*
To make an 2D array to 1D array, we need to
1. Make an empty array and push all elements into empty
Or
2.Use flat() to make it 
*/

function Converse(cvr)
{
//empty array and transfer it
var abs=[];
for(var row=0;row<cvr.length;row++){
    for(var b=0;b<cvr[row].length;b++){
        abs.push(cvr[row][b]);
    }

}
console.log(abs);
}

var cvr=[[1,2],[5,6],[7,8]]
Converse(cvr);


function Converse2(arb)
{
//Using flat method
return arb.flat();
}

var me=[[1,2],3,5,[6,8]]
console.log(Converse2(me));

