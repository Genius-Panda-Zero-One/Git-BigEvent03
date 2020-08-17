$(function () {
    // 点击去登录显示登录 隐藏注册
    $("#link_login").on('click', function () {
        $(".reg-box").hide()
        $(".login-box").show()
    })
    // 点击去注册显示注册 隐藏登录
    $("#link_reg").on('click', function () {
        $(".reg-box").show()
        $(".login-box").hide()
    })
})