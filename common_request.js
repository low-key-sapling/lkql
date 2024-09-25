/*
 * 公共请求组件
 * cron "32 7 * 7 *" common_request.js
*/

//引入公共组件库
const {isNotEmpty, getCurrentDate, Env} = require("./common.js");

const $ = new Env('公共request组件');
const request = require("request");

const notify = $.isNode() ? require('./sendNotify') : '';

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
