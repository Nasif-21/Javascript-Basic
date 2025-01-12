function highestScore()
{
    var num=new Array(7);
    num=[100,96,74,85,93,11,36];
    for(var i=0;i<num.length;i++)
    {
        console.log(num[i]);
        
        
    }
    var max=num[1];
    for(var j=0;j<num.length;j++)
    {
        if(max<num[j])
            {
            max=num[j];
            }
            console.log(max);
    }

}

highestScore();
