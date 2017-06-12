//发送 sms code
async function sendSMSCode(phone) {
    var fd = new FormData();
    fd.append('mobile', phone);

    return fetch('/api/site/ajax-send-sms-code/login', {
        method: 'POST',
        headers: {
            'Origin': 'https://e.xinrenxinshi.com',
            'Referer': 'https://e.xinrenxinshi.com/index'
        },
        credentials: 'include',
        body: fd
    }).then(res => res.json())

}

let resultDemo = {
    "code": 0,
    "message": "验证码发送成功",
    "status": true,
    "data": {
        "code_id": 108104  //登陆的时候需要使用
    }
}

//login 
async function login(mobile, verify_code, verify_code_id, type = 1) {
    var fd = new FormData();
    fd.append('mobile', mobile);
    fd.append('verify_code', verify_code);
    fd.append('verify_code_id', verify_code_id);
    fd.append('type', 1);

    return fetch('/api/site/ajax-login', {
        method: 'POST',
        headers: {
            'Origin': 'https://e.xinrenxinshi.com',
            'Referer': 'https://e.xinrenxinshi.com/index'
        },
        credentials: 'include',
        body: fd
    }).then(res => res.json())
}

resultDemo = { "code": 0, "message": "登录成功", "status": true, "data": { "sessionId": "bf3e386528ad40d2a01a5ae49ce1b242", "url": "/index" } }

// csrf Token
async function csrfToken() {
    return fetch('/api/env/ajax-common', {
        headers: {
            'Origin': 'https://e.xinrenxinshi.com',
            'Referer': 'https://e.xinrenxinshi.com/index'
        },
        credentials: 'include',
    }).then(res => res.json())
}

//成功
resultDemo = { "code": 0, "message": "获取成功", "status": true, "data": { "csrf": "OTk0ZDg4MGINX1ICCA8FVQ4KDQcMAQFVAV0HBQ8NBwYOAARQD1tUUg==", "skin": 4 } }

//失败
resultDemo = {
    code: 4001,
    data: "/site/logon",
    message: "请先登录",
    status: false
}

//签到
async function sign(longitude, latitude, crsfToken) {
    var fd = new FormData();
    fd.append('longitude', longitude);
    fd.append('latitude', latitude);

    return fetch('/api/attendance/ajax-sign', {
        method: 'POST',
        headers: {
            'Origin': 'https://e.xinrenxinshi.com',
            'Referer': 'https://e.xinrenxinshi.com/index',
            'X-CSRF-TOKEN': crsfToken
        },
        credentials: 'include',
        body: fd
    }).then(res => res.json())
}



//取Cookie的值  
function getCookie(name) {  
    var arg = name + "=";  
    var alen = arg.length;  
    var clen = document.cookie.length;  
    var i = 0;  
    while (i < clen) {  
        var j = i + alen;  
        if (document.cookie.substring(i, j) == arg) return getCookieVal(j);  
        i = document.cookie.indexOf(" ", i) + 1;  
        if (i == 0) break;  
    }  
    return null;  
}  
 //写入到Cookie  
//name:cookie名称  value:cookie值   
function setCookie(name, value) {  
    var Days = 30;  
    var exp = new Date();  
    exp.setTime(exp.getTime() + 60 * 2000);//过期时间 2分钟  
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();  
}  
  
function getCookieVal(offset) {  
    var endstr = document.cookie.indexOf(";", offset);  
    if (endstr == -1) endstr = document.cookie.length;  
    return unescape(document.cookie.substring(offset, endstr));  
}  