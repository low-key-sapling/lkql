/**
 * cron "35 7 * * 2"
 * 青龙面板环境变量API脚本
 */

const {isNotEmpty, getCurrentDate, Env} = require("./common");

const $ = new Env('QL环境变量API');

let address = "http://www.lksapling.top:8005"
let qlAuth = "";

!(async () => {
    //主程序入口
    await main();
})().catch((e) => {
    $.log(e)
}).finally(() => {
    $.done({});
});


//主函数
async function main() {
    console.log('测试青龙环境变量API开始');

    //登录青龙
    await initQL();

    //获取全部环境变量
    //await getEnvs();

    //根据名称获取环境变量
    //await getEnvByName("JD_COOKIE")

    //根据ID获取环境变量
    //await getEnvById(1)

    //新建环境变量
    // let list = [{
    //     'name': 'testqltest',
    //     'value': 'tql',
    //     'remarks': 'ss'
    // }]
    // await addEnvs(JSON.stringify(list));

    //更新环境变量
    // let env = await getEnvByName("testqltest");
    // env = env[0]
    // env = {"id":env.id,"value":"sdfdfsd111","name":env.name,"remarks":env.remarks}
    // await updateEnv(JSON.stringify(env));

    //删除环境变量
    // let env = await getEnvByName("testqltest");
    // env = env[0]
    // let delEnvs = [env.id]
    // await deleteEnv(JSON.stringify(delEnvs));

    //判断是否首次进入
    let isFirstSignInTemp = await isFirstSignIn("testNewSign");
    if (!isNotEmpty(isFirstSignInTemp)) {
        console.log('今日首次进入')
    } else {
        console.log('今日非首次进入')
    }
    console.log('测试青龙环境变量API结束');
}

//登录青龙
async function initQL() {
    let id = "S-aL4AvQ_tQ-"
    let secret = "9YYMRxvxZ7t9yi-8JzFsfnQc"
    let url = `${address}/open/auth/token?client_id=${id}&client_secret=${secret}`
    let result = await commonGet(url);
    if (result.code === 200) {
        console.log(`登录成功`)
        qlAuth = `${result.data.token_type} ${result.data.token}`;
    } else {
        console.log(`登录失败:result=${JSON.stringify(result)}`)
    }
}

//获取全部环境变量
async function getEnvs() {

    let url = `${address}/open/envs?searchValue=`
    let result = await commonGet(url);
    if (result.code === 200) {
        console.log(`获取环境变量成功：result=${JSON.stringify(result)}`)
        return result.data;
    } else {
        console.log(`获取环境变量失败:result=${JSON.stringify(result)}`)
        return [];
    }
}

//根据名称获取环境变量
async function getEnvByName(envName) {

    let url = `${address}/open/envs?searchValue=${envName}`
    let result = await commonGet(url);
    if (result.code === 200) {
        console.log(`获取环境变量${envName}成功：result=${JSON.stringify(result.data)}`)
        return result.data;
    } else {
        console.log(`获取环境变量${envName}失败:result=${JSON.stringify(result)}`)
        return null;
    }
}

//根据ID获取环境变量
async function getEnvById(id) {
    let url = `${address}/open/envs/${id}`
    let result = await commonGet(url);
    if (result.code === 200) {
        console.log(`获取环境变量${id}成功：result=${JSON.stringify(result.data)}`)
        return result.data;
    } else {
        console.log(`获取环境变量${id}失败:result=${JSON.stringify(result)}`)
        return null;
    }
}

/**
 * 新建环境变量
 * @param envs
 *         list:[{
 *           'name':'',
 *           'value':'',
 *           'remarks':''
 *         }]
 * @returns {Promise<void>}
 */
async function addEnvs(envs) {

    let url = `${address}/open/envs`
    let result = await commonPost(url, envs);
    if (result.code === 200) {
        console.log(`新建环境变量成功：result=${JSON.stringify(result.data)}`)
    } else {
        console.log(`新建环境变量失败:result=${JSON.stringify(result)}`)
    }
}

/**
 * 更新环境变量
 * @param env
 *         env:{
 *           'id':'',
 *           'name':'',
 *           'value':'',
 *           'remarks':''
 *         }
 * @returns {Promise<void>}
 */
async function updateEnv(env) {

    let url = `${address}/open/envs`
    let result = await commonPut(url, env);
    if (result.code === 200) {
        console.log(`更新环境变量成功：result=${JSON.stringify(result.data)}`)
    } else {
        console.log(`更新环境变量失败:result=${JSON.stringify(result)}`)
    }
}

/**
 * 删除环境变量
 * @param envs
 *         envs:[
 *           id1,
 *           id2
 *         ]
 * @returns {Promise<void>}
 */
async function deleteEnv(envs) {
    let url = `${address}/open/envs`
    let result = await commonDelete(url, envs);
    if (result.code === 200) {
        console.log(`删除环境变量成功：result=${JSON.stringify(result.data)}`)
    } else {
        console.log(`删除环境变量失败:result=${JSON.stringify(result)}`)
    }
}

/**
 * 判断传入变量是否当天第一次使用，用于判断二次点击或者二次登录
 * @param env_name 环境变量名称
 * @returns {Promise<void>}
 */
async function isFirstSignIn(env_name) {
    let currentDate = getCurrentDate();
    let result = await getEnvByName(env_name);
    if (!isNotEmpty(result)) {
        console.log(`✅未获取到${env_name}变量：首次进入,可以去签到或者做第一次啦,现在设置变量${env_name}变量值${currentDate}`)
        let new_envs = [
            {
                "name": env_name,
                "value": currentDate,
                "remarks": "缓存是否首次进入"
            }
        ]
        await addEnvs(new_envs)
        return true;
    }
    let env_value = result[0].get("value")
    let env_id = result[0].get("id")
    if (env_value === currentDate) {
        console.log(`⛔️${env_name}变量值与当前日期${currentDate}相等：非首次进入`)
        return false;
    } else {
        console.log(`✅${env_name}变量值与当前日期${currentDate}不相等：今日首次进入,更新变量值`)
        let update_envs = {
            "id": env_id,
            "name": env_name,
            "value": currentDate
        }
        await updateEnv(update_envs)
        return true
    }
}

async function commonDelete(url, body = '') {
    return new Promise(resolve => {
        const options = {
            url: `${url}`,
            method: `delete`,
            headers: {
                'Connection': 'keep-alive',
                'Authorization': qlAuth,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129',
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Sec-Fetch-Site': 'cross-site',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'zh-CN,zh;q=0.9'
            },
            body: body,
        }
        $.post(options, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    await $.wait(100);
                    resolve(JSON.parse(data));
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

async function commonPut(url, body = '') {
    return new Promise(resolve => {
        const options = {
            url: `${url}`,
            method: `put`,
            headers: {
                'Connection': 'keep-alive',
                'Authorization': qlAuth,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129',
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Sec-Fetch-Site': 'cross-site',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'zh-CN,zh;q=0.9'
            },
            body: body,
        }
        $.post(options, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    await $.wait(100);
                    resolve(JSON.parse(data));
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

async function commonPost(url, body = '') {
    return new Promise(resolve => {
        const options = {
            url: `${url}`,
            headers: {
                'Connection': 'keep-alive',
                'Authorization': qlAuth,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129',
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Sec-Fetch-Site': 'cross-site',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'zh-CN,zh;q=0.9'
            },
            body: body,
        }
        $.post(options, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    await $.wait(100);
                    resolve(JSON.parse(data));
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

async function makePost(url, body = '') {
    return new Promise(resolve => {
        const options = {
            url: `https://apimallwm.exijiu.com${url}`,
            headers: {
                'Connection': 'keep-alive',
                'Authorization': token,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json, text/plain, */*',
                'Origin': 'https://mallwm.exijiu.com',
                'Sec-Fetch-Site': 'cross-site',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Referer': 'https://servicewechat.com/wx673f827a4c2c94fa/264/page-frame.html',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'zh-CN,zh;q=0.9'
            },
            body: body,
        }
        $.post(options, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    await $.wait(4000);
                    resolve(JSON.parse(data));
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

async function commonGet(url) {
    return new Promise(resolve => {
        const options = {
            url: `${url}`,
            headers: {
                'Connection': 'keep-alive',
                'Authorization': qlAuth,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129',
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Sec-Fetch-Site': 'cross-site',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'zh-CN,zh;q=0.9'
            }
        }
        $.get(options, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    resolve(JSON.parse(data));
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

async function slidePost(body) {
    return new Promise(resolve => {
        const options = {
            url: `${OCR_SERVER}/capcode`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
        $.post(options, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)
                    console.log(`${$.name} API请求失败，请检查网路重试`)
                } else {
                    resolve(JSON.parse(data));
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}