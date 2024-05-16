function pt()
{
    var b=parseInt(document.getElementById("b").value);
    var c=parseInt(document.getElementById("c").value);
    var a=parseInt(document.getElementById("a").value);
if(a==0)
{
    if(b==0)
    {
        if(c==0)
        document.getElementById("giai").innerHTML ="phương trình vô số nghiệm";
        else
        document.getElementById("giai").innerHTML ="phương trình vô nghiệm";
    }
}
    var k=b*b-4*a*c;
    if(k>0)
    {
    var kq="Phương trình có 2 nghiệm"
    var x1=(-b+Math.pow(k,1/2))/(2*a);
    var x2=(-b-Math.pow(k,1/2))/(2*a);
    document.getElementById("giai").innerHTML =kq+"<br>x1="+x1+"<br>x2="+x2;
    }
    if(k==0)
    {
        var kq="Phương trình có 1 nghiệm duy nhất"
        var x1=(-b+Math.pow(k,1/2))/(2*a);
        var x2=x1;
        document.getElementById("giai").innerHTML =kq+"<br>x1=x2="+x1;

    }
    if(k<0)
    {
        var kq="Phương trình vô nghiệm"
        document.getElementById("giai").innerHTML = kq;

    }
}