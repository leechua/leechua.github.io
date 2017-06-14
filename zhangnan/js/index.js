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
            })
        })

    }
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
            $id("nav").style.backgroundColor="#cdf2ff";
        }
}


