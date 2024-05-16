
function giai()
{
var a=Number(document.getElementById("a").value);
var b=Number(document.getElementById("b").value);
var c=document.getElementById("c").checked;
var d=document.getElementById("d").checked;
var e=document.getElementById("e").checked;
var f=document.getElementById("f").checked;
    if(c)
{
    var x=a+b;
}
    if(d)
    {var x=a-b;}
    if(e)
    {var x=a*b;}
    if(f)
    {
        if(b!=0)
        var x=a/b;
    else 
x="Lỗi";}
    document.getElementById("giai").innerHTML =x;
}
