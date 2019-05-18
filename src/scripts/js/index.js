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
            console.log($);
            console.log(Swiper);
        })
        // let xhr = new XMLHttpRequest()
        // xhr.open('get', 'http://localhost:9528/api/goodlist')
        // xhr.onload = function () {
        //     console.log(xhr.response);
        // }
        // xhr.send()
    })
})