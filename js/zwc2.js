/**
 * Created by Administrator on 2017/4/24 0024.
 */
//���ö���
$(function() {
    //5sʩ���ܿ���ϵ
    var zwcSysLi = $("#zwcSysUl li");
    //���뱳��ͼƬ
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

    //����֪��Ʒ�ƣ�������ȫ����
    var zwcBrandLi =$("#zwcBrand li");
    zwcBrandLi.hover(function(){
        $(this).find("p").stop(true,false);
        $(this).find("p").animate({top:0},300);
    },function(){
        $(this).find("p").stop(true,false);
        $(this).find("p").animate({top:200},300);
    });
    //���û�ȡװ�ޱ��۹رն���������֤�ύ����
    $(".zwc_close").on("click",function(){
        $(".zwc_price").animate({top:0,left:0},500,function(){
            $(".zwc_price").animate({width:0,height:0,opacity:0},500,function(){
                $("#zwcBg").css("display","none");
            });
        });
    })
    //���������ȡ�ý���������ʧ��ʧȥ�������ָֻ�

    //�ж��ֻ��������������Ƿ���ȷ����
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
            //�����������������ʽ�ж������Ƿ���ȷ
        }else if($(".zwc_list2 input")!=zwc_value){
            var zwc_area =/^[1-9]\d{0,5}$/;
            //�ж������������������Ƿ���ȷ
            if(!zwc_area.test($(".zwc_list2 input").val())){
                $(".zwc_wrong1").css("display","block");
                flag=false;
            }else{
                $(".zwc_wrong1").css("display","none");
                flat=true;
            }
        }
    });
    //�ֻ�������֤
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

    //���ÿ�ʼ���㰴ť���
    $(".zwc_btn").on("click",function(){
        if(!flag){
            shake(50);
        }
    })
    //��װ�𶯺���
    function shake(time){
        $(".zwc_price").animate({top:90},time,function(){
            $(".zwc_price").animate({top:100},time,function(){
                $(".zwc_price").animate({top:90},time,function(){
                    $(".zwc_price").animate({top:100},time)
                })
            })
        })
    }
    //����option������ʽ
    var config0=["---��---"];
    var config1=["����","����","����"];
    var config2=["��ɳ","��̶","����","����"];
    var config3=["�Ͼ�","����","����"];
    var config4=["����","����"];
    var config5=[];
    //ȡ��ʡ�ݵ�id
    var zwcProOpt =$("#zwc_provinces");
    //ȡ���е�id
    var zwcCity =$("#zwc_city");
    var selOpt;
    var config;
    zwcProOpt.on("change",function(){
        zwcOpt =zwcProOpt.children();
        for(var i=0; i<zwcOpt.length; i++){
            if(zwcOpt[i].selected){
                selOpt=i;
            }
            //�ж����ĸ�ʡ��
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
        //�Ƴ�Option��������
        zwcCity.children().remove();
        //���¸�Option���渳ֵ
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
//����5s����ʾװ�ޱ���
    var zwcPriceShow =document.getElementById("zwcPrice");
    var zwcBg =document.getElementById("zwcBg");
    setTimeout(function(){
        zwcBg.style.display ="block";
    },5000);

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
    })
})

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
        $id("nav").style.backgroundColor="#cdf2ff";
    }
}

//������ͼƬ���������
//var lc_imgbtn=document.getElementById("lc_imgbtn");
//var zwcBg=document.getElementById("zwcBg");
//lc_imgbtn.onclick=function(){
//    zwcBg.style.display="block";
//}