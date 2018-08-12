/**
 * Created by Administrator on 2018/8/12.
 */
//验证用户
function checkUserName(){
    var user = document.getElementById("username");
    var Err = document.getElementById("user-text");
    if(user.value==""){
        Err.innerHTML="用户名不能为空";
        Err.style.color="#ff6700";
        return false;
    }else if(user.value.indexOf(" ")!=-1){
        Err.innerHTML="用户名不能有空格";
        Err.style.color="#ff6700";
        return false;
    }
    else{
        Err.innerHTML="";
        return true;
    }
}


//验证密码合法性
function checkPassword(){
    var userPassword = document.getElementById("psw-text");
    var errPassword = document.getElementById("print_psw");
    var patterns = /^\w{4,10}$/; //密码要在4-8位
    if(!patterns.test(userPassword.value)){
        errPassword.innerHTML="密码在4到10位之间！";
        errPassword.style.color="#ff6700";
        errPassword.className="error";
        return false;
    } else{
        errPassword.innerHTML="";
        errPassword.className="success";
        return true;
    }
}

//再次确定密码
function turePassword(){
    var userPassword = document.getElementById("psw-text");//密码
    var userPassword2 = document.getElementById("p-t-text");//再次输入的密码
    var errPassword = document.getElementById("print-t-text");
    if(userPassword2.value!=userPassword.value){
        errPassword.innerHTML="密码错误！";
        errPassword.style.color="#ff6700";
        errPassword.className="error";
        return false;
    } else{
        errPassword.innerHTML="";
        errPassword.className="success";
        return true;
    }
}

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

//验证邮箱
function checkEmail(){
    var email = document.getElementById("email");
    var err = document.getElementById("email-text");
    var patten = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(!patten.test(email.value)){
        err.innerHTML="邮箱格式错误！";
        err.style.color="#ff6700";
        return false;
    }else{
        err.innerHTML="";
        return true;
    }
}

//检验问题
function checkProblem(){
    var problem = document.getElementById("problem");
    var err = document.getElementById("problem-text");
    if(problem.value==""){
        err.innerHTML="不能为空！";
        err.style.color="#ff6700";
        return false;
    }else{
        err.innerHTML="";
        return true;
    }
}

//检验答案
function checkAnswer(){
    var answer = document.getElementById("answer");
    var err = document.getElementById("answer-text");
    if(answer.value==""){
        err.innerHTML="不能为空！";
        err.style.color="#ff6700";
        return false;
    }else{
        err.innerHTML="";
        return true;
    }
}