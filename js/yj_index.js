function $id(id) {
    return document.getElementById(id);
}
function getStyle(element, attr) {
    if (getComputedStyle) {
        return getComputedStyle(element, null)[attr];
    } else {
        return element.currentStyle[attr];
    }
}
function animate_v6(element, obj, callback) {
    //�����һ�εļ�ʱ��
    clearInterval(element.timer);
    //Ϊ��ζ������¿�ʼ��ʱ��
    element.timer = setInterval(function () {

        //��Ϊ���û�м��裬ֻҪ��һ�����Ե���Ŀ�꣬�ͻ�ͣ�£����������ԾͶ��޷��������б任
        var flag = true;
        //ѭ���ı�������ȡ�����еļ�ֵ�ԣ����ж����޸�
        for (var attr in obj) {
            //��ÿһ�����Խ��ж����޸�
            //��������opacity����z-index�Ȳ�����pxΪ��λ�ľͲ�����֮ǰһ������
            if (attr == "opacity") {
                // 1 ��ȡ��ǰֵ
                var current = parseFloat(getStyle(element, attr));
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
            } else if (attr == "zIndex") {
                //��Ϊz-index��û�ж���������ֱ������ΪĿ��ֵ�Ϳ�����
                element.style[attr] = obj[attr];
                var target = obj[attr];
                var current = target;

            } else {
                //������ּ�����pxΪ��λ�����Ե�д��

                //1 ��ȡ��ǰֵ
                var current = parseFloat(getStyle(element, attr));
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
            if (target != current) {
                flag = false;
            }

        }
        //�ж��Ƿ����е����Զ�����Ŀ��ֵ����������ˣ���ֹͣ��ʱ��
        if (flag) {
            clearInterval(element.timer);
            //�����ʱ��ֹͣ�ˣ�֤���������Ѿ�ִ������ˣ����ûص�������ִ������Ҫ������������߼�
            callback && callback();
        }
    }, 20);
}
function getScroll() {
    return {
        left: document.body.scrollLeft || window.pageXOffset || document.documentElement.scrollLeft || 0,
        top: document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop || 0
    };
}
window.onload = function () {
    $(function () {
        //��һ���˵�ע����������¼�
        $(".nav-item").on("mouseover", function () {
            var nav_ul_inner = $(this).find(".nav_ul_inner");
            nav_ul_inner.stop(true, false).slideDown(500);
        });
        //��һ���˵�ע������Ƴ��¼�
        $(".nav-item").on("mouseout", function () {
            var nav_ul_inner = $(this).find(".nav_ul_inner");
            nav_ul_inner.stop(true, false).slideUp(500);
        });
        //�ײ���ͷ
        var footer = $("#footer");
        $(".arrow_up").on("click", function () {
            $("#img_2").css({display: "block"});
            $("#img_1").css({display: "none"});
            $("#yj_f_w_bottom").css({display: "block"});
            //$("#yj_f_w_bottom").appendTo(footer);
        });
        //$(".yj_f_w_top").on("click",function(){
        //    $("#yj_f_w_bottom").css({display:"block"});
        //})
        //�������ĵ��뵭����ʱ��
        var compu = $("#compu");
        setInterval(function () {
            compu.fadeToggle(2000);
        }, 20);

    });


    var up = document.getElementById("img_1");
    var down = document.getElementById("img_2");
    var footer = document.getElementById("footer");
    var arrow_up = document.getElementsByClassName("arrow_up");
    var current = -420;
    //up.onclick = function () {
    //    //upHandle();
    //    down.style.display = "block";
    //    up.style.display = "none";
    //    var timer = setInterval(function () {
    //        var step = 10;
    //        current -= step;
    //        if (current <= 0) {
    //            clearInterval(timer);
    //        }
    //        footer.style.top = current + "px";
    //    }, 20);
    //}
    var a = false;
    arrow_up[0].onclick = function () {
        //downHandle();
        upHandle();
    }

    //arrow_up[0].onclick = function (){
    //    up.style.display = "block";
    //            down.style.display = "none";
    //            footer.style.top = 390 + "px";
    //}

    function upHandle() {
        if (a) {
            up.style.display = "block";
            down.style.display = "none";
            footer.style.bottom = -420 + "px";
            a = false;
        } else {
            up.style.display = "none";
            down.style.display = "block";
            var timer = setInterval(function () {
                var step = 10;
                current += step;
                if (current > -20) {
                    clearInterval(timer);
                }
                footer.style.bottom = current + "px";
            }, 20);
            a = true;
        }
    }

//function downHandle(){
//
//
//}
}