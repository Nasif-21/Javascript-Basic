function ArrayCaller()
{
    var ask=parseInt(prompt("Enter Length of array= "));
    var num=new Array(ask);
    var lgt=num.length;
    document.write("Length of Array ="+lgt+"<br>");

    for(var a=0;a<lgt;a++){
    num[a]=Number(prompt("Enter value of array"));
    
    }
    document.write("Elements of Array = "+num);
    // console.log("Final Array output ="+num);
    // var sum=0;
    
}

ArrayCaller();
