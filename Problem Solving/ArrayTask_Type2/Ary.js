function highestScore(score)
{
    var max=score[0];
    for(var i=1;i<score.length;i++);
    {
        
        if(max<score[i])
        {
            max=score[i];

        }

    }
    return max;

} 
var score=[10,85,33,78,47,93];
var maxs=highestScore(score);
console.log(maxs);

