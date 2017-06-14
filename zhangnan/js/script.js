window.onload = function () {
    // 查找元素节点
    function $id(id) {
        return document.getElementById(id);
    };


    // 鼠标的事件坐标获取
    var eventTool = {
        getEvent: function (event) {
            return event || window.event;
        },
        clientX: function (event) {
            return this.getEvent(event).clientX;
        },
        clientY: function (event) {
            return this.getEvent(event).clientY;
        },
        pageX: function (event) {
            return this.getEvent(event).pageX || this.clientX(event) + (document.body.scrollLeft || window.pageXoffset || document.documentElement.scrollLeft || 0);
        },
        pageY: function (event) {
            return this.getEvent(event).pageY || this.clientY(event) + (document.body.scrollTop || window.pageYoffset || document.documentElement.scrollTop || 0);
        },
        stopPropagation: function (e) {
            if (this.getEvent(e).stopPropagation) {
                this.getEvent(e).stopPropagation();
            } else {
                this.getEvent(e).cancelBubble = true;
            }
        }
    }

    function getStyle(element, attr) {
        if (window.getComputedStyle) {
            return getComputedStyle(element, null)[attr];
        } else {
            return element.currentStyle[attr];
        }
    };

    // 对象移动
    function animate(element, obj, callBack) {
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            var flag = true;
            for (var attr in obj) {
                if (attr === "zIndex") {
                    var target = obj[attr];
                    element.style[attr] = target;
                    var current = target;
                } else if (attr === "opacity") {
                    var current = parseFloat(getStyle(element, attr));
                    var target = obj[attr];
                    var tempCurrent = current * 100;
                    var tempTarget = target * 100;
                    var step = (tempTarget - tempCurrent) / 10;
                    tempCurrent += step > 0 ? Math.ceil(step) : Math.floor(step);
                    current = tempCurrent / 100;
                    element.style[attr] = current;
                }
                else {
                    var current = parseFloat(getStyle(element, attr));
                    var target = obj[attr];
                    var step = (target - current) / 10;
                    current += step > 0 ? Math.ceil(step) : Math.floor(step);
                    element.style[attr] = current + "px";

                }
                if (current != target) {
                    flag = false;
                }
            }
            ;
            if (flag) {
                clearInterval(element.timer);
                callBack && callBack();
            }
            ;
        }, 30);
    }

    // 静静
    $(function () {
        //给一级菜单注册鼠标移入事件
        $(".nav-item").on("mouseover", function () {
            var nav_ul_inner = $(this).find(".nav_ul_inner");
            nav_ul_inner.stop(true, false).slideDown(500);
        });
        //给一级菜单注册鼠标移除事件
        $(".nav-item").on("mouseout", function () {
            var nav_ul_inner = $(this).find(".nav_ul_inner");
            nav_ul_inner.stop(true, false).slideUp(500);
        })
    });


    // 声明对象

    var plane = $id("plane");
    var propeller = $id("propeller");
    var circle = $id("circle");
    var open = $id("open");
    // 界面开启加载
    setTimeout(function () {
        // console.log(window.e);
        animate(circle, {
            width: 1650,
            height: 1650,
            marginLeft: -820,
            top: -650,
            // borderRadius:0

        }, function () {
            open.style.display = "none";
            // 页面加载完毕后飞机飞入界面
            animate(plane, {left: 320}, function () {
                // 页面加载完后飞机不断的上下飞动

                animate(plane, {top: 130}, function () {
                    animate(plane, {top: 80}, function () {
                        animate(plane, {top: 130}, function () {
                            animate(plane, {top: 80}, function () {
                                animate(plane, {top: 130}, function () {
                                    animate(plane, {top: 80}, function () {
                                        animate(plane, {top: 130}, function () {
                                            animate(plane, {top: 80}, function () {
                                                animate(plane, {top: 130}, function () {
                                                    animate(plane, {top: 80}, function () {
                                                        animate(plane, {top: 130}, 0);
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });


            // 飞机扇页进行转动
            var temp = 0;
            setInterval(function () {
                temp += 20;
                if (temp >= 360) {
                    temp = 0;
                }
                ;
                propeller.style.transform = "rotateZ(" + temp + "deg)";
            }, 10);

            // 从上边飞出菜单栏
            var menulabel = $id("menulabel");
            animate(menulabel, {top: 0}, 0);


            // 鼠标滚动
            // document.onscroll=function(e){
            //     alert("滚动事件发生了");
            // };
            // 鼠标点击飞机飞走
            var znNextPage = $id("znNextPage");
            var onepage = $id("onepage");
            var design1 = $id("design1");
            var design2 = $id("design2");
            var design3 = $id("design3");
            znNextPage.onclick = function () {
                // 飞机飞走
                animate(plane, {left: -800}, function () {
                    // 开始页隐藏，第二页出现
                    onepage.style.display = "none";
                    // 第二页三个子页面旋转出现
                    var temps = 0;
                    var timerz = setInterval(function () {
                        var step = 5;
                        temps += step;
                        design1.style.transform = "rotatey(" + temps + "deg)";
                        if (temps >= 360) {
                            clearInterval(timerz);
                            design1.style.transform = "rotatey(360deg)";
                        }
                        ;
                    }, 10);
                    // 第二张子页面旋转
                    var temps2 = 0;
                    var timerz2 = setInterval(function () {
                        var step = 5;
                        temps2 += step;
                        design2.style.transform = "rotatey(" + temps2 + "deg)";
                        if (temps2 >= 180) {
                            clearInterval(timerz2);
                            design2.style.transform = "rotatey(360deg)";
                        }
                        ;
                    }, 30);
                    // 第三张子页面旋转
                    var temps3 = 0;
                    var timerz3 = setInterval(function () {
                        var step = 5;
                        temps3 += step;
                        design3.style.transform = "rotatey(" + temps3 + "deg)";
                        if (temps3 >= 180) {
                            clearInterval(timerz3);
                            design3.style.transform = "rotatey(360deg)";
                        }
                        ;
                    }, 30);
                    // 鼠标悬浮在第一个框架内时，边框跑马
                    var borderTop = $id("borderTop");
                    var borderRight = $id("borderRight");
                    var borderBottom = $id("borderBottom");
                    var borderLeft = $id("borderLeft");
                    design1.onmouseover = function () {

                        animate(borderTop, {height: 25, width: 453, opacity: 0.5}, 0);
                        animate(borderRight, {height: 667, width: 25, opacity: 0.5}, 0);
                        animate(borderBottom, {height: 25, width: 452, opacity: 0.5}, 0);
                        animate(borderLeft, {height: 667, width: 25, opacity: 0.5}, 0);
                    };
                    design1.onmouseout = function () {

                        animate(borderTop, {height: 0, width: 453, opacity: 0.5}, 0);
                        animate(borderRight, {height: 667, width: 0, opacity: 0.5}, 0);
                        animate(borderBottom, {height: 0, width: 452, opacity: 0.5}, 0);
                        animate(borderLeft, {height: 667, width: 0, opacity: 0.5}, 0);
                    };
                    // 图片旋转弹出
                    var design1Pic = $id("design1Pic");
                    var pictemp1 = 0;
                    var pic1 = setInterval(function () {
                        var step = 5;
                        pictemp1 += step;
                        design1Pic.style.transform = "rotateZ(" + pictemp1 + "deg)";
                        if (pictemp1 >= 1440) {
                            clearInterval(pic1);
                            design1Pic.style.transform = "rotateZ(360deg)";
                        }
                        ;
                    }, 5);
                    animate(design1Pic, {width: 400, height: 400, left: 15, top: 100}, 0);
                    // 鼠标移入图一的图片

                    var introWord1 = $id("introWord1");
                    design1Pic.onmouseover = function () {
                        animate(introWord1, {height: 667}, 0);
                    };
                    design1Pic.onmouseout = function () {
                        animate(introWord1, {height: 0}, 0);
                    };
                    // 第二张图片飞出
                    var design2Pic2 = $id("design2Pic2");
                    var pictemp2 = 0;
                    var pic2 = setInterval(function () {
                        var step = 5;
                        pictemp2 += step;
                        design2Pic2.style.transform = "rotateZ(" + pictemp2 + "deg)";
                        if (pictemp2 >= 1440) {
                            clearInterval(pic2);
                            design2Pic2.style.transform = "rotateZ(360deg)";
                        }
                        ;
                    }, 5);
                    animate(design2Pic2, {width: 400, height: 400, left: 25, top: 100}, 0);
                    // 鼠标第二张移入跑马
                    var borderTop2 = $id("borderTop2");
                    var borderRight2 = $id("borderRight2");
                    var borderBottom2 = $id("borderBottom2");
                    var borderLeft2 = $id("borderLeft2");
                    design2.onmouseover = function () {

                        animate(borderTop2, {height: 25, width: 453, opacity: 0.5}, 0);
                        animate(borderRight2, {height: 667, width: 25, opacity: 0.5}, 0);
                        animate(borderBottom2, {height: 25, width: 452, opacity: 0.5}, 0);
                        animate(borderLeft2, {height: 667, width: 25, opacity: 0.5}, 0);
                    };
                    design2.onmouseout = function () {

                        animate(borderTop2, {height: 0, width: 453, opacity: 0.5}, 0);
                        animate(borderRight2, {height: 667, width: 0, opacity: 0.5}, 0);
                        animate(borderBottom2, {height: 0, width: 452, opacity: 0.5}, 0);
                        animate(borderLeft2, {height: 667, width: 0, opacity: 0.5}, 0);
                    };
                    // 鼠标移入图二的图片跑出说明文字

                    var introWord2 = $id("introWord2");
                    design2Pic2.onmouseover = function () {
                        animate(introWord2, {height: 667}, 0);
                    };
                    design2Pic2.onmouseout = function () {
                        animate(introWord2, {height: 0}, 0);
                    };
                    // 第三张图片飞出
                    var design3Pic3 = $id("design3Pic3");
                    var pictemp3 = 0;
                    var pic3 = setInterval(function () {
                        var step = 5;
                        pictemp3 += step;
                        design3Pic3.style.transform = "rotateZ(" + pictemp3 + "deg)";
                        if (pictemp3 >= 1440) {
                            clearInterval(pic3);
                            design3Pic3.style.transform = "rotateZ(360deg)";
                        }
                        ;
                    }, 5);
                    animate(design3Pic3, {width: 400, height: 400, left: 25, top: 100}, 0);
                    // 鼠标移入第三张跑马

                    var borderTop3 = $id("borderTop3");
                    var borderRight3 = $id("borderRight3");
                    var borderBottom3 = $id("borderBottom3");
                    var borderLeft3 = $id("borderLeft3");
                    design3.onmouseover = function () {

                        animate(borderTop3, {height: 25, width: 453, opacity: 0.5}, 0);
                        animate(borderRight3, {height: 667, width: 25, opacity: 0.5}, 0);
                        animate(borderBottom3, {height: 25, width: 452, opacity: 0.5}, 0);
                        animate(borderLeft3, {height: 667, width: 25, opacity: 0.5}, 0);
                    };
                    design3.onmouseout = function () {

                        animate(borderTop3, {height: 0, width: 453, opacity: 0.5}, 0);
                        animate(borderRight3, {height: 667, width: 0, opacity: 0.5}, 0);
                        animate(borderBottom3, {height: 0, width: 452, opacity: 0.5}, 0);
                        animate(borderLeft3, {height: 667, width: 0, opacity: 0.5}, 0);
                    };
                    // 鼠标移入图三的图片跑出说明文字

                    var introWord3 = $id("introWord3");
                    design3Pic3.onmouseover = function () {
                        animate(introWord3, {height: 667}, 0);
                    };
                    design3Pic3.onmouseout = function () {
                        animate(introWord3, {height: 0}, 0);
                    };
                    // 点击按下下一页按钮，三张图片上来
                    var next3Page = $id("next3Page");
                    var slidePic1 = $id("slidePic1");
                    var slidePic2 = $id("slidePic2");
                    var slidePic3 = $id("slidePic3");
                    next3Page.onclick = function () {
                        slidePic1.style.display = "block";
                        slidePic2.style.display = "block";
                        slidePic3.style.display = "block";
                        animate(slidePic1, {top: 0}, function () {
                            animate(slidePic2, {top: 0}, function () {
                                animate(slidePic3, {top: 0}, 0);
                            });
                        });
                    };
                    var page3Word1 = $id("page3Word1");
                    var page3Word2 = $id("page3Word2");
                    var page3Word3 = $id("page3Word3");
                    slidePic1.onmouseover = function () {
                        animate(page3Word1, {height: 667}, 0);
                    };
                    slidePic1.onmouseout = function () {
                        animate(page3Word1, {height: 0}, 0);
                    };
                    slidePic2.onmouseover = function () {
                        animate(page3Word2, {height: 667}, 0);
                    };
                    slidePic2.onmouseout = function () {
                        animate(page3Word2, {height: 0}, 0);
                    };
                    slidePic3.onmouseover = function () {
                        animate(page3Word3, {height: 667}, 0);
                    };
                    slidePic3.onmouseout = function () {
                        animate(page3Word3, {height: 0}, 0);
                    };
                });
            };

        })
    }, 500);


}