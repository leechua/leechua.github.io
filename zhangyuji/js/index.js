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
    //��ȡ�¼�����
    getEvent:function (e) {
        return e || window.event;
    },
    //��ȡclientX
    getClientX:function (e) {
        return this.getEvent(e).clientX;
    },
    getClientY:function (e) {
        return this.getEvent(e).clientY;
    },
    //��ȡ�¼���clientX+window�ĺ�������ľ���
    getPageX:function (e) {
        return this.getClientX(e) + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0);
    },
    //��ȡ�¼���clientX+window����������ľ���
    getPageY:function (e) {
        return this.getClientY(e) + (window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    }
}
function animate_v6(element,obj,callback){
    //�����һ�εļ�ʱ��
    clearInterval(element.timer);
    //Ϊ��ζ������¿�ʼ��ʱ��
    element.timer = setInterval(function(){

        //��Ϊ���û�м��裬ֻҪ��һ�����Ե���Ŀ�꣬�ͻ�ͣ�£����������ԾͶ��޷��������б任
        var flag = true;
        //ѭ���ı�������ȡ�����еļ�ֵ�ԣ����ж����޸�
        for(var attr in obj){
            //��ÿһ�����Խ��ж����޸�
            //��������opacity����z-index�Ȳ�����pxΪ��λ�ľͲ�����֮ǰһ������
            if(attr == "opacity"){
                // 1 ��ȡ��ǰֵ
                var current = parseFloat(getStyle(element,attr));
                var target = obj[attr];
                //2���㲽�� -- ��Ϊ��С�����㣬���Ա��֮����ȡ���Ƚ�
                current *= 100;
                target *= 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //�����趨
                current += step; //�Ѿ��ǷŴ�100��������,�������趨��ʱ��Ҫ������
                element.style[attr] = current / 100;
                //�ж�ֹͣ
            }else if(attr == "zIndex"){
                //��Ϊz-index��û�ж���������ֱ������ΪĿ��ֵ�Ϳ�����
                element.style[attr] = obj[attr];
                var target = obj[attr];
                var current = target;

            } else {
                //������ּ�����pxΪ��λ�����Ե�д��

                //1 ��ȡ��ǰֵ
                var current = parseFloat(getStyle(element,attr));
                //��ȡĳ������Ҫ�����Ŀ��ֵ
                var target = obj[attr];
                //2 ���㲽��
                var step = (target - current) / 10;
                //�жϷ���ȡ��
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                //3 �����趨����
                current += step;
                element.style[attr] = current + "px";
                //4 �ж�ֹͣ
            }
            if(target != current){
                flag = false;
            }

        }
        //�ж��Ƿ����е����Զ�����Ŀ��ֵ����������ˣ���ֹͣ��ʱ��
        if(flag){
            clearInterval(element.timer);
            //�����ʱ��ֹͣ�ˣ�֤���������Ѿ�ִ������ˣ����ûص�������ִ������Ҫ������������߼�
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
////ͼƬ��������
//var mouse_img=$id("mouse_img");
//document.onmousemove=function(event){
//    mouse_img.style.top=eventTool.pageY(event)+"px";
//    mouse_img.style.left=eventTool.pageX(event)+"px";
//}
window.onload=function() {
        $(function(){
            //��һ���˵�ע����������¼�
            $(".nav-item").on("mouseover",function(){
                var nav_ul_inner=$(this).find(".nav_ul_inner");
                nav_ul_inner.stop(true,false).slideDown(500);
            });
            //��һ���˵�ע������Ƴ��¼�
            $(".nav-item").on("mouseout",function(){
                var nav_ul_inner=$(this).find(".nav_ul_inner");
                nav_ul_inner.stop(true,false).slideUp(500);
            });

            //�ײ���ͷ
            var footer=$("#footer");
            $(".arrow_up").on("click",function(){
                $("#img_2").css({display:"block"});
                $("#img_1").css({display:"none"});
                //$("#yj_f_w_bottom").css({display:"block"});
                //$("#yj_f_w_bottom").appendTo(footer);
            });

            //�������ĵ��뵭����ʱ��
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

            //��ʱ������Ч����1�������ֺ���
           // var tipieSpan=$("#timepiece").children();
           //setInterval(function(){
           //    tipieSpan.fadeToggle(2000);
           // });
            //�ñ�������
            var timepiece=$("#timepiece");
            setInterval(function(){
                timepiece.fadeToggle(2000);
            });


        })
    //��ȡ�������м䡰��ʼ���㡱
    //var yj_f_a=$id("yj_f_a");
   //$("#f_w_b_mid_a").on("click",function(){
   //    $(".f_w_b_mid").hide(1500,function(){
   //        alert("��������");
   //    });
   //});
   // $("#f_w_b_mid_a").on("click",function(){
   //     $(".f_w_b_mid").show(1500,function(){
   //         alert("��������");
   //     });
   // });

    //$("#f_w_b_mid_a").animate({"width":20},200)
    window.onscroll = function() {
        //��ȡ��ǰ������ȥ�ĸ߶�
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
//fn(yj_houseArea,yj_houseAreaReg,"��������ȷ�����");
//fn(yj_name,yj_nameReg,"��������ȷ������");
//fn(yj_phone,yj_phoneReg,"��������ȷ�����");
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
//��ʱ��

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


