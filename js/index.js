$(function(){
    var $head=$('.head');
    $('.closebtn',$head).on('click',function(){
        $head.css('display','none');
    })

    $('.hiSlider3').hiSlider({
        isFlexible: true,
        isSupportTouch: true,
        titleAttr: function(curIdx){
            return $('img', this).attr('alt');
        }
    });
    /*文字滚动*/
    var $bigScroll=$(".big-scroll");
    var $aw=$(".scroll-text").height();
    //console.log($aw);

})
