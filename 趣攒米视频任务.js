/**
 * @Time: 2024/4/20 上午11:22
 * @Author: 魂焱
 * @File: 趣攒米视频任务.js
 * @Software: WebStorm
 * @Description: 变量名 qzmCookie 抓包 x-qzm-token 每天0.6，满10提现，绑定支付宝时会自动提现0.3，秒到，十块大概二十分钟左右到账，我吃个头。邀请链接 http://anh5.quzanmi.com/landing?shifuId=56735145
 * 2024.5.4 更新
 */

const $ = new ENV("趣攒米视频任务", ["qzmCookie"]);
const cookieArr = $.qzmCookie.split("&");

class QZM {
    constructor(ck, index) {
        this.ck = ck.split("#")[0];
        this.index = ++index;
        $.sb.push("\u4eba\u4eba\u6709")
        this.idf = this.idfa()
    }

    randomStringNum(length) {
        // const table = "0123456789ABCDEF";
        const table = "0123456789";
        const _0x5ddc9a = {
            length: length
        };
        return Array.from(_0x5ddc9a, () => table[Math.floor(Math.random() * table.length)]).join("");
    }

    async main() {
        const info = await this.getUserInfo();
        if (!info) {
            return void 0;
        }
        try {
            $.log(`账号[${this.index}]【${this.nickName}】 获取任务列表`)
            $.sb.push("\u8d23\uff01")
            const tasks = await this.taskList()
            for (const task of tasks) {
                const source = task.source;
                $.log(`账号[${this.index}]【${this.nickName}】 开始任务 ${task.name}`)
                for (let i = 0; i < 10; i++) {
                    try {
                        $.log(`账号[${this.index}]【${this.nickName}】 假装看广告 ${i+1}`)
                        await this.ecpm();
                    }catch (e) {
                        console.log(e)
                    }
                    await $.wait(10000)
                }
                try {
                    $.log(`账号[${this.index}]【${this.nickName}】 领取奖励`)
                    const re = await this.reward(source)
                    if (re){
                        $.log(`账号[${this.index}]【${this.nickName}】 领取奖励成功`)
                    }else {
                        $.log(`账号[${this.index}]【${this.nickName}】 领取奖励失败`)
                    }
                }catch (e) {
                    console.log(e)
                }
            }
        } catch (e) {
            console.log(e)
        }
        try {
            $.log(`账号[${this.index}]【${this.nickName}】 兑换金币`)
            await this.getUserInfo()
            if (this.point>=1000){
                await this.trade(this.point)
            }else {
                $.log(`账号[${this.index}]【${this.nickName}】 当前金币数量不可兑换`)
            }
            $.log($.sb.join(""))
        }catch (e) {
            console.log(e)
        }

    }

    idfa() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = r & 0x3 | 0x8;
            return (r === 0x0) ? v.toString(16) : v.toString(16).toUpperCase();
        });
    }

    get headers(){
        return {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
            'x-qzm-time': parseInt((Date.now() / 1000).toString()).toString(),
            'Origin': 'https://h5.quzanmi.com',
            'x-qzm-token': this.ck,
            'x-qzm-device': 'iphone',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) qzm',
            'x-qzm-bundle': 'com.ownershipfre.cn|iPhone8,1|15.8|1.1',
            'x-qzm-idfa': this.idf,
            'Referer': 'https://h5.quzanmi.com/',
            'Connection': 'keep-alive'
        }
    }

    async getUserInfo() {
        const options = {
            'method': 'GET',
            'url': 'https://api.quzanmi.com/api/user/info/mine',
            'headers': this.headers
        };
        const res = await $.request(options);
        if (res.code === 2000) {
            this.id = res.data.id;
            this.phone = res.data.phone_number;
            this.nickName = res.data.nickname;
            this.realName = res.data.realname;
            this.score = res.data.score;
            this.today_income = res.data.today_income;
            this.banlance = res.data.balance;
            this.payment_num = res.data.payment_num;
            this.point = res.data.point;
            this.total_balance = res.data.total_balance;
            // console.log( res.data)
            $.log(`账号[${this.index}]【${this.nickName}】 真名: ${this.realName} 手机号: ${this.phone}`);
            $.log(`账号[${this.index}]【${this.nickName}】 余额: ${this.banlance} 金币: ${this.point}`);
            return true;
        } else {
            $.log(`获取用户信息失败: ${res.message}`);
            return false;
        }
    }

    async taskList() {
        const options = {
            'method': 'GET',
            'url': 'https://api.quzanmi.com/api/ad/task/list',
            'headers': this.headers
        };
        const res = await $.request(options);
        if (res.code === 2000) {
            const list = res.data.filter(item => item.source.includes("videoad"));
            // console.log(list)
            return list
        } else {
            $.log(`账号[${this.index}]【${this.nickName}】 获取任务列表 ${res.msg}`);
            return false;
        }
    }

    randomEcpm(min, max) {
        // 生成一个介于min和max之间的随机整数
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        // 将随机数转换为字符串
        return randomNumber.toString();
    }

    async reward(source) {
        const options = {
            url: `https://api.quzanmi.com/api/ad/task/reward`,
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({"source": source})
        }
        options.headers["Content-Type"]= 'application/json;charset=UTF-8';
        const res = await $.request(options);
        if (res.code === 2000) {
            return true
        } else {
            $.log(`账号[${this.index}]【${this.nickName}】 领取奖励 ${res.msg}`);
            return false;
        }
    }

    async ecpm() {
        const options = {
            url: `https://api.quzanmi.com/api/ad/app/ecpm`,
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({"ecpm": this.randomEcpm(20000,300000)+".00", "source": "baidu", "kind": "video", "rit_id": "1"+this.randomStringNum(7)})
        }
        options.headers["Content-Type"]= 'application/json;charset=UTF-8';
        const res = await $.request(options);
        return res.code === 2000;
    }

    async trade(point){
        const options = {
            url: 'https://api.quzanmi.com/api/user/point/trade',
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                "point": Math.floor(point / 1000) * 1000
            })
        }
        options.headers["Content-Type"]= 'application/json;charset=UTF-8';
        // console.log(options)
        const res = await $.request(options);
        // console.log(res)
        if (res.code === 2000) {
            $.log(`账号[${this.index}]【${this.nickName}】 兑换金币成功`);
            return true
        } else {
            $.log(`账号[${this.index}]【${this.nickName}】 兑换金币 ${res.msg}`);
            return false;
        }
    }
};

(async () => {
    const qzm = [];
    for (const index in cookieArr) {
        qzm.push(new QZM(cookieArr[index], index));
    }

    for (const qzmElement of qzm) {
        try {
            await qzmElement.main();
        } catch (e) {
            console.log(e)
        }
    }
})();

function ENV(name, envNames) {
    const request = require("request");
    const cryptoJS = require("crypto-js");
    return new class {
        constructor(name, envNames = []) {
            this.name = name;
            this.envNames = envNames;
            this.startTime = Date.now();
            this.logs = [];
            this.sb = [];
            if (this.envNames.length > 0) {
                this.sb.push("\u8fdc\u79bb")
                for (const envName of envNames) {
                    this[envName] = process.env[envName];
                }
            }
            this.log(`🔔${this.name},开始！`)
            this.sb.push("\u5927\u9ec4\uff0c")
        }

        log(...args) {
            args.length > 0 && (this.logs = [...this.logs, ...args])
            console.log(...args)
        }

        md5(str) {
            return cryptoJS.MD5(str).toString()
        }

        sha256(str) {
            return cryptoJS.SHA256(str).toString()
        }

        aesCBCEncrypt(data, key, iv) {
            const n = cryptoJS.enc.Hex.parse(key);
            const r = cryptoJS.enc.Hex.parse(iv);
            const o = cryptoJS.AES.encrypt(data, n, {
                iv: r,
                mode: cryptoJS.mode.CBC,
                padding: cryptoJS.pad.Pkcs7
            });
            return cryptoJS.enc.Base64.stringify(o.ciphertext);
        }

        aesCBCDecrypt(data, key, iv) {
            const n = cryptoJS.enc.Hex.parse(key);
            const r = cryptoJS.enc.Hex.parse(iv);
            const o = cryptoJS.AES.decrypt(data, n, {
                iv: r,
                mode: cryptoJS.mode.CBC,
                padding: cryptoJS.pad.Pkcs7
            });
            return o.toString(cryptoJS.enc.Utf8);
        }

        request(options) {
            options.gzip = true;
            return new Promise((resolve, reject) => {
                request(options, (error, response, body) => {
                    if (error) {
                        resolve(error)
                    }
                    try {
                        const objBody = JSON.parse(body);
                        resolve(objBody);
                    } catch (e) {
                        resolve(body)
                    }
                })
            })
        }

        wait(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
        }

    }(name, envNames)
}
