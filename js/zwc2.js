/**
 * Created by Administrator on 2017/4/24 0024.
 */
//设置动画
$(function() {
    //5s施工管控体系
    var zwcSysLi = $("#zwcSysUl li");
    //加入背景图片
    for (var i = 0; i < zwcSysLi.length; i++) {
        zwcSysLi.eq(i).css("background", "url(../zwcimages/humane_" + (i + 1) + ".png)");
    }
    zwcSysLi.hover(function () {
        $(this).find("img").stop(true, false);
        $(this).find("span").stop(true, false);
        $(this).find("span").fadeIn(500);
        $(this).find("img").fadeIn(500);
    }, function () {
        $(this).find("img").stop(true, false);
        $(this).find("span").stop(true, false);
        $(this).find("span").fadeOut(500);
        $(this).find("img").fadeOut(500);
    });

    //设置知名品牌，环保安全动画
    var zwcBrandLi =$("#zwcBrand li");
    zwcBrandLi.hover(function(){
        $(this).find("p").stop(true,false);
        $(this).find("p").animate({top:0},300);
    },function(){
        $(this).find("p").stop(true,false);
        $(this).find("p").animate({top:200},300);
    });
    //设置获取装修报价关闭动画及表单验证提交功能
    $(".zwc_close").on("click",function(){
        $(".zwc_price").animate({top:0,left:0},500,function(){
            $(".zwc_price").animate({width:0,height:0,opacity:0},500,function(){
                $("#zwcBg").css("display","none");
            });
        });
    })
    //房屋面积：取得焦点文字消失，失去焦点文字恢复

    //判断手机号码和输入面积是否正确输入
    var flag =true;
    var zwc_value =$(".zwc_list2 input").val();
    $(".zwc_list2 input").on("focus",function(){
        if($(".zwc_list2 input").val()===zwc_value){
            $(".zwc_list2 input").val("");
        }
    });
    $(".zwc_list2 input").on("blur",function(){
        if($(".zwc_list2 input").val()==""){
            $(".zwc_list2 input").val(zwc_value);
            //房屋面积：用正则表达式判断输入是否正确
        }else if($(".zwc_list2 input")!=zwc_value){
            var zwc_area =/^[1-9]\d{0,5}$/;
            //判断面积输入框里面内容是否正确
            if(!zwc_area.test($(".zwc_list2 input").val())){
                $(".zwc_wrong1").css("display","block");
                flag=false;
            }else{
                $(".zwc_wrong1").css("display","none");
                flat=true;
            }
        }
    });
    //手机号码验证
    $(".zwc_list5 input").on("blur",function(){
        var zwcPhoneValue =$(".zwc_list5 input").val();
        var zwcPhoneConfirm =/^[1-9]\d{10}$/;
        if(!zwcPhoneConfirm.test(zwcPhoneValue)){
            flag =false;
            $(".zwc_wrong2").css("display","block");
        }else{
            flag =true;
            $(".zwc_wrong2").css("display","none");
        }
    });

    //设置开始计算按钮点击
    $(".zwc_btn").on("click",function(){
        if(!flag){
            shake(50);
        }
    })
    //封装震动函数
    function shake(time){
        $(".zwc_price").animate({top:90},time,function(){
            $(".zwc_price").animate({top:100},time,function(){
                $(".zwc_price").animate({top:90},time,function(){
                    $(".zwc_price").animate({top:100},time)
                })
            })
        })
    }
    //设置option下拉样式
    var config0=["---市---"];
    var config1=["广州","深圳","其他"];
    var config2=["长沙","湘潭","衡阳","其他"];
    var config3=["南京","苏州","其他"];
    var config4=["杭州","其他"];
    var config5=[];
    //取得省份的id
    var zwcProOpt =$("#zwc_provinces");
    //取得市的id
    var zwcCity =$("#zwc_city");
    var selOpt;
    var config;
    zwcProOpt.on("change",function(){
        zwcOpt =zwcProOpt.children();
        for(var i=0; i<zwcOpt.length; i++){
            if(zwcOpt[i].selected){
                selOpt=i;
            }
            //判断是哪个省份
            switch(selOpt){
                case 0:
                    config=config0;
                    break;
                case 1:
                    config=config1;
                    break;
                case 2:
                    config=config2;
                    break;
                case 3:
                    config=config3;
                    break;
                case 4:
                    config=config4;
                    break;
                case 5:
                    config=config5;
                    break;
            }
        }
        //移除Option里面内容
        zwcCity.children().remove();
        //重新给Option里面赋值
        for(var j=0; j<config.length;j++){
            var newOpt =$("<option>");
            newOpt.html(config[j]);
            newOpt.appendTo(zwcCity);
        }
    })
});




function $id(id){
    return document.getElementById(id);
}

function getScroll(){
    return {
        left:document.body.scrollLeft || window.pageXOffset || document.documentElement.scrollLeft || 0,
        top: document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop || 0
    };
}
//设置5s后显示装修报价
    var zwcPriceShow =document.getElementById("zwcPrice");
    var zwcBg =document.getElementById("zwcBg");
    setTimeout(function(){
        zwcBg.style.display ="block";
    },5000);

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

//点击左边图片弹出计算框
//var lc_imgbtn=document.getElementById("lc_imgbtn");
//var zwcBg=document.getElementById("zwcBg");
//lc_imgbtn.onclick=function(){
//    zwcBg.style.display="block";
//}