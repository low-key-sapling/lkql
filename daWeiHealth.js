
let uid = ""
let Authorization = ""
let openid = "odrFI6oXqXp3EJVMMhYpItngdGN0";
let userList = [
    {
        "uid": "2312931",
        "Authorization": "919111f847c903af3021d3756b2f43ec",
        "baseUrl": "http://h2.jmsxt.com",
        "openid": "odrFI6oXqXp3EJVMMhYpItngdGN0"
    },
]

//1-101
var ids = [
    // 1653120639
    // "1650852304"
    // "1651366202",
    // "1652686593",
    // "1652772165",
    // "1649908355",
    // "1648864167",
    // "1648864168",
    // "1658733397",
    // 1658977296
    // 1658976306

    "1648253549",
    "1648345794",
    "1648345844",
    "1648345898",
    "1648345948",
    "1648601047",
    "1648601104",
    "1648690708",
    "1648690760",
    "1648773869",
    "1648773920",
    "1648864166",
    "1648864224",
    "1648948085",
    "1648948298",
    "1649036286",
    "1649036333",
    "1649122153",
    "1649122201",
    "1649208292",
    "1649208346",
    "1649293148",
    "1649293200",
    "1649381557",
    "1649381603",
    "1649466389",
    "1649466479",
    "1649554232",
    "1649554303",
    "1649643342",
    "1649644432",
    "1649726396",
    "1649726457",
    "1649813326",
    "1649813374",
    "1649900408",
    "1649900458",
    "1649900513",
    "1649900570",
    "1650070603",
    "1650070720",
    "1650156593",
    "1650156645",
    "1650244102",
    "1650244165",
    "1650329764",
    "1650329833",
    "1650419820",
    "1650419872",
    "1650506926",
    "1650506977",
    "1650507028",
    "1650631610",
    "1650768071",
    "1650768127",
    "1650852250",
    "1650852303",
    "1650852348",
    "1650852406",
    "1651030589",
    "1651030679",
    "1651030731",
    "1651030785",
    "1651030838",
    "1651279411",
    "1651279460",
    "1651279506",
    "1651279557",
    "1651279644",
    "1651366150",
    "1651366201",
    "1651366333",
    "1651572539",
    "1651621672",
    "1651621726",
    "1651621775",
    // "1651621841",
    // "1651621900",
    // "1651621946",
    // "1651793454",
    // "1683787666",
    // "1683787955",
    // "1683788198",
    "1651621995",
    "1683792536",
    "1683792594",
    "1683792654",
    "1651793454",
    "1651793506",
    "1651793554",


    "1651793606",
    "1652135053",
    "1652135102",
    "1652135175",
    "1652135226",
    "1652135281",
    "1652135364",
    "1652135427",
    "1652135477",
    "1652135538",
    "1652135586",
    "1652135639",
    "1652135717",
    "1683794533",
    "1683795077",
]

const $ = new Env('大为健康');
const axios = require('axios');
const qs = require('qs');
const { json } = require("express");
let loginstatus = 0
let status = 0
let count_money_num = ``
let baseUrl = ""
var headers = {
    'Authorization': Authorization,
    'User-Agent': 'Mozilla/5.0 (Linux; Android 12; 22041211AC Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5317 MMWEBSDK/20230805 MMWEBID/2593 MicroMessenger/8.0.41.2441(0x28002951) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Referer': 'http://hb3.hbdtxt.com/',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'Cookie': 's342b0066=tme797db1if1i4qlq1i0d7dv13'
}
let nickname = ""
//个人信息 期数查询
async function login() {
    // huodong_id=1648253549&store_id=296&noneedlogin=0&openid=oy-5j6tgNZwFf-WQkc3RD39ihp-Y&api_type=h5&uid=2079189
    let data = qs.stringify({
        "huodong_id": 1651366202,
        "store_id": 296,
        "noneedlogin": 0,
        "openid": openid,
        'api_type': 'h5',
        'uid': uid
    })
    let config = {
        url: baseUrl + '/api/index/index',
        method: 'post',
        headers: headers,
        data: data
    }


    try {
        const response = await axios(config);
        let response_data = response.data
        //console.log(response_data)
        let code = response_data.code
        if (code == 1) {
            nickname = response_data.user.nickname //昵称
            count_money_num = response_data.user.count_money_num //答题期数
            count_money = response_data.user.count_money / 100 //累计金额
            console.log(`登录成功！昵称:` + nickname + `  答题期数：` + count_money_num + `  累计获得红包：` + count_money + `元`)
            loginstatus = 1
        } else {

            console.log(uid + ` 登录失败！原因：` + JSON.stringify(response_data))
        }

        return count_money_num
    } catch (error) {
        console.error(error);
    }
}

//题目
async function hh(huodong_id) {
    let data = qs.stringify({
        'huodong_id': huodong_id,
        "store_id": 296,
        "noneedlogin": 0,
        "openid": openid,
        'api_type': 'h5',
        'uid': uid
    })
    let config = {
        url: baseUrl + '/api/index/index',
        method: 'post',
        headers: headers,
        data: data
    }

    try {
        const response = await axios(config);
        let response_data = response.data
        // console.log(response_data)
        let code = response_data.code
        let share_title = response_data.huodong.share_title
        console.log(share_title)
        if (code == 777) {
            console.log(response_data)
        }
        let msg = response_data.msg
        let canyu_status = response_data.canyu_status
        let is_can = response_data.is_can
        let huodong = response_data.huodong
        let wentilist = response_data.wentilist
        let modified_wentilist = []
        for (let question of wentilist) {
            let daan = JSON.parse(question["daan"])[0];
            for (let option of question["xuanxiang"]) {
                if (option["xuhao"] === daan) {
                    option["xuanzhong"] = 1;
                } else {
                    option["xuanzhong"] = 0;
                }
            }
            modified_wentilist.push(question)
            //console.log(modified_wentilist)
        }

        return modified_wentilist
    } catch (error) {
        console.error(error);
    }
}

//答题
async function dt(a, huodong_id) {

    var data = qs.stringify({
        'wentilist': a,
        'huodong_id': huodong_id,
        'uuid': uid,
        "openid": openid,
        'api_type': 'h5',
        'uid': uid
    });
    var config = {
        method: 'post',
        url: baseUrl + '/api/index/dati',
        headers: headers,
        data: data
    };

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            if (response.data.msg == "今日可领取红包次数已达上限！") {
                //{"code":0,"msg":"今日可领取红包次数已达上限！"}
                console.log(`${nickname}:今日可领取红包次数已达上限`)
                status = 1
                return
            } else if (response.data.msg == "答题成功") {
                console.log(`${nickname}:答题成功，获得红包：` + response.data.money + `元`)
            } else {
                console.log(`${nickname}:` + JSON.stringify(response.data));
            }

        })
        .catch(function (error) {
            console.log(error);
        });

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    init()

    await login()
    if (loginstatus === 1) {
        // console.log(`===========开始答题===========`)
        let index = count_money_num
        console.log('index: ', index);
        index = (index * 1) - (n * 1 + 1)
        // console.log('index: ', index);
        for (; index < ids.length; index++) {
            await $.wait(5 * 1000);
            let aa = await hh(ids[index])
            await $.wait(5 * 1000); //
            await dt(JSON.stringify(aa), ids[index])
            await $.wait(5 * 1000);
            return
            // if (status === 1) {
            //     userList.splice(currentIndex, 1)
            //     return;
            // }
        }
    } else {
        // userList.splice(currentIndex, 1)

    }

}
function init() {
    loginstatus = 0
    status = 0
    count_money_num = ``
    headers = {
        'Authorization': Authorization,
        'User-Agent': 'Mozilla/5.0 (Linux; Android 12; 22041211AC Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5317 MMWEBSDK/20230805 MMWEBID/2593 MicroMessenger/8.0.41.2441(0x28002951) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': 'http://hb3.hbdtxt.com/',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cookie': 's342b0066=tme797db1if1i4qlq1i0d7dv13'
    }
}
// 只跑一个
async function runOne(id) {
    currentIndex = 0;
    while (currentIndex < userList.length) {
        uid = userList[currentIndex].uid
        Authorization = userList[currentIndex].Authorization
        baseUrl = userList[currentIndex].baseUrl ?? "https://xb2.xbdtxt.com"
        openid = userList[currentIndex].openid
        init()
        await login()
        // await $.wait(30 * 1000);
        let aa = await hh(id)
        // await $.wait(30 * 1000); //
        await dt(JSON.stringify(aa), id)
        // await $.wait(30 * 1000);
        currentIndex++
    }
}

// let currentIndex = 0;
// (async () => {
//     while (userList.length > 0) {
//         currentIndex = currentIndex % userList.length
//         uid = userList[currentIndex].uid
//         Authorization = userList[currentIndex].Authorization
//         let time = new Date().getTime()
//         let diff = userList[currentIndex].date + 1000 * 60 * 45 - time
//         if (diff > 0) {
//             await $.wait(diff)
//         }
//
//         await main()
//         userList[currentIndex].date = new Date().getTime()
//         currentIndex++
//     }
// })()
let n = null;
(async () => {
    for (let user of userList) {
        uid = user.uid
        Authorization = user.Authorization
        baseUrl = user.baseUrl ?? "https://xb2.xbdtxt.com"
        openid = user.openid
        n = user.n ?? -1
        // https://xb2.xbdtxt.com

        await main()
    }
})()



function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            // console.log(`等待${t / 1000 / 60}分钟`);
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
