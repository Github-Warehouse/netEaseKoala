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
            $('.shopButton').click(function () {
                location.href = 'details.html'
            })
            $('.smallPic01').mouseover(function () {
                $('.bigPic img').attr('src','//pop.nosdn.127.net/096d6abf-eca4-4235-ba76-3ebb094ca64e?imageView&thumbnail=800x0&quality=85')
            })
            $('.smallPic02').mouseover(function () {
                $('.bigPic img').attr('src','//pop.nosdn.127.net/10a23e2e-6fd9-43c0-b9b6-5fbc3b0005de?imageView&thumbnail=800x0&quality=85')
            })
            $('.smallPic03').mouseover(function () {
                $('.bigPic img').attr('src','//pop.nosdn.127.net/ef2a2a0a-c277-4fb4-ac34-839707228b84?imageView&thumbnail=800x0&quality=85')
            })
        })
    })
})