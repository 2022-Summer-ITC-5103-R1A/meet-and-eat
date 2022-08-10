var i=0;
var image=[];
var time=3000;
image [0]='veg1.jpg';
image [1]='slide2.jpg';
image [2]='slide3.jpg';
function changeimg()
{
   document.getElementsByClassName("image").innerHtml=document.slide.src=image[i];
    if(i < image.length -1)
    {
        i++;
        
    }
    else {
         i=0;
        }
        setTimeout("changeimg()",time);
}

window.onload=changeimg;
// accordian 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// Highlighting prices of the dishes :
// these are for chinese dishes
function price1()
{
    document.getElementById("cc").innerHTML = '<b>$15</b>';
    document.getElementById("f1").style.font = "italic bold 20px arial,serif";
    document.getElementById("f1","cc").style.color = "#ff0000";
}
function rm1()
{
  document.getElementById("cc").innerHTML ="" ;
  document.getElementById("f1").style.font = "";
  document.getElementById("f1","cc").style.color = "";
}
function price2()
{
    document.getElementById("gn").innerHTML = '<b>$11</b>';
    document.getElementById("f2").style.font = "italic bold 20px arial,serif";
    document.getElementById("f2","gn").style.color = "#cd1234";
}
function rm2()
{
  document.getElementById("gn").innerHTML ="" ;
  document.getElementById("f2").style.font = "";
  document.getElementById("f2","gn").style.color = "";
}
function price3()
{
    document.getElementById("mc").innerHTML = '<b>$16</b>';
    document.getElementById("f3").style.font = "italic bold 20px arial,serif";
    document.getElementById("f3","mc").style.color = "darkmagenta";
}
function rm3()
{
  document.getElementById("mc").innerHTML ="" ;
  document.getElementById("f3").style.font = "";
  document.getElementById("f3","mc").style.color = "";
}
function price4()
{
    document.getElementById("fr").innerHTML = '<b>$12</b>';
    document.getElementById("f4").style.font = "italic bold 20px arial,serif";
    document.getElementById("f4","fr").style.color = "#00cde1";
}
function rm4()
{
  document.getElementById("fr").innerHTML ="" ;
  document.getElementById("f4").style.font = "";
  document.getElementById("f4","fr").style.color = "";
}
function price5()
{
    document.getElementById("mo").innerHTML = '<b>$14</b>';
    document.getElementById("f5").style.font = "italic bold 20px arial,serif";
    document.getElementById("f5","mo").style.color = "#ff8c00";
}
function rm5()
{
  document.getElementById("mo").innerHTML ="" ;
  document.getElementById("f5").style.font = "";
  document.getElementById("f5","mo").style.color = "";
}

function price6()
{
    document.getElementById("ms").innerHTML = '<b>$8</b>';
    document.getElementById("f6").style.font = "italic bold 20px arial,serif";
    document.getElementById("f6","ms").style.color = "#e96680";
}
function rm6()
{
  document.getElementById("ms").innerHTML ="" ;
  document.getElementById("f6").style.font = "";
  document.getElementById("f6","ms").style.color = "";
}

// these are for indian dishes
function price7()
{
    document.getElementById("cb").innerHTML = '<b>$10</b>';
    document.getElementById("f7").style.font = "italic bold 20px arial,serif";
    document.getElementById("f7","cb").style.color = "#f08080";
}
function rm7()
{
  document.getElementById("cb").innerHTML ="" ;
  document.getElementById("f7").style.font = "";
  document.getElementById("f7","cb").style.color = "";
}
function price8()
{
    document.getElementById("md").innerHTML = '<b>$15</b>';
    document.getElementById("f8").style.font = "italic bold 20px arial,serif";
    document.getElementById("f8","md").style.color = "orangered";
}
function rm8()
{
  document.getElementById("md").innerHTML ="" ;
  document.getElementById("f8").style.font = "";
  document.getElementById("f8","md").style.color = "";
}
function price9()
{
    document.getElementById("vp").innerHTML = '<b>$7</b>';
    document.getElementById("f9").style.font = "italic bold 20px arial,serif";
    document.getElementById("f9","vp").style.color = "peru";
}
function rm9()
{
  document.getElementById("vp").innerHTML ="" ;
  document.getElementById("f9").style.font = "";
  document.getElementById("f9","vp").style.color = "";
}
function price10()
{
  document.getElementById("kc").innerHTML = '<b>$16</b>';
  document.getElementById("f10").style.font = "italic bold 20px arial,serif";
  document.getElementById("f10","kc").style.color = "tomato";
}
function rm10()
{
  document.getElementById("kc").innerHTML = '';
  document.getElementById("f10").style.font = "";
  document.getElementById("f10","kc").style.color = "";

}
function price11()
{
  document.getElementById("sc").innerHTML = '<b>$6</b>';
  document.getElementById("f11").style.font = "italic bold 20px arial,serif";
  document.getElementById("f11","sc").style.color = "yellow";
}
function rm11()
{
  document.getElementById("sc").innerHTML = '';
  document.getElementById("f11").style.font = "";
  document.getElementById("f11","sc").style.color = "";
}
function price12()
{
  document.getElementById("pani").innerHTML = '<b>$4</b>';
  document.getElementById("f12").style.font = "italic bold 20px arial,serif";
  document.getElementById("f12","pani").style.color = "red";
}
function rm12()
{
  document.getElementById("pani").innerHTML = '';
  document.getElementById("f12").style.font = "";
  document.getElementById("f12","panin").style.color = "";
}

