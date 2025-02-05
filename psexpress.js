/*

PSExpress 23.49.1
2023.12.15
[rewrite_local]

https://lcs-mobile-cops.adobe.io/mobiles/access_profile/v3 url script-response-body https://raw.githubusercontent.com/shaozeye/QXJS/refs/heads/main/psexpress.js

[mitm] 

hostname = lcs-mobile-cops.adobe.io

*/
/*
 * b64解码
// Base64解码函数
function base64Decode(input) {
    try {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let str = String(input).replace(/=+$/, '');
        let binaryStr = '';

        if (str.length % 4 === 1) {
            throw new Error('Invalid base64 string');
        }

        for (
            let bc = 0, bs, buffer, idx = 0; buffer = str.charAt(idx++); ~buffer &&
            (bs = bc % 4 ? bs * 64 + buffer : buffer,
                bc++ % 4) ? binaryStr += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
        ) {
            buffer = chars.indexOf(buffer);
        }

        return binaryStr;
    } catch (e) {
        console.log(`Base64 Decode Error: ${e.message}`);
        return null;
    }
}

// Base64编码函数
function base64Encode(input) {
    try {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let str = String(input);
        let output = '';

        for (
            let block, charCode, idx = 0, map = chars;
            str.charAt(idx | 0) || (map = '=', idx % 1);
            output += map.charAt(63 & block >> 8 - idx % 1 * 8)
        ) {
            charCode = str.charCodeAt(idx += 3 / 4);

            if (charCode > 0xFF) {
                throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            }

            block = block << 8 | charCode;
        }

        return output;
    } catch (e) {
        console.log(`Base64 Encode Error: ${e.message}`);
        return null;
    }
}
*/


var objc = {
  "asnp": {
    "payload":"eyJpZCI6IjkyMWMyNzhlLWUxMjgtNDUzNy05OTlmLTYzMTVlYmU3ODUwMSIsInNlcnZlcklkIjoibGNzIiwicmVzcG9uc2VUeXBlIjoiSU5JVElBTCIsInByb2ZpbGVTdGF0dXMiOiJQUk9GSUxFX0FWQUlMQUJMRSIsInByb2ZpbGVTdGF0dXNSZWFzb24iOjEwMDAsInByb2ZpbGVTdGF0dXNSZWFzb25UZXh0IjoiUHJvZmlsZSBBdmFpbGFibGUiLCJhcHBMaWNlbnNlTW9kZSI6IlNVQlNDUklCRUQiLCJhcHBQcm9maWxlIjp7ImFwcElkIjoiUFNYSU9TMSIsImFjY2Vzc2libGVJdGVtcyI6W3sic3RhdHVzIjoiQUNUSVZFIiwic291cmNlIjp7Im93bmVyX2lkIjoiNkQwMDFFMjE2NUQyMUVBMDBBNDk1Qzk1QEFkb2JlSUQiLCJpZCI6IlpaWjE4QjEwNDZGMjZEMTMzMkZCIiwidHlwZSI6IlBBSURfU1VCU0NSSVBUSU9OIiwic3RhdHVzX3JlYXNvbiI6bnVsbCwiY2FuX2FjY2Vzc191bnRpbCI6MTc2MDM2NzU2MjMyM30sImZ1bGZpbGxhYmxlX2l0ZW1zIjp7ImNjX3N0b3JhZ2UiOnsiZW5hYmxlZCI6dHJ1ZSwiZmVhdHVyZV9zZXRzIjp7IlZSVF9QUk8iOnsiaWQiOiJWUlRfUFJPIiwibGFiZWwiOiJWUlQgUHJvIiwiZW5hYmxlZCI6dHJ1ZX0sIkNTX0xWTF8yIjp7ImlkIjoiQ1NfTFZMXzIiLCJsYWJlbCI6IkNTIExldmVsIDIiLCJlbmFibGVkIjp0cnVlfX0sImNoYXJnaW5nX21vZGVsIjp7ImNhcCI6MTAwLCJ1bml0IjoiR0IiLCJtb2RlbCI6IlJFQ1VSUklORyIsIm92ZXJhZ2UiOiJOQSJ9fSwiY29yZV9zZXJ2aWNlc19jYyI6eyJlbmFibGVkIjp0cnVlLCJmZWF0dXJlX3NldHMiOnsiQ1NfTFZMXzIiOnsiaWQiOiJDU19MVkxfMiIsImxhYmVsIjoiQ1MgTGV2ZWwgMiIsImVuYWJsZWQiOnRydWV9fSwiY2hhcmdpbmdfbW9kZWwiOnsibW9kZWwiOiJSRUNVUlJJTkciLCJvdmVyYWdlIjoiTkEifX19fV0sInNlY29uZGFyeUFwcFByb2ZpbGVzIjp7fX0sInVzZXJQcm9maWxlIjp7InVzZXJJZCI6IjZEMDAxRTIxNjVEMjFFQTAwQTQ5NUM5NUBBZG9iZUlEIiwiZmlyc3ROYW1lIjoic2hhb3plIiwibGFzdE5hbWUiOiJ5ZSIsImVtYWlsIjoic2hhb3pleWVAb3V0bG9vay5jb20iLCJjb3VudHJ5Q29kZSI6IlVTIiwiYWNjb3VudFR5cGUiOiJ0eXBlMSIsImRpc3BsYXlOYW1lIjoic2hhb3plJTIweWUiLCJhdXRoSWQiOiI2RDAwMUUyMTY1RDIxRUEwMEE0OTVDOTVAQWRvYmVJRCJ9LCJjb250cm9sUHJvZmlsZSI6eyJuZ2xBcHBJZCI6IlBTWElPUzEiLCJyZXF1ZXN0ZXJOZ2xBcHBJZCI6IlBTWElPUzEiLCJkZXZpY2VJZCI6IjcwNWJlNTAxNzAyMzZiNzU5ZTk3ZjI5NDkyNmNiODQxN2ViMTA5ODRhZGRmODM0ZWI2Y2Q5Mzc2OGI3ZjQwZDUiLCJkZXZpY2VEYXRlIjoiMjAyNS0wMi0wNVQxNjo1MjozOS40NzcrMDgwMCIsIm5nbExpYlJ1bnRpbWVNb2RlIjoiTkFNRURfVVNFUl9PTkxJTkUiLCJjcmVhdGlvblRpbWVzdGFtcCI6MTczODc0NTU2MjM0MSwiY2FjaGVMaWZldGltZSI6MTU1NTE5OTk5ODMsInZhbGlkVXB0b1RpbWVzdGFtcCI6MTc2MDM2NzU2MjM0MSwiY2FjaGVSZWZyZXNoQ29udHJvbCI6eyJhcHBSZWZyZXNoSW50ZXJ2YWwiOjg2NDAwMDAwLCJuZ2xMaWJSZWZyZXNoSW50ZXJ2YWwiOjg2NDAwMDAwfSwiZGV2aWNlVG9rZW5IYXNoIjoiOGNhMzhjMGU1MzMzZjAxY2YwYjU1ZjVmNTJjM2VmY2QwMzFiNTkwYzU3Y2JmOWIyODY2NWM1NTM4YjI4YmFkY2ZmYzFiZGNjMDNlODA1YTk5N2Y5MGFmNjBiMzE5MjMxMzI2ZmM5N2EyNDQ4MzIyOTdlMjM4MmY1MDg3NTJlNGUiLCJkZXZpY2VUb2tlbklkIjoiMTcxMDM0MzYxMzA2OF9mODhlNDA1Zi1jZjA2LTQ3YWQtOGFlZS1kOTU5NDZkNDQyMWJfdXcyIiwib3NVc2VySWQiOiJJT1MiLCJjcmVhdGVkRm9yVmRpIjpmYWxzZSwiY2FjaGVFeHBpcnlXYXJuaW5nQ29udHJvbCI6eyJ3YXJuaW5nU3RhcnRUaW1lc3RhbXAiOjE3NTM2OTI3NjIzMjQsIndhcm5pbmdJbnRlcnZhbCI6MH0sImFwcFVzYWdlVHJhY2tpbmdDb250cm9sIjp7ImVuYWJsZWRUcmFja2luZyI6dHJ1ZSwicHJvdGVjdFRyYWNrZWREYXRhIjpmYWxzZSwiZXZlbnRzVG9UcmFjayI6WyJBUFBfTEFVTkNIX0NPVU5UIiwiQVBQX1JVTk5JTkdfVElNRSJdfSwibG9nQ29udHJvbCI6eyJsZXZlbCI6IklORk8iLCJtaW5GaWxlVXBsb2FkU2l6ZSI6MCwibWF4RmlsZVVwbG9hZFNpemUiOjEwMDAsInVwbG9hZEludGVydmFsIjo4NjQwMDAwMCwidXBsb2FkT25TZXNzaW9uU3RhcnQiOnRydWUsInVwbG9hZE9uRXJyb3IiOnRydWV9LCJvdmVycmlkZVN0YXR1c0ZvckxvY2FsU2lnbm91dCI6IlBST0ZJTEVfR1JBTlRFRCIsImVUYWciOiJjMjRKVWo2b3RmVXl0d1JpNTZpNlFacmtsVTFKOEhuaWhjRVZ4czJ3NHVmdjhid3h6c3cyS21NTEdERFd6eGRfIn0sImZybFByb2ZpbGUiOiJ7fSIsImxlZ2FjeVByb2ZpbGUiOiJ7fSIsImFkZGl0aW9uYWxMZWdhY3lQcm9maWxlcyI6Int9In0="
    "asnpSpecVersion" : "2.0"
  }
};

$done({ body: JSON.stringify(objc) });
