var arr1=new Array(5);
    arr1=[1,2,3,4,5,6];

//Split Function
function ArraySplit()
{
    arr1.shift();                    //Opposite of Pop
    console.log(arr1);
}

ArraySplit();


//Array shift function using IFFE
var arr2=new Array(4);
arr2=[5,8,9,12];

(function ArrayShift()              //Use IFFE
{
arr2.unshift(9);                    //Opposite of push
console.log(arr2);
})();

//Array2 diye kaj korbo


//Array Splice
function SpliceAdd()
{
 arr2.splice(1,0,7,8);          //Position/Array index to work,how many to remove,items
 console.log(arr2);
}
//Splice but remove
function SpliceRemove()
{
arr2.splice(0,3);              //Position/array index to work,how many to remove
console.log(arr2);
}

SpliceAdd();
SpliceRemove();


//Array Sorting using string
var arr3=new Array(4)
arr3=["Nasif","Sheikh","Muhtasim","Babu"];

function SortingArr()
{
    // arr3.sort();
    // console.log(arr3);

    var sor=arr3.sort()
    console.log(sor);               //Alphabatically sorting of Array
    arr3.reverse()
    console.log(arr3);
}

SortingArr();


//Array sorting using number

var arr4=new Array(6)
arr4=[55,74,63,22,86,7];

function NumberSort(){
   arr4.sort(function(a,b){return a-b;})
   console.log(arr4);
}
NumberSort();


//Number Sort in Reverse

function numberSortReverse()
{
    arr4.sort(function(a,b){return b-a;})
    console.log(arr4);
}

numberSortReverse();



