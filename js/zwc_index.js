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
            })
        })

    }
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


