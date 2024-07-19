/*

[rewrite_local]

^https:\/\/api\.gotokeep\.com url script-response-body https://raw.githubusercontent.com/shaozeye/QXJS/main/keep.js

[mitm] 

hostname = api.gotokeep.com

*/

var modifiedBody = $response.body.replace(/\"memberStatus":\d+/g, '"memberStatus":1').replace(/\"username":".*?"/g, '"username":"PremiumUser"').replace(/\"buttonText":".*?"/g, '"buttonText":"Unlocked"').replace(/\"hasPaid\":\w+/g, '"hasPaid":true').replace(/\"downLoadAll\":\w+/g, '"downLoadAll":true').replace(/\"videoTime\":\d+/g, '"videoTime":3000').replace(/\"startEnable\":\w+/g, '"startEnable":true').replace(/\"memberStatus\":\d+/g, '"memberStatus":1').replace(/\"preview\":\w+/g, '"preview":true').replace(/\"errorCode\":\d+/g, '"errorCode":0').replace(/\"status\":\w+/g, '"status":true');
$done({ body: modifiedBody });
