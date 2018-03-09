<h3>薪人薪事签到</h3>
<p>无心之作，请大家不要滥用，仅仅作为技术研究用。</p>
<br/>
<h3>服务端和客户端环境要求</h3>
<p>服务端：需要node</p>
<p>客户端，因为用了await，请用chrome 58以上</p>
<p>运行和操作：</p>
<ul>
   <li>npm install</li>
   <li>node app.js</li>
   <li>浏览器打开 http://localhost:8007</li>
</ul>

<h3>功能描述</h3>
<ul>
   <li>城市自主定位</li>
   <li>地址搜索和设置</li>
   <li>登陆</li>
   <li>签到</li>
   <li>注销</li>
   <li>cookie过期跳转登陆</li>
   <li>支持移动端</li>
</ul>
<h3>
   因为薪人薪事3月初改版后，本程序下载之后可能不能完全适用所有单位。
   可能需要修改如下参数
   ```js
      // 初始化全局变量
    localStorage.setItem('xrxsZhiChiParams', JSON.stringify({
        "partnerId": "a8633497bd2411e68d9500163e2ecffb"
    }))
    window.__oneApmKey__ = "[1d4IUc>3("
    window.__tingyunLoaction__ = JSON.parse(localStorage.xrxsZhiChiParams || "{}").partnerId || "Yf&*#";
    CryptoJS.a = CryptoJS.enc.Base64
    CryptoJS.c = function (message, key) {
        return new CryptoJS.algo.HMAC.init(CryptoJS.algo.SHA1, key).finalize(message);
    }
   ```
   如有问题，可以联系作者 xiangwenhu@hotmail.com, 微信dirge-cloud
</h3>

