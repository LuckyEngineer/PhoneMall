$(function(){
    // top
    // 鼠标移入移开用户名
    (function(){
        var $user = $(".top .top_nav .t_n_user");
        var $menu = $(".top .top_nav .t_n_user .t_n_u_menu");
        $user.hover(function(){
            $menu.stop(true).slideDown(200);
        },function(){
            $menu.stop(true).slideUp(200);
        })
    })();
    // End top


    //点击订单详情滑出详细信息
    $(".c_m_t_p_detail").click(function(){
        $(".c_m_t_i_info").toggle();
       $(".c_m_order").slideToggle(650);

    });
});