// test1
function myfunction()
{
    x=document.getElementById('mytext');
    y=document.getElementById('error');

    // alert(x.value);
    // alert(x.value.length);
    // if(x.value.length>10){
    //     alert("name is too long");
    // }
    // else{
    //     alert("correct value input")
    // }

    if(x.value.length>10 || x.value.length==0 ){
        y.innerHTML="invalid";
        y.style.color="red";
    }

    else{
        y.innerHTML="valid";
        y.style.color="blue";
    }

}


// test2
var output=document.getElementById('output');
document.getElementById('submit').onclick = checkform;
document.getElementById('myform').onsubmit = function(){
    var myname=document.getElementById('name');
    var mymail=document.getElementById('mail');
    var mymsg=document.getElementById('msg');
    var rmessage = ".";
    if(myname.value === ''){ rmessage=rmessage + "name not filled<br>" }
    if (!validateEmail(mymail.value)){ rmessage=rmessage+ "email not valid<br>" }
    if(mymsg.value === ''){ rmessage=rmessage+ "message not filled<br>" }
    if(rmessage.length>0){
        output.innerHTML =rmessage;
        return false;
    }
    else{
        return true;
    }
}
function validateEmail(email){
    var mycheck=  ' /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\ [\]\\.,;:\s@"]+)*)|(".+")@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ';                                          
                 return mycheck.test(email);
}
function checkform(){
    output.innerHTML ="clicked"
}









// test3

function validate(){
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");

    if(username.value.trim() == "" || password.value.trim() == ""){
        alert("no blank allowed")
        return false;
    }
    else{
        return true;
    }

}










































