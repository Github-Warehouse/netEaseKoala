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
            $('#loginButton').click(function () {
                let username = $('#username').val()
                let password = $('#password').val()
                let objJson = JSON.parse(localStorage.getItem("json"))
                console.log(objJson);
                if (username == "") {
                    alert('用户名不能我空')
                } else if (password == "") {
                    alert('密码不能我空')
                } else {
                    if (username != objJson.name || password != objJson.password) {
                        alert('账号或密码错误')
                    } else {
                        location.href = "shoppingCart.html"
                    }
                }
            })
        })
    })
})