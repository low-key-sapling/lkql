/*
微信小程序：习酒会员俱乐部
默认填写作者推荐码 需要修改在657行修改
变量为xjhd
抓包域名 anti-channeling/public/index.php/api/v2/
查看请求头的login_code
比如 export xjhd='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.XXXXXX'
多账号@隔开
比如 export xjhd='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.XXXXXX'@'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.XXXXXX'
*/
//定时 0 */2 * * * 吧
const $ = new Env('微信小程序-习酒');
var request = require("request");
let status;
status = (status = ($.getval("xjstatus") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let xjhdArr = [], xjcount = ''
const notify = $.isNode() ? require('./sendNotify') : '';
let xjhd = $.isNode() ? (process.env.xjhd ? process.env.xjhd : "") : ($.getdata('xjhd') ? $.getdata('xjhd') : "")

let allMessage = '';
let xjhds = ""
const logs = 0;
const host = 'https://xcx.exijiu.com/'
const host1 = 'https://apimallwm.exijiu.com/'
var hours = new Date().getHours();
var s = new Date().getMinutes();

function getJwt() {
    return new Promise((resolve) => {

        $.get(indexapi(`anti-channeling/public/index.php/api/v2/Member/getJwt`), async (err, resp, data) => {

            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                }// else {
                if (safeGet(data)) {
                    data = JSON.parse(data);
                    if (data.code == 0) {
                        token = data.data.jwt
                        id = data.data.member_id
                        console.log(id)

                        //await extend(2)
                    } else if (data.code == -1) {
                        console.log(data.msg)

                    }
                }

            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve(data);
            }
        })
    })
}


function indexapi(a, body) {
    return {

        url: `${host}${a}`,

        headers: {
            'Host': 'xcx.exijiu.com',
            'Connection': 'keep-alive',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat',
            'content-type': 'application/json',
            'login_code': xjhd,
            'Referer': 'https://servicewechat.com/wx489f950decfeb93e/195/page-frame.html',
            'Accept-Encoding': 'gzip, deflate',

        }
    }
}

function xjget(a, token) {
    return {

        url: `${host1}${a}`,
        headers: {
            'Host': 'apimallwm.exijiu.com',
            'Connection': 'keep-alive',
            'Authorization': token,
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://mallwm.exijiu.com/',
            'Accept-Language': 'en-us,en',
            'Accept-Encoding': ' gzip, deflate',
            'login_code': xjhd,
        }
    }
}

function xjpost(a, b, token) {
    return {

        url: `${host1}${a}`,
        body: `${b}`,
        headers: {
            'Host': 'apimallwm.exijiu.com',
            'Connection': 'keep-alive',
            'Authorization': token,
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat',
            'Content-Type': 'application/json, text/plain, */*',
            'Accept': '*/*',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://mallwm.exijiu.com/',
            'Accept-Language': 'en-us,en',
            'Accept-Encoding': ' gzip, deflate',
            'login_code': xjhd,
        }
    }
}

function xjpost1(a, b, token) {
    return {

        url: `${host1}${a}`,
        body: `${b}`,
        headers: {
            'Host': 'apimallwm.exijiu.com',
            'Connection': 'keep-alive',
            'Authorization': token,
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json, text/plain, */*',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://mallwm.exijiu.com/',
            'Accept-Language': 'en-us,en',
            'Accept-Encoding': ' gzip, deflate',
            'login_code': xjhd,
        }
    }
}


function safeGet(data) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        }
    } catch (e) {
        console.log(e);
        console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}

function jsonParse(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
            return [];
        }
    }
}
