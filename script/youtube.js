[MITM]
hostname = *.googlevideo.com,*.googleapis.com


#!name=Youtube
#!desc=跳过视频广告
#!system=ios-Surge or ios-shadawrocket
#！shadawrocket 删除hostname=后面的 %APPEND%
[Script]

tiktok=type=http-request,pattern=^https?:\/\/.+?\.(googlevideo|googleapis)\.com\/.+(player\/ad_break|(&oad|ctier=L)),requires-body=0,script-path=https://anliya.xyz/ipa/123.js

[MITM]
hostname = %APPEND% *.byteoversea.com,*.tiktokv.com

*******/

// 判断是否是Surge
const isSurge = typeof $httpClient != "undefined";
// 判断是否是QuanX
const isQuanX = typeof $task != "undefined";
// 判断是否是Loon
const isLoon = typeof $loon != "undefined";
// 关闭请求
if (isQuanX) {
        let status = "HTTP/1.1 302 Found";
    }else{
        let status = 302;
    }
if ($request.url.indexOf("&oad") != -1) {
  $done({ response: {body: ""} });
} else if ($request.url.indexOf("&ctier") != -1) {
  let url = $request.url.replace("&ctier=L", "");
   url = url.replace("ctier", "");
  $done({ response: { status: status, headers: { Location: url } } });
} else if
($request.url.indexOf("player/ad_break") != -1) {
  $done({ response: {body: ""} });
 }else {
  $done({})
}
