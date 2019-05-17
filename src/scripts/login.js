require(['libs/config'], () => {
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
    })
})