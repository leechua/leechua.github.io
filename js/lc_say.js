var lsBtn = document.getElementById("leftSendBtn");
var rsBtn = document.getElementById("rightSendBtn");
lsBtn.addEventListener("click", lsend);
rsBtn.addEventListener("click", rsend);

var leftContent = document.getElementById("leftContent");
var rightContent = document.getElementById("rightContent");
function rsend() {
    rsendHandle("rightText", rightContent, leftContent);
}
function lsend() {
    rsendHandle("leftText", leftContent, rightContent);
}
//封装回复函数
function rsendHandle(element, right, left) {
    var text = document.getElementById(element).value;
    if (text.trim() != "") {
        var option = document.createElement("option");
        var len = text.length;
        var len = text.length;
        option.style.width = len * 15 + len * 2 + "px";
        option.style.marginLeft = 320 - (len * 15 + len * 2) - 72 + "px";
        option.innerHTML = text;
        right.appendChild(option);
        var option1 = document.createElement("option");
        option1.innerHTML = text;
        option1.style.backgroundColor = "white";
        option1.style.marginLeft = "10px";
        option1.style.width = len * 15 + len * 2 + "px";
        left.appendChild(option1);
        document.getElementById(element).value = "";
    }
}
window.onkeydown = function (event) {
    if (event.keyCode == 13) {
        var text1 = document.getElementById("leftText").value;
        var text2 = document.getElementById("rightText").value;
        if (text1.trim() != "" || text2.trim() != "") {
            lsend();
            rsend();
        }
    }
}


//红包
var hongbao = document.getElementById("hongbao");
var chatbox2 = document.getElementById("chatbox2");

var chatbox1 = document.getElementById("chatbox1");
var cancel1 = chatbox1.children[0].children[0];
var cancel2 = chatbox2.children[0].children[0];

setTimeout(function () {
    chatbox1.style.display = "block";
    return;
}, 60000);
var send = document.getElementById("leftSendBtn");
send.onclick = function () {
    var timer1 = setInterval(function () {
        hongbao.style.position = "absolute";
        hongbao.style.top = (Math.random() * 10 - 90) + "px";
        hongbao.style.left = (Math.random() * 10 + 50) + "px";
    }, 50);
    hongbao.onclick = function () {
        chatbox2.style.display = "block";
        clearInterval(timer1);
    }
}

cancel1.onclick = function () {
    chatbox1.style.display = "none";
}
cancel2.onclick = function () {
    chatbox2.style.display = "none";
}
//拖拽作用
var top1 = document.getElementById("top1")
var top2 = document.getElementById("top2")
top2.onmousedown = function () {
    moveHandles(event, chatbox2);
}
top1.onmousedown = function () {
    moveHandles(event, chatbox1);
}


document.onmouseup = function () {
    document.onmousemove = null;
}

//封装移动函数
function moveHandles(event, element) {
    var tempX = event.pageX - element.offsetLeft;
    var tempY = event.pageY - element.offsetTop;
    document.onmousemove = function (event) {
        //element.style.position="absolute";
        var x = event.pageX - tempX
        var y = event.pageY - tempY;
        element.style.left = x + "px";
        element.style.top = y + "px";
        console.clear();
        console.log(element.offsetLeft);
        console.log("鼠标的位置" + x);
        console.log("鼠标的位置" + y);
    }
}
