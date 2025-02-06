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
    "payload":"eyAgImlkIjogIjkyMWMyNzhlLWUxMjgtNDUzNy05OTlmLTYzMTVlYmU3ODUwMSIsICAic2VydmVySWQiOiAibGNzIiwgICJyZXNwb25zZVR5cGUiOiAiSU5JVElBTCIsICAicHJvZmlsZVN0YXR1cyI6ICJQUk9GSUxFX0FWQUlMQUJMRSIsICAicHJvZmlsZVN0YXR1c1JlYXNvbiI6IDEwMDAsICAicHJvZmlsZVN0YXR1c1JlYXNvblRleHQiOiAiUHJvZmlsZSBBdmFpbGFibGUiLCAgImFwcExpY2Vuc2VNb2RlIjogIlNVQlNDUklCRUQiLCAgImFwcFByb2ZpbGUiOiB7ICAgICJhcHBJZCI6ICJQU1hJT1MxIiwgICAgImFjY2Vzc2libGVJdGVtcyI6IFsgICAgICB7ICAgICAgICAic3RhdHVzIjogIkFDVElWRSIsICAgICAgICAic291cmNlIjogeyAgICAgICAgICAib3duZXJfaWQiOiAiNkQwMDFFMjE2NUQyMUVBMDBBNDk1Qzk1QEFkb2JlSUQiLCAgICAgICAgICAiaWQiOiAiWlpaMThCMTA0NkYyNkQxMzMyRkIiLCAgICAgICAgICAidHlwZSI6ICJQQUlEX1NVQlNDUklQVElPTiIsICAgICAgICAgICJzdGF0dXNfcmVhc29uIjogbnVsbCwgICAgICAgICAgImNhbl9hY2Nlc3NfdW50aWwiOiAxNzYwMzY3NTYyMzIzICAgICAgICB9LCAgICAgICAgImZ1bGZpbGxhYmxlX2l0ZW1zIjogeyAgICAgICAgICAiY2Nfc3RvcmFnZSI6IHsgICAgICAgICAgICAiZW5hYmxlZCI6IHRydWUsICAgICAgICAgICAgImZlYXR1cmVfc2V0cyI6IHsgICAgICAgICAgICAgICJWUlRfUFJPIjogeyAgICAgICAgICAgICAgICAiaWQiOiAiVlJUX1BSTyIsICAgICAgICAgICAgICAgICJsYWJlbCI6ICJWUlQgUHJvIiwgICAgICAgICAgICAgICAgImVuYWJsZWQiOiB0cnVlICAgICAgICAgICAgICB9LCAgICAgICAgICAgICAgIkNTX0xWTF8yIjogeyAgICAgICAgICAgICAgICAiaWQiOiAiQ1NfTFZMXzIiLCAgICAgICAgICAgICAgICAibGFiZWwiOiAiQ1MgTGV2ZWwgMiIsICAgICAgICAgICAgICAgICJlbmFibGVkIjogdHJ1ZSAgICAgICAgICAgICAgfSAgICAgICAgICAgIH0sICAgICAgICAgICAgImNoYXJnaW5nX21vZGVsIjogeyAgICAgICAgICAgICAgImNhcCI6IDEwMCwgICAgICAgICAgICAgICJ1bml0IjogIkdCIiwgICAgICAgICAgICAgICJtb2RlbCI6ICJSRUNVUlJJTkciLCAgICAgICAgICAgICAgIm92ZXJhZ2UiOiAiTkEiICAgICAgICAgICAgfSAgICAgICAgICB9LCAgICAgICAgICAiY29yZV9zZXJ2aWNlc19jYyI6IHsgICAgICAgICAgICAiZW5hYmxlZCI6IHRydWUsICAgICAgICAgICAgImZlYXR1cmVfc2V0cyI6IHsgICAgICAgICAgICAgICJDU19MVkxfMiI6IHsgICAgICAgICAgICAgICAgImlkIjogIkNTX0xWTF8yIiwgICAgICAgICAgICAgICAgImxhYmVsIjogIkNTIExldmVsIDIiLCAgICAgICAgICAgICAgICAiZW5hYmxlZCI6IHRydWUgICAgICAgICAgICAgIH0gICAgICAgICAgICB9LCAgICAgICAgICAgICJjaGFyZ2luZ19tb2RlbCI6IHsgICAgICAgICAgICAgICJtb2RlbCI6ICJSRUNVUlJJTkciLCAgICAgICAgICAgICAgIm92ZXJhZ2UiOiAiTkEiICAgICAgICAgICAgfSAgICAgICAgICB9ICAgICAgICB9ICAgICAgfSAgICBdLCAgICAic2Vjb25kYXJ5QXBwUHJvZmlsZXMiOiB7fSAgfSwgICJ1c2VyUHJvZmlsZSI6IHsgICAgInVzZXJJZCI6ICI2RDAwMUUyMTY1RDIxRUEwMEE0OTVDOTVAQWRvYmVJRCIsICAgICJmaXJzdE5hbWUiOiAic2hhb3plIiwgICAgImxhc3ROYW1lIjogInllIiwgICAgImVtYWlsIjogInNoYW96ZXllQG91dGxvb2suY29tIiwgICAgImNvdW50cnlDb2RlIjogIlVTIiwgICAgImFjY291bnRUeXBlIjogInR5cGUxIiwgICAgImRpc3BsYXlOYW1lIjogInNoYW96ZSUyMHllIiwgICAgImF1dGhJZCI6ICI2RDAwMUUyMTY1RDIxRUEwMEE0OTVDOTVAQWRvYmVJRCIgIH0sICAiY29udHJvbFByb2ZpbGUiOiB7ICAgICJuZ2xBcHBJZCI6ICJQU1hJT1MxIiwgICAgInJlcXVlc3Rlck5nbEFwcElkIjogIlBTWElPUzEiLCAgICAiZGV2aWNlSWQiOiAiNzA1YmU1MDE3MDIzNmI3NTllOTdmMjk0OTI2Y2I4NDE3ZWIxMDk4NGFkZGY4MzRlYjZjZDkzNzY4YjdmNDBkNSIsICAgICJkZXZpY2VEYXRlIjogIjIwMjUtMDItMDVUMTY6NTI6MzkuNDc3KzA4MDAiLCAgICAibmdsTGliUnVudGltZU1vZGUiOiAiTkFNRURfVVNFUl9PTkxJTkUiLCAgICAiY3JlYXRpb25UaW1lc3RhbXAiOiAxNzM4NzQ1NTYyMzQxLCAgICAiY2FjaGVMaWZldGltZSI6IDE1NTUxOTk5OTgzLCAgICAidmFsaWRVcHRvVGltZXN0YW1wIjogMTc2MDM2NzU2MjM0MSwgICAgImNhY2hlUmVmcmVzaENvbnRyb2wiOiB7ICAgICAgImFwcFJlZnJlc2hJbnRlcnZhbCI6IDg2NDAwMDAwLCAgICAgICJuZ2xMaWJSZWZyZXNoSW50ZXJ2YWwiOiA4NjQwMDAwMCAgICB9LCAgICAiZGV2aWNlVG9rZW5IYXNoIjogIjhjYTM4YzBlNTMzM2YwMWNmMGI1NWY1ZjUyYzNlZmNkMDMxYjU5MGM1N2NiZjliMjg2NjVjNTUzOGIyOGJhZGNmZmMxYmRjYzAzZTgwNWE5OTdmOTBhZjYwYjMxOTIzMTMyNmZjOTdhMjQ0ODMyMjk3ZTIzODJmNTA4NzUyZTRlIiwgICAgImRldmljZVRva2VuSWQiOiAiMTcxMDM0MzYxMzA2OF9mODhlNDA1Zi1jZjA2LTQ3YWQtOGFlZS1kOTU5NDZkNDQyMWJfdXcyIiwgICAgIm9zVXNlcklkIjogIklPUyIsICAgICJjcmVhdGVkRm9yVmRpIjogZmFsc2UsICAgICJjYWNoZUV4cGlyeVdhcm5pbmdDb250cm9sIjogeyAgICAgICJ3YXJuaW5nU3RhcnRUaW1lc3RhbXAiOiAxNzUzNjkyNzYyMzI0LCAgICAgICJ3YXJuaW5nSW50ZXJ2YWwiOiAwICAgIH0sICAgICJhcHBVc2FnZVRyYWNraW5nQ29udHJvbCI6IHsgICAgICAiZW5hYmxlZFRyYWNraW5nIjogdHJ1ZSwgICAgICAicHJvdGVjdFRyYWNrZWREYXRhIjogZmFsc2UsICAgICAgImV2ZW50c1RvVHJhY2siOiBbICAgICAgICAiQVBQX0xBVU5DSF9DT1VOVCIsICAgICAgICAiQVBQX1JVTk5JTkdfVElNRSIgICAgICBdICAgIH0sICAgICJsb2dDb250cm9sIjogeyAgICAgICJsZXZlbCI6ICJJTkZPIiwgICAgICAibWluRmlsZVVwbG9hZFNpemUiOiAwLCAgICAgICJtYXhGaWxlVXBsb2FkU2l6ZSI6IDEwMDAsICAgICAgInVwbG9hZEludGVydmFsIjogODY0MDAwMDAsICAgICAgInVwbG9hZE9uU2Vzc2lvblN0YXJ0IjogdHJ1ZSwgICAgICAidXBsb2FkT25FcnJvciI6IHRydWUgICAgfSwgICAgIm92ZXJyaWRlU3RhdHVzRm9yTG9jYWxTaWdub3V0IjogIlBST0ZJTEVfR1JBTlRFRCIsICAgICJlVGFnIjogImMyNEpVajZvdGZVeXR3Umk1Nmk2UVpya2xVMUo4SG5paGNFVnhzMnc0dWZ2OGJ3eHpzdzJLbU1MR0REV3p4ZF8iICB9LCAgImZybFByb2ZpbGUiOiAie30iLCAgImxlZ2FjeVByb2ZpbGUiOiAie30iLCAgImFkZGl0aW9uYWxMZWdhY3lQcm9maWxlcyI6ICJ7fSJ9"
    "asnpSpecVersion" : "2.0"
  }
};

$done({ body: JSON.stringify(objc) });
