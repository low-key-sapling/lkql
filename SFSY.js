/*
Follow By: https://github.com/z1988com/jd_scripts/tree/ede804a532f60d1d8df5bed3a096d398bee59d80

顺丰速运 v3.03

包含积分任务, 采蜜游戏, 顺丰会员日

采蜜游戏入口: 我的-积分抽奖-拉到最下面收件兑奖
积分可以换快递优惠券,爱奇艺周卡,肯德基代金券和各种实物
采蜜的蜂蜜可以换快递券和实物
默认不运行采蜜游戏, 需要运行的设置变量 sfsyBee 为true (字符串true)
export sfsyBee="true"

打开小程序或APP-我的-积分, 捉以下几种url之一,把整个url放到变量 sfsyUrl 里,多账号换行分割
https://mcs-mimp-web.sf-express.com/mcs-mimp/share/weChat/shareGiftReceiveRedirect
https://mcs-mimp-web.sf-express.com/mcs-mimp/share/app/shareRedirect
每天跑一到两次就行

cron: 11 7,15 * * * SFSY.js
const $ = new Env("顺丰速运-JS");
*/
const _0x1366a8 = _0x1c156a("顺丰速运"),
    _0x149a58 = require("got"),
    _0x508ad7 = require("path"),
    {
        exec: _0x39cbfc
    } = require("child_process"),
    _0x204044 = require("crypto-js"),
    {
        CookieJar: _0xd37655
    } = require("tough-cookie"),
    _0x3d0561 = "sfsy",
    _0x371509 = /[\n]/,
    _0x12e0b9 = [_0x3d0561 + "Url"],
    _0x94f81d = process.env[_0x3d0561 + "Bee"] || "false",
    _0x3bec27 = process.env[_0x3d0561 + "DragonBoatDraw"] || "false",
    _0x5b274f = -181 * -79 + 7 * -133 + -5368,
    _0x238e48 = 8049 + 18 * -447;
const _0x30f72a = 6378 * -1 + 3721 + -76 * -35 + 0.029999999999999805,
    _0x16c88c = "sfsy",
    _0x1e5430 = "https" + "://le" + "afxcy" + ".codi" + "ng.ne" + "t/api" + "/user" + "/leaf" + "xcy/p" + "rojec" + "t/val" + "idcod" + "e/sha" + "red-d" + "epot/" + "valid" + "Code/" + "git/b" + "lob/m" + "aster" + "/code" + ".json",
    _0x5c6146 = "https" + "://le" + "afxcy" + ".codi" + "ng.ne" + "t/api" + "/user" + "/leaf" + "xcy/p" + "rojec" + "t/val" + "idcod" + "e/sha" + "red-d" + "epot/" + "valid" + "Code/" + "git/b" + "lob/m" + "aster" + "/" + _0x16c88c + ".json",
    _0x4da51e = 8659 + -8654,
    _0x8785c6 = "Mozilla/5." + "0 (iP" + "hone;" + " CPU " + "iPhon" + "e OS " + "15_0 " + "like " + "Mac O" + "S X) " + "Apple" + "WebKi" + "t/605" + ".1.15" + " (KHT" + "ML, l" + "ike G" + "ecko)" + " Mobi" + "le/15" + "E148",
    _0x5aa02d = "wwesldfs29aniversaryvdld29",
    _0x2bbd78 = "MCS-MIMP-CORE",
    _0x1f992f = "czflqdlhbxcx",
    _0x51a8e3 = "wxwd26mem1";
const _0x30c981 = {
    BAOZHU_CARD: "[爆竹卡]",
    CHUNLIAN_CARD: "[春联卡]",
    DENGLONG_CARD: "[灯笼卡]",
    HONGBAO_CARD: "[红包卡]",
    YUANXIAO_CARD: "[元宵卡]",
    CHUANGHUA_CARD: "[窗花卡]",
    COMMON_CARD: "[万能卡]"
};
const _0x3a26cc = {
        PUSH_TIMES: "推金币次数",
        COIN: "金币",
        WELFARE_CARD: "财富卡",
        RICH_CARD_GAME: "发财卡"
    },
    _0xb8d615 = "YEAR_END_2023",
    _0x4c1524 = "ANNIVERSARY_2024",
    _0x1c616b = "MEMBER_DAY",
    _0x49a488 = "DRAGONBOAT_2024",
    _0x48074c = -8312 + 9601 + 183 * -7,
    _0x596697 = 7758 + -1 * 7757 << _0x48074c - (-312 * 10 + -8933 * -1 + -5812),
    _0x144bb1 = ["完成连签7天", "参与积分活动", "每月累计寄件", "完成每月任务", "与好友微信分享会员福利", "DAILY_VIP_TASK_TYPE", "去新增一个收件偏好", "用行业模板寄件下单", "用积分兑任意礼品", "领任意生活特权福利", "设置你的顺丰ID"];
let _0x11aa2a = [],
    _0x479306 = {},
    _0x48776e = -7827 + -43 * -219 + -1590,
    _0x3ecd02 = -1230 * 6 + -2604 + 9984;
function _0x52bf8a() {
    _0x3ecd02 = -1317 + -5428 + -3373 * -2;
    process.on("SIGTERM", () => {
        _0x3ecd02 = 3 * -2042 + -3 * 94 + 6410;
        process.exit(-5886 + -5 * 1261 + 12191);
    });
    const _0x48737f = _0x508ad7.basename(process.argv[-6913 + -3110 + 10024]),
        _0x5a46f8 = ["bash", "timeout", "grep"];
    let _0x44b56d = ["ps af" + "x"];
    _0x44b56d.push("grep " + _0x48737f);
    _0x44b56d = _0x44b56d.concat(_0x5a46f8.map(_0x46ba30 => "grep " + "-v \"" + _0x46ba30 + " \""));
    _0x44b56d.push("wc -l");
    const _0x2e16ad = _0x44b56d.join("|"),
        _0x3b8c50 = () => {
            _0x39cbfc(_0x2e16ad, (_0x47c98d, _0x3af612, _0x1b9cc2) => {
                if (_0x47c98d || _0x1b9cc2) {
                    return;
                }
                _0x48776e = parseInt(_0x3af612.trim(), -6 * 986 + 4754 + 1172);
            });
            if (_0x3ecd02 == -3942 + -4795 + 8738) {
                setTimeout(_0x3b8c50, -5774 * -1 + 9956 + -13730);
            }
        };
    _0x3b8c50();
}
class _0x5d22ab {
    constructor() {
        this.index = _0x1366a8.userIdx++;
        this.name = "";
        this.valid = false;
        const _0x3dd5c4 = {
            limit: 0
        };
        const _0x2d0088 = {
            Connection: "keep-alive"
        };
        const _0x103c2d = {
            retry: _0x3dd5c4,
            timeout: _0x5b274f,
            followRedirect: false,
            ignoreInvalidCookies: true,
            headers: _0x2d0088
        };
        this.got = _0x149a58.extend(_0x103c2d);
        if (_0x3ecd02 == -8053 + -2 * 1823 + 11699) {
            _0x52bf8a();
        }
    }
    log(_0x3cad5d, _0x4f6fa8 = {}) {
        const _0x43718c = "3|2|0|1|4".split("|");
        let _0x464aef = 8468 + 1 * -8468;
        while (true) {
            switch (_0x43718c[_0x464aef++]) {
                case "0":
                    if (this.index) {
                        _0x391c91 += "账号[" + _0x1366a8.padStr(this.index, _0x162cfd) + "]";
                    }
                    continue;
                case "1":
                    if (this.name) {
                        _0x391c91 += "[" + this.name + "]";
                    }
                    continue;
                case "2":
                    continue;
                case "3":
                    var _0x391c91 = "",
                        _0x162cfd = _0x1366a8.userCount.toString().length;
                    continue;
                case "4":
                    _0x1366a8.log(_0x391c91 + _0x3cad5d, _0x4f6fa8);
                    continue;
            }
            break;
        }
    }
    set_cookie(_0x10a65e, _0x1bb7e6, _0x37f02a, _0xf4857a, _0x5962bc = {}) {
        this.cookieJar.setCookieSync(_0x10a65e + "=" + _0x1bb7e6 + ("; Dom" + "ain=") + _0x37f02a + ";", "" + _0xf4857a);
    }
    async request(_0x2d52f2) {
        const _0x2977a1 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
            _0x5aa27d = ["TimeoutError"],
            _0x2963bf = ["EPROTO"],
            _0x53ed03 = [];
        var _0x4c7c10 = null,
            _0x233cd0 = 4608 + -4966 + 358,
            _0x50b2fa = _0x2d52f2.fn || _0x2d52f2.url;
        let _0x4a1a80 = _0x1366a8.get(_0x2d52f2, "valid_code", _0x53ed03);
        _0x2d52f2.method = _0x2d52f2?.["method"]?.["toUpperCase"]() || "GET";
        let _0x4ab8a0, _0x16f16b;
        while (_0x233cd0 < _0x238e48) {
            try {
                _0x233cd0++;
                _0x4ab8a0 = "";
                _0x16f16b = "";
                let _0x2eed5f = null,
                    _0x15f760 = _0x2d52f2?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x5b274f,
                    _0x593f3a = false,
                    _0x56f3d9 = Math.max(this.index - (-4030 + 27 * -125 + 7407), -4618 + 96 * -38 + 8266),
                    _0x5a5ed0 = Math.min(Math.max(this.index - (14875 + 1 * -14873), -1 * 4483 + -59 * 82 + 9322), 40 * -140 + -8457 + 14061),
                    _0x3dc8fa = Math.min(Math.max(this.index - (-2424 + 9302 + 7 * -982), 2909 + 3589 * -1 + -681 * -1), -8436 + -1 * 6014 + 14455),
                    _0xb696e7 = _0x56f3d9 * _0x5a5ed0 * _0x3dc8fa * _0x3dc8fa * (3460 + -508 + -2352),
                    _0x5e7661 = _0x56f3d9 * _0x5a5ed0 * _0x3dc8fa * _0x3dc8fa * (14720 + -10720),
                    _0x1f4978 = _0xb696e7 + Math.floor(Math.random() * _0x5e7661),
                    _0x2b489d = _0x48776e * (_0x48776e - (6529 + -7011 + 483)) * (-176 + 442 + 2734),
                    _0x32d5e6 = (_0x48776e - (-1 * -121 + -20 * -193 + -3980)) * (_0x48776e - (-9187 * -1 + -889 * 6 + 963 * -4)) * (-5414 + 2221 * -1 + -19 * -665),
                    _0x12b89c = _0x2b489d + Math.floor(Math.random() * _0x32d5e6),
                    _0x19f7ed = Math.max(_0x1366a8.userCount - (1 * -1217 + 7590 + 6371 * -1), -3138 + 5919 + -927 * 3),
                    _0x5507c2 = Math.max(_0x1366a8.userCount - (-6595 * 1 + -1 * -620 + -98 * -61), -3705 + 4835 + -565 * 2),
                    _0x4f9fa6 = _0x19f7ed * (-968 + -6382 + 7750),
                    _0x1e3549 = _0x5507c2 * (5973 + 205 * -22 + -463),
                    _0x369679 = _0x4f9fa6 + Math.floor(Math.random() * _0x1e3549),
                    _0x6a662e = _0x1f4978 + _0x12b89c + _0x369679;
                await _0x1366a8.wait(_0x6a662e);
                await new Promise(async _0x436719 => {
                    setTimeout(() => {
                        _0x593f3a = true;
                        _0x436719();
                    }, _0x15f760);
                    await this.got(_0x2d52f2).then(_0x255ef8 => {
                        _0x4c7c10 = _0x255ef8;
                    }, _0xeea90d => {
                        _0x2eed5f = _0xeea90d;
                        _0x4c7c10 = _0xeea90d.response;
                        _0x4ab8a0 = _0x2eed5f?.["code"] || "";
                        _0x16f16b = _0x2eed5f?.["name"] || "";
                    });
                    _0x436719();
                });
                if (_0x593f3a) {
                    this.log("[" + _0x50b2fa + ("]请求超时" + "(") + _0x15f760 / (-9605 + -8311 + 18916) + ("秒)，重试" + "第") + _0x233cd0 + "次");
                } else {
                    if (_0x2963bf.includes(_0x4ab8a0)) {
                        this.log("[" + _0x50b2fa + ("]请求错误" + "[") + _0x4ab8a0 + "][" + _0x16f16b + "]");
                        if (_0x2eed5f?.["message"]) {
                            console.log(_0x2eed5f.message);
                        }
                        break;
                    } else {
                        if (_0x5aa27d.includes(_0x16f16b)) {
                            this.log("[" + _0x50b2fa + ("]请求错误" + "[") + _0x4ab8a0 + "][" + _0x16f16b + "]，重试第" + _0x233cd0 + "次");
                        } else {
                            if (_0x2977a1.includes(_0x4ab8a0)) {
                                this.log("[" + _0x50b2fa + ("]请求错误" + "[") + _0x4ab8a0 + "][" + _0x16f16b + "]，重试第" + _0x233cd0 + "次");
                            } else {
                                let _0x3fa90f = _0x4c7c10?.["statusCode"] || "",
                                    _0x12d224 = _0x3fa90f / (461 * -5 + -9 * 562 + 7463) | -1312 * 5 + 5165 + -465 * -3;
                                if (_0x3fa90f) {
                                    _0x12d224 > 7882 + -7 * 995 + -914 && !_0x4a1a80.includes(_0x3fa90f) && (_0x3fa90f ? this.log("请求[" + _0x50b2fa + "]返回[" + _0x3fa90f + "]") : this.log("请求[" + _0x50b2fa + "]错误[" + _0x4ab8a0 + "][" + _0x16f16b + "]"));
                                    if (_0x12d224 <= 8306 + -15 * 593 + 593) {
                                        break;
                                    }
                                } else {
                                    this.log("请求[" + _0x50b2fa + "]错误[" + _0x4ab8a0 + "][" + _0x16f16b + "]");
                                }
                            }
                        }
                    }
                }
            } catch (_0x388ae5) {
                _0x388ae5.name == "TimeoutError" ? this.log("[" + _0x50b2fa + ("]请求超时" + "，重试第") + _0x233cd0 + "次") : this.log("[" + _0x50b2fa + ("]请求错误" + "(") + _0x388ae5.message + ")，重试第" + _0x233cd0 + "次");
            }
        }
        const _0x561516 = {
            statusCode: _0x4ab8a0 || -(-3390 * -2 + -5 * -361 + -8584),
            headers: null,
            result: null
        };
        if (_0x4c7c10 == null) {
            return Promise.resolve(_0x561516);
        }
        let {
            statusCode: _0x3a5aec,
            headers: _0x444cb2,
            body: _0x1cf435
        } = _0x4c7c10;
        if (_0x1cf435) {
            try {
                _0x1cf435 = JSON.parse(_0x1cf435);
            } catch {}
        }
        const _0x5cd6d6 = {
            statusCode: _0x3a5aec,
            headers: _0x444cb2,
            result: _0x1cf435
        };
        return Promise.resolve(_0x5cd6d6);
    }
}
let _0x49bd9d = _0x5d22ab;
try {
    let _0x5e0ebf = require("./Loc" + "alBas" + "ic");
    _0x49bd9d = _0x5e0ebf;
} catch {}
let _0xd9af8d = new _0x49bd9d(_0x1366a8);
class _0x520715 extends _0x49bd9d {
    constructor(_0x2904ef) {
        const _0x49a8ad = {
                KSpCb: "7|1|4" + "|5|3|" + "6|8|1" + "0|2|0" + "|9",
                SXOOR: "xxxxxxxx-xxxx-xxxx"
            },
            _0xc6797 = _0x49a8ad.KSpCb.split("|");
        let _0x541752 = -8771 + 5016 + 3755;
        while (true) {
            switch (_0xc6797[_0x541752++]) {
                case "0":
                    this.memberDay_redPacket_map = {};
                    continue;
                case "1":
                    this.refreshUrl = _0x2904ef;
                    continue;
                case "2":
                    this.memberDay_redPacket_drewToday = false;
                    continue;
                case "3":
                    this.jika_black = false;
                    continue;
                case "4":
                    this.cookieJar = new _0xd37655();
                    continue;
                case "5":
                    this.deviceId = _0x1366a8.randomPattern(_0x49a8ad.SXOOR);
                    continue;
                case "6":
                    this.anniversary_black = false;
                    continue;
                case "7":
                    super(_0x1366a8);
                    continue;
                case "8":
                    this.dragonBoat_black = false;
                    continue;
                case "9":
                    const _0x1a9b52 = {
                        "User-Agent": _0x8785c6
                    };
                    this.got = this.got.extend({
                        cookieJar: this.cookieJar,
                        headers: _0x1a9b52
                    });
                    continue;
                case "10":
                    this.memberDay_black = false;
                    continue;
            }
            break;
        }
    }
    getSign(_0xc3a02d = {}) {
        let _0x3ad26b = Date.now(),
            _0x7c3a32 = "token" + "=" + _0x5aa02d + ("&time" + "stamp" + "=") + _0x3ad26b + ("&sysC" + "ode=") + _0x2bbd78,
            _0x348dd6 = _0x204044.MD5(_0x7c3a32).toString();
        const _0x16a599 = {
            platform: "MINI_PROGRAM",
            channel: _0x51a8e3,
            sysCode: _0x2bbd78,
            timestamp: _0x3ad26b,
            signature: _0x348dd6
        };
        return _0x16a599;
    }
    async refresh_cookie(_0x147edb = {}) {
        let _0x3b3837 = false;
        try {
            let _0x1f97e2 = {
                    fn: "refresh_cookie",
                    method: "get",
                    url: this.refreshUrl
                },
                {
                    statusCode: _0x1bf96b,
                    headers: _0x391d59
                } = await this.request(_0x1f97e2);
            if (_0x1bf96b == 6765 + -1 * 6463) {
                for (let _0x572e72 of _0x391d59["set-cookie"]) {
                    if (_0x572e72.includes("_login_mobile_")) {
                        let _0x16b3b1 = _0x572e72.match(/_login_mobile_=(\d+);/);
                        _0x16b3b1 && (this.name = _0x16b3b1[-97 * -31 + 6704 + 1 * -9710]);
                        break;
                    }
                }
                _0x3b3837 = true;
                this.log("登录成功");
            } else {
                this.log("登录失败[" + _0x1bf96b + "]");
            }
        } catch (_0x23b549) {
            console.log(_0x23b549);
        } finally {
            return _0x3b3837;
        }
    }
    async personalInfo(_0x1c3be7 = {}) {
        try {
            let _0x44cb47 = {
                    fn: "personalInfo",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "membe" + "r/per" + "sonal" + "Info",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0xeb707f
                } = await this.request(_0x44cb47);
            if (_0xeb707f?.["success"]) {
                const _0x4d8f29 = {
                    notify: true
                };
                this.log("积分: " + _0xeb707f.obj.availablePoints, _0x4d8f29);
            } else {
                this.log("查询账号信" + "息失败: " + (_0xeb707f?.["errorMessage"] || (_0xeb707f ? JSON.stringify(_0xeb707f) : "无返回")));
            }
        } catch (_0x3e58a2) {
            console.log(_0x3e58a2);
        }
    }
    async queryUserInfo(_0x871831 = {}) {
        const _0x480103 = {
            lfmyE: "queryUserInfo",
            kInBl: "ESG-CEMP-CORE",
            SpknJ: "cycleSub",
            tFKef: "leavePoint",
            pWOYw: "zeTLTYeG0bLetfRk",
            wsUUy: function (_0x12fed8, _0x599ff1) {
                return _0x12fed8 + _0x599ff1;
            },
            ZCFPB: " 00:0" + "0:00",
            oXXES: function (_0x350d54, _0x56e2a8) {
                return _0x350d54 > _0x56e2a8;
            },
            fChIZ: "yyyy-MM-dd",
            kJFgA: "无返回"
        };
        try {
            let _0x43caa3 = {
                    fn: _0x480103.lfmyE,
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berIn" + "tegra" + "l~use" + "rInfo" + "Servi" + "ce~qu" + "eryUs" + "erInf" + "o",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        sysCode: _0x480103.kInBl,
                        optionalColumns: ["usablePoint", _0x480103.SpknJ, _0x480103.tFKef],
                        token: _0x480103.pWOYw
                    }
                },
                {
                    result: _0x12085d
                } = await this.request(_0x43caa3);
            if (_0x12085d?.["success"]) {
                let {
                        usablePoint: _0x15e2bc,
                        cycleAdd: _0x47b81c,
                        cycleSub: _0x4bbc1e,
                        leavePoint: _0x85b1a1,
                        pointClearCycle: _0x194626
                    } = _0x12085d.obj,
                    _0x39e911 = "积分: " + _0x15e2bc,
                    _0x269e24 = _0x85b1a1 - _0x4bbc1e,
                    _0x100621 = new Date(_0x480103.wsUUy(_0x194626, _0x480103.ZCFPB));
                _0x100621.setFullYear(_0x100621.getFullYear() + (-6248 + -2770 + 9019));
                let _0x8e1133 = _0x100621.getTime();
                if (_0x480103.oXXES(_0x269e24, 1682 + -2 * 841) && _0x480103.oXXES(_0x8e1133, Date.now())) {
                    let _0xeb6a64 = _0x1366a8.time(_0x480103.fChIZ, _0x8e1133);
                    _0x39e911 += ", 有" + _0x269e24 + "积分将在" + _0xeb6a64 + "过期";
                }
                const _0x23514b = {
                    notify: true
                };
                this.log(_0x39e911, _0x23514b);
            } else {
                this.log("查询账号信" + "息失败: " + (_0x12085d?.["errorMessage"] || (_0x12085d ? JSON.stringify(_0x12085d) : _0x480103.kJFgA)));
            }
        } catch (_0x415690) {
            console.log(_0x415690);
        }
    }
    async automaticSignFetchPackage(_0x3eb527 = {}) {
        try {
            let _0x11a67f = {
                    fn: "automaticSignFetchPackage",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "integ" + "ralTa" + "skSig" + "nPlus" + "Servi" + "ce~au" + "tomat" + "icSig" + "nFetc" + "hPack" + "age",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        comeFrom: _0x1366a8.get(_0x3eb527, "comeFrom", "vioin"),
                        channelFrom: _0x1366a8.get(_0x3eb527, "channelFrom", "SFAPP")
                    }
                },
                {
                    result: _0x111089
                } = await this.request(_0x11a67f);
            if (_0x111089?.["success"]) {
                _0x111089?.["obj"]?.["hasFinishSign"] ? this.log("今天已签到") : _0x111089?.["obj"]?.["integralTaskSignPackageVOList"]?.["length"] && this.log("签到获得:" + " " + _0x111089?.["obj"]?.["integralTaskSignPackageVOList"]?.["map"](_0x2745fa => _0x2745fa.packetName)?.["join"](", "));
                await this.queryPointTaskAndSignFromES();
                const _0x34bace = {
                    channelType: 3
                };
                await this.queryPointTaskAndSignFromES(_0x34bace);
                await this.queryUserInfo();
            } else {
                this.log("查询签到失" + "败: " + (_0x111089?.["errorMessage"] || (_0x111089 ? JSON.stringify(_0x111089) : "无返回")));
            }
        } catch (_0x3485f6) {
            console.log(_0x3485f6);
        }
    }
    async queryPointTaskAndSignFromES(_0x430a48 = {}) {
        try {
            let _0x504743 = {
                    fn: "queryPointTaskAndSignFromES",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "integ" + "ralTa" + "skStr" + "ategy" + "Servi" + "ce~qu" + "eryPo" + "intTa" + "skAnd" + "SignF" + "romES",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        deviceId: this.deviceId,
                        channelType: String(_0x1366a8.get(_0x430a48, "channelType", -2295 * -1 + 9967 + -12261))
                    }
                },
                {
                    result: _0x55a2f0
                } = await this.request(_0x504743);
            if (_0x55a2f0?.["success"]) {
                for (let _0x37eb79 of _0x55a2f0.obj.taskTitleLevels) {
                    switch (_0x37eb79.status) {
                        case 8445 + -8443:
                            if (_0x144bb1.includes(_0x37eb79.title)) {
                                break;
                            }
                            await this.finishTask(_0x37eb79);
                        case -7271 + 245 + 7027:
                            await this.fetchIntegral(_0x37eb79);
                            break;
                        case -781 * 7 + -722 * 7 + -3508 * -3:
                            break;
                        default:
                            this.log("任务[" + _0x37eb79.title + ("] -- " + "未知状态[") + _0x37eb79.status + "]");
                            break;
                    }
                }
            } else {
                this.log("查询任务失" + "败: " + (_0x55a2f0?.["errorMessage"] || (_0x55a2f0 ? JSON.stringify(_0x55a2f0) : "无返回")));
            }
        } catch (_0x12e33e) {
            console.log(_0x12e33e);
        }
    }
    async finishTask(_0x34fd6c, _0x230f4a = {}) {
        try {
            const _0x36599b = {
                taskCode: _0x34fd6c.taskCode
            };
            let _0x308765 = {
                    fn: "finishTask",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nRout" + "ePost" + "/memb" + "erEs/" + "taskR" + "ecord" + "/fini" + "shTas" + "k",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x36599b
                },
                {
                    result: _0x19e463
                } = await this.request(_0x308765);
            _0x19e463?.["success"] ? this.log("完成任务[" + _0x34fd6c.title + "]成功") : this.log("完成任务[" + _0x34fd6c.title + "]失败: " + (_0x19e463?.["errorMessage"] || (_0x19e463 ? JSON.stringify(_0x19e463) : "无返回")));
        } catch (_0x5aa88b) {
            console.log(_0x5aa88b);
        }
    }
    async fetchIntegral(_0x38f19e, _0x5611d8 = {}) {
        try {
            let _0x306058 = {
                    fn: "fetchIntegral",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "integ" + "ralTa" + "skStr" + "ategy" + "Servi" + "ce~fe" + "tchIn" + "tegra" + "l",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        strategyId: _0x38f19e.strategyId,
                        taskId: _0x38f19e.taskId,
                        taskCode: _0x38f19e.taskCode,
                        deviceId: this.deviceId
                    }
                },
                {
                    result: _0x10fe8d
                } = await this.request(_0x306058);
            _0x10fe8d?.["success"] ? this.log("领取任务[" + _0x38f19e.title + "]奖励: " + _0x10fe8d.obj.point + "积分") : this.log("领取任务[" + _0x38f19e.title + ("]奖励失败" + ": ") + (_0x10fe8d?.["errorMessage"] || (_0x10fe8d ? JSON.stringify(_0x10fe8d) : "无返回")));
        } catch (_0x329dc3) {
            console.log(_0x329dc3);
        }
    }
    async queryPointTaskAndSign(_0x4be970 = {}) {
        try {
            let _0x2d3c2f = {
                    fn: "queryPointTaskAndSign",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "appTa" + "sk/qu" + "eryPo" + "intTa" + "skAnd" + "Sign",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        channel: _0x1366a8.get(_0x4be970, "channel", "SFAPP"),
                        pageType: _0x1366a8.get(_0x4be970, "pageType", "APP_MINE_TASK")
                    }
                },
                {
                    result: _0x82513a
                } = await this.request(_0x2d3c2f);
            if (_0x82513a?.["success"]) {
                for (let _0x2b1bde of _0x82513a?.["obj"]?.["taskTitleLevels"] || []) {
                    if (_0x144bb1.includes(_0x2b1bde.title)) {
                        continue;
                    }
                    await this.scanPageToRecord(_0x2b1bde);
                    await this.fetchPoint(_0x2b1bde);
                }
            } else {
                this.log("查询旧版任" + "务失败: " + (_0x82513a?.["errorMessage"] || (_0x82513a ? JSON.stringify(_0x82513a) : "无返回")));
            }
        } catch (_0x1f2459) {
            console.log(_0x1f2459);
        }
    }
    async scanPageToRecord(_0x3292df, _0x590b36 = {}) {
        try {
            let _0x30e7d9 = {
                    fn: "scanPageToRecord",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "appTa" + "sk/sc" + "anPag" + "eToRe" + "cord",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        channel: _0x1366a8.get(_0x590b36, "channel", "SFAPP"),
                        pageType: _0x3292df.pageType
                    }
                },
                {
                    result: _0x92ceff
                } = await this.request(_0x30e7d9);
            _0x92ceff?.["success"] ? this.log("完成任务[" + _0x3292df.title + "]成功") : this.log("完成任务[" + _0x3292df.title + "]失败: " + (_0x92ceff?.["errorMessage"] || (_0x92ceff ? JSON.stringify(_0x92ceff) : "无返回")));
        } catch (_0x1f5e95) {
            console.log(_0x1f5e95);
        }
    }
    async fetchPoint(_0x81f68d, _0x247dad = {}) {
        try {
            let _0x496953 = {
                    fn: "fetchPoint",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "appTa" + "sk/fe" + "tchPo" + "int",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        channel: _0x1366a8.get(_0x247dad, "channel", "SFAPP"),
                        pageType: _0x81f68d.pageType,
                        deviceId: this.deviceId
                    }
                },
                {
                    result: _0xe721c1
                } = await this.request(_0x496953);
            _0xe721c1?.["success"] ? this.log("领取任务[" + _0x81f68d.title + "]奖励成功") : this.log("领取任务[" + _0x81f68d.title + ("]奖励失败" + ": ") + (_0xe721c1?.["errorMessage"] || (_0xe721c1 ? JSON.stringify(_0xe721c1) : "无返回")));
        } catch (_0x353bb6) {
            console.log(_0x353bb6);
        }
    }
    async coupon_list(_0x5460c2 = 7723 + -7722, _0x1f26f2 = -4878 + -3113 * 1 + -9 * -899, _0xef0224 = {}) {
        try {
            const _0x4aecec = {
                couponType: "",
                pageNo: _0x5460c2,
                pageSize: _0x1f26f2
            };
            let _0x2604cf = {
                    fn: "coupon_list",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "coupo" + "n/ava" + "ilabl" + "e/lis" + "t",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x4aecec
                },
                {
                    result: _0xc58473
                } = await this.request(_0x2604cf);
            if (_0xc58473?.["success"]) {
                let _0xd783d8 = [],
                    _0x2ba28c = _0xc58473?.["obj"] || [];
                for (let _0xb9006e of _0x2ba28c) {
                    let {
                        couponType: _0x4ee46b,
                        invalidTm: _0x11cba8,
                        pledgeAmt: _0x3c85c3,
                        couponName: _0x41dd55
                    } = _0xb9006e;
                    _0x4ee46b === "1" && _0x3c85c3 >= -5458 + -7323 + -147 * -87 && _0xd783d8.push(_0x41dd55 + (", 过期时" + "间: ") + _0x11cba8);
                }
                if (_0xd783d8.length) {
                    const _0x60717f = {
                        notify: true
                    };
                    this.log("大额优惠券" + ":", _0x60717f);
                    const _0x513338 = {
                        notify: true
                    };
                    _0x1366a8.log(_0xd783d8.join("\n"), _0x513338);
                }
            } else {
                this.log("查询账号券" + "失败: " + (_0xc58473?.["errorMessage"] || (_0xc58473 ? JSON.stringify(_0xc58473) : "无返回")));
            }
        } catch (_0x425a1d) {
            console.log(_0x425a1d);
        }
    }
    async personalInfoNew(_0x106d38 = {}) {
        try {
            let _0x33f18f = {
                    fn: "personalInfoNew",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berIn" + "tegra" + "l~use" + "rInfo" + "Servi" + "ce~pe" + "rsona" + "lInfo" + "New",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x2c3ec6
                } = await this.request(_0x33f18f);
            if (_0x2c3ec6?.["success"]) {
                this.userId = _0x2c3ec6.obj.userId;
                const _0x66941a = {
                    notify: true
                };
                this.log("积分: " + _0x2c3ec6.obj.availablePoints, _0x66941a);
            } else {
                this.log("查询账号积" + "分失败: " + (_0x2c3ec6?.["errorMessage"] || (_0x2c3ec6 ? JSON.stringify(_0x2c3ec6) : "无返回")));
            }
        } catch (_0xee6fd) {
            console.log(_0xee6fd);
        }
    }
    async bee_indexData(_0x55a3f8 = {}) {
        try {
            let _0x4b7288 = _0x1366a8.randomList(_0x11aa2a.filter(_0x2088c3 => _0x2088c3 != this.userId));
            const _0x24fd72 = {
                inviteUserId: _0x4b7288
            };
            let _0x70e5bf = {
                fn: "bee_indexData",
                method: "post",
                url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "recei" + "veExc" + "hange" + "Index" + "Servi" + "ce~in" + "dexDa" + "ta",
                headers: {
                    ...this.getSign()
                },
                json: _0x24fd72
            };
            {
                let {
                    result: _0x5a8803
                } = await this.request(_0x1366a8.copy(_0x70e5bf));
                if (_0x5a8803?.["success"]) {
                    let {
                        friendAwards = [],
                        gameNum = -529 * 5 + 1324 + 1321,
                        usableHoney: _0x4adf12,
                        capacity: _0x44b630
                    } = _0x5a8803?.["obj"];
                    friendAwards?.["length"] && this.log("获得奖励:" + " " + _0x5a8803.obj.friendAwards.map(_0x1f5f24 => _0x1f5f24.name).join(","));
                    _0x4adf12 >= _0x44b630;
                    this.log("可以采蜜冒险" + gameNum + "次");
                    while (gameNum-- > 41 * -183 + 1432 + 6071) {
                        await this.bee_gameReport();
                    }
                    await this.bee_taskDetail();
                } else {
                    const _0x55e075 = {
                        notify: true
                    };
                    this.log("进入采蜜游戏主页失败" + ": " + (_0x5a8803?.["errorMessage"] || (_0x5a8803 ? JSON.stringify(_0x5a8803) : "无返回")), _0x55e075);
                    return;
                }
            }
            {
                let {
                    result: _0x3038df
                } = await this.request(_0x1366a8.copy(_0x70e5bf));
                if (_0x3038df?.["success"]) {
                    for (let _0x55a541 of _0x3038df?.["obj"]?.["taskDetail"] || []) {
                        await this.bee_receiveHoney(_0x55a541);
                    }
                } else {
                    const _0x293e24 = {
                        notify: true
                    };
                    this.log("进入采蜜游戏主页失败" + ": " + (_0x3038df?.["errorMessage"] || (_0x3038df ? JSON.stringify(_0x3038df) : "无返回")), _0x293e24);
                    return;
                }
            }
            {
                let {
                    result: _0x487fe5
                } = await this.request(_0x1366a8.copy(_0x70e5bf));
                if (_0x487fe5?.["success"]) {
                    const _0x36358e = {
                        notify: true
                    };
                    this.log("采蜜游戏丰" + "蜜: " + (_0x487fe5?.["obj"]?.["usableHoney"] || -9192 + -4456 + 13648), _0x36358e);
                } else {
                    const _0xa7fe87 = {
                        notify: true
                    };
                    this.log("进入采蜜游戏主页失败" + ": " + (_0x487fe5?.["errorMessage"] || (_0x487fe5 ? JSON.stringify(_0x487fe5) : "无返回")), _0xa7fe87);
                    return;
                }
            }
        } catch (_0x531ea0) {
            console.log(_0x531ea0);
        }
    }
    async bee_expand(_0x1b03ed = {}) {
        let _0x3514e8 = false;
        try {
            let _0x1cc442 = {
                    fn: "bee_expand",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "recei" + "veExc" + "hange" + "ApiSe" + "rvice" + "~expa" + "nd",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x44cc19
                } = await this.request(_0x1cc442);
            console.log(JSON.stringify(_0x44cc19));
            _0x44cc19?.["success"] ? (_0x3514e8 = true, this.log("采蜜游戏扩容成功")) : this.log("采蜜游戏扩" + "容失败: " + (_0x44cc19?.["errorMessage"] || (_0x44cc19 ? JSON.stringify(_0x44cc19) : "无返回")));
        } catch (_0xda2eeb) {
            console.log(_0xda2eeb);
        } finally {
            return _0x3514e8;
        }
    }
    async bee_receiveHoney(_0x40b722, _0x4e411b = {}) {
        try {
            const _0x121e4d = {
                taskType: _0x40b722.type
            };
            let _0x12bc16 = {
                    fn: "bee_receiveHoney",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "recei" + "veExc" + "hange" + "Index" + "Servi" + "ce~re" + "ceive" + "Honey",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x121e4d
                },
                {
                    result: _0x2c0e79
                } = await this.request(_0x12bc16);
            _0x2c0e79?.["success"] ? this.log("领取[" + _0x40b722.type + ("]奖励获得" + ": ") + _0x40b722.value + "丰蜜") : this.log("领取[" + _0x40b722.type + ("]奖励失败" + ": ") + (_0x2c0e79?.["errorMessage"] || (_0x2c0e79 ? JSON.stringify(_0x2c0e79) : "无返回")));
        } catch (_0xe738a7) {
            console.log(_0xe738a7);
        }
    }
    async bee_gameReport(_0x392998 = {}) {
        try {
            let _0x9b6e71 = -1554 + 7587 + -6013;
            const _0x2d4028 = {
                gatherHoney: _0x9b6e71
            };
            let _0x52aaa2 = {
                    fn: "bee_gameReport",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "recei" + "veExc" + "hange" + "GameS" + "ervic" + "e~gam" + "eRepo" + "rt",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x2d4028
                },
                {
                    result: _0x147f78
                } = await this.request(_0x52aaa2);
            if (_0x147f78?.["success"]) {
                this.log("采蜜冒险获得" + _0x9b6e71 + "丰蜜");
            } else {
                let _0x4de714 = _0x147f78?.["errorMessage"] || (_0x147f78 ? JSON.stringify(_0x147f78) : "无返回");
                this.log("采蜜冒险失" + "败: " + _0x4de714);
            }
        } catch (_0x4c4260) {
            console.log(_0x4c4260);
        }
    }
    async bee_taskDetail(_0x29baa7 = {}) {
        try {
            let _0x34f55d = {
                    fn: "bee_taskDetail",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "recei" + "veExc" + "hange" + "Index" + "Servi" + "ce~ta" + "skDet" + "ail",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x11eef0
                } = await this.request(_0x34f55d);
            if (_0x11eef0?.["success"]) {
                for (let _0x1bb54d of _0x11eef0.obj.list) {
                    if (!_0x1bb54d.taskCode) {
                        continue;
                    }
                    switch (_0x1bb54d.status) {
                        case 9287 + -6779 * -1 + -4016 * 4:
                            if (_0x144bb1.includes(_0x1bb54d.taskType)) {
                                break;
                            }
                            await this.bee_finishTask(_0x1bb54d);
                        case 2 * -2622 + 2579 + 2666:
                        case 6050 + -6047:
                            break;
                        default:
                            this.log("任务[" + _0x1bb54d.title + ("] -- " + "未知状态[") + _0x1bb54d.status + "]");
                            break;
                    }
                }
            } else {
                this.log("查询任务失" + "败: " + (_0x11eef0?.["errorMessage"] || (_0x11eef0 ? JSON.stringify(_0x11eef0) : "无返回")));
            }
        } catch (_0x41272e) {
            console.log(_0x41272e);
        }
    }
    async bee_finishTask(_0x1d6b15, _0x2ac632 = {}) {
        try {
            const _0x286b69 = {
                taskCode: _0x1d6b15.taskCode
            };
            let _0x39ad88 = {
                    fn: "bee_finishTask",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berEs" + "~task" + "Recor" + "d~fin" + "ishTa" + "sk",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x286b69
                },
                {
                    result: _0x56adbd
                } = await this.request(_0x39ad88);
            _0x56adbd?.["success"] ? this.log("完成采蜜任" + "务[" + _0x1d6b15.taskType + "]成功") : this.log("完成采蜜任" + "务[" + _0x1d6b15.taskType + "]失败: " + (_0x56adbd?.["errorMessage"] || (_0x56adbd ? JSON.stringify(_0x56adbd) : "无返回")));
        } catch (_0x4f0779) {
            console.log(_0x4f0779);
        }
    }
    async superWelfare_receiveRedPacket(_0x135d8d = {}) {
        try {
            const _0x2adba0 = {
                channel: _0x1f992f
            };
            let _0xb87586 = {
                    fn: "superWelfare_receiveRedPacket",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berAc" + "tLeng" + "thy~r" + "edPac" + "ketAc" + "tivit" + "yServ" + "ice~s" + "uperW" + "elfar" + "e~rec" + "eiveR" + "edPac" + "ket",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x2adba0
                },
                {
                    result: _0x56795b
                } = await this.request(_0xb87586);
            if (_0x56795b?.["success"]) {
                let _0x5ee939 = _0x56795b?.["obj"]?.["giftList"];
                if (_0x56795b?.["obj"]?.["extraGiftList"]?.["length"]) {
                    _0x5ee939 = _0x5ee939.concat(_0x56795b.obj.extraGiftList);
                }
                let _0x1ddf6c = _0x5ee939?.["map"](_0x4077b8 => _0x4077b8.giftName)?.["join"](", ") || "",
                    _0x1a0e5f = _0x56795b?.["obj"]?.["receiveStatus"] == 5835 + -2917 * 2 ? "领取成功" : "已领取过";
                const _0x4ead26 = {
                    notify: true
                };
                this.log("超值福利签" + "到[" + _0x1a0e5f + "]: " + _0x1ddf6c, _0x4ead26);
            } else {
                this.log("超值福利签" + "到失败: " + (_0x56795b?.["errorMessage"] || (_0x56795b ? JSON.stringify(_0x56795b) : "无返回")));
            }
        } catch (_0x3b26c1) {
            console.log(_0x3b26c1);
        }
    }
    async memberDay_invite(_0x2ebad7 = {}) {
        try {
            let _0x3bca57 = _0x1366a8.randomList(_0x11aa2a.filter(_0x2ec76f => _0x2ec76f != this.userId));
            const _0xc4311 = {
                inviteUserId: _0x3bca57
            };
            let _0x4739a1 = {
                fn: "memberDay_invite",
                method: "post",
                url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "membe" + "rDayI" + "ndexS" + "ervic" + "e~ind" + "ex",
                headers: {
                    ...this.getSign()
                },
                json: _0xc4311
            };
            await this.request(_0x4739a1);
            let {
                result: _0x2e6b91
            } = await this.request(_0x4739a1);
            if (_0x2e6b91?.["success"]) {
                let {
                    canReceiveInviteAward: _0x261453,
                    risk: _0x9e8902
                } = _0x2e6b91?.["obj"];
                _0x261453 && (await this.memberDay_receiveInviteAward(_0x3bca57));
                if (this.memberDay_black) {
                    return;
                }
                await this.memberDay_index();
            } else {
                let _0x3b7a40 = _0x2e6b91?.["errorMessage"] || (_0x2e6b91 ? JSON.stringify(_0x2e6b91) : "无返回");
                this.log("查询会员日" + "失败: " + _0x3b7a40);
                if (_0x3b7a40?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0x12ee2d = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0x12ee2d);
                }
            }
        } catch (_0x32a3fc) {
            console.log(_0x32a3fc);
        }
    }
    async memberDay_index(_0x2084ed = {}) {
        try {
            let _0x5d3766 = {
                    fn: "memberDay_index",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "membe" + "rDayI" + "ndexS" + "ervic" + "e~ind" + "ex",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x3ec4ee
                } = await this.request(_0x5d3766);
            if (_0x3ec4ee?.["success"]) {
                let {
                    lotteryNum: _0x23cba7,
                    risk: _0x1fa76a
                } = _0x3ec4ee?.["obj"];
                await this.memberDay_redPacketReceivedStatus();
                _0x23cba7 = _0x23cba7 || 2446 * -1 + 33 + -127 * -19;
                this.log("会员日可以抽奖" + _0x23cba7 + "次");
                while (_0x23cba7-- > -692 * -2 + 5242 + 3313 * -2) {
                    await this.memberDay_lottery();
                }
                if (this.memberDay_black) {
                    return;
                }
                await this.memberDay_taskList();
                if (this.memberDay_black) {
                    return;
                }
                await this.memberDay_redPacketStatus();
            } else {
                let _0x56c73d = _0x3ec4ee?.["errorMessage"] || (_0x3ec4ee ? JSON.stringify(_0x3ec4ee) : "无返回");
                this.log("查询会员日" + "失败: " + _0x56c73d);
                if (_0x56c73d?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0xe6c6c1 = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0xe6c6c1);
                }
            }
        } catch (_0x13205f) {
            console.log(_0x13205f);
        }
    }
    async memberDay_receiveInviteAward(_0x52373a, _0x244710 = {}) {
        try {
            const _0x4f1c34 = {
                inviteUserId: _0x52373a
            };
            let _0x445214 = {
                    fn: "memberDay_receiveInviteAward",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "membe" + "rDayI" + "ndexS" + "ervic" + "e~rec" + "eiveI" + "nvite" + "Award",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x4f1c34
                },
                {
                    result: _0x48e49d
                } = await this.request(_0x445214);
            if (_0x48e49d?.["success"]) {
                let {
                    productName = "空气"
                } = _0x48e49d?.["obj"] || {};
                const _0x305509 = {
                    notify: true
                };
                this.log("会员日奖励" + ": " + productName, _0x305509);
            } else {
                let _0x5c78f3 = _0x48e49d?.["errorMessage"] || (_0x48e49d ? JSON.stringify(_0x48e49d) : "无返回");
                this.log("领取会员日" + "奖励失败:" + " " + _0x5c78f3);
                if (_0x5c78f3?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0x7a718e = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0x7a718e);
                }
            }
        } catch (_0x593d59) {
            console.log(_0x593d59);
        }
    }
    async memberDay_lottery(_0x319d66 = {}) {
        try {
            let _0xd13a1 = {
                    fn: "memberDay_lottery",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "membe" + "rDayL" + "otter" + "yServ" + "ice~l" + "otter" + "y",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x3224ef
                } = await this.request(_0xd13a1);
            if (_0x3224ef?.["success"]) {
                let {
                    productName = "空气"
                } = _0x3224ef?.["obj"] || {};
                const _0x4e99df = {
                    notify: true
                };
                this.log("会员日抽奖" + ": " + productName, _0x4e99df);
            } else {
                let _0x182807 = _0x3224ef?.["errorMessage"] || (_0x3224ef ? JSON.stringify(_0x3224ef) : "无返回");
                this.log("会员日抽奖" + "失败: " + _0x182807);
                if (_0x182807?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0xa33bd3 = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0xa33bd3);
                }
            }
        } catch (_0x1795ba) {
            console.log(_0x1795ba);
        }
    }
    async memberDay_taskList(_0x340464 = {}) {
        try {
            const _0xb5e45b = {
                activityCode: _0x1c616b,
                channelType: "MINI_PROGRAM"
            };
            let _0x5d9198 = {
                    fn: "memberDay_taskList",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "activ" + "ityTa" + "skSer" + "vice~" + "taskL" + "ist",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0xb5e45b
                },
                {
                    result: _0x55b5ca
                } = await this.request(_0x5d9198);
            if (_0x55b5ca?.["success"]) {
                let _0x2ccfdd = _0x55b5ca?.["obj"] || [];
                for (let _0x17bc26 of _0x2ccfdd.filter(_0x27783a => _0x27783a.status == 8259 + -8258 * 1)) {
                    if (this.memberDay_black) {
                        return;
                    }
                    await this.memberDay_fetchMixTaskReward(_0x17bc26);
                }
                for (let _0xfcd106 of _0x2ccfdd.filter(_0x3701a4 => _0x3701a4.status == 1617 + -1209 + -29 * 14)) {
                    if (this.memberDay_black) {
                        return;
                    }
                    switch (_0xfcd106.taskType) {
                        case "SEND_SUCCESS":
                        case "INVITEFRIENDS_PARTAKE_ACTIVITY":
                        case "OPEN_SVIP":
                        case "OPEN_NEW_EXPRESS_CARD":
                        case "OPEN_FAMILY_CARD":
                        case "CHARGE_NEW_EXPRESS_CARD":
                        case "INTEGRAL_EXCHANGE":
                        {
                            break;
                        }
                        default:
                        {
                            for (let _0x286fb1 = 9502 + -9502; _0x286fb1 < _0xfcd106.restFinishTime && !this.memberDay_black; _0x286fb1++) {
                                await this.memberDay_finishTask(_0xfcd106);
                            }
                            break;
                        }
                    }
                }
            } else {
                let _0x400b5b = _0x55b5ca?.["errorMessage"] || (_0x55b5ca ? JSON.stringify(_0x55b5ca) : "无返回");
                this.log("查询会员日" + "任务失败:" + " " + _0x400b5b);
                if (_0x400b5b?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0xbb5b50 = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0xbb5b50);
                }
            }
        } catch (_0x6891e2) {
            console.log(_0x6891e2);
        }
    }
    async memberDay_finishTask(_0x188e04, _0x59cdbe = {}) {
        try {
            const _0x2c036e = {
                taskCode: _0x188e04.taskCode
            };
            let _0x1fcc23 = {
                    fn: "memberDay_finishTask",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berEs" + "~task" + "Recor" + "d~fin" + "ishTa" + "sk",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x2c036e
                },
                {
                    result: _0x2ac6ba
                } = await this.request(_0x1fcc23);
            if (_0x2ac6ba?.["success"]) {
                this.log("完成会员日" + "任务[" + _0x188e04.taskName + "]成功");
                await this.memberDay_fetchMixTaskReward(_0x188e04);
            } else {
                let _0x244072 = _0x2ac6ba?.["errorMessage"] || (_0x2ac6ba ? JSON.stringify(_0x2ac6ba) : "无返回");
                this.log("完成会员日" + "任务[" + _0x188e04.taskName + "]失败: " + _0x244072);
                if (_0x244072?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0x5816e6 = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0x5816e6);
                }
            }
        } catch (_0x2e260c) {
            console.log(_0x2e260c);
        }
    }
    async memberDay_fetchMixTaskReward(_0x41e80d, _0x2433ac = {}) {
        try {
            const _0x1305de = {
                taskType: _0x41e80d.taskType,
                activityCode: _0x1c616b,
                channelType: "MINI_PROGRAM"
            };
            let _0xd8571 = {
                    fn: "memberDay_fetchMixTaskReward",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "activ" + "ityTa" + "skSer" + "vice~" + "fetch" + "MixTa" + "skRew" + "ard",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x1305de
                },
                {
                    result: _0x36086f
                } = await this.request(_0xd8571);
            if (_0x36086f?.["success"]) {
                this.log("领取会员日" + "任务[" + _0x41e80d.taskName + "]奖励成功");
            } else {
                let _0x231ad9 = _0x36086f?.["errorMessage"] || (_0x36086f ? JSON.stringify(_0x36086f) : "无返回");
                this.log("领取会员日" + "任务[" + _0x41e80d.taskName + ("]奖励失败" + ": ") + _0x231ad9);
                if (_0x231ad9?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0x2339b6 = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0x2339b6);
                }
            }
        } catch (_0x17dd53) {
            console.log(_0x17dd53);
        }
    }
    async memberDay_redPacketReceivedStatus(_0xfdfa8c = {}) {
        try {
            let _0x3b07de = {
                    fn: "memberDay_redPacketReceivedStatus",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "membe" + "rDayT" + "askSe" + "rvice" + "~redP" + "acket" + "Recei" + "vedSt" + "atus",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x5a308d
                } = await this.request(_0x3b07de);
            if (_0x5a308d?.["success"]) {
                for (let _0x38048d of _0x5a308d?.["obj"] || []) {
                    if (_0x38048d.received) {
                        continue;
                    }
                    let _0x26e677 = new Date().getHours();
                    _0x38048d.receiveHour == _0x26e677 && (await this.memberDay_receiveRedPacket(_0x38048d.receiveHour));
                }
            } else {
                let _0x58049c = _0x5a308d?.["errorMessage"] || (_0x5a308d ? JSON.stringify(_0x5a308d) : "无返回");
                this.log("会员日查询整点领红包" + "失败: " + _0x58049c);
                if (_0x58049c?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0x4ebf26 = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0x4ebf26);
                }
            }
        } catch (_0x1d6444) {
            console.log(_0x1d6444);
        }
    }
    async memberDay_receiveRedPacket(_0x2bd6e0, _0x416b42 = {}) {
        try {
            const _0xb00630 = {
                receiveHour: _0x2bd6e0
            };
            let _0x5c2dbb = {
                    fn: "memberDay_receiveRedPacket",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "membe" + "rDayT" + "askSe" + "rvice" + "~rece" + "iveRe" + "dPack" + "et",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0xb00630
                },
                {
                    result: _0x42f2a9
                } = await this.request(_0x5c2dbb);
            if (_0x42f2a9?.["success"]) {
                this.log("会员日领取" + _0x2bd6e0 + "点红包成功");
            } else {
                let _0x11e726 = _0x42f2a9?.["errorMessage"] || (_0x42f2a9 ? JSON.stringify(_0x42f2a9) : "无返回");
                this.log("会员日领取" + _0x2bd6e0 + ("点红包失败" + ": ") + _0x11e726);
                if (_0x11e726?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0x1acb7f = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0x1acb7f);
                }
            }
        } catch (_0x1a9c33) {
            console.log(_0x1a9c33);
        }
    }
    async memberDay_redPacketStatus(_0x5ab404 = {}) {
        try {
            let _0xf4b04e = {
                    fn: "memberDay_redPacketStatus",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "membe" + "rDayP" + "acket" + "Servi" + "ce~re" + "dPack" + "etSta" + "tus",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x399537
                } = await this.request(_0xf4b04e);
            if (_0x399537?.["success"]) {
                let {
                    drewToday: _0x5dc7c4,
                    packetList: _0x21921d
                } = _0x399537?.["obj"];
                this.memberDay_redPacket_drewToday = _0x5dc7c4;
                for (let _0x189931 of _0x21921d) {
                    this.memberDay_redPacket_map[_0x189931.level] = _0x189931.count;
                }
                let _0x2fc534 = _0x48074c;
                for (let _0x5be578 = 2843 * -2 + 692 + -15 * -333; _0x5be578 < _0x2fc534; _0x5be578++) {
                    let _0x4b3754 = this.memberDay_redPacket_map[_0x5be578];
                    while (_0x4b3754 >= -4927 + -3349 * -1 + -79 * -20) {
                        await this.memberDay_redPacketMerge(_0x5be578);
                        _0x4b3754 -= 10140 + -10138;
                    }
                }
                let _0x565e3a = [],
                    _0x5410db = 13678 + -13678;
                for (let _0x3d5190 in this.memberDay_redPacket_map) {
                    if (!this.memberDay_redPacket_map[_0x3d5190]) {
                        continue;
                    }
                    _0x565e3a.push("[" + _0x3d5190 + "级]X" + this.memberDay_redPacket_map[_0x3d5190]);
                    let _0x49b6f2 = parseInt(_0x3d5190);
                    _0x49b6f2 < _0x2fc534 && (_0x5410db += 8554 + -19 * 301 + -2834 << _0x49b6f2 - (-1 * 6471 + 4497 * -1 + 10969));
                }
                const _0xfabb87 = {
                    notify: true
                };
                this.log("会员日合成" + "列表: " + _0x565e3a.join(", "), _0xfabb87);
                if (this.memberDay_redPacket_map[_0x2fc534]) {
                    const _0x1ff22a = {
                        notify: true
                    };
                    this.log("会员日已拥" + "有[" + _0x2fc534 + "级]红包X" + this.memberDay_redPacket_map[_0x2fc534], _0x1ff22a);
                    await this.memberDay_redPacketDraw(_0x2fc534);
                } else {
                    let _0x2ba9d8 = _0x596697 - _0x5410db;
                    const _0x1b42cd = {
                        notify: true
                    };
                    this.log("会员日距离" + "[" + _0x2fc534 + ("级]红包还" + "差: [1" + "级]红包X") + _0x2ba9d8, _0x1b42cd);
                }
            } else {
                let _0x3470e0 = _0x399537?.["errorMessage"] || (_0x399537 ? JSON.stringify(_0x399537) : "无返回");
                this.log("查询会员日" + "合成失败:" + " " + _0x3470e0);
                if (_0x3470e0?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0x1d99aa = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0x1d99aa);
                }
            }
        } catch (_0x4be2b2) {
            console.log(_0x4be2b2);
        }
    }
    async memberDay_redPacketMerge(_0x10c25d, _0x2bbbf6 = {}) {
        try {
            const _0x53cb42 = {
                level: _0x10c25d,
                num: 2
            };
            let _0x535421 = {
                    fn: "memberDay_redPacketMerge",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "membe" + "rDayP" + "acket" + "Servi" + "ce~re" + "dPack" + "etMer" + "ge",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x53cb42
                },
                {
                    result: _0x2d9be6
                } = await this.request(_0x535421);
            if (_0x2d9be6?.["success"]) {
                this.log("会员日合成" + ": [" + _0x10c25d + ("级]红包X" + "2 -> " + "[") + (_0x10c25d + (14949 + -14948)) + "级]红包");
                this.memberDay_redPacket_map[_0x10c25d] -= 81 * -89 + 1115 + 6096;
                if (!this.memberDay_redPacket_map[_0x10c25d + (-9669 * 1 + -1412 * 2 + 12494)]) {
                    this.memberDay_redPacket_map[_0x10c25d + (1555 + -9846 + 8292)] = 1 * -3170 + -551 * 1 + 3721;
                }
                this.memberDay_redPacket_map[_0x10c25d + (-5229 + -5202 + 10432)]++;
            } else {
                let _0x441ffc = _0x2d9be6?.["errorMessage"] || (_0x2d9be6 ? JSON.stringify(_0x2d9be6) : "无返回");
                this.log("会员日合成" + "两个[" + _0x10c25d + ("级]红包失" + "败: ") + _0x441ffc);
                if (_0x441ffc?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0x24ab5f = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0x24ab5f);
                }
            }
        } catch (_0x5222ec) {
            console.log(_0x5222ec);
        }
    }
    async memberDay_redPacketDraw(_0x4d8ea7, _0xab21dd = {}) {
        try {
            let _0x252d81 = {
                    fn: "memberDay_redPacketDraw",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "membe" + "rDayP" + "acket" + "Servi" + "ce~re" + "dPack" + "etDra" + "w",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        level: _0x4d8ea7.toString()
                    }
                },
                {
                    result: _0x4dbc23
                } = await this.request(_0x252d81);
            if (_0x4dbc23?.["success"]) {
                let _0x2ee85c = _0x4dbc23?.["obj"]?.["map"](_0x2dd984 => _0x2dd984.couponName) || [];
                const _0x3cd128 = {
                    notify: true
                };
                this.log("会员日提取" + "[" + _0x4d8ea7 + ("级]红包:" + " ") + (_0x2ee85c.join(", ") || "空气"), _0x3cd128);
            } else {
                let _0x40ddef = _0x4dbc23?.["errorMessage"] || (_0x4dbc23 ? JSON.stringify(_0x4dbc23) : "无返回");
                this.log("会员日提取" + "[" + _0x4d8ea7 + ("级]红包失" + "败: ") + _0x40ddef);
                if (_0x40ddef?.["includes"]("没有资格参与活动")) {
                    this.memberDay_black = true;
                    const _0x29edc2 = {
                        notify: true
                    };
                    this.log("会员日任务风控", _0x29edc2);
                }
            }
        } catch (_0x42006c) {
            console.log(_0x42006c);
        }
    }
    async jika2024_taskList(_0x506887 = {}) {
        try {
            let _0x20bf0d = {
                    fn: "jika2024_taskList",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "activ" + "ityTa" + "skSer" + "vice~" + "taskL" + "ist",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        activityCode: _0xb8d615,
                        channelType: "MINI_PROGRAM"
                    }
                },
                {
                    result: _0x138bfb
                } = await this.request(_0x20bf0d);
            if (_0x138bfb?.["success"]) {
                let _0x125dbd = _0x138bfb?.["obj"] || [];
                for (let _0x4799b8 of _0x125dbd.filter(_0x85511d => _0x85511d.status == 2137 + -5499 + 3363)) {
                    if (this.jika_black) {
                        return;
                    }
                    for (let _0x3fdaa7 = -2937 + -6578 + 9515; _0x3fdaa7 < _0x4799b8.canReceiveTokenNum; _0x3fdaa7++) {
                        await this.jika2024_fetchMixTaskReward(_0x4799b8);
                    }
                }
                for (let _0x4d15d2 of _0x125dbd.filter(_0x1d7a3d => _0x1d7a3d.status == -25 * -103 + 916 + 1 * -3489)) {
                    if (this.jika_black) {
                        return;
                    }
                    switch (_0x4d15d2.taskType) {
                        case "PLAY_ACTIVITY_GAME":
                        {
                            this.log("开始玩新年集卡猜成语");
                            for (let _0x4e8e2f = 97 * -92 + 7582 + -79 * -17; _0x4e8e2f <= 1851 + -97 * 26 + 681; _0x4e8e2f++) {
                                let _0x5d50e9 = Math.floor(Math.random() * (-7589 + -617 * -9 + 5036)) + (-4689 + -8702 * 1 + -9 * -1599);
                                await _0x1366a8.wait(_0x5d50e9);
                                await this.jika2024_chengyu_win(_0x4e8e2f);
                            }
                            break;
                        }
                        case "FOLLOW_SFZHUNONG_VEDIO_ID":
                        {
                            break;
                        }
                        case "CLICK_MY_SETTING":
                        case "CLICK_TEMPLATE":
                        case "REAL_NAME":
                        case "SEND_SUCCESS_RECALL":
                        case "OPEN_SVIP":
                        case "OPEN_FAST_CARD":
                        case "FIRST_CHARGE_NEW_EXPRESS_CARD":
                        case "CHARGE_NEW_EXPRESS_CARD":
                        case "INTEGRAL_EXCHANGE":
                        {
                            break;
                        }
                        default:
                        {
                            for (let _0xb053bb = -8587 + 7745 + -1 * -842; _0xb053bb < _0x4d15d2.restFinishTime && !this.jika_black; _0xb053bb++) {
                                await this.jika2024_finishTask(_0x4d15d2);
                            }
                            break;
                        }
                    }
                }
            } else {
                this.log("查询新年集卡任务失败" + ": " + (_0x138bfb?.["errorMessage"] || (_0x138bfb ? JSON.stringify(_0x138bfb) : "无返回")));
            }
        } catch (_0x5d41ef) {
            console.log(_0x5d41ef);
        }
    }
    async jika2024_finishTask(_0x5a3c78, _0x2231f7 = {}) {
        try {
            const _0x243c7c = {
                taskCode: _0x5a3c78.taskCode
            };
            let _0x20ce60 = {
                    fn: "jika2024_finishTask",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nRout" + "ePost" + "/memb" + "erEs/" + "taskR" + "ecord" + "/fini" + "shTas" + "k",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x243c7c
                },
                {
                    result: _0x1c97bf
                } = await this.request(_0x20ce60);
            _0x1c97bf?.["success"] ? (this.log("完成新年集" + "卡任务[" + _0x5a3c78.taskName + "]成功"), await this.jika2024_fetchMixTaskReward(_0x5a3c78)) : this.log("完成新年集" + "卡任务[" + _0x5a3c78.taskName + "]失败: " + (_0x1c97bf?.["errorMessage"] || (_0x1c97bf ? JSON.stringify(_0x1c97bf) : "无返回")));
        } catch (_0x50668a) {
            console.log(_0x50668a);
        }
    }
    async jika2024_fetchMixTaskReward(_0x1b3000, _0x1a6121 = {}) {
        try {
            const _0x203f6a = {
                taskType: _0x1b3000.taskType,
                activityCode: _0xb8d615,
                channelType: "MINI_PROGRAM"
            };
            let _0x5c4582 = {
                    fn: "jika2024_fetchMixTaskReward",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nNoLo" + "ginPo" + "st/~m" + "ember" + "Nonac" + "tivit" + "y~yea" + "rEnd2" + "023Ta" + "skSer" + "vice~" + "fetch" + "MixTa" + "skRew" + "ard",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x203f6a
                },
                {
                    result: _0x405b41
                } = await this.request(_0x5c4582);
            if (_0x405b41?.["success"]) {
                let _0x10ccb0 = [],
                    {
                        receivedAccountList = [],
                        turnedAward = {}
                    } = _0x405b41.obj;
                for (let _0x20b794 of receivedAccountList) {
                    _0x10ccb0.push("" + (_0x30c981[_0x20b794.currency] || "[" + _0x20b794.currency + "]"));
                }
                turnedAward?.["couponName"] && _0x10ccb0.push("[优惠券]" + turnedAward?.["couponName"]);
                this.log("领取任务[" + _0x1b3000.taskName + "]奖励: " + _0x10ccb0.join(", "));
            } else {
                let _0x22e15c = _0x405b41?.["errorMessage"] || (_0x405b41 ? JSON.stringify(_0x405b41) : "无返回");
                this.log("领取任务[" + _0x1b3000.taskName + ("]奖励失败" + ": ") + _0x22e15c);
                _0x22e15c?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
            }
        } catch (_0x6bfaa9) {
            console.log(_0x6bfaa9);
        }
    }
    async jika2024_getAward(_0x42f65d, _0x14b34f = {}) {
        try {
            const _0x31f302 = {
                cardType: _0x42f65d
            };
            let _0x5dcdf7 = {
                    fn: "jika2024_getAward",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "yearE" + "nd202" + "3Gard" + "enPar" + "tySer" + "vice~" + "getAw" + "ard",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x31f302
                },
                {
                    result: _0x299652
                } = await this.request(_0x5dcdf7);
            if (_0x299652?.["success"]) {
                let _0x23f920 = [],
                    {
                        receivedAccountList = [],
                        turnedAward = {}
                    } = _0x299652.obj;
                for (let _0x1806c8 of receivedAccountList) {
                    _0x23f920.push("" + (_0x30c981[_0x1806c8.currency] || "[" + _0x1806c8.currency + "]"));
                }
                turnedAward?.["couponName"] && _0x23f920.push("[优惠券]" + turnedAward?.["couponName"]);
                this.log("逛集市领卡" + "奖励: " + _0x23f920.join(", "));
            } else {
                let _0x3162a2 = _0x299652?.["errorMessage"] || (_0x299652 ? JSON.stringify(_0x299652) : "无返回");
                this.log("逛集市领卡" + "失败: " + _0x3162a2);
                _0x3162a2?.["includes"]("用户手机号校验未通过") && (this.jika_black = true);
            }
        } catch (_0x30059f) {
            console.log(_0x30059f);
        }
    }
    async jika2024_chengyu_index(_0x32d187 = {}) {
        try {
            let _0x3a5581 = {
                    fn: "jika2024_chengyu_index",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "yearE" + "nd202" + "3Gues" + "sIdio" + "mServ" + "ice~i" + "ndex",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x3dd9fc
                } = await this.request(_0x3a5581);
            if (_0x3dd9fc?.["success"]) {
                if (_0x3dd9fc?.["obj"]?.["bigCardFlag"]) {
                    this.log("今天已完成新年集卡猜成语");
                } else {
                    this.log("开始玩新年集卡猜成语");
                    for (let _0x2a38ba = -5000 + -2129 + 7130; _0x2a38ba <= -2 * 1319 + 1 * -9930 + 12578; _0x2a38ba++) {
                        let _0x4fda2c = Math.floor(Math.random() * (-4407 + 8594 + 1187 * -1)) + (-1250 + 2812 + -562);
                        await _0x1366a8.wait(_0x4fda2c);
                        await this.jika2024_chengyu_win(_0x2a38ba);
                    }
                }
            } else {
                this.log("查询新年集卡猜成语任" + "务失败: " + (_0x3dd9fc?.["errorMessage"] || (_0x3dd9fc ? JSON.stringify(_0x3dd9fc) : "无返回")));
            }
        } catch (_0x33e13c) {
            console.log(_0x33e13c);
        }
    }
    async jika2024_chengyu_win(_0x24863b, _0x302bfb = {}) {
        try {
            const _0x5ceb0b = {
                index: _0x24863b
            };
            let _0x51a974 = {
                    fn: "jika2024_chengyu_win",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "yearE" + "nd202" + "3Gues" + "sIdio" + "mServ" + "ice~w" + "in",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x5ceb0b
                },
                {
                    result: _0x587690
                } = await this.request(_0x51a974);
            if (_0x587690?.["success"]) {
                let {
                    isAward: _0x40f4f9,
                    currencyDTOList: _0x35c136
                } = _0x587690?.["obj"];
                if (_0x40f4f9) {
                    let _0x517d10 = [];
                    for (let _0x15a93c of _0x35c136) {
                        _0x517d10.push("" + (_0x30c981[_0x15a93c.currency] || "[" + _0x15a93c.currency + "]"));
                    }
                    this.log("猜成语第" + _0x24863b + ("关通关成功" + ": ") + _0x517d10.join(", "));
                } else {
                    this.log("猜成语第" + _0x24863b + "关通关成功");
                }
            } else {
                let _0x175854 = _0x587690?.["errorMessage"] || (_0x587690 ? JSON.stringify(_0x587690) : "无返回");
                this.log("猜成语第" + _0x24863b + "关失败: " + _0x175854);
                _0x175854?.["includes"]("系统繁忙") && (this.jika_black = true);
            }
        } catch (_0x1871c1) {
            console.log(_0x1871c1);
        }
    }
    async jika2024_cardStatus(_0x372ae2 = {}) {
        try {
            let _0xd313b = {
                    fn: "jika2024_cardStatus",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "yearE" + "nd202" + "3Card" + "Servi" + "ce~ca" + "rdSta" + "tus",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x1f0c13
                } = await this.request(_0xd313b);
            if (_0x1f0c13?.["success"]) {
                let _0x1ab47f = _0x1f0c13?.["obj"]?.["accountList"] || [];
                if (_0x1ab47f?.["length"]) {
                    this.cards = _0x1ab47f.filter(_0x4e7e96 => _0x4e7e96.balance > 7204 + -9 * 39 + 623 * -11);
                    this.cards.sort((_0x204695, _0x5bf390) => {
                        return _0x5bf390.balance - _0x204695.balance;
                    });
                    let _0x2ca6ae = [];
                    for (let _0x559f88 of this.cards) {
                        let _0xb626e2 = _0x30c981[_0x559f88.currency] || "[" + _0x559f88.currency + "]";
                        _0x2ca6ae.push(_0xb626e2 + "X" + _0x559f88.balance);
                    }
                    const _0x23cbaa = {
                        notify: true
                    };
                    this.log("年卡: " + _0x2ca6ae.join(", "), _0x23cbaa);
                    if (this.cards.filter(_0x364631 => _0x364631.balance > 16538 + -16538).filter(_0x54ed54 => _0x54ed54.currency == "COMMON_CARD").length > 8923 + -9449 + -1 * -526) {
                        const _0x2f160a = {
                            notify: true
                        };
                        this.log("拥有万能卡, 请自行合成, 不自动抽奖", _0x2f160a);
                        return;
                    }
                    while (this.cards.filter(_0x4ed3eb => _0x4ed3eb.balance > -8331 + 18 * -29 + -681 * -13).length >= -108 * 83 + -7 * -760 + 3647 && !this.jika_black) {
                        await this.jika2024_collectDrawAward();
                    }
                } else {
                    const _0x32003c = {
                        notify: true
                    };
                    this.log("还没有收集到年卡", _0x32003c);
                }
            } else {
                this.log("查询已收集" + "年卡失败:" + " " + (_0x1f0c13?.["errorMessage"] || (_0x1f0c13 ? JSON.stringify(_0x1f0c13) : "无返回")));
            }
        } catch (_0x32dcaf) {
            console.log(_0x32dcaf);
        }
    }
    async jika2024_collectDrawAward(_0xcaa39f = {}) {
        try {
            let _0x1fc459 = this.cards.filter(_0x52a34c => _0x52a34c.balance > 1 * -1319 + 5323 + -4004).map(_0x5276f7 => _0x5276f7.currency);
            if (_0x1fc459.length > -2 * 4900 + -7186 + -9 * -1888) {
                _0x1fc459 = _0x1fc459.slice(-4 * 251 + 1680 + -26 * 26, 25 * -205 + -1690 + 6821);
            }
            const _0x2c6533 = {
                accountList: _0x1fc459
            };
            let _0x3fd1c4 = {
                    fn: "jika2024_collectDrawAward",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "yearE" + "nd202" + "3Card" + "Servi" + "ce~co" + "llect" + "DrawA" + "ward",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x2c6533
                },
                {
                    result: _0x3e0dc5
                } = await this.request(_0x3fd1c4);
            if (_0x3e0dc5?.["success"]) {
                let {
                    productName: _0x4e0483
                } = _0x3e0dc5?.["obj"];
                const _0x40966a = {
                    notify: true
                };
                this.log("使用" + _0x1fc459.length + ("种年卡合成" + ": ") + _0x4e0483, _0x40966a);
                for (let _0x1c10d4 of this.cards) {
                    _0x1fc459.includes(_0x1c10d4.currency) && (_0x1c10d4.balance -= -9358 + 9133 + 226);
                }
            } else {
                let _0x419b11 = _0x3e0dc5?.["errorMessage"] || (_0x3e0dc5 ? JSON.stringify(_0x3e0dc5) : "无返回");
                this.log("使用" + _0x1fc459.length + ("种年卡合成" + "失败: ") + _0x419b11);
                _0x419b11?.["includes"]("系统繁忙") && (this.jika_black = true);
            }
        } catch (_0x4336a2) {
            console.log(_0x4336a2);
        }
    }
    async jika2024_task(_0x12b519 = {}) {
        await this.jika2024_cardStatus();
    }
    async anniversary2024_weeklyGiftStatus(_0x4f2098 = {}) {
        try {
            let _0x1de0ca = {
                    fn: "anniversary2024_weeklyGiftStatus",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "Index" + "Servi" + "ce~we" + "eklyG" + "iftSt" + "atus",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x5dfec6
                } = await this.request(_0x1de0ca);
            if (_0x5dfec6?.["success"]) {
                let _0x466897 = _0x5dfec6?.["obj"]?.["weeklyGiftList"] || [];
                for (let _0x23fd21 of _0x466897) {
                    if (!_0x23fd21.received) {
                        let _0xa46cce = new Date(_0x23fd21.receiveStartTime),
                            _0x3e54fb = new Date(_0x23fd21.receiveEndTime),
                            _0x5ef6d9 = Date.now();
                        _0x5ef6d9 >= _0xa46cce.getTime() && _0x5ef6d9 <= _0x3e54fb.getTime() && (await this.anniversary2024_receiveWeeklyGift());
                    }
                }
            } else {
                let _0x6547a3 = _0x5dfec6?.["errorMessage"] || (_0x5dfec6 ? JSON.stringify(_0x5dfec6) : "无返回");
                this.log("查询周年庆每周领券失" + "败: " + _0x6547a3);
                (_0x6547a3?.["includes"]("系统繁忙") || _0x6547a3?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
            }
        } catch (_0x2c2cac) {
            console.log(_0x2c2cac);
        }
    }
    async anniversary2024_receiveWeeklyGift(_0x5ba826 = {}) {
        try {
            let _0x45e3cc = {
                    fn: "anniversary2024_receiveWeeklyGift",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "Index" + "Servi" + "ce~re" + "ceive" + "Weekl" + "yGift",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x3084e6
                } = await this.request(_0x45e3cc);
            if (_0x3084e6?.["success"]) {
                let _0x56e6a6 = _0x3084e6?.["obj"]?.["map"](_0x56a1fd => _0x56a1fd.productName);
                this.log("周年庆每周" + "领券: " + _0x56e6a6.join(", "));
            } else {
                let _0x2c46a3 = _0x3084e6?.["errorMessage"] || (_0x3084e6 ? JSON.stringify(_0x3084e6) : "无返回");
                this.log("周年庆每周" + "领券失败:" + " " + _0x2c46a3);
                (_0x2c46a3?.["includes"]("系统繁忙") || _0x2c46a3?.["includes"]("用户手机号校验未通过")) && (this.anniversary_black = true);
            }
        } catch (_0x1e4d00) {
            console.log(_0x1e4d00);
        }
    }
    async anniversary2024_taskList(_0x2534c7 = {}) {
        try {
            let _0x1ced3a = {
                    fn: "anniversary2024_taskList",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "activ" + "ityTa" + "skSer" + "vice~" + "taskL" + "ist",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        activityCode: _0x4c1524,
                        channelType: "MINI_PROGRAM"
                    }
                },
                {
                    result: _0x85486b
                } = await this.request(_0x1ced3a);
            if (_0x85486b?.["success"]) {
                let _0x383bc9 = _0x85486b?.["obj"] || [];
                for (let _0x5a77b3 of _0x383bc9.filter(_0x1e2ca8 => _0x1e2ca8.status == 18 * -1 + -6056 + 6075)) {
                    if (this.anniversary_black) {
                        return;
                    }
                    for (let _0x3750e7 = 1966 + -2 * 983; _0x3750e7 < _0x5a77b3.canReceiveTokenNum; _0x3750e7++) {
                        await this.anniversary2024_fetchMixTaskReward(_0x5a77b3);
                    }
                }
                for (let _0x180900 of _0x383bc9.filter(_0x299398 => _0x299398.status == -1019 * -2 + 10 * -355 + 1514)) {
                    if (this.anniversary_black) {
                        return;
                    }
                    switch (_0x180900.taskType) {
                        case "PLAY_ACTIVITY_GAME":
                        case "PLAY_HAPPY_ELIMINATION":
                        case "PARTAKE_SUBJECT_GAME":
                        {
                            break;
                        }
                        case "FOLLOW_SFZHUNONG_VEDIO_ID":
                        {
                            break;
                        }
                        case "BROWSE_VIP_CENTER":
                        case "GUESS_GAME_TIP":
                        case "CREATE_SFID":
                        case "CLICK_MY_SETTING":
                        case "CLICK_TEMPLATE":
                        case "REAL_NAME":
                        case "SEND_SUCCESS_RECALL":
                        case "OPEN_SVIP":
                        case "OPEN_FAST_CARD":
                        case "FIRST_CHARGE_NEW_EXPRESS_CARD":
                        case "CHARGE_NEW_EXPRESS_CARD":
                        case "INTEGRAL_EXCHANGE":
                        {
                            break;
                        }
                        default:
                        {
                            for (let _0x37943d = -4590 + 3557 + 1033; _0x37943d < _0x180900.restFinishTime && !this.anniversary_black; _0x37943d++) {
                                await this.anniversary2024_finishTask(_0x180900);
                            }
                            break;
                        }
                    }
                }
            } else {
                this.log("查询任务失" + "败: " + (_0x85486b?.["errorMessage"] || (_0x85486b ? JSON.stringify(_0x85486b) : "无返回")));
            }
        } catch (_0x4af478) {
            console.log(_0x4af478);
        }
    }
    async anniversary2024_finishTask(_0x4f0413, _0x39c7b0 = {}) {
        try {
            const _0x197ef6 = {
                taskCode: _0x4f0413.taskCode
            };
            let _0x1dd7e7 = {
                    fn: "anniversary2024_finishTask",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nRout" + "ePost" + "/memb" + "erEs/" + "taskR" + "ecord" + "/fini" + "shTas" + "k",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x197ef6
                },
                {
                    result: _0x5a814b
                } = await this.request(_0x1dd7e7);
            _0x5a814b?.["success"] ? (this.log("完成任务[" + _0x4f0413.taskName + "]成功"), await this.anniversary2024_fetchMixTaskReward(_0x4f0413)) : this.log("完成任务[" + _0x4f0413.taskName + "]失败: " + (_0x5a814b?.["errorMessage"] || (_0x5a814b ? JSON.stringify(_0x5a814b) : "无返回")));
        } catch (_0x4b0690) {
            console.log(_0x4b0690);
        }
    }
    async anniversary2024_fetchMixTaskReward(_0x56d9ab, _0x1556be = {}) {
        try {
            let _0x488f2b = {
                    fn: "anniversary2024_fetchMixTaskReward",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "TaskS" + "ervic" + "e~fet" + "chMix" + "TaskR" + "eward",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        taskType: _0x56d9ab.taskType,
                        activityCode: _0x4c1524,
                        channelType: "MINI_PROGRAM"
                    }
                },
                {
                    result: _0x469902
                } = await this.request(_0x488f2b);
            if (_0x469902?.["success"]) {
                let _0x2d9faa = [],
                    {
                        receivedAccountList = [],
                        turnedAward = {}
                    } = _0x469902?.["obj"]?.["account"];
                for (let _0x46e3a1 of receivedAccountList) {
                    _0x2d9faa.push("[" + _0x46e3a1.currency + "]X" + _0x46e3a1.amount);
                }
                turnedAward?.["productName"] && _0x2d9faa.push("[优惠券]" + turnedAward?.["productName"]);
                this.log("领取任务[" + _0x56d9ab.taskName + "]奖励: " + _0x2d9faa.join(", "));
            } else {
                let _0x2ddf1d = _0x469902?.["errorMessage"] || (_0x469902 ? JSON.stringify(_0x469902) : "无返回");
                this.log("领取任务[" + _0x56d9ab.taskName + ("]奖励失败" + ": ") + _0x2ddf1d);
                _0x2ddf1d?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
            }
        } catch (_0x23d50e) {
            console.log(_0x23d50e);
        }
    }
    async anniversary2024_unbox(_0x4ad52c = {}) {
        try {
            let _0x4f9eb8 = {
                    fn: "anniversary2024_unbox",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "CardS" + "ervic" + "e~unb" + "ox",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x2fc585
                } = await this.request(_0x4f9eb8);
            if (_0x2fc585?.["success"]) {
                let _0x465bda = [],
                    _0x5995ea = _0x2fc585?.["obj"]?.["account"]?.["receivedAccountList"] || [];
                for (let _0x4e4676 of _0x5995ea) {
                    _0x465bda.push("[" + _0x4e4676.currency + "]X" + _0x4e4676.amount);
                }
                this.log("拆盒子: " + (_0x465bda.join(", ") || "空气"));
            } else {
                let _0x26f559 = _0x2fc585?.["errorMessage"] || (_0x2fc585 ? JSON.stringify(_0x2fc585) : "无返回");
                this.log("拆盒子失败" + ": " + _0x26f559);
                _0x26f559?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
            }
        } catch (_0x173e9a) {
            console.log(_0x173e9a);
        }
    }
    async anniversary2024_game_list(_0x34c0ec = {}) {
        try {
            let _0x13a8db = {
                    fn: "anniversary2024_game_list",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "GameP" + "arkSe" + "rvice" + "~list",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x1c6205
                } = await this.request(_0x13a8db);
            if (_0x1c6205?.["success"]) {
                let {
                    topicPKInfo: _0x229203,
                    searchWordInfo: _0x1f3480,
                    happyEliminationInfo: _0x45c6c9
                } = _0x1c6205?.["obj"];
                !_0x229203?.["isPassFlag"] && (this.log("开始话题PK赛"), await this.anniversary2024_TopicPk_topicList());
                if (!_0x1f3480?.["isPassFlag"] || !_0x1f3480?.["isFinishDailyFlag"]) {
                    this.log("开始找字游戏");
                    for (let _0x2e518b = -3773 + 5764 + -1990; _0x2e518b <= 8481 + 14 * -110 + 6931 * -1; _0x2e518b++) {
                        let _0x376df3 = Math.floor(Math.random() * (10962 + -8962)) + (-4205 * -1 + -692 * 4 + -437);
                        await _0x1366a8.wait(_0x376df3);
                        if (!(await this.anniversary2024_SearchWord_win(_0x2e518b))) {
                            break;
                        }
                    }
                }
                if (!_0x45c6c9?.["isPassFlag"] || !_0x45c6c9?.["isFinishDailyFlag"]) {
                    this.log("开始消消乐");
                    for (let _0x524065 = 1 * -6827 + -2 * -1548 + -3732 * -1; _0x524065 <= 1709 * -4 + -6187 + 13053; _0x524065++) {
                        let _0x4e54eb = Math.floor(Math.random() * (5563 * -1 + 705 * -5 + 11088)) + (-3471 + 39 * -89 + -722 * -11);
                        await _0x1366a8.wait(_0x4e54eb);
                        if (!(await this.anniversary2024_HappyElimination_win(_0x524065))) {
                            break;
                        }
                    }
                }
            } else {
                let _0x93933c = _0x1c6205?.["errorMessage"] || (_0x1c6205 ? JSON.stringify(_0x1c6205) : "无返回");
                this.log("查询游戏状" + "态失败: " + _0x93933c);
                _0x93933c?.["includes"]("用户手机号校验未通过") && (this.anniversary_black = true);
            }
        } catch (_0x1f3cf4) {
            console.log(_0x1f3cf4);
        }
    }
    async anniversary2024_SearchWord_win(_0x11eafd, _0x8de7ad = {}) {
        let _0x49d502 = true;
        try {
            const _0x57fd82 = {
                index: _0x11eafd
            };
            let _0x32a07a = {
                    fn: "anniversary2024_SearchWord_win",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "Searc" + "hWord" + "Servi" + "ce~wi" + "n",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x57fd82
                },
                {
                    result: _0x23b651
                } = await this.request(_0x32a07a);
            if (_0x23b651?.["success"]) {
                let {
                    currencyDTOList = []
                } = _0x23b651?.["obj"];
                if (currencyDTOList?.["length"]) {
                    let _0x1e5c7e = [];
                    for (let _0x529c96 of currencyDTOList) {
                        _0x1e5c7e.push("[" + _0x529c96.currency + "]X" + _0x529c96.amount);
                    }
                    this.log("找字游戏第" + _0x11eafd + ("关通关成功" + ": ") + _0x1e5c7e.join(", "));
                } else {
                    this.log("找字游戏第" + _0x11eafd + "关通关成功");
                }
            } else {
                let _0xbd1d34 = _0x23b651?.["errorMessage"] || (_0x23b651 ? JSON.stringify(_0x23b651) : "无返回");
                this.log("找字游戏第" + _0x11eafd + "关失败: " + _0xbd1d34);
                _0xbd1d34?.["includes"]("系统繁忙") && (_0x49d502 = false);
            }
        } catch (_0x4c031c) {
            console.log(_0x4c031c);
        } finally {
            return _0x49d502;
        }
    }
    async anniversary2024_HappyElimination_win(_0x5c3b18, _0x21a64a = {}) {
        let _0xfecded = true;
        try {
            const _0x31e76e = {
                index: _0x5c3b18
            };
            let _0x31be01 = {
                    fn: "anniversary2024_HappyElimination_win",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "Happy" + "Elimi" + "natio" + "nServ" + "ice~w" + "in",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x31e76e
                },
                {
                    result: _0x15f2a6
                } = await this.request(_0x31be01);
            if (_0x15f2a6?.["success"]) {
                let {
                    isAward: _0x5ac8cd,
                    currencyDTOList: _0x17662b
                } = _0x15f2a6?.["obj"];
                if (_0x5ac8cd) {
                    let _0x37b420 = [];
                    for (let _0x1e6a2b of _0x17662b) {
                        _0x37b420.push("[" + _0x1e6a2b.currency + "]X" + _0x1e6a2b.amount);
                    }
                    this.log("消消乐第" + _0x5c3b18 + ("关通关成功" + ": ") + _0x37b420.join(", "));
                } else {
                    this.log("消消乐第" + _0x5c3b18 + "关通关成功");
                }
            } else {
                let _0x5af03a = _0x15f2a6?.["errorMessage"] || (_0x15f2a6 ? JSON.stringify(_0x15f2a6) : "无返回");
                this.log("消消乐第" + _0x5c3b18 + "关失败: " + _0x5af03a);
                _0x5af03a?.["includes"]("系统繁忙") && (_0xfecded = false);
            }
        } catch (_0x33eeb6) {
            console.log(_0x33eeb6);
        } finally {
            return _0xfecded;
        }
    }
    async anniversary2024_TopicPk_topicList(_0x5f3c66 = {}) {
        try {
            let _0x371315 = {
                    fn: "anniversary2024_TopicPk_topicList",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "Topic" + "PkSer" + "vice~" + "topic" + "List",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x43c53f
                } = await this.request(_0x371315);
            if (_0x43c53f?.["success"]) {
                let _0x47f0be = _0x43c53f?.["obj"]?.["topics"] || [],
                    _0x250cb0 = _0x47f0be?.["filter"](_0x2ef8c1 => !_0x2ef8c1?.["choose"])?.[-1 * 4303 + -83 * 11 + 5216]?.["index"] || 623 * -8 + 2103 * -4 + 13397;
                for (let _0x317c68 = parseInt(_0x250cb0); _0x317c68 <= -7301 + 3806 + 3507; _0x317c68++) {
                    let _0x140f2b = Math.floor(Math.random() * (9230 + -1040 + -1 * 6190)) + (6077 * -1 + 4961 + 3116);
                    await _0x1366a8.wait(_0x140f2b);
                    if (!(await this.anniversary2024_TopicPk_chooseSide(_0x317c68))) {
                        break;
                    }
                }
            } else {
                let _0x50b886 = _0x43c53f?.["errorMessage"] || (_0x43c53f ? JSON.stringify(_0x43c53f) : "无返回");
                this.log("查询话题PK赛记录失" + "败: " + _0x50b886);
                _0x50b886?.["includes"]("系统繁忙") && (this.anniversary_black = true);
            }
        } catch (_0x27f54c) {
            console.log(_0x27f54c);
        }
    }
    async anniversary2024_queryAccountStatus_refresh(_0x4d2e03 = {}) {
        try {
            let _0x38cd24 = {
                fn: "anniversary2024_queryAccountStatus_refresh",
                method: "post",
                url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "CardS" + "ervic" + "e~que" + "ryAcc" + "ountS" + "tatus",
                headers: {
                    ...this.getSign()
                },
                json: {}
            };
            await this.request(_0x38cd24);
        } catch (_0x1e7e2d) {
            console.log(_0x1e7e2d);
        }
    }
    async anniversary2024_TopicPk_chooseSide(_0x2b8de5, _0xf4207b = {}) {
        let _0x38d1d7 = true;
        try {
            const _0x2d2673 = {
                index: _0x2b8de5,
                choose: 0
            };
            let _0x1ce9c7 = {
                    fn: "anniversary2024_TopicPk_chooseSide",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "Topic" + "PkSer" + "vice~" + "choos" + "eSide",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x2d2673
                },
                {
                    result: _0x5f2a2a
                } = await this.request(_0x1ce9c7);
            if (_0x5f2a2a?.["success"]) {
                let {
                    currencyDTOList = []
                } = _0x5f2a2a?.["obj"];
                if (currencyDTOList.length) {
                    let _0x2a8eee = [];
                    for (let _0xb7933e of currencyDTOList) {
                        _0x2a8eee.push("[" + _0xb7933e.currency + "]X" + _0xb7933e.amount);
                    }
                    this.log("话题PK赛第" + _0x2b8de5 + ("个话题选择" + "成功: ") + _0x2a8eee.join(", "));
                } else {
                    this.log("话题PK赛第" + _0x2b8de5 + "个话题选择成功");
                }
            } else {
                let _0x24403d = _0x5f2a2a?.["errorMessage"] || (_0x5f2a2a ? JSON.stringify(_0x5f2a2a) : "无返回");
                this.log("话题PK赛第" + _0x2b8de5 + ("个话题失败" + ": ") + _0x24403d);
                _0x24403d?.["includes"]("系统繁忙") && (_0x38d1d7 = false);
            }
        } catch (_0x62d9d8) {
            console.log(_0x62d9d8);
        } finally {
            return _0x38d1d7;
        }
    }
    async anniversary2024_titleList(_0x44f6bb = {}) {
        try {
            let _0xcc1840 = {
                    fn: "anniversary2024_titleList",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "Guess" + "Servi" + "ce~ti" + "tleLi" + "st",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x1a5d38
                } = await this.request(_0xcc1840);
            if (_0x1a5d38?.["success"]) {
                let {
                        guessTitleInfoList = []
                    } = _0x1a5d38?.["obj"],
                    _0x28837b = _0x1366a8.time("yyyy-MM-dd"),
                    _0x1fbf37 = guessTitleInfoList.filter(_0x415101 => _0x415101.gameDate == _0x28837b);
                if (_0x1fbf37.length > 5680 + -41 * 13 + -5147) {
                    let _0x153915 = _0x1fbf37[3593 + -1 * 1325 + -12 * 189];
                    if (_0x153915.answerStatus) {
                        this.log("今日已回答过竞猜");
                    } else {
                        let _0x74f8c6 = _0x479306?.["answer"]?.[_0x28837b];
                        _0x479306?.["answer"]?.[_0x28837b] && (await this.anniversary2024_answer(_0x153915, _0x74f8c6));
                    }
                } else {
                    this.log("没有查询到今日竞猜题目");
                }
            } else {
                let _0x11f4f5 = _0x1a5d38?.["errorMessage"] || (_0x1a5d38 ? JSON.stringify(_0x1a5d38) : "无返回");
                this.log("查询每日口令竞猜失败" + ": " + _0x11f4f5);
            }
        } catch (_0x3fcd69) {
            console.log(_0x3fcd69);
        }
    }
    async anniversary2024_titleList_award(_0xdced74 = {}) {
        try {
            let _0x4c23d7 = {
                    fn: "anniversary2024_titleList_award",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "Guess" + "Servi" + "ce~ti" + "tleLi" + "st",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x49edbf
                } = await this.request(_0x4c23d7);
            if (_0x49edbf?.["success"]) {
                let {
                        guessTitleInfoList = []
                    } = _0x49edbf?.["obj"],
                    _0x542c2b = _0x1366a8.time("yyyy-MM-dd"),
                    _0x44a979 = guessTitleInfoList.filter(_0x3e3ef5 => _0x3e3ef5.gameDate == _0x542c2b);
                if (_0x44a979.length > 3309 + -2 * 4644 + 5979) {
                    let _0x5b5c0f = _0x44a979[-6859 + 49 * -187 + 16022];
                    if (_0x5b5c0f.answerStatus) {
                        let _0x10376f = [],
                            {
                                awardList = [],
                                puzzleList = []
                            } = _0x5b5c0f;
                        _0x10376f = _0x10376f.concat(awardList.map(_0x3463a4 => _0x3463a4.productName));
                        _0x10376f = _0x10376f.concat(puzzleList.map(_0x5c6944 => "[" + _0x5c6944.currency + "]X" + _0x5c6944.amount));
                        const _0x4f63e1 = {
                            notify: true
                        };
                        this.log("口令竞猜奖" + "励: " + (_0x10376f.join(", ") || "空气"), _0x4f63e1);
                    } else {
                        this.log("今日还没回答竞猜");
                    }
                } else {
                    this.log("没有查询到今日竞猜奖励");
                }
            } else {
                let _0x4a2fd5 = _0x49edbf?.["errorMessage"] || (_0x49edbf ? JSON.stringify(_0x49edbf) : "无返回");
                this.log("查询每日口令竞猜奖励" + "失败: " + _0x4a2fd5);
            }
        } catch (_0x37edf9) {
            console.log(_0x37edf9);
        }
    }
    async anniversary2024_answer(_0x27fd08, _0x37d905, _0xfc4694 = {}) {
        try {
            const _0x2eec4c = {
                period: _0x27fd08.period,
                answerInfo: _0x37d905
            };
            let _0x274fe1 = {
                    fn: "anniversary2024_answer",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "Guess" + "Servi" + "ce~an" + "swer",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x2eec4c
                },
                {
                    result: _0x333b7d
                } = await this.request(_0x274fe1);
            if (_0x333b7d?.["success"]) {
                this.log("口令竞猜回答成功");
                await this.anniversary2024_titleList_award();
            } else {
                let _0xba557e = _0x333b7d?.["errorMessage"] || (_0x333b7d ? JSON.stringify(_0x333b7d) : "无返回");
                this.log("口令竞猜回" + "答失败: " + _0xba557e);
            }
        } catch (_0x17a545) {
            console.log(_0x17a545);
        }
    }
    async anniversary2024_queryAccountStatus(_0x372d29 = {}) {
        try {
            let _0x216f6e = {
                fn: "anniversary2024_queryAccountStatus",
                method: "post",
                url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "CardS" + "ervic" + "e~que" + "ryAcc" + "ountS" + "tatus",
                headers: {
                    ...this.getSign()
                },
                json: {}
            };
            {
                let {
                    result: _0x15a017
                } = await this.request(_0x216f6e);
                if (_0x15a017?.["success"]) {
                    let _0x3bb718 = _0x15a017?.["obj"]?.["accountCurrencyList"] || [],
                        _0x543d3b = _0x3bb718.filter(_0x2d6ffe => _0x2d6ffe.currency == "UNBOX_CHANCE"),
                        _0x10be8b = _0x543d3b?.[567 * -13 + 7549 + 2 * -89]?.["balance"] || -25 * 107 + 8862 + -6187;
                    this.log("可以拆" + _0x10be8b + "次盒子");
                    while (_0x10be8b-- > 9362 + -4681 * 2) {
                        await this.anniversary2024_unbox();
                    }
                } else {
                    this.log("查询已收集" + "拼图失败:" + " " + (_0x15a017?.["errorMessage"] || (_0x15a017 ? JSON.stringify(_0x15a017) : "无返回")));
                }
            }
            {
                let {
                    result: _0x31ee71
                } = await this.request(_0x216f6e);
                if (_0x31ee71?.["success"]) {
                    let _0x4f1e69 = _0x31ee71?.["obj"]?.["accountCurrencyList"] || [];
                    _0x4f1e69 = _0x4f1e69.filter(_0x230de4 => _0x230de4.currency != "UNBOX_CHANCE");
                    if (_0x4f1e69?.["length"]) {
                        this.cards = _0x4f1e69;
                        let _0x272029 = [];
                        for (let _0x5848e1 of this.cards) {
                            _0x272029.push("[" + _0x5848e1.currency + "]X" + _0x5848e1.balance);
                        }
                        const _0x10bb5c = {
                            notify: true
                        };
                        this.log("拼图: " + _0x272029.join(", "), _0x10bb5c);
                        this.cards.sort((_0xde8686, _0x11484c) => {
                            return _0x11484c.balance - _0xde8686.balance;
                        });
                    } else {
                        const _0x2d8b39 = {
                            notify: true
                        };
                        this.log("还没有收集到拼图", _0x2d8b39);
                    }
                } else {
                    this.log("查询已收集" + "拼图失败:" + " " + (_0x31ee71?.["errorMessage"] || (_0x31ee71 ? JSON.stringify(_0x31ee71) : "无返回")));
                }
            }
        } catch (_0x2b5d24) {
            console.log(_0x2b5d24);
        }
    }
    async anniversary2024_queryAccountStatus_card(_0x48268b = {}) {
        try {
            let _0x14bab9 = {
                    fn: "anniversary2024_queryAccountStatus_card",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "CardS" + "ervic" + "e~que" + "ryAcc" + "ountS" + "tatus",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x1a4379
                } = await this.request(_0x14bab9);
            if (_0x1a4379?.["success"]) {
                let _0x1e48b9 = _0x1a4379?.["obj"]?.["accountCurrencyList"] || [];
                _0x1e48b9 = _0x1e48b9.filter(_0x48dafd => _0x48dafd.currency != "UNBOX_CHANCE");
                if (_0x1e48b9?.["length"]) {
                    this.cards = _0x1e48b9.sort((_0x232f54, _0x544cd3) => {
                        return _0x544cd3.balance - _0x232f54.balance;
                    });
                    let _0x5b666d = [];
                    for (let _0x2b371a of this.cards) {
                        _0x5b666d.push("[" + _0x2b371a.currency + "]X" + _0x2b371a.balance);
                    }
                    const _0x53fbfa = {
                        notify: true
                    };
                    this.log("拼图: " + _0x5b666d.join(", "), _0x53fbfa);
                    while (this.cards.filter(_0x37978f => _0x37978f.balance > -3719 + -1901 + -4 * -1405).length >= -5 * -1874 + 840 * -9 + -1807 && !this.anniversary_black) {
                        await this.anniversary2024_collectDrawAward();
                    }
                } else {
                    const _0xb581be = {
                        notify: true
                    };
                    this.log("还没有收集到拼图", _0xb581be);
                }
            } else {
                this.log("查询已收集" + "拼图失败:" + " " + (_0x1a4379?.["errorMessage"] || (_0x1a4379 ? JSON.stringify(_0x1a4379) : "无返回")));
            }
        } catch (_0x169dfd) {
            console.log(_0x169dfd);
        }
    }
    async anniversary2024_collectDrawAward(_0x30fe95 = {}) {
        try {
            this.cards = this.cards.sort((_0x2512df, _0x441a3a) => {
                return _0x441a3a.balance - _0x2512df.balance;
            });
            let _0x3eb7fe = this.cards.filter(_0x39a2e5 => _0x39a2e5.balance > -9810 + 4244 + 5566).map(_0x3a1bbe => _0x3a1bbe.currency);
            if (_0x3eb7fe.length == 2553 * -1 + -67 * 125 + 10937) {
                _0x3eb7fe = _0x3eb7fe.slice(-174 * -44 + -5012 + -2644, -8 * 428 + -273 * 25 + 10258);
            } else {
                if (_0x3eb7fe.length >= 4350 + 4456 * -1 + 113) {
                    _0x3eb7fe = _0x3eb7fe.slice(537 * -5 + -5932 + 8617, -3547 * 1 + -4383 + -1 * -7937);
                } else {
                    if (_0x3eb7fe.length >= -10 * -599 + -1 * 6610 + 625) {
                        _0x3eb7fe = _0x3eb7fe.slice(-3017 + 8393 + 32 * -168, -4 * -31 + 7234 + 3 * -2451);
                    } else {
                        _0x3eb7fe.length >= -1 * 1910 + -7478 + 9391 && (_0x3eb7fe = _0x3eb7fe.slice(10525 + -10525 * 1, 4398 + 727 * -6 + -33));
                    }
                }
            }
            const _0x40359c = {
                accountList: _0x3eb7fe
            };
            let _0x149f1a = {
                    fn: "anniversary2024_collectDrawAward",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "anniv" + "ersar" + "y2024" + "CardS" + "ervic" + "e~col" + "lectD" + "rawAw" + "ard",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x40359c
                },
                {
                    result: _0x5a5743
                } = await this.request(_0x149f1a);
            if (_0x5a5743?.["success"]) {
                let {
                    productName: _0x31f1ae
                } = _0x5a5743?.["obj"];
                const _0x33ac25 = {
                    notify: true
                };
                this.log("使用" + _0x3eb7fe.length + ("种卡合成:" + " ") + _0x31f1ae, _0x33ac25);
                for (let _0x1dee5f of this.cards) {
                    _0x3eb7fe.includes(_0x1dee5f.currency) && (_0x1dee5f.balance -= -3159 + -8878 + 12038);
                }
            } else {
                let _0x38565a = _0x5a5743?.["errorMessage"] || (_0x5a5743 ? JSON.stringify(_0x5a5743) : "无返回");
                this.log("使用" + _0x3eb7fe.length + ("种年卡合成" + "失败: ") + _0x38565a);
                _0x38565a?.["includes"]("系统繁忙") && (this.anniversary_black = true);
            }
        } catch (_0x401eec) {
            console.log(_0x401eec);
        }
    }
    async dragonBoat2024_weeklyGiftStatus(_0x33f330 = {}) {
        try {
            let _0xa75291 = {
                    fn: "dragonBoat2024_weeklyGiftStatus",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "drago" + "nBoat" + "2024I" + "ndexS" + "ervic" + "e~wee" + "klyGi" + "ftSta" + "tus",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x430fbc
                } = await this.request(_0xa75291);
            if (_0x430fbc?.["success"]) {
                let _0x28ed17 = _0x430fbc?.["obj"] || [];
                for (let _0x28b798 of _0x28ed17) {
                    if (!_0x28b798.received) {
                        let _0x2776b9 = new Date(_0x28b798.receiveStartTime),
                            _0x2a80e7 = new Date(_0x28b798.receiveEndTime),
                            _0x379521 = Date.now();
                        _0x379521 >= _0x2776b9.getTime() && _0x379521 <= _0x2a80e7.getTime() && (await this.dragonBoat2024_receiveWeeklyGift());
                    }
                }
            } else {
                let _0xb90950 = _0x430fbc?.["errorMessage"] || (_0x430fbc ? JSON.stringify(_0x430fbc) : "无返回");
                this.log("端午查询每周领券失败" + ": " + _0xb90950);
                (_0xb90950?.["includes"]("系统繁忙") || _0xb90950?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
            }
        } catch (_0xbc77c5) {
            console.log(_0xbc77c5);
        }
    }
    async dragonBoat2024_receiveWeeklyGift(_0x7bf582 = {}) {
        try {
            let _0x76b155 = _0x1366a8.randomList(_0x11aa2a.filter(_0x201b33 => _0x201b33 != this.userId));
            const _0x462b2d = {
                inviteUserId: _0x76b155,
                moduleType: "welfare_card"
            };
            let _0x1a90d0 = {
                    fn: "dragonBoat2024_receiveWeeklyGift",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "drago" + "nBoat" + "2024I" + "ndexS" + "ervic" + "e~rec" + "eiveW" + "eekly" + "Gift",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x462b2d
                },
                {
                    result: _0x12ef27
                } = await this.request(_0x1a90d0);
            if (_0x12ef27?.["success"]) {
                let _0x2d6a4d = _0x12ef27?.["obj"]?.["map"](_0x20ff57 => _0x20ff57.productName);
                this.log("端午每周领" + "券: " + _0x2d6a4d.join(", "));
            } else {
                let _0xe68b51 = _0x12ef27?.["errorMessage"] || (_0x12ef27 ? JSON.stringify(_0x12ef27) : "无返回");
                this.log("端午每周领" + "券失败: " + _0xe68b51);
                (_0xe68b51?.["includes"]("系统繁忙") || _0xe68b51?.["includes"]("用户手机号校验未通过")) && (this.dragonBoat_black = true);
            }
        } catch (_0x19e9e1) {
            console.log(_0x19e9e1);
        }
    }
    async dragonBoat2024_taskList(_0x235da4 = {}) {
        try {
            let _0x38b811 = {
                    fn: "dragonBoat2024_taskList",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "activ" + "ityTa" + "skSer" + "vice~" + "taskL" + "ist",
                    headers: {
                        ...this.getSign()
                    },
                    json: {
                        activityCode: _0x49a488,
                        channelType: "MINI_PROGRAM"
                    }
                },
                {
                    result: _0x10d679
                } = await this.request(_0x38b811);
            if (_0x10d679?.["success"]) {
                let _0x45abaa = _0x10d679?.["obj"] || [];
                for (let _0x17684c of _0x45abaa.filter(_0x2b3e27 => _0x2b3e27.status == 8404 + -8144 + -259)) {
                    if (this.dragonBoat_black) {
                        return;
                    }
                    for (let _0x18d9ee = 36 * -272 + -3746 + 13538; _0x18d9ee < _0x17684c.canReceiveTokenNum; _0x18d9ee++) {
                        await this.dragonBoat2024_fetchMixTaskReward(_0x17684c);
                    }
                }
                for (let _0xf52a71 of _0x45abaa.filter(_0x427bbd => _0x427bbd.status == -6701 + -7814 + 14517)) {
                    if (this.dragonBoat_black) {
                        return;
                    }
                    switch (_0xf52a71.taskType) {
                        case "PLAY_ACTIVITY_GAME":
                        case "FIRST_CHARGE_NEW_EXPRESS_CARD":
                        case "SEND_SUCCESS_RECALL":
                        case "OPEN_SVIP":
                        case "CHARGE_NEW_EXPRESS_CARD":
                        case "INTEGRAL_EXCHANGE":
                        {
                            break;
                        }
                        default:
                        {
                            for (let _0x47b87a = 1457 * -4 + -91 * -58 + 550; _0x47b87a < _0xf52a71.restFinishTime && !this.dragonBoat_black; _0x47b87a++) {
                                await this.dragonBoat2024_finishTask(_0xf52a71);
                            }
                            break;
                        }
                    }
                }
            } else {
                this.log("端午查询任" + "务失败: " + (_0x10d679?.["errorMessage"] || (_0x10d679 ? JSON.stringify(_0x10d679) : "无返回")));
            }
        } catch (_0x5bb57e) {
            console.log(_0x5bb57e);
        }
    }
    async dragonBoat2024_finishTask(_0x2fec7d, _0x26b7dd = {}) {
        try {
            const _0xcc4a1 = {
                taskCode: _0x2fec7d.taskCode
            };
            let _0xe0c2d2 = {
                    fn: "dragonBoat2024_finishTask",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berEs" + "~task" + "Recor" + "d~fin" + "ishTa" + "sk",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0xcc4a1
                },
                {
                    result: _0x17f75a
                } = await this.request(_0xe0c2d2);
            _0x17f75a?.["success"] ? (this.log("端午完成任" + "务[" + _0x2fec7d.taskName + "]成功"), await this.dragonBoat2024_fetchMixTaskReward(_0x2fec7d)) : this.log("端午完成任" + "务[" + _0x2fec7d.taskName + "]失败: " + (_0x17f75a?.["errorMessage"] || (_0x17f75a ? JSON.stringify(_0x17f75a) : "无返回")));
        } catch (_0x50edd6) {
            console.log(_0x50edd6);
        }
    }
    dragonBoat2024_parse_item(_0x1e0a8b) {
        let _0x2f4cb3 = [];
        for (let _0x374a44 of _0x1e0a8b) {
            let _0x51b9b5 = _0x374a44.currency,
                _0x3b76ce = _0x3a26cc[_0x51b9b5] || "[" + _0x51b9b5 + "]",
                _0x319dc5 = _0x374a44.balance || _0x374a44.amount || 65 * -62 + 7570 + -1770 * 2;
            const _0x2a7a1f = {
                currency: _0x51b9b5,
                type: _0x3b76ce,
                amount: _0x319dc5
            };
            _0x2f4cb3.push(_0x2a7a1f);
        }
        return _0x2f4cb3;
    }
    async dragonBoat2024_fetchMixTaskReward(_0x199ce9, _0x89a081 = {}) {
        try {
            let _0x3235f2 = {
                    fn: "dragonBoat2024_fetchMixTaskReward",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "drago" + "nBoat" + "2024T" + "askSe" + "rvice" + "~fetc" + "hTask" + "sRewa" + "rd",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0xe9f22d
                } = await this.request(_0x3235f2);
            if (_0xe9f22d?.["success"]) {
                let _0x4a224b = this.dragonBoat2024_parse_item(_0xe9f22d?.["obj"]?.["receivedAccountList"] || []);
                _0x4a224b = _0x4a224b.map(_0x3c870e => _0x3c870e.type + "x" + _0x3c870e.amount);
                this.log("端午领取任" + "务[" + _0x199ce9.taskName + "]奖励: " + _0x4a224b.join(", "));
            } else {
                let _0x402c01 = _0xe9f22d?.["errorMessage"] || (_0xe9f22d ? JSON.stringify(_0xe9f22d) : "无返回");
                this.log("端午领取任" + "务[" + _0x199ce9.taskName + ("]奖励失败" + ": ") + _0x402c01);
                _0x402c01?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
            }
        } catch (_0x1cf24f) {
            console.log(_0x1cf24f);
        }
    }
    async dragonBoat2024_game_indexInfo(_0x4ea6e4 = {}) {
        try {
            let _0x5ebb2d = {
                    fn: "dragonBoat2024_game_indexInfo",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "drago" + "nBoat" + "2024G" + "ameSe" + "rvice" + "~inde" + "xInfo",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x1cdae1
                } = await this.request(_0x5ebb2d);
            if (_0x1cdae1?.["success"]) {
                let _0x39f67c = _0x1cdae1?.["obj"]?.["ifPassAllLevel"];
                await this.dragonBoat2024_game_init(_0x39f67c);
            } else {
                let _0x255673 = _0x1cdae1?.["errorMessage"] || (_0x1cdae1 ? JSON.stringify(_0x1cdae1) : "无返回");
                this.log("端午查询游戏状态失败" + ": " + _0x255673);
                _0x255673?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
            }
        } catch (_0x4872d3) {
            console.log(_0x4872d3);
        }
    }
    async dragonBoat2024_game_init(_0x4390fe, _0x437d67 = {}) {
        try {
            let _0x24900b = {
                    fn: "dragonBoat2024_game_init",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "drago" + "nBoat" + "2024G" + "ameSe" + "rvice" + "~init",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x5637ee
                } = await this.request(_0x24900b);
            if (_0x5637ee?.["success"]) {
                let {
                        gotPushTimeOfToday: _0x426874,
                        currentIndex: _0x4477f0
                    } = _0x5637ee?.["obj"],
                    _0x31cca7 = -1 * -5027 + 5025 + 1436 * -7;
                if (!_0x4390fe) {
                    _0x31cca7 = -1051 * 1 + -1095 + 2176;
                } else {
                    _0x426874 < -474 * 21 + 2585 + 7372 && (_0x31cca7 = (-5733 + 680 * -10 + 12536) * (12190 + 1 * -12187 - _0x426874));
                }
                if (_0x31cca7 > -5687 + 9616 + -3929) {
                    this.log("端午划龙舟" + ", 目标:" + " " + _0x31cca7 + "关");
                    let _0x3b35d4 = Math.min(_0x31cca7 + _0x4477f0, -2111 + -467 + 2608);
                    for (let _0x5ced23 = _0x4477f0; _0x5ced23 <= _0x3b35d4; _0x5ced23++) {
                        let _0x382886 = Math.floor(Math.random() * (-2911 * -1 + 2 * -3781 + 6651)) + (976 + -6093 * 1 + -1 * -7117);
                        await _0x1366a8.wait(_0x382886);
                        if (!(await this.dragonBoat2024_boat_win(_0x5ced23))) {
                            break;
                        }
                    }
                }
            } else {
                let _0x28076f = _0x5637ee?.["errorMessage"] || (_0x5637ee ? JSON.stringify(_0x5637ee) : "无返回");
                this.log("端午查询游戏状态失败" + ": " + _0x28076f);
                _0x28076f?.["includes"]("用户手机号校验未通过") && (this.dragonBoat_black = true);
            }
        } catch (_0x4027be) {
            console.log(_0x4027be);
        }
    }
    async dragonBoat2024_boat_win(_0x41d2ec = -8238 * -1 + -201 + -8036, _0x401fcd = {}) {
        let _0x3eed3e = true;
        try {
            const _0x56585c = {
                levelIndex: _0x41d2ec
            };
            let _0x3496b4 = {
                    fn: "dragonBoat2024_boat_win",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "drago" + "nBoat" + "2024G" + "ameSe" + "rvice" + "~win",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x56585c
                },
                {
                    result: _0x17474d
                } = await this.request(_0x3496b4);
            if (_0x17474d?.["success"]) {
                let _0x1b6957 = this.dragonBoat2024_parse_item(_0x17474d?.["obj"]?.["currentAwardList"] || []);
                _0x1b6957 = _0x1b6957.map(_0x278664 => _0x278664.type + "x" + _0x278664.amount);
                _0x1b6957.length ? this.log("端午划龙舟第" + _0x41d2ec + ("关通关成功" + ": ") + _0x1b6957.join(", ")) : this.log("端午划龙舟第" + _0x41d2ec + "关通关成功");
            } else {
                let _0x43deae = _0x17474d?.["errorMessage"] || (_0x17474d ? JSON.stringify(_0x17474d) : "无返回");
                this.log("端午划龙舟第" + _0x41d2ec + "关失败: " + _0x43deae);
                _0x43deae?.["includes"]("系统繁忙") && (_0x3eed3e = false);
            }
        } catch (_0x26f38a) {
            console.log(_0x26f38a);
        } finally {
            return _0x3eed3e;
        }
    }
    async dragonBoat2024_coinStatus(_0x3059d5 = {}) {
        try {
            let _0x2263bb = {
                fn: "dragonBoat2024_coinStatus",
                method: "post",
                url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "drago" + "nBoat" + "2024C" + "oinSe" + "rvice" + "~coin" + "Statu" + "s",
                headers: {
                    ...this.getSign()
                },
                json: {}
            };
            {
                let {
                    result: _0x228aed
                } = await this.request(_0x2263bb);
                if (_0x228aed?.["success"]) {
                    let _0x22768a = _0x228aed?.["obj"]?.["accountCurrencyList"] || [],
                        _0x181dd5 = _0x22768a.filter(_0x36fde3 => _0x36fde3.currency == "PUSH_TIMES"),
                        _0x45da5d = _0x181dd5?.[-4 * 2040 + 59 * -158 + 17482]?.["balance"] || -2293 + 3251 + -479 * 2;
                    this.log("端午可以推" + _0x45da5d + "次金币");
                    while (_0x45da5d-- > -7051 * 1 + 3533 + 3518) {
                        await this.dragonBoat2024_pushCoin();
                    }
                } else {
                    this.log("端午查询推金币状态失" + "败: " + (_0x228aed?.["errorMessage"] || (_0x228aed ? JSON.stringify(_0x228aed) : "无返回")));
                }
            }
            {
                let {
                    result: _0x19ac46
                } = await this.request(_0x2263bb);
                if (_0x19ac46?.["success"]) {
                    let {
                            accountCurrencyList = [],
                            pushedTimesToday: _0x554c56,
                            pushedTimesTotal: _0x3704cf
                        } = _0x19ac46?.["obj"],
                        _0x41ccf7 = this.dragonBoat2024_parse_item(accountCurrencyList),
                        _0x193048 = _0x41ccf7.filter(_0x1b8c4a => _0x1b8c4a.currency == "COIN"),
                        _0x1a16a2 = _0x41ccf7.filter(_0x18f904 => _0x18f904.currency == "RICH_CARD_GAME");
                    this.coin = _0x193048?.[-7664 + 1647 + 6017]?.["amount"] || -117 + -7220 + 7337;
                    this.rich_card = _0x1a16a2?.[-538 + 3835 + -3297]?.["amount"] || -9044 + 6201 + 2843;
                    const _0x35bbb2 = {
                        notify: true
                    };
                    this.log("端午金币:" + " " + this.coin + (", 发财卡" + ": ") + this.rich_card, _0x35bbb2);
                    let _0x4ca2a9 = Math.floor(this.coin / (2233 + -4145 * 2 + 6287)),
                        _0x252cd5 = Math.min(_0x4ca2a9, this.rich_card);
                    this.log("端午可以抽发财卡池" + _0x252cd5 + "次");
                    while (_0x252cd5-- > -9993 + -2605 + 12598) {
                        await this.dragonBoat2024_prizeDraw(5041 + -1 * 59 + -4978);
                    }
                } else {
                    this.log("端午查询金" + "币失败: " + (_0x19ac46?.["errorMessage"] || (_0x19ac46 ? JSON.stringify(_0x19ac46) : "无返回")));
                }
            }
        } catch (_0x328582) {
            console.log(_0x328582);
        }
    }
    async dragonBoat2024_givePushTimes(_0x5c88c5 = {}) {
        let _0x3f8184 = true;
        try {
            let _0x35900b = {
                fn: "dragonBoat2024_givePushTimes",
                method: "post",
                url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "drago" + "nBoat" + "2024C" + "oinSe" + "rvice" + "~give" + "PushT" + "imes",
                headers: {
                    ...this.getSign()
                },
                json: {}
            };
            await this.request(_0x35900b);
        } catch (_0x4183b8) {
            console.log(_0x4183b8);
        } finally {
            return _0x3f8184;
        }
    }
    async dragonBoat2024_pushCoin(_0x29d4dc = {}) {
        try {
            const _0x1f8a57 = {
                plateToken: null
            };
            let _0x322a6c = {
                    fn: "dragonBoat2024_pushCoin",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "drago" + "nBoat" + "2024C" + "oinSe" + "rvice" + "~push" + "Coin",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x1f8a57
                },
                {
                    result: _0xf2ce07
                } = await this.request(_0x322a6c);
            if (_0xf2ce07?.["success"]) {
                let _0x50c982 = this.dragonBoat2024_parse_item(_0xf2ce07?.["obj"]?.["receivedAccountList"] || []);
                _0x50c982 = _0x50c982.map(_0x50bef6 => _0x50bef6.type + "x" + _0x50bef6.amount);
                _0x50c982.length ? this.log("端午推金币" + "成功: " + _0x50c982.join(", ")) : this.log("端午推金币成功, 没有获得奖品");
            } else {
                this.log("端午推金币" + "失败: " + (_0xf2ce07?.["errorMessage"] || (_0xf2ce07 ? JSON.stringify(_0xf2ce07) : "无返回")));
            }
        } catch (_0x418d8d) {
            console.log(_0x418d8d);
        }
    }
    async dragonBoat2024_coinStatus_checkDraw(_0x252dbf = {}) {
        try {
            let _0x342e17 = {
                    fn: "dragonBoat2024_coinStatus",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "drago" + "nBoat" + "2024C" + "oinSe" + "rvice" + "~coin" + "Statu" + "s",
                    headers: {
                        ...this.getSign()
                    },
                    json: {}
                },
                {
                    result: _0x562f60
                } = await this.request(_0x342e17);
            if (_0x562f60?.["success"]) {
                let {
                        accountCurrencyList = [],
                        pushedTimesToday: _0xe51731,
                        pushedTimesTotal: _0x1641b7
                    } = _0x562f60?.["obj"],
                    _0x2d6618 = this.dragonBoat2024_parse_item(accountCurrencyList),
                    _0x2b9d1b = _0x2d6618.filter(_0x1cd191 => _0x1cd191.currency == "COIN"),
                    _0x50f748 = _0x2d6618.filter(_0x4f2c5a => _0x4f2c5a.currency == "RICH_CARD_GAME");
                this.coin = _0x2b9d1b?.[-3 * 1072 + -282 + 3498]?.["amount"] || -2066 * 1 + -97 * -27 + -553;
                this.rich_card = _0x50f748?.[-8638 + -9711 + 18349]?.["amount"] || -231 * 16 + 5394 + -849 * 2;
                const _0x4b0a77 = {
                    notify: true
                };
                this.log("端午金币:" + " " + this.coin + (", 发财卡" + ": ") + this.rich_card, _0x4b0a77);
                let _0x313b37 = Math.floor(this.coin / (3133 + 1 * -2903)),
                    _0x244ca0 = Math.min(_0x313b37, this.rich_card);
                this.log("端午可以抽发财卡池" + _0x244ca0 + "次");
                while (_0x244ca0-- > -233 * -13 + 551 * -7 + 828) {
                    if (await this.dragonBoat2024_prizeDraw(1143 + -1 * -6354 + -7493 * 1)) {
                        this.coin -= 7545 + -8101 + 786;
                    } else {
                        break;
                    }
                }
                const _0x306998 = {
                    idx: 3,
                    coin: 200
                };
                const _0x479c92 = {
                    idx: 2,
                    coin: 150
                };
                const _0xa89de6 = {
                    idx: 1,
                    coin: 30
                };
                const _0x1b2791 = [_0x306998, _0x479c92, _0xa89de6];
                for (let _0x32dfdf of _0x1b2791) {
                    while (this.coin >= _0x32dfdf.coin) {
                        if (await this.dragonBoat2024_prizeDraw(_0x32dfdf.idx)) {
                            this.coin -= _0x32dfdf.coin;
                        } else {
                            break;
                        }
                    }
                }
            } else {
                this.log("端午查询金" + "币失败: " + (_0x562f60?.["errorMessage"] || (_0x562f60 ? JSON.stringify(_0x562f60) : "无返回")));
            }
        } catch (_0x2f499e) {
            console.log(_0x2f499e);
        }
    }
    async dragonBoat2024_prizeDraw(_0x2d53ba, _0x53a4ec = {}) {
        let _0x4dd177 = false;
        try {
            const _0x52237f = {
                drawType: _0x2d53ba
            };
            let _0x287d8b = {
                    fn: "dragonBoat2024_prizeDraw",
                    method: "post",
                    url: "https" + "://mc" + "s-mim" + "p-web" + ".sf-e" + "xpres" + "s.com" + "/mcs-" + "mimp/" + "commo" + "nPost" + "/~mem" + "berNo" + "nacti" + "vity~" + "drago" + "nBoat" + "2024L" + "otter" + "yServ" + "ice~p" + "rizeD" + "raw",
                    headers: {
                        ...this.getSign()
                    },
                    json: _0x52237f
                },
                {
                    result: _0x104f23
                } = await this.request(_0x287d8b);
            if (_0x104f23?.["success"]) {
                _0x4dd177 = true;
                let {
                    giftBagName = "",
                    giftBagDesc = ""
                } = _0x104f23?.["obj"];
                const _0x2f6b34 = {
                    notify: true
                };
                this.log("端午奖池[" + _0x2d53ba + ("]抽奖: " + "[") + giftBagName + "]" + giftBagDesc, _0x2f6b34);
            } else {
                this.log("端午奖池[" + _0x2d53ba + ("]抽奖失败" + ": ") + (_0x104f23?.["errorMessage"] || (_0x104f23 ? JSON.stringify(_0x104f23) : "无返回")));
            }
        } catch (_0x1e405a) {
            console.log(_0x1e405a);
        } finally {
            return _0x4dd177;
        }
    }
    async anniversary2024_task(_0x170583 = {}) {
        const _0x9b5999 = "2|0|4|1|3".split("|");
        let _0x98acf0 = -5927 * -1 + 1111 + -7038;
        while (true) {
            switch (_0x9b5999[_0x98acf0++]) {
                case "0":
                    if (this.anniversary_black) {
                        return;
                    }
                    continue;
                case "1":
                    await this.anniversary2024_taskList();
                    continue;
                case "2":
                    await this.anniversary2024_weeklyGiftStatus();
                    continue;
                case "3":
                    await this.anniversary2024_queryAccountStatus();
                    continue;
                case "4":
                    await this.anniversary2024_game_list();
                    continue;
            }
            break;
        }
    }
    async anniversary2024_draw_task(_0x428c50 = {}) {
        let _0x4b080b = Date.now();
        if (_0x4b080b < 529344565 * -7 + -204235879877 * -3 + 1107513772324 || _0x4b080b > -554460514913 + 1542297804561 + 730975510352) {
            return;
        }
        await this.dragonBoat2024_coinStatus_checkDraw();
    }
    async dragonBoat2024_task(_0xbf0e9e = {}) {
        let _0xfc310e = Date.now();
        if (_0xfc310e < -136003107653 * -9 + 565877105693 + -73389074570 || _0xfc310e > -2326735383069 + 2212415576631 + 1832509806438) {
            return;
        }
        await this.dragonBoat2024_weeklyGiftStatus();
        if (this.dragonBoat_black) {
            return;
        }
        await this.dragonBoat2024_game_indexInfo();
        await this.dragonBoat2024_taskList();
        await this.dragonBoat2024_givePushTimes();
        await this.dragonBoat2024_coinStatus();
    }
    async dragonBoat2024_draw_task(_0xad36aa = {}) {
        await this.anniversary2024_queryAccountStatus_card();
    }
    async memberDay_task(_0x216460 = {}) {
        let _0x355465 = new Date().getDate();
        _0x355465 >= 169 * -13 + 8187 + -1988 * 3 && _0x355465 <= -5558 + -7839 + -5 * -2685 && (await this.memberDay_index());
    }
    async userTask(_0x358065 = {}) {
        const _0x5294aa = {
                hkjnp: "1|7|2" + "|6|5|" + "4|3|0",
                JyZtl: "true"
            },
            _0x576479 = _0x5294aa.hkjnp.split("|");
        let _0x256659 = -2726 + 426 + 2300;
        while (true) {
            switch (_0x576479[_0x256659++]) {
                case "0":
                    await this.coupon_list();
                    continue;
                case "1":
                    _0x1366a8.log("\n----" + "-----" + "-----" + " 账号[" + this.index + ("] ---" + "-----" + "-----" + "-"));
                    continue;
                case "2":
                    await this.superWelfare_receiveRedPacket();
                    continue;
                case "3":
                    if (_0x3bec27 == _0x5294aa.JyZtl) {
                        await this.anniversary2024_draw_task();
                    }
                    continue;
                case "4":
                    await this.memberDay_task();
                    continue;
                case "5":
                    if (_0x94f81d == "true") {
                        await this.bee_indexData();
                    }
                    continue;
                case "6":
                    await this.automaticSignFetchPackage();
                    continue;
                case "7":
                    if (!(await this.refresh_cookie())) {
                        return;
                    }
                    continue;
            }
            break;
        }
    }
}
!(async () => {
    //if (!(await _0x1325bb())) {
    //return;
    //}
    await _0x1a0bdc();
    _0x1366a8.read_env(_0x520715);
    let _0xb2066d = _0x94f81d == "true" ? "运行" : "不运行";
    _0x1366a8.log("");
    const _0x287c95 = {
        notify: true
    };
    _0x1366a8.log("采蜜游戏目" + "前设置为:" + " " + _0xb2066d, _0x287c95);
    _0x1366a8.log("");
    for (let _0x54d421 of _0x1366a8.userList) {
        await _0x54d421.userTask();
    }
})().catch(_0x4c6d3b => _0x1366a8.log(_0x4c6d3b))["final" + "ly"](() => _0x1366a8.exitNow());
async function _0x1325bb(_0x36df = -3623 * -1 + 1033 + -4656) {
    let _0xfbf9a4 = false;
    try {
        let _0x1c7a38 = {
                fn: "auth",
                method: "get",
                url: _0x1e5430,
                timeout: 20000
            },
            {
                statusCode: _0x3c25bb,
                result: _0x1fc10e
            } = await _0xd9af8d.request(_0x1c7a38);
        if (_0x3c25bb != -8621 + -149 * -12 + 7033) {
            _0x36df++ < _0x4da51e && (_0xfbf9a4 = await _0x1325bb(_0x36df));
            return _0xfbf9a4;
        }
        if (_0x1fc10e?.["code"] == -8369 * -1 + 5903 + -14272) {
            _0x1fc10e = JSON.parse(_0x1fc10e.data.file.data);
            if (_0x1fc10e?.["commonNotify"] && _0x1fc10e.commonNotify.length > -2 * 4574 + -6185 + 15333) {
                const _0x578c99 = {
                    notify: true
                };
                _0x1366a8.log(_0x1fc10e.commonNotify.join("\n") + "\n", _0x578c99);
            }
            _0x1fc10e?.["commonMsg"] && _0x1fc10e.commonMsg.length > -6754 + -3309 * -1 + 3445 && _0x1366a8.log(_0x1fc10e.commonMsg.join("\n") + "\n");
            if (_0x1fc10e[_0x16c88c]) {
                let _0x4a47b6 = _0x1fc10e[_0x16c88c];
                _0x4a47b6.status == 1 * -641 + -9604 + -3 * -3415 ? _0x30f72a >= _0x4a47b6.version ? (_0xfbf9a4 = true, _0x1366a8.log(_0x4a47b6.msg[_0x4a47b6.status]), _0x1366a8.log(_0x4a47b6.updateMsg), _0x1366a8.log("现在运行的脚本版本是" + "：" + _0x30f72a + ("，最新脚本" + "版本：") + _0x4a47b6.latestVersion)) : _0x1366a8.log(_0x4a47b6.versionMsg) : _0x1366a8.log(_0x4a47b6.msg[_0x4a47b6.status]);
            } else {
                _0x1366a8.log(_0x1fc10e.errorMsg);
            }
        } else {
            _0x36df++ < _0x4da51e && (_0xfbf9a4 = await _0x1325bb(_0x36df));
        }
    } catch (_0x135476) {
        _0x1366a8.log(_0x135476);
    } finally {
        return _0xfbf9a4;
    }
}
async function _0x1a0bdc() {
    let _0x3164a8 = false;
    try {
        let _0x3d36f5 = {
                fn: "auth",
                method: "get",
                url: _0x5c6146
            },
            {
                statusCode: _0x407627,
                result: _0x2d7591
            } = await _0xd9af8d.request(_0x3d36f5);
        if (_0x407627 != -4133 + -3 * -2265 + 2462 * -1) {
            return Promise.resolve();
        }
        _0x2d7591?.["code"] == -1131 + 7422 + -6291 && (_0x2d7591 = JSON.parse(_0x2d7591.data.file.data), _0x11aa2a = _0x2d7591?.["inviteUserId"] || _0x11aa2a, _0x479306 = _0x2d7591?.["anniversary_2024"] || _0x479306);
    } catch (_0x3ecbd4) {
        _0x1366a8.log(_0x3ecbd4);
    } finally {
        return _0x3164a8;
    }
}
function _0x1c156a(_0x5cb590) {
    const _0x2c79b8 = {
        LkKGI: "6|9|8|0|10" + "|4|2|" + "1|7|1" + "1|3|5",
        dgxKe: function (_0x2a6709, _0x34d281) {
            return _0x2a6709 * _0x34d281;
        },
        DaMXK: "hh:mm" + ":ss",
        VuAvk: function (_0x157b9b, _0x50f79c) {
            return _0x157b9b + _0x50f79c;
        },
        NEiit: function (_0x285062, _0x3dcda4) {
            return _0x285062 < _0x3dcda4;
        },
        resky: function (_0x257dc5, _0x36b14c) {
            return _0x257dc5 / _0x36b14c;
        },
        JdLcq: function (_0x2a0e75, _0x31442c) {
            return _0x2a0e75 == _0x31442c;
        },
        MvcsX: function (_0x560084, _0x3e37f9) {
            return _0x560084 + _0x3e37f9;
        },
        XNQKA: function (_0x30e571, _0xed829b) {
            return _0x30e571 + _0xed829b;
        },
        cisfG: "2|4|3|0|1",
        ykTIf: function (_0x223e54, _0x382d28) {
            return _0x223e54(_0x382d28);
        },
        kTxhw: "./sen" + "dNoti" + "fy",
        wgXsk: function (_0x20d552, _0x2d5a25) {
            return _0x20d552(_0x2d5a25);
        },
        lbLep: function (_0x2e0870, _0x3329eb) {
            return _0x2e0870 == _0x3329eb;
        },
        MxpDf: function (_0x8bf581, _0x36e4ad) {
            return _0x8bf581 + _0x36e4ad;
        },
        gIezs: function (_0x1dfe9c, _0x51b31d) {
            return _0x1dfe9c + _0x51b31d;
        },
        SZTbr: function (_0x2460db, _0x28a58a) {
            return _0x2460db(_0x28a58a);
        },
        YlfWi: function (_0x337a22, _0x47716e) {
            return _0x337a22 / _0x47716e;
        },
        lKeJu: function (_0x1109ac, _0x1ad175) {
            return _0x1109ac - _0x1ad175;
        },
        bvGRD: function (_0x2282fc, _0x24396b) {
            return _0x2282fc < _0x24396b;
        },
        mdbMp: function (_0x202633, _0x5791c8) {
            return _0x202633 > _0x5791c8;
        },
        iSryc: "string",
        jQYpo: function (_0x4537fa, _0x5af349) {
            return _0x4537fa + _0x5af349;
        },
        ccLPx: "hh:mm" + ":ss.S",
        GFmIN: function (_0x59d051, _0x510146) {
            return _0x59d051 - _0x510146;
        },
        XsNiw: function (_0xcbe74d, _0x59cfd0) {
            return _0xcbe74d - _0x59cfd0;
        }
    };
    return new class {
        constructor(_0x2d61bc) {
            const _0x323ec0 = _0x2c79b8.LkKGI.split("|");
            let _0x20e873 = 3409 + -532 + 137 * -21;
            while (true) {
                switch (_0x323ec0[_0x20e873++]) {
                    case "0":
                        this.notifyStr = [];
                        continue;
                    case "1":
                        this.userCount = 7893 + -1 * 7638 + 255 * -1;
                        continue;
                    case "2":
                        this.userList = [];
                        continue;
                    case "3":
                        this.default_wait_limit = _0x2c79b8.dgxKe((8998 + -5338 + -3600) * (2273 + -1344 + -869), -5485 + -5297 * 1 + -1 * -11782);
                        continue;
                    case "4":
                        this.userIdx = -94 + -5546 + 5640;
                        continue;
                    case "5":
                        this.default_wait_ahead = 5944 + -125 * -58 + -13194;
                        continue;
                    case "6":
                        this.name = _0x2d61bc;
                        continue;
                    case "7":
                        this.default_timestamp_len = -2860 * -1 + -3 * -283 + -528 * 7;
                        continue;
                    case "8":
                        const _0x1e8b06 = {
                            time: true
                        };
                        this.log("[" + this.name + ("]开始运行" + "\n"), _0x1e8b06);
                        continue;
                    case "9":
                        this.startTime = Date.now();
                        continue;
                    case "10":
                        this.notifyFlag = true;
                        continue;
                    case "11":
                        this.default_wait_interval = 3317 + -2317;
                        continue;
                }
                break;
            }
        }
        log(_0x11c286, _0x46abe2 = {}) {
            let _0xc8ca1e = {
                console: true
            };
            Object.assign(_0xc8ca1e, _0x46abe2);
            if (_0xc8ca1e.time) {
                let _0x462a7d = _0xc8ca1e.fmt || _0x2c79b8.DaMXK;
                _0x11c286 = _0x2c79b8.VuAvk("[" + this.time(_0x462a7d) + "]", _0x11c286);
            }
            if (_0xc8ca1e.notify) {
                this.notifyStr.push(_0x11c286);
            }
            if (_0xc8ca1e.console) {
                console.log(_0x11c286);
            }
        }
        get(_0x505815, _0x4158df, _0x5a1caa = "") {
            let _0x242272 = _0x5a1caa;
            _0x505815?.["hasOwnProperty"](_0x4158df) && (_0x242272 = _0x505815[_0x4158df]);
            return _0x242272;
        }
        pop(_0x2a47fe, _0x9a4ed0, _0x2169d1 = "") {
            let _0x563303 = _0x2169d1;
            _0x2a47fe?.["hasOwnProperty"](_0x9a4ed0) && (_0x563303 = _0x2a47fe[_0x9a4ed0], delete _0x2a47fe[_0x9a4ed0]);
            return _0x563303;
        }
        copy(_0x2469eb) {
            return Object.assign({}, _0x2469eb);
        }
        read_env(_0x2fa345) {
            let _0xedc913 = _0x12e0b9.map(_0x531b51 => process.env[_0x531b51]);
            for (let _0x572c08 of _0xedc913.filter(_0x1755f0 => !!_0x1755f0)) {
                for (let _0x34e50f of _0x572c08.split(_0x371509).filter(_0x6888f6 => !!_0x6888f6)) {
                    if (this.userList.includes(_0x34e50f)) {
                        continue;
                    }
                    this.userList.push(new _0x2fa345(_0x34e50f));
                }
            }
            this.userCount = this.userList.length;
            if (!this.userCount) {
                const _0x4cdb6b = {
                    notify: true
                };
                this.log("未找到变量" + "，请检查变" + "量" + _0x12e0b9.map(_0x95464e => "[" + _0x95464e + "]").join("或"), _0x4cdb6b);
                return false;
            }
            this.log("共找到" + this.userCount + "个账号");
            return true;
        }
        async threads(_0x3aaf2f, _0x533e36, _0x4eb917 = {}) {
            while (_0x2c79b8.NEiit(_0x533e36.idx, _0x1366a8.userList.length)) {
                let _0x4b86fe = _0x1366a8.userList[_0x533e36.idx++];
                if (!_0x4b86fe.valid) {
                    continue;
                }
                await _0x4b86fe[_0x3aaf2f](_0x4eb917);
            }
        }
        async threadTask(_0x540f98, _0x1bcf8c) {
            let _0x39f17a = [];
            let _0x5c2f2e = {
                idx: 0
            };
            while (_0x1bcf8c--) {
                _0x39f17a.push(this.threads(_0x540f98, _0x5c2f2e));
            }
            await Promise.all(_0x39f17a);
        }
        time(_0x24208d, _0x1863d3 = null) {
            let _0x37c3aa = _0x1863d3 ? new Date(_0x1863d3) : new Date(),
                _0x5e65fd = {
                    "M+": _0x2c79b8.VuAvk(_0x37c3aa.getMonth(), -4391 * -1 + -2362 + 1014 * -2),
                    "d+": _0x37c3aa.getDate(),
                    "h+": _0x37c3aa.getHours(),
                    "m+": _0x37c3aa.getMinutes(),
                    "s+": _0x37c3aa.getSeconds(),
                    "q+": Math.floor(_0x2c79b8.resky(_0x2c79b8.VuAvk(_0x37c3aa.getMonth(), 205 * -21 + -1709 * -1 + 2599), -9752 + 7035 + 2720)),
                    S: this.padStr(_0x37c3aa.getMilliseconds(), -2 * -3009 + 1 * -6949 + 934)
                };
            /(y+)/.test(_0x24208d) && (_0x24208d = _0x24208d.replace(RegExp.$1, _0x2c79b8.VuAvk(_0x37c3aa.getFullYear(), "").substr(25 * -211 + -74 * 53 + 9201 - RegExp.$1.length)));
            for (let _0x1aaa2e in _0x5e65fd) new RegExp(_0x2c79b8.VuAvk(_0x2c79b8.VuAvk("(", _0x1aaa2e), ")")).test(_0x24208d) && (_0x24208d = _0x24208d.replace(RegExp.$1, _0x2c79b8.JdLcq(4828 + 163 * -8 + -3523, RegExp.$1.length) ? _0x5e65fd[_0x1aaa2e] : _0x2c79b8.MvcsX("00", _0x5e65fd[_0x1aaa2e]).substr(_0x2c79b8.XNQKA("", _0x5e65fd[_0x1aaa2e]).length)));
            return _0x24208d;
        }
        async showmsg() {
            const _0x58076e = _0x2c79b8.cisfG.split("|");
            let _0x1efc9b = -6568 + -9615 + 16183;
            while (true) {
                switch (_0x58076e[_0x1efc9b++]) {
                    case "0":
                        this.log("\n====" + "=====" + "=====" + " 推送 =" + "=====" + "=====" + "===");
                        continue;
                    case "1":
                        await _0x13fb74.sendNotify(this.name, this.notifyStr.join("\n"));
                        continue;
                    case "2":
                        if (!this.notifyFlag) {
                            return;
                        }
                        continue;
                    case "3":
                        var _0x13fb74 = _0x2c79b8.ykTIf(require, _0x2c79b8.kTxhw);
                        continue;
                    case "4":
                        if (!this.notifyStr.length) {
                            return;
                        }
                        continue;
                }
                break;
            }
        }
        padStr(_0x42eb11, _0x4c5026, _0x60cea4 = {}) {
            let _0x2cab81 = _0x60cea4.padding || "0",
                _0x57e066 = _0x60cea4.mode || "l",
                _0x461c98 = _0x2c79b8.wgXsk(String, _0x42eb11),
                _0x124545 = _0x4c5026 > _0x461c98.length ? _0x4c5026 - _0x461c98.length : 1 * -1844 + -25 * -166 + -2306,
                _0x3353ee = "";
            for (let _0x3ace49 = -1 * -9397 + 3867 + 6632 * -2; _0x2c79b8.NEiit(_0x3ace49, _0x124545); _0x3ace49++) {
                _0x3353ee += _0x2cab81;
            }
            _0x2c79b8.lbLep(_0x57e066, "r") ? _0x461c98 = _0x2c79b8.MxpDf(_0x461c98, _0x3353ee) : _0x461c98 = _0x2c79b8.gIezs(_0x3353ee, _0x461c98);
            return _0x461c98;
        }
        json2str(_0x51d5d3, _0x21aa74, _0x5a5b72 = false) {
            let _0x240689 = [];
            for (let _0x39c756 of Object.keys(_0x51d5d3).sort()) {
                let _0x473b45 = _0x51d5d3[_0x39c756];
                if (_0x473b45 && _0x5a5b72) {
                    _0x473b45 = _0x2c79b8.SZTbr(encodeURIComponent, _0x473b45);
                }
                _0x240689.push(_0x39c756 + "=" + _0x473b45);
            }
            return _0x240689.join(_0x21aa74);
        }
        str2json(_0xf0224e, _0x544c2e = false) {
            let _0x12b12b = {};
            for (let _0x1b8e24 of _0xf0224e.split("&")) {
                if (!_0x1b8e24) {
                    continue;
                }
                let _0x573a07 = _0x1b8e24.indexOf("=");
                if (_0x2c79b8.lbLep(_0x573a07, -(-9303 + -75 * -107 + 1279))) {
                    continue;
                }
                let _0x416b07 = _0x1b8e24.substr(-557 * 13 + 2761 * -3 + 15524, _0x573a07),
                    _0x221b1a = _0x1b8e24.substr(_0x2c79b8.MvcsX(_0x573a07, -25 * -25 + -8476 + 7852));
                if (_0x544c2e) {
                    _0x221b1a = _0x2c79b8.ykTIf(decodeURIComponent, _0x221b1a);
                }
                _0x12b12b[_0x416b07] = _0x221b1a;
            }
            return _0x12b12b;
        }
        randomPattern(_0x458a0e, _0x29dd3c = "abcdef0123456789") {
            let _0x257a26 = "";
            for (let _0x153aac of _0x458a0e) {
                if (_0x2c79b8.JdLcq(_0x153aac, "x")) {
                    _0x257a26 += _0x29dd3c.charAt(Math.floor(Math.random() * _0x29dd3c.length));
                } else {
                    _0x153aac == "X" ? _0x257a26 += _0x29dd3c.charAt(Math.floor(_0x2c79b8.dgxKe(Math.random(), _0x29dd3c.length))).toUpperCase() : _0x257a26 += _0x153aac;
                }
            }
            return _0x257a26;
        }
        randomUuid() {
            return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
        }
        randomString(_0x415a73, _0x6f9565 = "abcdef0123456789") {
            let _0x271e76 = "";
            for (let _0x80e349 = 9478 + -3 * -783 + 1 * -11827; _0x80e349 < _0x415a73; _0x80e349++) {
                _0x271e76 += _0x6f9565.charAt(Math.floor(Math.random() * _0x6f9565.length));
            }
            return _0x271e76;
        }
        randomList(_0x23c41b) {
            if (!_0x23c41b.length) {
                return null;
            }
            let _0x912d16 = Math.floor(_0x2c79b8.dgxKe(Math.random(), _0x23c41b.length));
            return _0x23c41b[_0x912d16];
        }
        wait(_0x5c727d) {
            return new Promise(_0x4005cc => setTimeout(_0x4005cc, _0x5c727d));
        }
        async exitNow() {
            await this.showmsg();
            let _0x5b7096 = Date.now(),
                _0x19bd23 = _0x2c79b8.YlfWi(_0x2c79b8.lKeJu(_0x5b7096, this.startTime), -2 * 22 + -5480 + 6524);
            this.log("");
            const _0x468a94 = {
                time: true
            };
            this.log("[" + this.name + ("]运行结束" + "，共运行了") + _0x19bd23 + "秒", _0x468a94);
            process.exit(-8338 + -2191 + 10529);
        }
        normalize_time(_0x3bb0e1, _0x5d1c74 = {}) {
            let _0x1bf048 = _0x5d1c74.len || this.default_timestamp_len;
            _0x3bb0e1 = _0x3bb0e1.toString();
            let _0x1fa6c2 = _0x3bb0e1.length;
            while (_0x2c79b8.bvGRD(_0x1fa6c2, _0x1bf048)) {
                _0x3bb0e1 += "0";
            }
            _0x2c79b8.mdbMp(_0x1fa6c2, _0x1bf048) && (_0x3bb0e1 = _0x3bb0e1.slice(7457 + -7457 * 1, -3754 + 23 * -33 + 4526));
            return _0x2c79b8.wgXsk(parseInt, _0x3bb0e1);
        }
        async wait_until(_0x53f722, _0x103248 = {}) {
            let _0x29b260 = _0x103248.logger || this,
                _0x14b266 = _0x103248.interval || this.default_wait_interval,
                _0x478640 = _0x103248.limit || this.default_wait_limit,
                _0x2e11de = _0x103248.ahead || this.default_wait_ahead;
            if (_0x2c79b8.lbLep(typeof _0x53f722, _0x2c79b8.iSryc) && _0x53f722.includes(":")) {
                if (_0x53f722.includes("-")) {
                    _0x53f722 = new Date(_0x53f722).getTime();
                } else {
                    let _0x469545 = this.time("yyyy-MM-dd ");
                    _0x53f722 = new Date(_0x2c79b8.jQYpo(_0x469545, _0x53f722)).getTime();
                }
            }
            let _0x13cb7c = this.normalize_time(_0x53f722) - _0x2e11de,
                _0x5b704a = this.time(_0x2c79b8.ccLPx, _0x13cb7c),
                _0x26e18b = Date.now();
            _0x2c79b8.mdbMp(_0x26e18b, _0x13cb7c) && (_0x13cb7c += _0x2c79b8.dgxKe(_0x2c79b8.dgxKe((255 + -5384 + 5153) * (8732 + -2299 + -1 * 6373), -7434 + -409 * -13 + 2177), 1 * -4265 + -1 * -4801 + 464));
            let _0x1f66c2 = _0x2c79b8.GFmIN(_0x13cb7c, _0x26e18b);
            if (_0x2c79b8.mdbMp(_0x1f66c2, _0x478640)) {
                const _0x2587de = {
                    time: true
                };
                _0x29b260.log("离目标时间" + "[" + _0x5b704a + "]大于" + _0x2c79b8.resky(_0x478640, -8017 * -1 + 477 + -7494) + "秒,不等待", _0x2587de);
            } else {
                const _0xcd63dc = {
                    time: true
                };
                _0x29b260.log("离目标时间" + "[" + _0x5b704a + "]还有" + _0x2c79b8.resky(_0x1f66c2, 67 * -67 + -4835 + 10324) + "秒,开始等待", _0xcd63dc);
                while (_0x1f66c2 > 9064 + -9064) {
                    let _0x10ee53 = Math.min(_0x1f66c2, _0x14b266);
                    await this.wait(_0x10ee53);
                    _0x26e18b = Date.now();
                    _0x1f66c2 = _0x2c79b8.lKeJu(_0x13cb7c, _0x26e18b);
                }
                const _0x589fee = {
                    time: true
                };
                _0x29b260.log("已完成等待", _0x589fee);
            }
        }
        async wait_gap_interval(_0x467842, _0x49bdb4) {
            let _0x276a5b = _0x2c79b8.XsNiw(Date.now(), _0x467842);
            _0x2c79b8.NEiit(_0x276a5b, _0x49bdb4) && (await this.wait(_0x49bdb4 - _0x276a5b));
        }
    }(_0x5cb590);
}