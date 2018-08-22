
$(document).ready(function(){


    //点击按钮“账户登录”的效果
    $(".l_account").click(function(){
        $(".saoma").css({"color":"#757575"});
        $(".denglu").css({"color":"#f56600"});
        $("form").show();
        $(".type-login").show();
        $(".l-links").show();
        $(".l_q_qrcode").hide();
    });

    //点击按钮“扫码登录”的效果
    $(".saoma").click(function(){
        $(".denglu").css({"color":"#757575"});//
        $(".saoma").css({"color":"#f56600"});
        $(".l_q_qrcode").show();//显示图片二维码
        $("form").hide();
        $(".type-login").hide();
        $(".l-links").hide();
    });

    //文字控制效果
    //移开效果

})
