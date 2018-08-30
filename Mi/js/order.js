// var i=list.length;
var i=2;

/*弹出地址填写框*/
$(".add-address").click(function(){
    $(".address-box").show();
    $(".address-box").find(".got").show();
    $(".address-box").find(".update").hide();
});

//提交按钮的点击事件
$(".got").click(function(){
    //验证填写的收货信息
    //验证用户名
    var username=$(this).parents(".add-oneAddress").find(".user-name").val();
    if(username===""){
        alert("用户名不能为空");
        return;
    }
    //验证手机号
    var phone=$(this).parents(".add-oneAddress").find(".user-mobile").val();
    if(username===""){
        alert("电话号码不能为空");
        return;
    }
    var pattern = /^1[34578]\d{9}$/;//验证手机号正则表达式
    if(!pattern.test(phone)) {
        alert("电话号码格式错误");
        return;
    }
    //验证地区
    var area=$(this).parents(".add-oneAddress").find(".input").val();
    if(area===""){
        alert("地区不能为空");
        return;
    }
    //验证详细地址
    var datail_area=$(this).parents(".add-oneAddress").find(".user-address").val();
    if(datail_area===""){
        alert("收货地址不能为空");
        return;
    }
    //验证邮编
    var esm_number=$(this).parents(".add-oneAddress").find(".ESM-number").val();
    if(esm_number===""){
        alert("邮政编码不能为空");
        return;
    }

    //隐藏填写信息模块
    $(".address-box").hide();

    //将信息传递回模块
    comeBack(username,phone,area,datail_area);

    //清空填写信息模块的信息
    $(this).parents(".add-oneAddress").find(".user-name").val("");
    $(this).parents(".add-oneAddress").find(".user-mobile").val("");
    $(this).parents(".add-oneAddress").find(".input").val("");
    $(this).parents(".add-oneAddress").find(".user-address").val("");
    $(this).parents(".add-oneAddress").find(".ESM-number").val("");
    $(this).parents(".add-oneAddress").find(".address-point").val("");

    //增加收货地址
    addModile();


});

//增加填写收货信息模块
function addModile(){
    var name="info"+i;
    var str = '<li class="one-address '+name+'">'+
        '<div class="add-address"><a href="javaScript:void(0)"><span>+</span></a></div>'+
        '<h4 class="user"></h4>'+
        '<p class="mobile"></p>'+
        '<p class="city"></p>'+
        '<p class="small_city"></p>'+
        '<div class="query-address">'+
        '<a href="javaScript:void(0)" class="d-query">修改</a>'+
        '</div>'+
        '</li>';
    $(".a-content").append(str);
    i++;
    //动态绑定add-address点击事件
    $(".add-address").on("click",function(){
        $(".address-box").show();
        $(".address-box").find(".got").show();
        $(".address-box").find(".update").hide();
    });

    //动态绑定修改事件
    $(".d-query").on("click",function(){
        var str=$(this).parents("li").attr("class");
        //计算li的类名末尾的数字是从第几位开始，并取出字符串
        index=str.substr(16-str.length);

        /*将弹出框里面的值赋值到地址栏*/
        var userName = $(this).parents("li").find(".user").html();/*用户名*/
        var mobile = $(this).parents("li").find(".mobile").html();/*地址*/
        var city = $(this).parents("li").find(".city").html();/*城市*/
        var small_city = $(this).parents("li").find(".small_city").html();/*城镇*/
        $(".address-box").show();
        $(".address-box").find(".update").show();
        $(".address-box").find(".got").hide();
        $(".address-box").find(".user-name").val(userName);
        $(".address-box").find(".user-mobile").val(mobile);
        $(".address-box").find(".input").val(city);
        $(".address-box").find(".user-address").val(small_city);
    });

    //动态绑定选定收货地址附加到左下角事件
    $(".one-address").on("click",function(){
        //获取ul下的最后一个li元素
        var last_element=$(this).parent().children("li:last-child").attr("class");
        var present_element=$(this).attr("class");
        //判断该元素是否为最后一个li元素
        if(present_element!=last_element){
            var str=$(this).attr("class");
            //设置其他li标签的边框颜色不不产生变化
            $(this).parent().children().css("border",".6px solid #e0e0e0");
            $(this).css("border",".6px solid #ff6700");
            //计算li的类名末尾的数字是从第几位开始，并取出字符串
            index=str.substr(16-str.length);
            var info=".info"+index;
            var username=$(info).find(".user").html();
            var mobile=$(info).find(".mobile").html();
            var city=$(info).find(".city").html();
            var detail_city=$(info).find(".small_city").html();
            $(".c_m_t_info").html(username+"&nbsp;"+mobile);
            $(".c_m_t_address").html(city+"&nbsp;"+detail_city);
        }
    });
}

//将信息传递回模块中
function comeBack(username,phone,area,datail_area){
    var info=".info"+(i-1);
    $(info).find(".add-address").hide();
    $(info).find(".user").show();
    $(info).find(".mobile").show();
    $(info).find(".city").show();
    $(info).find(".small_city").show();
    $(info).find(".query-address").show();

    $(info).find(".user").html(username);
    $(info).find(".mobile").html(phone);
    $(info).find(".city").html(area);
    $(info).find(".small_city").html(datail_area);
}

$(".clear").click(function(){/*关闭,信息清除*/
    $(".user-name").val("");
    $(".user-mobile").val("");
    $("#city").val("");
    $(".user-address").val("");
    $(".ESM-number").val("");
    $(".address-point").val("");
    $(".address-box").hide();
});
/*取消，信息消除*/
$(".cancel").click(function(){
    $(".user-name").val("");
    $(".user-mobile").val("");
    $("#city").val("");
    $(".user-address").val("");
    $(".ESM-number").val("");
    $(".address-point").val("");
    $(".address-box").hide();
});


//修改按钮的点击事件
$(".update").click(function(){
    //获取信息
    var username=$(this).parents(".add-oneAddress").find(".user-name").val();
    if(username===""){
        alert("用户名不能为空");
        return;
    }
    //验证手机号
    var phone=$(this).parents(".add-oneAddress").find(".user-mobile").val();
    if(username===""){
        alert("电话号码不能为空");
        return;
    }
    var pattern = /^1[34578]\d{9}$/;//验证手机号正则表达式
    if(!pattern.test(phone)) {
        alert("电话号码格式错误");
        return;
    }
    //验证地区
    var area=$(this).parents(".add-oneAddress").find(".input").val();
    if(area===""){
        alert("地区不能为空");
        return;
    }
    //验证详细地址
    var datail_area=$(this).parents(".add-oneAddress").find(".user-address").val();
    if(datail_area===""){
        alert("收货地址不能为空");
        return;
    }
    //验证邮编
    var esm_number=$(this).parents(".add-oneAddress").find(".ESM-number").val();
    if(esm_number===""){
        alert("邮政编码不能为空");
        return;
    }

    //隐藏填写信息模块
    $(".address-box").hide();

    //将信息传递回模块
    var info=".info"+index;
    $(info).find(".add-address").hide();
    $(info).find(".user").show();
    $(info).find(".mobile").show();
    $(info).find(".city").show();
    $(info).find(".small_city").show();
    $(info).find(".query-address").show();

    $(info).find(".user").html(username);
    $(info).find(".mobile").html(phone);
    $(info).find(".city").html(area);
    $(info).find(".small_city").html(datail_area);

    //清空填写信息模块的信息
    $(this).parents(".add-oneAddress").find(".user-name").val("");
    $(this).parents(".add-oneAddress").find(".user-mobile").val("");
    $(this).parents(".add-oneAddress").find(".input").val("");
    $(this).parents(".add-oneAddress").find(".user-address").val("");
    $(this).parents(".add-oneAddress").find(".ESM-number").val("");
    $(this).parents(".add-oneAddress").find(".address-point").val("");
});
/*修改*/
$(".d-query").click(function(){
    var str=$(this).parents("li").attr("class");
    //计算li的类名末尾的数字是从第几位开始，并取出字符串
    index=str.substr(16-str.length);

    /*将弹出框里面的值赋值到地址栏*/
    var userName = $(this).parents("li").find(".user").html();/*用户名*/
    var mobile = $(this).parents("li").find(".mobile").html();/*地址*/
    var city = $(this).parents("li").find(".city").html();/*城市*/
    var small_city = $(this).parents("li").find(".small_city").html();/*城镇*/
    $(".address-box").show();
    $(".address-box").find(".update").show();
    $(".address-box").find(".got").hide();
    $(".address-box").find(".user-name").val(userName);
    $(".address-box").find(".user-mobile").val(mobile);
    $(".address-box").find(".input").val(city);
    $(".address-box").find(".user-address").val(small_city);
});


/*添加地址*/
$("#city").click(function (e) {
    SelCity(this,e);
});
$("s").click(function (e) {
    SelCity(document.getElementById("city"),e);
});

/*修改地址或者删除地址，需要对框进行点击*/
/*显示出来修改和删除*/

/*删除地址*/
$(".d-delete").on("click",function(){
    $(this).parent().parent().remove();
});


//验证手机号
function checkPhone(){
    var userPhone = document.getElementById("p-t-bID");
    var phonrErr = document.getElementById("printID");
    var pattern = /^1[34578]\d{9}$/;//验证手机号正则表达式
    if(!pattern.test(userPhone.value)){
        //userPhone.innerHTML.css("border","1px solid #ff6700");
        userPhone.style.border="1px solid #ff6700";
        phonrErr.innerHTML="手机号码格格式错误！";
        phonrErr.style.color="#ff6700";
        phonrErr.className="error";
        return false;
    }else{
        userPhone.style.border="1px solid #e8e8e8";
        phonrErr.innerHTML="";
        phonrErr.className="success";
        return true;
    }
}

//选定收货地址
$(".one-address").click(function(){
    //获取ul下的最后一个li元素
    var last_element=$(this).parent().children("li:last-child").attr("class");
    var present_element=$(this).attr("class");
    //判断该元素是否为最后一个li元素
    if(present_element!=last_element){
        var str=$(this).attr("class");
        $(this).parent().children().css("border",".6px solid #e0e0e0");
        $(this).css("border",".6px solid #ff6700");
        //计算li的类名末尾的数字是从第几位开始，并取出字符串
        index=str.substr(16-str.length);
        var info=".info"+index;
        var username=$(info).find(".user").html();
        var mobile=$(info).find(".mobile").html();
        var city=$(info).find(".city").html();
        var detail_city=$(info).find(".small_city").html();
        $(".c_m_t_info").html(username+"&nbsp;"+mobile);
        $(".c_m_t_address").html(city+"&nbsp;"+detail_city);
    }
});