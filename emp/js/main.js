// WARNING: For POST requests, body is set to null by browsers.
var data = "csrf_token=6fa0494b7efca4457b34e892660e9b350e3932aco&login=tinbt%40nganluong.vn&password=123456&redirect=true";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("POST", "https://backoffice.nexttech.asia/web/login");
xhr.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");
xhr.setRequestHeader("accept-language", "en,ru;q=0.9,en-US;q=0.8,vi;q=0.7");
xhr.setRequestHeader("cache-control", "max-age=0");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
// WARNING: Cookies will be stripped away by the browser before sending the request.
xhr.setRequestHeader("cookie", "Path=/; frontend_lang=vi_VN; Path=/; session_id=aace4c0e3d3e3ef5fd1d5f027d049118c79ca5a1; Path=/; session_id=aace4c0e3d3e3ef5fd1d5f027d049118c79ca5a1");
xhr.setRequestHeader("origin", "https://backoffice.nexttech.asia");
xhr.setRequestHeader("priority", "u=0, i");
xhr.setRequestHeader("referer", "https://backoffice.nexttech.asia/web/login");
xhr.setRequestHeader("sec-ch-ua", "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"");
xhr.setRequestHeader("sec-ch-ua-mobile", "?0");
xhr.setRequestHeader("sec-ch-ua-platform", "\"Windows\"");
xhr.setRequestHeader("sec-fetch-dest", "document");
xhr.setRequestHeader("sec-fetch-mode", "navigate");
xhr.setRequestHeader("sec-fetch-site", "same-origin");
xhr.setRequestHeader("sec-fetch-user", "?1");
xhr.setRequestHeader("upgrade-insecure-requests", "1");
xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36");

xhr.send(data);