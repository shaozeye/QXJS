/*

PSExpress 23.49.1
2023.12.15
[rewrite_local]

https://lcs-mobile-cops.adobe.io/mobiles/access_profile/v3 url script-response-body https://raw.githubusercontent.com/shaozeye/QXJS/main/psexpress.js
https://cc-api-behance.adobe.io/v2/users url script-response-body https://raw.githubusercontent.com/shaozeye/QXJS/main/psexpress.js

[mitm] 

hostname = lcs-mobile-cops.adobe.io,cc-api-behance.adobe.io

*/
let title = '🔔阿里云盘签到'
const $ = new Env(title, true)
 $.msg('首次写入阿里网盘refresh_token失败‼️', '', '')
if ($request.url.indexOf("lcs-mobile-cops.adobe.io") != -1) {
  // 修改第一个请求的body
 var objc1 = {
    "asnp": {
    "payload": "eyJpZCI6IjYxNmU3YjgwLWI3MWEtNGNiMi05MDEwLTFkOTQzNTQ3YTE3NiIsInNlcnZlcklkIjoibGNzIiwicmVzcG9uc2VUeXBlIjoiSU5JVElBTCIsInByb2ZpbGVTdGF0dXMiOiJQUk9GSUxFX0FWQUlMQUJMRSIsInByb2ZpbGVTdGF0dXNSZWFzb24iOjEwMDAsInByb2ZpbGVTdGF0dXNSZWFzb25UZXh0IjoiUHJvZmlsZSBBdmFpbGFibGUgZHVlIHRvIGFuIGFjcXVpcmVkIHBsYW4gcHJvdmlzaW9uZWQgYW5kIEFDVElWRSIsImFwcExpY2Vuc2VNb2RlIjoiRlJFRU1JVU0iLCJhcHBQcm9maWxlIjp7ImFwcElkIjoiUFNYSU9TMSIsImFjY2Vzc2libGVJdGVtcyI6W3sic3RhdHVzIjoiQUNUSVZFIiwic291cmNlIjp7Im93bmVyX2lkIjoiRTQyNjM3NEQ2MTJCMDdDQjBBNDk1RUJEQEFkb2JlSUQiLCJpZCI6IjQyQjlEQUYzRkM5MEExNTI3NzNBIiwidHlwZSI6IkxJQ0VOU0UiLCJzdGF0dXNfcmVhc29uIjoiTk9STUFMIiwiY2FuX2FjY2Vzc191bnRpbCI6MTcyNjk4ODM5OTAwMH0sImZ1bGZpbGxhYmxlX2l0ZW1zIjp7ImNjX3N0b3JhZ2UiOnsiZW5hYmxlZCI6dHJ1ZSwiZmVhdHVyZV9zZXRzIjp7IkNTX0xWTF8yIjp7ImlkIjoiQ1NfTFZMXzIiLCJsYWJlbCI6IkNTIExWTCAyIiwiZW5hYmxlZCI6dHJ1ZX0sIlZSVF8zMCI6eyJpZCI6IlZSVF8zMCIsImxhYmVsIjoiVlJUIDMwIiwiZW5hYmxlZCI6dHJ1ZX19LCJjaGFyZ2luZ19tb2RlbCI6eyJjYXAiOjEwMCwidW5pdCI6IkdCIiwibW9kZWwiOiJSRUNVUlJJTkciLCJvdmVyYWdlIjoiTkEiLCJyb2xsb3ZlciI6MH19LCJwaG90b3Nob3BfZXhwcmVzcyI6eyJlbmFibGVkIjp0cnVlLCJjaGFyZ2luZ19tb2RlbCI6eyJtb2RlbCI6IlJFQ1VSUklORyIsIm92ZXJhZ2UiOiJOQSIsInJvbGxvdmVyIjowfX0sInBob3Rvc2hvcF9leHByZXNzX2ZlYXR1cmVfYWNjZXNzIjp7ImVuYWJsZWQiOnRydWUsImNoYXJnaW5nX21vZGVsIjp7Im1vZGVsIjoiUkVDVVJSSU5HIiwib3ZlcmFnZSI6Ik5BIiwicm9sbG92ZXIiOjB9fSwiY29yZV9zZXJ2aWNlc19jYyI6eyJlbmFibGVkIjp0cnVlLCJmZWF0dXJlX3NldHMiOnsiQ1NfTFZMXzIiOnsiaWQiOiJDU19MVkxfMiIsImxhYmVsIjoiQ1MgTFZMIDIiLCJlbmFibGVkIjp0cnVlfX0sImNoYXJnaW5nX21vZGVsIjp7Im1vZGVsIjoiUkVDVVJSSU5HIiwib3ZlcmFnZSI6Ik5BIiwicm9sbG92ZXIiOjB9fX19XSwic2Vjb25kYXJ5QXBwUHJvZmlsZXMiOnt9fSwidXNlclByb2ZpbGUiOnsidXNlcklkIjoiRTQyNjM3NEQ2MTJCMDdDQjBBNDk1RUJEQEFkb2JlSUQiLCJmaXJzdE5hbWUiOiJhbGFpbiIsImxhc3ROYW1lIjoieWUiLCJlbWFpbCI6IjM5NTA0ODAxOEBxcS5jb20iLCJjb3VudHJ5Q29kZSI6IkNOIiwiYWNjb3VudFR5cGUiOiJ0eXBlMSIsImRpc3BsYXlOYW1lIjoieWUlMjBhbGFpbiIsImF1dGhJZCI6IkU0MjYzNzRENjEyQjA3Q0IwQTQ5NUVCREBBZG9iZUlEIn0sImNvbnRyb2xQcm9maWxlIjp7Im5nbEFwcElkIjoiUFNYSU9TMSIsInJlcXVlc3Rlck5nbEFwcElkIjoiUFNYSU9TMSIsImRldmljZUlkIjoiRjhGNDZFNjItOUY0MC00OTk4LTkzQzEtMjJBODU4RTZCQkQxIiwiZGV2aWNlRGF0ZSI6IjIwMjMtMTItMTRUMjM6NTg6NDYuMDc2KzA4MDAiLCJuZ2xMaWJSdW50aW1lTW9kZSI6Ik5BTUVEX1VTRVJfT05MSU5FIiwiY3JlYXRpb25UaW1lc3RhbXAiOjE3MDI1Njk1MjYyNDUsImNhY2hlTGlmZXRpbWUiOjM5OTcwODcyNzU1LCJ2YWxpZFVwdG9UaW1lc3RhbXAiOjE3MjY5ODgzOTkwMDAsImNhY2hlUmVmcmVzaENvbnRyb2wiOnsiYXBwUmVmcmVzaEludGVydmFsIjo4NjQwMDAwMCwibmdsTGliUmVmcmVzaEludGVydmFsIjo4NjQwMDAwMH0sImRldmljZVRva2VuSGFzaCI6IjU3ODUzMzliOGNlNWRiODJhNGU5NWZlYmY4MmM2ZDU0NjkzM2NmYTIyZWIwYTU0NWVhOWY0NGI1YTZjNjA3MmIxZTkzZTAyYWZhYjM1ZDhiMzdmNzk3MjIyYmY1YTA4YTJkZWNjM2U2YTEyYmQ3NjFkYzJiM2MwOWQ0ZDkzNmY0IiwiZGV2aWNlVG9rZW5JZCI6IjE3MDI1Njg4MTYwMzBfZTk5ZWY0ZTAtOGQ1OS00ZjU2LTk1YmEtYjkwMzU3ZThmN2FjX3VlMSIsIm9zVXNlcklkIjoiSU9TIiwiY3JlYXRlZEZvclZkaSI6ZmFsc2UsImNhY2hlRXhwaXJ5V2FybmluZ0NvbnRyb2wiOnsid2FybmluZ1N0YXJ0VGltZXN0YW1wIjoxNzQxOTM1NTk5MDAwLCJ3YXJuaW5nSW50ZXJ2YWwiOjB9LCJhcHBVc2FnZVRyYWNraW5nQ29udHJvbCI6eyJlbmFibGVkVHJhY2tpbmciOnRydWUsInByb3RlY3RUcmFja2VkRGF0YSI6ZmFsc2UsImV2ZW50c1RvVHJhY2siOlsiQVBQX0xBVU5DSF9DT1VOVCIsIkFQUF9SVU5OSU5HX1RJTUUiXX0sImxvZ0NvbnRyb2wiOnsibGV2ZWwiOiJJTkZPIiwibWluRmlsZVVwbG9hZFNpemUiOjAsIm1heEZpbGVVcGxvYWRTaXplIjoxMDAwLCJ1cGxvYWRJbnRlcnZhbCI6ODY0MDAwMDAsInVwbG9hZE9uU2Vzc2lvblN0YXJ0Ijp0cnVlLCJ1cGxvYWRPbkVycm9yIjp0cnVlfSwib3ZlcnJpZGVTdGF0dXNGb3JMb2NhbFNpZ25vdXQiOiJQUk9GSUxFX0RFTklFRCIsImVUYWciOiJEU3M0Q2dUbWpkYVBjbVRfamtjOHlDYi01REdpMThwOFl0OXNhQWNEN29rTE51bGZlZjFzY3FlaGdGQmRjTE5OIn0sImZybFByb2ZpbGUiOiJ7fSIsImxlZ2FjeVByb2ZpbGUiOiJ7XCJsaWNlbnNlSWRcIjpcIjQyQjlEQUYzRkM5MEExNTI3NzNBXCIsXCJsaWNlbnNlVHlwZVwiOjMsXCJsaWNlbnNlVmVyc2lvblwiOlwiMS4wXCIsXCJlZmZlY3RpdmVFbmRUaW1lc3RhbXBcIjoxNzI2OTg4Mzk5MDAwLFwiZ3JhY2VUaW1lXCI6MCxcImxpY2Vuc2VkRmVhdHVyZXNcIjpbXSxcImVuaWdtYURhdGFcIjp7XCJwcm9kdWN0SWRcIjoyMDQsXCJzZXJpYWxLZXlcIjpcIjk5NDMwNDE3MDAyMjg1Njc3MjMwMDI5NlwiLFwiY2xlYXJTZXJpYWxLZXlcIjpcIjEyMDQ0OTM4NzA0NTk1NzkxMDU3XCIsXCJsb2NhbGVcIjpcIkFMTFwiLFwiYXNzb2NpYXRlZExvY2FsZXNcIjpcIkFMTFwiLFwicGxhdGZvcm1cIjowLFwiaXNrXCI6MjA0NDAxNyxcImN1c3RvbWVySWRcIjowLFwiZGVsaXZlcnlNZXRob2RcIjozLFwicGNcIjp0cnVlLFwicmJcIjpmYWxzZX19IiwiYWRkaXRpb25hbExlZ2FjeVByb2ZpbGVzIjoie30ifQ",
    "asnpSpecVersion" : "2.0"
  }
};
  $done({ body: JSON.stringify(objc1) });
} else if ($request.url.indexOf("cc-api-behance.adobe.io") != -1) {
  // 修改第二个请求的body
   var objc = {
    "user" : {
    "has_premium_access" : true,
    "location" : "",
    "social_links" : [

    ],
    "has_social_links" : false,
    "url" : "#",
    "country" : "",
    "company" : "",
    "sections" : {

    },
    "images" : {
      "138" : "https://a5.behance.net/baca2271513757d951122908268261035ffa4a4a/img/profile/avatars/scissors-138.png?cb=264615658",
      "50" : "https://a5.behance.net/baca2271513757d951122908268261035ffa4a4a/img/profile/avatars/scissors-50.png?cb=264615658",
      "100" : "https://a5.behance.net/baca2271513757d951122908268261035ffa4a4a/img/profile/avatars/scissors-100.png?cb=264615658",
      "115" : "https://a5.behance.net/baca2271513757d951122908268261035ffa4a4a/img/profile/avatars/scissors-115.png?cb=264615658",
      "276" : "https://a5.behance.net/baca2271513757d951122908268261035ffa4a4a/img/profile/avatars/scissors-276.png?cb=264615658",
      "230" : "https://a5.behance.net/baca2271513757d951122908268261035ffa4a4a/img/profile/avatars/scissors-230.png?cb=264615658"
    },
    "city" : "",
    "last_name" : "ye",
    "has_default_image" : 1,
    "links" : [

    ],
    "twitter" : "",
    "state" : "",
    "id" : 1787901279,
    "occupation" : "",
    "website" : "#",
    "adobe_id" : "6D001E2165D21EA00A495C95@AdobeID",
    "stats" : {
      "appreciations" : 0,
      "team_members" : false,
      "followers" : 0,
      "views" : 0,
      "following" : 0,
      "comments" : 0
    },
    "display_name" : "isshaoze ye",
    "creatorPro" : [

    ],
    "created_on" : 1710343254,
    "first_name" : "isshaoze",
    "fields" : [

    ],
    "banner_image_url" : "",
    "username" : "b8812b63"
  },
  "http_code" : 200
}
};
// 返回修改后的数据
$done({ body: JSON.stringify(objc) });
} else {
  $done({});  // 如果不是你关心的请求，直接放行
}
