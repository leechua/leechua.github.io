var bannerFrame = $('.banner-frame');
var bannerLs = $('.banner-ls');
var pointLs = $('.point-ls');
var bannerItemLen = bannerLs.find('.banner-item').length;
var bannerWidth, bannerAnimate;


$(function(){
	
	bannerWidth = bannerFrame.outerWidth(true); ////获取显示区宽度
	bannerLs.find('.banner-item').css('width', bannerWidth); //设置item宽度
	bannerLs.css({'width': bannerWidth * bannerItemLen});

	bannerAnimate = setInterval(function(){
		var index = pointLs.find('.active').index() + 1;
        bannerLs.animate({left: -bannerWidth},600, function(){  
            bannerLs.find('li:eq(0)').appendTo(bannerLs);  
            bannerLs.css('left','0');
            if(index == bannerItemLen){
            	index = 0;
            }
            pointLs.find('span:eq(' + index + ')').addClass('active').siblings().removeClass('active');
        });  
	}, 3000);


    // 案例展示
	$('.case-min').on('click', 'img', function(){
		var imgSrc = $(this).attr('src');
		var info = $(this).attr('data-info');
		$(this).addClass('active').siblings().removeClass('active');
		$('.case-detail').find('img').attr('src', imgSrc);
		$('.case-info p').text(info);
	});

    //tab-item事件
	$('.tab-title').on('click', 'span', function(){
		$(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index() + 1;
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-item img').attr('src', 'img/' +'xd'+index + '.jpg');
    });
});