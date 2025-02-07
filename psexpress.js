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
    "payload":"eyJpZCI6IjU2YzU1ZTcwLWYxNzEtNGMyZi1hYzUwLWZiYzNhOGI5NzY4MSIsInNlcnZlcklkIjoibGNzIiwicmVzcG9uc2VUeXBlIjoiSU5JVElBTCIsInByb2ZpbGVTdGF0dXMiOiJQUk9GSUxFX0FWQUlMQUJMRSIsInByb2ZpbGVTdGF0dXNSZWFzb24iOjEwMDAsInByb2ZpbGVTdGF0dXNSZWFzb25UZXh0IjoiUHJvZmlsZSBBdmFpbGFibGUgZHVlIHRvIGFuIGFjcXVpcmVkIHBsYW4gcHJvdmlzaW9uZWQgYW5kIEFDVElWRSIsImFwcExpY2Vuc2VNb2RlIjoiRlJFRU1JVU0iLCJhcHBQcm9maWxlIjp7ImFwcElkIjoiUFNYSU9TMSIsImFjY2Vzc2libGVJdGVtcyI6W3sic3RhdHVzIjoiQUNUSVZFIiwic291cmNlIjp7Im93bmVyX2lkIjoiNkQwMDFFMjE2NUQyMUVBMDBBNDk1Qzk1QEFkb2JlSUQiLCJpZCI6IjQyQjlEQUYzRkM5MEExNTI3NzNBIiwidHlwZSI6IkxJQ0VOU0UiLCJzdGF0dXNfcmVhc29uIjoiTk9STUFMIiwiY2FuX2FjY2Vzc191bnRpbCI6MTcyNjk4ODM5OTAwMH0sImZ1bGZpbGxhYmxlX2l0ZW1zIjp7ImNjX3N0b3JhZ2UiOnsiZW5hYmxlZCI6dHJ1ZSwiZmVhdHVyZV9zZXRzIjp7IkNTX0xWTF8yIjp7ImlkIjoiQ1NfTFZMXzIiLCJsYWJlbCI6IkNTIExWTCAyIiwiZW5hYmxlZCI6dHJ1ZX0sIlZSVF8zMCI6eyJpZCI6IlZSVF8zMCIsImxhYmVsIjoiVlJUIDMwIiwiZW5hYmxlZCI6dHJ1ZX19LCJjaGFyZ2luZ19tb2RlbCI6eyJjYXAiOjEwMCwidW5pdCI6IkdCIiwibW9kZWwiOiJSRUNVUlJJTkciLCJvdmVyYWdlIjoiTkEiLCJyb2xsb3ZlciI6MH19LCJwaG90b3Nob3BfZXhwcmVzcyI6eyJlbmFibGVkIjp0cnVlLCJjaGFyZ2luZ19tb2RlbCI6eyJtb2RlbCI6IlJFQ1VSUklORyIsIm92ZXJhZ2UiOiJOQSIsInJvbGxvdmVyIjowfX0sInBob3Rvc2hvcF9leHByZXNzX2ZlYXR1cmVfYWNjZXNzIjp7ImVuYWJsZWQiOnRydWUsImNoYXJnaW5nX21vZGVsIjp7Im1vZGVsIjoiUkVDVVJSSU5HIiwib3ZlcmFnZSI6Ik5BIiwicm9sbG92ZXIiOjB9fSwiY29yZV9zZXJ2aWNlc19jYyI6eyJlbmFibGVkIjp0cnVlLCJmZWF0dXJlX3NldHMiOnsiQ1NfTFZMXzIiOnsiaWQiOiJDU19MVkxfMiIsImxhYmVsIjoiQ1MgTFZMIDIiLCJlbmFibGVkIjp0cnVlfX0sImNoYXJnaW5nX21vZGVsIjp7Im1vZGVsIjoiUkVDVVJSSU5HIiwib3ZlcmFnZSI6Ik5BIiwicm9sbG92ZXIiOjB9fX19XSwic2Vjb25kYXJ5QXBwUHJvZmlsZXMiOnt9fSwidXNlclByb2ZpbGUiOnsidXNlcklkIjoiNkQwMDFFMjE2NUQyMUVBMDBBNDk1Qzk1QEFkb2JlSUQiLCJmaXJzdE5hbWUiOiJzYXVsIiwibGFzdE5hbWUiOiJ5ZSIsImVtYWlsIjoic2F1bEBvdXRsb29rLmNvbSIsImNvdW50cnlDb2RlIjoiVVMiLCJhY2NvdW50VHlwZSI6InR5cGUxIiwiZGlzcGxheU5hbWUiOiJzYXVsJTIweWUiLCJhdXRoSWQiOiI2RDAwMUUyMTY1RDIxRUEwMEE0OTVDOTVAQWRvYmVJRCJ9LCJjb250cm9sUHJvZmlsZSI6eyJuZ2xBcHBJZCI6IlBTWElPUzEiLCJyZXF1ZXN0ZXJOZ2xBcHBJZCI6IlBTWElPUzEiLCJkZXZpY2VJZCI6IjcwNWJlNTAxNzAyMzZiNzU5ZTk3ZjI5NDkyNmNiODQxN2ViMTA5ODRhZGRmODM0ZWI2Y2Q5Mzc2OGI3ZjQwZDUiLCJkZXZpY2VEYXRlIjoiMjAyNS0wMi0wNlQxMDozODo0Ny44MDMrMDgwMCIsIm5nbExpYlJ1bnRpbWVNb2RlIjoiTkFNRURfVVNFUl9PTkxJTkUiLCJjcmVhdGlvblRpbWVzdGFtcCI6MTczODgwOTUzMDY0NCwiY2FjaGVMaWZldGltZSI6MTU1NTE5OTk5ODgsInZhbGlkVXB0b1RpbWVzdGFtcCI6MTcyNjk4ODM5OTAwMCwiY2FjaGVSZWZyZXNoQ29udHJvbCI6eyJhcHBSZWZyZXNoSW50ZXJ2YWwiOjg2NDAwMDAwLCJuZ2xMaWJSZWZyZXNoSW50ZXJ2YWwiOjg2NDAwMDAwfSwiZGV2aWNlVG9rZW5IYXNoIjoiOGNhMzhjMGU1MzMzZjAxY2YwYjU1ZjVmNTJjM2VmY2QwMzFiNTkwYzU3Y2JmOWIyODY2NWM1NTM4YjI4YmFkY2ZmYzFiZGNjMDNlODA1YTk5N2Y5MGFmNjBiMzE5MjMxMzI2ZmM5N2EyNDQ4MzIyOTdlMjM4MmY1MDg3NTJlNGUiLCJkZXZpY2VUb2tlbklkIjoiMTcxMDM0MzYxMzA2OF9mODhlNDA1Zi1jZjA2LTQ3YWQtOGFlZS1kOTU5NDZkNDQyMWJfdXcyIiwib3NVc2VySWQiOiJJT1MiLCJjcmVhdGVkRm9yVmRpIjpmYWxzZSwiY2FjaGVFeHBpcnlXYXJuaW5nQ29udHJvbCI6eyJ3YXJuaW5nU3RhcnRUaW1lc3RhbXAiOjE3NTM3NTY3MzA2MzIsIndhcm5pbmdJbnRlcnZhbCI6MH0sImFwcFVzYWdlVHJhY2tpbmdDb250cm9sIjp7ImVuYWJsZWRUcmFja2luZyI6dHJ1ZSwicHJvdGVjdFRyYWNrZWREYXRhIjpmYWxzZSwiZXZlbnRzVG9UcmFjayI6WyJBUFBfTEFVTkNIX0NPVU5UIiwiQVBQX1JVTk5JTkdfVElNRSJdfSwibG9nQ29udHJvbCI6eyJsZXZlbCI6IklORk8iLCJtaW5GaWxlVXBsb2FkU2l6ZSI6MCwibWF4RmlsZVVwbG9hZFNpemUiOjEwMDAsInVwbG9hZEludGVydmFsIjo4NjQwMDAwMCwidXBsb2FkT25TZXNzaW9uU3RhcnQiOnRydWUsInVwbG9hZE9uRXJyb3IiOnRydWV9LCJvdmVycmlkZVN0YXR1c0ZvckxvY2FsU2lnbm91dCI6IlBST0ZJTEVfREVOSUVEIiwiZVRhZyI6IjgwOXV1QUJwMGlmdkJtV2hYM1oxN3dmOXg5UHZfOVVWdUN3NUxmbi1RWnJET1RLa1R6cjA1c1lJUGNQZEFZLVEifSwiZnJsUHJvZmlsZSI6Int9IiwibGVnYWN5UHJvZmlsZSI6InsibGljZW5zZUlkIjoiNDJCOURBRjNGQzkwQTE1Mjc3M0EiLCJsaWNlbnNlVHlwZSI6MywibGljZW5zZVZlcnNpb24iOiIxLjAiLCJlZmZlY3RpdmVFbmRUaW1lc3RhbXAiOjE3MjY5ODgzOTkwMDAsImdyYWNlVGltZSI6MCwibGljZW5zZWRGZWF0dXJlcyI6W10sImVuaWdtYURhdGEiOnsicHJvZHVjdElkIjoyMDQsInNlcmlhbEtleSI6Ijk5NDMwNDE3MDAyMjg1Njc3MjMwMDI5NiIsImNsZWFyU2VyaWFsS2V5IjoiMTIwNDQ5Mzg3MDQ1OTU3OTEwNTciLCJsb2NhbGUiOiJBTEwiLCJhc3NvY2lhdGVkTG9jYWxlcyI6IkFMTCIsInBsYXRmb3JtIjowLCJpc2siOjIwNDQwMTcsImN1c3RvbWVySWQiOjAsImRlbGl2ZXJ5TWV0aG9kIjozLCJwYyI6dHJ1ZSwicmIiOmZhbHNlfX0iLCJhZGRpdGlvbmFsTGVnYWN5UHJvZmlsZXMiOiJ7fSJ9"
    "asnpSpecVersion" : "2.0"
  }
};

$done({ body: JSON.stringify(objc) });
