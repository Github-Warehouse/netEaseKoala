require.config({
    baseUrl: "http://localhost:5500",
    shim: {
        'bootstrap': {
            deps: [
                'jquery',
                'css!styles/statics/bootstrap'
            ],
            exports: 'exports'
        },
        'jquery-ui': {
            deps: ['css!styles/statics/jquery-ui'],
            exports: 'exports'
        },
        '_swiper': {
            deps: ['css!styles/statics/swiper'],
            exports: 'exports'
        }
    },
    paths: {
        "jquery": "scripts/statics/jquery-2.0.3",
        "jquery-ui": "scripts/statics/jquery-ui",
        "jquery.validate": "scripts/statics/jquery.validate",
        "css": "scripts/statics/css",
        "bootstrap": "scripts/statics/bootstrap",
        "_swiper": "scripts/statics/swiper"
    }
});