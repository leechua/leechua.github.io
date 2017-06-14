function $id(id){
    return document.getElementById(id);
}
function getStyle(element,attr){
    if(getComputedStyle){
        return getComputedStyle(element,null)[attr];
    }else {
        return element.currentStyle[attr];
    }
}
var eventTool = {
    //获取事件对象
    getEvent:function (e) {
        return e || window.event;
    },
    //获取clientX
    getClientX:function (e) {
        return this.getEvent(e).clientX;
    },
    getClientY:function (e) {
        return this.getEvent(e).clientY;
    },
    //获取事件的clientX+window的横向滚动的距离
    getPageX:function (e) {
        return this.getClientX(e) + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0);
    },
    //获取事件的clientX+window的纵向滚动的距离
    getPageY:function (e) {
        return this.getClientY(e) + (window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    }
}
function animate_v6(element,obj,callback){
    //清楚上一次的计时器
    clearInterval(element.timer);
    //为这次动画重新开始计时器
    element.timer = setInterval(function(){

        //因为如果没有假设，只要有一个属性到达目标，就会停下，其他的属性就都无法继续进行变换
        var flag = true;
        //循环的遍历对象，取出其中的键值对，进行动画修改
        for(var attr in obj){
            //对每一个属性进行动画修改
            //当属性是opacity或者z-index等不是以px为单位的就不能像之前一样设置
            if(attr == "opacity"){
                // 1 获取当前值
                var current = parseFloat(getStyle(element,attr));
                var target = obj[attr];
                //2计算步长 -- 因为是小数运算，所以变大之后在取整比较
                current *= 100;
                target *= 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //重新设定
                current += step; //已经是放大100倍的数字,在重新设定的时候，要除回来
                element.style[attr] = current / 100;
                //判断停止
            }else if(attr == "zIndex"){
                //因为z-index是没有动画，可以直接设置为目标值就可以了
                element.style[attr] = obj[attr];
                var target = obj[attr];
                var current = target;

            } else {
                //这个部分即是以px为单位的属性的写法

                //1 获取当前值
                var current = parseFloat(getStyle(element,attr));
                //获取某个属性要到达的目标值
                var target = obj[attr];
                //2 计算步长
                var step = (target - current) / 10;
                //判断方向取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //3 重新设定属性
                current += step;
                element.style[attr] = current + "px";
                //4 判断停止
            }
            if(target != current){
                flag = false;
            }

        }
        //判断是否所有的属性都到达目标值，如果到达了，就停止计时器
        if(flag){
            clearInterval(element.timer);
            //如果计时器停止了，证明动画都已经执行完毕了，调用回调函数，执行你想要动画结束后的逻辑
            callback && callback();
        }
    },20);
}
function getScroll(){
    return {
        left:document.body.scrollLeft || window.pageXOffset || document.documentElement.scrollLeft || 0,
        top: document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop || 0
    };
}
////图片跟着鼠标飞
//var mouse_img=$id("mouse_img");
//document.onmousemove=function(event){
//    mouse_img.style.top=eventTool.pageY(event)+"px";
//    mouse_img.style.left=eventTool.pageX(event)+"px";
//}
window.onload=function() {
        $(function(){
            //给一级菜单注册鼠标移入事件
            $(".nav-item").on("mouseover",function(){
                var nav_ul_inner=$(this).find(".nav_ul_inner");
                nav_ul_inner.stop(true,false).slideDown(500);
            });
            //给一级菜单注册鼠标移除事件
            $(".nav-item").on("mouseout",function(){
                var nav_ul_inner=$(this).find(".nav_ul_inner");
                nav_ul_inner.stop(true,false).slideUp(500);
            });

            //底部箭头
            var footer=$("#footer");
            $(".arrow_up").on("click",function(){
                $("#img_2").css({display:"block"});
                $("#img_1").css({display:"none"});
                //$("#yj_f_w_bottom").css({display:"block"});
                //$("#yj_f_w_bottom").appendTo(footer);
            });

            //计算器的淡入淡出定时器
            var compu=$("#compu");
            setInterval(function(){
                compu.fadeToggle(2000);
            });
            //$("#sider_right_a").on("click",function(){
            //    if($(".yj_login").width() == 0){
            //        $(".yj_login").animate({width:300,backgroundColor:"#f3f3f3"},3000);
            //
            //    }else{
            //        $(".yj_login").animate({width:0,backgroundColor:"#ff0"},3000);
            //
            //    }
            //});
            $("#sider_right_a").on("click",function(){
                if($(".yj_login").width() == 0){
                    $(".yj_login").animate({width:300,backgroundColor:"#f3f3f3"},2000);

                }else{
                    $(".yj_login").animate({width:0,backgroundColor:"#ff0"},2000);

                }
            });

            //计时器两种效果，1，让数字呼吸
           // var tipieSpan=$("#timepiece").children();
           //setInterval(function(){
           //    tipieSpan.fadeToggle(2000);
           // });
            //让背景呼吸
            var timepiece=$("#timepiece");
            setInterval(function(){
                timepiece.fadeToggle(2000);
            });


        })
    //获取顶部，中间“开始计算”
    //var yj_f_a=$id("yj_f_a");
   //$("#f_w_b_mid_a").on("click",function(){
   //    $(".f_w_b_mid").hide(1500,function(){
   //        alert("请点击运算");
   //    });
   //});
   // $("#f_w_b_mid_a").on("click",function(){
   //     $(".f_w_b_mid").show(1500,function(){
   //         alert("请点击运算");
   //     });
   // });

    //$("#f_w_b_mid_a").animate({"width":20},200)
    window.onscroll = function() {
        //获取当前滚动出去的高度
        var top = getScroll().top;
        var nav = $id("nav");
        var ul = $id("nav_ul");
        if (top > 35) {
            nav.className = "nav fixed";
            nav.style.backgroundColor = "#cdf2ff";

            $id("nav_w_img").style.display = "none";
            $id("nav_w_img1").style.display = "block";
            nav.style.height = "55px";
            for (var i = 0; i < ul.children.length; i++) {
                ul.children[i].children[0].style.color = "#fff";
            }
            $id("main").style.paddingTop = 35 + "px";

        } else {
            nav.className = "nav ";
            nav.style.backgroundColor = "#fff";
            for (var i = 0; i < ul.children.length; i++) {
                ul.children[i].children[0].style.color = "#fff";
            }
            ul.style.fontWeight = "normal";
            $id("nav_w_img").style.display = "block";
            $id("nav_w_img1").style.display = "none";
            $id("main").style.paddingTop = 0 + "px";
            $id("nav").style.backgroundColor = "#cdf2ff";
        }
    }
}

//var yj_houseArea=$id("yj_houseArea");
//var yj_name=$id("yj_name");
//var yj_phone=$id("yj_phone");
//
//var yj_houseAreaReg=/\d{10,1000}/;
//var yj_nameReg=/^[\u4e00-\u9fa5]{2,6}$/;
//var yj_phoneReg= /^[1](([3]\d)|([4][5-7])|([5]\d)|([8]\d))\d{8}$/;;
//
//function fn(element,reg,text){
//    element.onblur = function(){
//        if(!reg.test(element.value)){
//            element.innerHTML = "";
//        }else{
//            element.innerHTML = text;
//        }
//    }
//}
//fn(yj_houseArea,yj_houseAreaReg,"请输入正确的面积");
//fn(yj_name,yj_nameReg,"请输入正确的名字");
//fn(yj_phone,yj_phoneReg,"请输入正确的面积");
//function $id(id){
//    return document.getElementById(id);
//}
//var yj_box = document.getElementById("yj_box");
////box.style.position="absolute";
//setInterval(function(){
//    var x=Math.random()*20;
//    var y=Math.random()*20;
//    yj_box.style.top=(y-70)+"px";
//    yj_box.style.left=(x+50)+"px";
//},200);
//var sider_right_a=$id("sider_right_a");
//var yj_index=$id("yj_index");
//sider_right_a.onclick=function(){
//    //yj_index.style.display="block";
//  animate_v6(yj_index,{width:300,height:200});
//}
//计时器

    var timepieceSpan= $id("timepiece").children[0];
    var timPie=setInterval(function(){

        var timepieceSpanVal=parseInt(timepieceSpan.innerText);
        timepieceSpanVal--;
        if(timepieceSpanVal>=10){
            timepieceSpanVal--;
        }
        if(timepieceSpanVal==0){
            clearInterval(timPie);
        }
        timepieceSpan.innerText=timepieceSpanVal;
    },1000);


