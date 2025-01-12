function playerInfo()
{
var names=[["Nasif",80],["Abbu",50],["Babybobo",100],["Ammu",89],["Bachhar Maa",30]];
for(var i=0;i<names.length;i++)
{    
  for(var j=0;j<names[i].length;j++){
console.log(names[i][j]);
  }      
    
}

// console.log(names);

var maximumNum=names[0][1];
var maximumName=names[0][0];

for(var a=1;a<names.length;a++)
{
    if(maximumNum<names[a][1])
    {
        maximumName=names[a][0];
        maximumNum=names[a][1];
        
    }

    
}

console.log(maximumName);
console.log(maximumNum);

}

playerInfo();