/*************************************

项目名称：**********
使用声明：⚠️仅供参考，🈲转载与售卖！
电报频道：https://t.me/chxm1023

**************************************
[rewrite_local]
https:\/\/vaserviece\.10jqka\.com\.cn\/ url script-response-body https://raw.githubusercontent.com/shaozeye/QXJS/main/ths.js

[mitm]
hostname = yuqing.kuaicha365.com

*************************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const vip = 'strategy/public/api.php?con=home&act=index';
if (url.indexOf(vip) != -1) {
    obj =
    {
        "errorMsg": "success",
        "data": {
            "salesTop": [
                {
                    "id": "level2",
                    "sales": "53875"
                },
                {
                    "id": "magicwave",
                    "sales": "23261"
                },
                {
                    "id": "vipuser",
                    "sales": "23024"
                }
            ],
            "hasCbasRecommend": 0,
            "hotKeywords": [
                {
                    "name": "短线选股",
                    "stat": "duanxian"
                },
                {
                    "name": "做T",
                    "stat": "zuoT"
                },
                {
                    "name": "打板",
                    "stat": "daban"
                }
            ],
            "recommend": [
                {
                    "opTags": [
                        "高低点提醒"
                    ],
                    "activityStat": "",
                    "id": "magicwave",
                    "recTags": [
                        "高低点提醒",
                        "指标荐股",
                        "指标工具"
                    ],
                    "bg": null,
                    "isCbasRecommend": 0,
                    "intro": "红绿波高低建议，电波信号选股",
                    "showText": 1,
                    "activityUrl": null,
                    "recPrice": null
                },
                {
                    "opTags": [
                        "短线利器"
                    ],
                    "activityStat": "",
                    "id": "mobileshortmessage",
                    "recTags": [
                        "短线",
                        "热点追踪",
                        "黑马荐股"
                    ],
                    "bg": null,
                    "isCbasRecommend": 0,
                    "intro": "超跌赚反弹、把握短线机会",
                    "showText": 1,
                    "activityUrl": null,
                    "recPrice": null
                },
                {
                    "opTags": [
                        "短线"
                    ],
                    "activityStat": "",
                    "id": "aicnn",
                    "recTags": [

                    ],
                    "bg": null,
                    "isCbasRecommend": 0,
                    "intro": "实时提醒分时高低点，为交易提供参考",
                    "showText": 1,
                    "activityUrl": null,
                    "recPrice": null
                }
            ],
            "products": {
                "valid": [
                    {
                        "endAtStr": "2025-09-06",
                        "needRemind": 0,
                        "sort": 6,
                        "id": "level2",
                        "beginAt": 1473136381,
                        "endAt": 1757123295,
                        "fromSid": 207,
                        "remainDays": 411,
                        "name": "手机超级Level-2",
                        "fromProductId": "level2"
                    },
                    {
                        "endAtStr": "2024-09-02",
                        "needRemind": 0,
                        "sort": 18,
                        "id": "mechanism_detector",
                        "beginAt": 1714854920,
                        "endAt": 1725222920,
                        "fromSid": 280,
                        "remainDays": 42,
                        "name": "AI机构探测器",
                        "fromProductId": "mechanism_detector"
                    },
                    {
                        "endAtStr": "2024-07-29",
                        "needRemind": 1,
                        "sort": 22,
                        "id": "diagnosestock",
                        "beginAt": 1719593435,
                        "endAt": 1722185435,
                        "fromSid": 171,
                        "remainDays": 7,
                        "name": "手机高级诊股",
                        "fromProductId": "diagnosestock"
                    },
                    {
                        "endAtStr": "2025-09-06",
                        "needRemind": 0,
                        "sort": 27,
                        "id": "vipuser",
                        "beginAt": 1473136381,
                        "endAt": 1757123295,
                        "fromSid": 207,
                        "remainDays": 411,
                        "name": "金牛会员",
                        "fromProductId": "level2"
                    },
                    {
                        "endAtStr": "2024-08-22",
                        "status": 1,
                        "isBuy": 1,
                        "needRemind": 0,
                        "id": "bullish_info",
                        "sort": 32,
                        "endAt": 1724256289,
                        "fromSid": 295,
                        "remainDays": 30,
                        "name": "金牛情报"
                    },
                    {
                        "endAtStr": "2025-09-16",
                        "status": 1,
                        "needRemind": 0,
                        "smsCount": 0,
                        "id": "gjyj",
                        "sort": 44,
                        "expiretime": 1757123295,
                        "remainDays": 411,
                        "name": "股价预警"
                    }
                ],
                "invalid": [

                ],
                "suspend": [

                ]
            }
        },
        "errorCode": 0


    }

    body = JSON.stringify(obj);
}
$done({ body });


