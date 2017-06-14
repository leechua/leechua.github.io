/*window.onload=function(){
   var li = document.getElementById("li");

    var content = document.getElementById("content");
    li.onmouseover = function () {
      content.style.display = "block";
    }
 }  */ 

var dropDown = document.getElementById("dropDown");
var cityChoose = document.getElementById("cityChoose");
dropDown.onclick=function () {
    cityChoose.style.display="block";
}
var close =document.getElementById("close");
close.onclick=function () {
    cityChoose.style.display="none";
}
var hot = document.getElementById("hot");
var shengfen=document.getElementById("shengfen");
var otherCity=document.getElementById("otherCity");
var current1  = document.getElementsByName("current1");
var current2  = document.getElementsByName("current2");
var current3  = document.getElementsByName("current3");
hot.onmouseover=function () {
   current1[0].className = current1[0].className.replace("","content");
  current2[0].className = current2[0].className.replace("content","");
  current3[0].className = current3[0].className.replace("content","");
  hot.style.borderBottom="1px solid #f00";
}  
 hot.onmouseout=function () {
    hot.style.borderBottom="none";
 }    
shengfen.onmouseover=function () {
 current2[0].className = current2[0].className.replace("","content");
  current1[0].className = current1[0].className.replace("content","");
  current3[0].className = current3[0].className.replace("content","");
   shengfen.style.borderBottom="1px solid #f00";
}
shengfen.onmouseout=function () {
    shengfen.style.borderBottom="none";
 }   
otherCity.onmouseover=function () {
  current3[0].className = current3[0].className.replace("","content");
  current2[0].className = current2[0].className.replace("content","");
  current1[0].className = current1[0].className.replace("content","");
  otherCity.style.borderBottom="1px solid #f00";
}
otherCity.onmouseout=function () {
    otherCity.style.borderBottom="none";
 }    
 