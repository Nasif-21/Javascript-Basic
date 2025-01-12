function playerInfo(array_daw)
{
    console.log(array_daw);
    var nameOfhigh=array_daw[0][0];
    var scoreOfhigh=array_daw[0][1];
    // var max=array_daw[0][1];
    for(var x=1;x<array_daw.length;x++)
    {
        if(scoreOfhigh<array_daw[x][1])
        {
            scoreOfhigh=array_daw[x][1];
            nameOfhigh=array_daw[x][0];
        }
    }
    return nameOfhigh;

}

var adc=[["Nasif",90],["Ahnaf",100],["Mahbub",75],["Shoily",24],["Jui",50]];
var maximus=playerInfo(adc);
console.log(maximus);