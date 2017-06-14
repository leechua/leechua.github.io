//导航栏
function $id(id) {
    return document.getElementById(id);
}

function getStyle(element,attr){
    if(getComputedStyle){
        return getComputedStyle(element,null)[attr];
    }else {
        return element.currentStyle[attr];
    }
}
//数组--每一个数组元素都是一个键值对的对象
var config = [{
    width: 400,
    top: 20,
    left: 50,
    opacity: 0.2,
    zIndex: 2
}, //0
    {
        width: 600,
        top: 70,
        left: 0,
        opacity: 0.8,
        zIndex: 3
    }, //1
    {
        width: 800,
        top: 100,
        left: 200,
        opacity: 1,
        zIndex: 4
    }, //2
    {
        width: 600,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3
    }, //3
    {
        width: 400,
        top: 20,
        left: 750,
        opacity: 0.2,
        zIndex: 2
    } //4
];
// 1 先把所有的图片散开

    var imgList = $id("lc_slide").children[0].children;

    function rotate() {
        for (var i = 0; i < imgList.length; i++) {
            animate_v6(imgList[i], config[i]);
        }
    }

    rotate();

    //$id("lc_wrap").onmouseover = function () {
    //    animatev5($id("lc_arrow"), {"opacity": 1});
    //}
    //$id("lc_wrap").onmouseout = function () {
    //    animatev5($id("lc_arrow"), {"opacity": 0});
    //}

    $id("lc_arrRight").onclick = function () {
        config.push(config.shift());
        rotate();
    }

    $id("lc_arrLeft").onclick = function () {
        config.unshift(config.pop());
        rotate();
    }

    //旋转木马自动滚动
    function autoMRun() {
        config.unshift(config.pop());
        rotate();
    }

    var timer = setInterval(autoMRun, 2500);
    $id("lc_wrap").onmouseover = function () {
        animate_v6($id("lc_arrow"), {"opacity": 1});
        clearInterval(timer);
    }
    $id("lc_wrap").onmouseout = function () {
        timer = setInterval(autoMRun, 2500);
        animate_v6($id("lc_arrow"), {"opacity": 0});
    }

/*旋转木马下的自由框 中间内容 红色块 鼠标触及背景变色*/




//圆形图片转动
//    获取当前时间
//    获取元素
//var ul=document.getElementById("lc_B_ul");
//console.log(ul.children);
var second1 = document.getElementById("Second1");
var second2 = document.getElementById("Second2");
var second3 = document.getElementById("Second3");
var second4 = document.getElementById("Second4");
var second5 = document.getElementById("Second5");
var second6 = document.getElementById("Second6");
var second7 = document.getElementById("Second7");
//var second=document.getElementsByTagName("b");
//var second=document.getElementsByClassName("lc_B_B");
autoCircleLeRun(second1);
autoCircleLeRun(second3);
autoCircleLeRun(second5);
autoCircleLeRun(second7);
autoCircleRiRun(second2);
autoCircleRiRun(second4);
autoCircleRiRun(second6);
//封装圆图逆时针转动
function autoCircleLeRun(element) {
    var s = 0, ms = 0;
    setInterval(function () {
        var dday = new Date();
        ms = dday.getMilliseconds();
        s = dday.getSeconds() + ms / 1000;
        //获取小时以及分钟走过的时间；
        element.style.transform = "rotate(" + (-s * 100) + "deg)";
    }, 1)
}
//封装圆图顺时针转动
function autoCircleRiRun(element) {
    var s = 0, ms = 0;
    setInterval(function () {
        var dday = new Date();
        ms = dday.getMilliseconds();
        s = dday.getSeconds() + ms / 1000;
        //获取小时以及分钟走过的时间；
        element.style.transform = "rotate(" + s * 100 + "deg)";
    }, 1)
}


//轮播图
//1.鼠标移到对应的图片上，容缩图切换到对应的图片
var inner = $id("lc_lun_inner");
var ul = $id("lc_imglist");
//var smallImg=inner.children[1].children;
var smallImg = $id("lc_list").children;
var imgWidth = ul.children[0].offsetWidth;
for (var i = 0; i < smallImg.length; i++) {
    smallImg[i].index = i;
    smallImg[i].onmouseover = mouseOverHandle;
}
function mouseOverHandle() {
    var index = this.index;
    target = index * imgWidth * -1;
    animate(ul, target);
    for (var j = 0; j < smallImg.length; j++) {
        smallImg[j].removeAttribute("class");
    }
    this.className = "lc_current";
}

//左右焦点轮播图
//鼠标触及inner页面，显示左右按钮
var box = $id("lc_lun_box");
var arrow = inner.children[1];
inner.onmouseover = function () {
    //arrow.style.display = "block";

}
inner.onmouseout = function () {
    arrow.style.display = "none";

}

var leftBtn = inner.children[1].children[0];
var rightBtn = inner.children[1].children[1];
var currentIndex = 0;
rightBtn.onclick = function () {
    rightRun();
    circleStyle();
}
//向左滚动
leftBtn.onclick = function () {
    if (currentIndex == 0) {
        currentIndex = ul.children.length - 1;
        ul.style.left = currentIndex * imgWidth * -1 + "px";
    }
    currentIndex--;
    var target = currentIndex * imgWidth * -1;
    animate(ul, target);
    circleStyle();
}
//自动滚动 获取最外面的盒子

var list = $id("lc_list");

function autoRun() {
    rightRun();
    circleStyle();
}

var timer = setInterval(autoRun, 3000);
box.onmouseover = function () {
    clearInterval(timer);
}
box.onmouseout = function () {
    timer = setInterval(autoRun, 3000);
}


//封装向右滚动样式，用来自动滚动调用
function rightRun() {
    if (currentIndex >= ul.children.length - 1) {
        currentIndex = 0;
        ul.style.left = 0;
    }
    currentIndex++;
    var target = currentIndex * imgWidth * -1;
    animate(ul, target);
}

//修改容缩图样式
function circleStyle() {
    //修改容缩图的样式
    for (var j = 0; j < list.children.length; j++) {
        list.children[j].removeAttribute("class");
    }
    //因为圆点个数实际上是和图片张数不符，要特殊处理最后一张
    //最后一张，看起来是第一章，所以，修改第一个圆点的样式
    if (currentIndex == ul.children.length - 1) {
        list.children[0].className = "lc_current";
    } else {
        list.children[currentIndex].className = "lc_current";
    }
}
//轮播图放大镜
var box = document.getElementById("lc_lun_inner");
var small = box.children[0].children[0];
var big = box.children[2];
var img = big.children[0];
//鼠标移入图片区域
small.onmouseover = function () {
    big.style.display = "block";
    small.style.opacity = 0;
}
small.onmouseout = function () {
    big.style.display = "none";
    small.style.opacity = 1;
}
//    鼠标移动到small里大图变化
//鼠标位置
small.onmousemove = function (e) {
    var mX = e.pageX;
    var mY = e.pageY;
    //small的位置
    var x = mX - box.offsetLeft;
    var y = mY - box.offsetTop;
    x = x > 0 ? x : 0;
    y = y > 0 ? y : 0;
    var xMaxPos = small.offsetWidth;
    var yMaxPos = small.offsetHeight;
    //大图最大的移动位置
    var imgMaxMoveX = img.offsetWidth - big.offsetWidth;
    var imgMaxMoveY = img.offsetHeight - big.offsetHeight;
    var imgCurrentX = x * imgMaxMoveX / xMaxPos;
    var imgCurrentY = y * imgMaxMoveY / yMaxPos;
    img.style.marginTop = -imgCurrentY + "px";
    img.style.marginLeft = -imgCurrentX + "px";
}


//轮播图
function animate(element, target) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var currentLeft = element.offsetLeft;
        var step = 10;
        currentLeft += target > currentLeft ? step : -step;
        element.style.left = currentLeft + "px";
        if (Math.abs(target - currentLeft) < step) {
            clearInterval(element.timer);
            element.style.left = target + "px";
        }
    }, 20);
}
//手风琴
var lis = $id("lc_serveContent").children[0].children;
for (var i = 0; i < lis.length; i++) {
    //1 先往所有的li里添加背景图片
    //lis[i].style.backgroundImage = "url(../images/serve" +1+ ".jpg)";
    //2 注册鼠标移入事件
    lis[i].onmouseover = mouseOverHandle2;
    //注册鼠标移出事件
    lis[i].onmouseout = mouseOutHandle2;
}

function mouseOverHandle2() {
    //1先把所有的都变窄
    for (var j = 0; j < lis.length; j++) {
//            lis[j].style.width = 100 +"px";
        animate_v2(lis[j], 0, "width");
    }

    //2 再把自己变宽
//        this.style.width = 800 + "px";
    animate_v2(this, 900, "width");
}

function mouseOutHandle2() {
    //把所有的li恢复原状
    for (var j = 0; j < lis.length; j++) {
        animate_v2(lis[j], 110, "width");
    }
}

//图片移动







//var c=$id("footer");
//c.onmouseover= function () {
//    c.style.backgroundColor ="#fff";
//}


