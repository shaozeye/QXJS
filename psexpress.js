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
    "payload":"eyJpZCI6IjU2YzU1ZTcwLWYxNzEtNGMyZi1hYzUwLWZiYzNhOGI5NzY4MSIsInNlcnZlcklkIjoibGNzIiwicmVzcG9uc2VUeXBlIjoiSU5JVElBTCIsInByb2ZpbGVTdGF0dXMiOiJQUk9GSUxFX0FWQUlMQUJMRSIsInByb2ZpbGVTdGF0dXNSZWFzb24iOjEwMDAsInByb2ZpbGVTdGF0dXNSZWFzb25UZXh0IjoiUHJvZmlsZSBBdmFpbGFibGUgZHVlIHRvIGFuIGFjcXVpcmVkIHBsYW4gcHJvdmlzaW9uZWQgYW5kIEFDVElWRSIsImFwcExpY2Vuc2VNb2RlIjoiRlJFRU1JVU0iLCJhcHBQcm9maWxlIjp7ImFwcElkIjoiUFNYSU9TMSIsImFjY2Vzc2libGVJdGVtcyI6W3sic3RhdHVzIjoiQUNUSVZFIiwic291cmNlIjp7Im93bmVyX2lkIjoiNkQwMDFFMjE2NUQyMUVBMDBBNDk1Qzk1QEFkb2JlSUQiLCJpZCI6IjQyQjlEQUYzRkM5MEExNTI3NzNBIiwidHlwZSI6IkxJQ0VOU0UiLCJzdGF0dXNfcmVhc29uIjoiTk9STUFMIiwiY2FuX2FjY2Vzc191bnRpbCI6MTcyNjk4ODM5OTAwMH0sImZ1bGZpbGxhYmxlX2l0ZW1zIjp7ImNjX3N0b3JhZ2UiOnsiZW5hYmxlZCI6dHJ1ZSwiZmVhdHVyZV9zZXRzIjp7IkNTX0xWTF8yIjp7ImlkIjoiQ1NfTFZMXzIiLCJsYWJlbCI6IkNTIExWTCAyIiwiZW5hYmxlZCI6dHJ1ZX0sIlZSVF8zMCI6eyJpZCI6IlZSVF8zMCIsImxhYmVsIjoiVlJUIDMwIiwiZW5hYmxlZCI6dHJ1ZX19LCJjaGFyZ2luZ19tb2RlbCI6eyJjYXAiOjEwMCwidW5pdCI6IkdCIiwibW9kZWwiOiJSRUNVUlJJTkciLCJvdmVyYWdlIjoiTkEiLCJyb2xsb3ZlciI6MH19LCJwaG90b3Nob3BfZXhwcmVzcyI6eyJlbmFibGVkIjp0cnVlLCJjaGFyZ2luZ19tb2RlbCI6eyJtb2RlbCI6IlJFQ1VSUklORyIsIm92ZXJhZ2UiOiJOQSIsInJvbGxvdmVyIjowfX0sInBob3Rvc2hvcF9leHByZXNzX2ZlYXR1cmVfYWNjZXNzIjp7ImVuYWJsZWQiOnRydWUsImNoYXJnaW5nX21vZGVsIjp7Im1vZGVsIjoiUkVDVVJSSU5HIiwib3ZlcmFnZSI6Ik5BIiwicm9sbG92ZXIiOjB9fSwiY29yZV9zZXJ2aWNlc19jYyI6eyJlbmFibGVkIjp0cnVlLCJmZWF0dXJlX3NldHMiOnsiQ1NfTFZMXzIiOnsiaWQiOiJDU19MVkxfMiIsImxhYmVsIjoiQ1MgTFZMIDIiLCJlbmFibGVkIjp0cnVlfX0sImNoYXJnaW5nX21vZGVsIjp7Im1vZGVsIjoiUkVDVVJSSU5HIiwib3ZlcmFnZSI6Ik5BIiwicm9sbG92ZXIiOjB9fX19XSwic2Vjb25kYXJ5QXBwUHJvZmlsZXMiOnt9fSwidXNlclByb2ZpbGUiOnsidXNlcklkIjoiNkQwMDFFMjE2NUQyMUVBMDBBNDk1Qzk1QEFkb2JlSUQiLCJmaXJzdE5hbWUiOiJzaGFvemUiLCJsYXN0TmFtZSI6InllIiwiZW1haWwiOiJzaGFvemV5ZUBvdXRsb29rLmNvbSIsImNvdW50cnlDb2RlIjoiVVMiLCJhY2NvdW50VHlwZSI6InR5cGUxIiwiZGlzcGxheU5hbWUiOiJzaGFvemUlMjB5ZSIsImF1dGhJZCI6IjZEMDAxRTIxNjVEMjFFQTAwQTQ5NUM5NUBBZG9iZUlEIn0sImNvbnRyb2xQcm9maWxlIjp7Im5nbEFwcElkIjoiUFNYSU9TMSIsInJlcXVlc3Rlck5nbEFwcElkIjoiUFNYSU9TMSIsImRldmljZUlkIjoiNzA1YmU1MDE3MDIzNmI3NTllOTdmMjk0OTI2Y2I4NDE3ZWIxMDk4NGFkZGY4MzRlYjZjZDkzNzY4YjdmNDBkNSIsImRldmljZURhdGUiOiIyMDI1LTAyLTA2VDEwOjM4OjQ3LjgwMyswODAwIiwibmdsTGliUnVudGltZU1vZGUiOiJOQU1FRF9VU0VSX09OTElORSIsImNyZWF0aW9uVGltZXN0YW1wIjoxNzM4ODA5NTMwNjQ0LCJjYWNoZUxpZmV0aW1lIjoxNTU1MTk5OTk4OCwidmFsaWRVcHRvVGltZXN0YW1wIjoxNzI2OTg4Mzk5MDAwLCJjYWNoZVJlZnJlc2hDb250cm9sIjp7ImFwcFJlZnJlc2hJbnRlcnZhbCI6ODY0MDAwMDAsIm5nbExpYlJlZnJlc2hJbnRlcnZhbCI6ODY0MDAwMDB9LCJkZXZpY2VUb2tlbkhhc2giOiI4Y2EzOGMwZTUzMzNmMDFjZjBiNTVmNWY1MmMzZWZjZDAzMWI1OTBjNTdjYmY5YjI4NjY1YzU1MzhiMjhiYWRjZmZjMWJkY2MwM2U4MDVhOTk3ZjkwYWY2MGIzMTkyMzEzMjZmYzk3YTI0NDgzMjI5N2UyMzgyZjUwODc1MmU0ZSIsImRldmljZVRva2VuSWQiOiIxNzEwMzQzNjEzMDY4X2Y4OGU0MDVmLWNmMDYtNDdhZC04YWVlLWQ5NTk0NmQ0NDIxYl91dzIiLCJvc1VzZXJJZCI6IklPUyIsImNyZWF0ZWRGb3JWZGkiOmZhbHNlLCJjYWNoZUV4cGlyeVdhcm5pbmdDb250cm9sIjp7Indhcm5pbmdTdGFydFRpbWVzdGFtcCI6MTc1Mzc1NjczMDYzMiwid2FybmluZ0ludGVydmFsIjowfSwiYXBwVXNhZ2VUcmFja2luZ0NvbnRyb2wiOnsiZW5hYmxlZFRyYWNraW5nIjp0cnVlLCJwcm90ZWN0VHJhY2tlZERhdGEiOmZhbHNlLCJldmVudHNUb1RyYWNrIjpbIkFQUF9MQVVOQ0hfQ09VTlQiLCJBUFBfUlVOTklOR19USU1FIl19LCJsb2dDb250cm9sIjp7ImxldmVsIjoiSU5GTyIsIm1pbkZpbGVVcGxvYWRTaXplIjowLCJtYXhGaWxlVXBsb2FkU2l6ZSI6MTAwMCwidXBsb2FkSW50ZXJ2YWwiOjg2NDAwMDAwLCJ1cGxvYWRPblNlc3Npb25TdGFydCI6dHJ1ZSwidXBsb2FkT25FcnJvciI6dHJ1ZX0sIm92ZXJyaWRlU3RhdHVzRm9yTG9jYWxTaWdub3V0IjoiUFJPRklMRV9ERU5JRUQiLCJlVGFnIjoiODA5dXVBQnAwaWZ2Qm1XaFgzWjE3d2Y5eDlQdl85VVZ1Q3c1TGZuLVFackRPVEtrVHpyMDVzWUlQY1BkQVktUSJ9LCJmcmxQcm9maWxlIjoie30iLCJsZWdhY3lQcm9maWxlIjoieyJsaWNlbnNlSWQiOiI0MkI5REFGM0ZDOTBBMTUyNzczQSIsImxpY2Vuc2VUeXBlIjozLCJsaWNlbnNlVmVyc2lvbiI6IjEuMCIsImVmZmVjdGl2ZUVuZFRpbWVzdGFtcCI6MTcyNjk4ODM5OTAwMCwiZ3JhY2VUaW1lIjowLCJsaWNlbnNlZEZlYXR1cmVzIjpbXSwiZW5pZ21hRGF0YSI6eyJwcm9kdWN0SWQiOjIwNCwic2VyaWFsS2V5IjoiOTk0MzA0MTcwMDIyODU2NzcyMzAwMjk2IiwiY2xlYXJTZXJpYWxLZXkiOiIxMjA0NDkzODcwNDU5NTc5MTA1NyIsImxvY2FsZSI6IkFMTCIsImFzc29jaWF0ZWRMb2NhbGVzIjoiQUxMIiwicGxhdGZvcm0iOjAsImlzayI6MjA0NDAxNywiY3VzdG9tZXJJZCI6MCwiZGVsaXZlcnlNZXRob2QiOjMsInBjIjp0cnVlLCJyYiI6ZmFsc2V9fSIsImFkZGl0aW9uYWxMZWdhY3lQcm9maWxlcyI6Int9In0="
    "asnpSpecVersion" : "2.0"
  }
};

$done({ body: JSON.stringify(objc) });
