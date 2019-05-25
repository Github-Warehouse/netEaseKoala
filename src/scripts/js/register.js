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
            $('#registerBUtton').click(function () {
                let username = $('#username').val()
                let password = $('#password').val()
                let conPassword = $('#conPassword').val()
                if (username == "") {
                    alert('用户名不能为空')
                } else if (password == "") {
                    alert('密码不能为空')
                } else if (conPassword == "") {
                    alert('请再次输入密码')
                } else if (password != conPassword) {
                    alert('两次密码输入不一致')
                } else {
                    let json = {
                        name: username,
                        password: password
                    }
                    let stringJson = JSON.stringify(json)
                    localStorage.setItem("json", stringJson)
                    location.href="login.html"
                }
            })
        })
    })
})