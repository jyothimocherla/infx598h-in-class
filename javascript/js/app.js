//alert("Hello");

var n = 5;
var s = "Hello World!";
var b = true;
var u = undefined; //simply var u declaration also means the same thing


n = 10; //if you re-assign a value to a variable later, you can. You can also change var type to string later

n = n*2;
n = n/2;
n++;

s = "Hello";
s = s + " World";   //concatenate

b = false;
b = !b;

function sayHello(name)
{
console.log("Hello " + name);    
}

sayHello("Joe");

function square(n)
{
    return n*n;
}

function areaCircle(radius)
{
    return Math.PI*square(radius);
}

function isEven(n)
{
    return ((n%2)==0);
}

if (isEven(8))
{
    console.log("number is even");
}

else {
    console.log("number is odd");
}

function iterate()
{
    console.log("starting loop");
    
    for (var i=0; i<10; i++)
    {
        console.log("iteration " + i);
    }
    
    console.log("loop done");
}

iterate();


var ar = ["G", "PG", "PG-13", "R"]; //array of strings

console.log("array is " + ar.length + " elements long");
ar.push("NC-17");
console.log("array is " + ar.length + " elements long");

function dumpArray(ar)
{
    for (var j=0; j<ar.length; j++)
    {
        console.log("value is " + ar[j]);
    }
}

dumpArray(ar);

ar.forEach(function (rating) {//takes a reference to a function that will get called once for every element in the array
    console.log(rating);
    
});

var m = {"red": "#F00", "green": "0F0", "blue": "00F"};
console.log(m);
console.log(m.red);
console.log(m.yellow);

m.yellow= "#FF0";
console.log(m.yellow);





console.log(areaCircle(50)); //log allows us to write something to the console's log