require(['../libs/config'], () => {
    require([
        'jquery',
        'css',
        'bootstrap',
        'jquery-ui',
        'jquery.validate',
        '_swiper'
    ], ($, Swiper) => {
        $(function () {
            $('.clearfix a').mouseover(function () {
                $(this).css('color', 'red')
            })
            $('.clearfix a').mouseleave(function () {
                $(this).css('color', '#999')
            })
            $('#img01').hover(function () {
                $('#img01 img').attr('src',`images/clearfix_01_hover.png`)
            },function(){
                $('#img01 img').attr('src',`images/clearfix_01.png`)
            })
            $('#img02').hover(function () {
                $('#img02 img').attr('src',`images/clearfix_02_hover.png`)
            },function(){
                $('#img02 img').attr('src',`images/clearfix_02.png`)
            })
            $('#img03').hover(function () {
                $('#img03 img').attr('src',`images/clearfix_03_hover.png`)
            },function(){
                $('#img03 img').attr('src',`images/clearfix_03.png`)
            })
            $('#img04').hover(function () {
                $('#img04 img').attr('src',`images/clearfix_04_hover.png`)
            },function(){
                $('#img04 img').attr('src',`images/clearfix_04.png`)
            })
            $.ajax({
                type: 'get',
                url: 'http://localhost:9528/api/kaolalist'
            }).done(function (data) {
                // console.log(data);
            })
        })
    })
})