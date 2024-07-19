/*

[rewrite_local]

^https:\/\/api\.gotokeep\.com url script-response-body https://raw.githubusercontent.com/shaozeye/QXJS/main/keep.js

[mitm] 

hostname = api.gotokeep.com

*/

var modifiedBody = $response.body.replace(/"username":\s*"[^"]*"/, '"username":"shaozeye"');
$done({ body: modifiedBody });

