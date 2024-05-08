/**
 * ========= 青龙 =========
 * 变量格式：export xfn_data='手机号&密码'  多个账号用 换行分割
 */

const jsname = "先锋鸟";
const $ = Env(jsname);
const notify = $.isNode() ? require("./sendNotify") : "";
const Notify = 1;
const debug = 0;
//////////////////////
let xfn_data = process.env.xfn_data;
let xfn_dataArr = [];
let data = '';
let msg = '';
//if (process.env.WP_APP_TOKEN_ONE) {		
				//WP_APP_TOKEN_ONE = process.env.WP_APP_TOKEN_ONE;
			            //}


!(async () => {

	if (!(await Envs()))
		return;
	else {

		console.log(`羊毛时间开始 `);

		console.log(`\n\n=========================================    \n脚本执行 - 北京时间(UTC+8)：${new Date(
			new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 +
			8 * 60 * 60 * 1000).toLocaleString()} \n=========================================\n`);

		//await wyy();

		console.log(`\n=================== 共找到 ${xfn_dataArr.length} 个账号 ===================`)
		msg += `==== 共找到 ${xfn_dataArr.length} 个账号 ====`
		if (debug) {
			console.log(`【debug】 这是你的全部账号数组:\n ${xfn_dataArr}`);
		}


		for (let index = 0; index < xfn_dataArr.length; index++) {


			let num = index + 1
			console.log(`\n========= 开始【第 ${num} 个账号】=========\n`)
			msg += `\n=== 开始【第 ${num} 个账号】===\n\n`
			data = xfn_dataArr[index].split('&');

			if (debug) {
				console.log(`\n 【debug】 这是你第 ${num} 账号信息:\n ${data}\n`);
			}


                                                console.log('开始登录');
		                await denglu();
		                await $.wait(5 * 1000);

			if(dlzt==0){

					console.log('开始查询签到状态');
		                		await chaxunqiandaozhuangtai();
		                		await $.wait(5 * 1000);

					if(qdzt=="立即签到"){
								console.log(`【签到天数】${tsmessage}\n【签到状态】今日未签到\n`);
								msg += `【签到天数】${tsmessage}\n【签到状态】今日未签到\n`

								console.log('开始签到');
		                					await qiaodao();
		                					await $.wait(5 * 1000);

				     			 }else{

								console.log(`【签到状态】今日已签到\n【签到天数】${tsmessage}\n`);
								msg += `【签到状态】今日已签到\n【签到天数】${tsmessage}\n`

				            			        }

					console.log('开始查询基本信息');
		                		await chaxunjibenjinxi();
		                		await $.wait(5 * 1000);


			     	   }else{

					console.log(`【登录状态】失败，${errormsg}\n`);
					msg += `【登录状态】失败，${errormsg}\n`

				           }

			

			

			
                                                   
			    
		}
		 await SendMsg(msg);
	}

})()
	.catch((e) => console.logErr(e))
	.finally(() => $.done())

function denglu(timeout = 3 * 1000) {
	return new Promise((resolve) => {

		let account = data[0];  
    		let password = data[1]; 
		let bodyStr = `{"mobile":"${encodeURIComponent(account)}","password":"${encodeURIComponent(password)}"}`;  
    		let bodyLength = bodyStr.length;

		let url = {
			url: `https://api.xianfengniao.com/api/auth/login`,
			headers: {
    				"Host": "api.xianfengniao.com",
    				"Content-Length": bodyLength,
				"Content-Type": "application/json; charset=UTF-8"
  },
			body: bodyStr,

		}

		if (debug) {
			console.log(`\n【debug】=============== 这是 登录 请求 url ===============`);
			console.log(JSON.stringify(url));
		}

		$.post(url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n【debug】===============这是 登录 返回data==============`);
					console.log(data)
				}

				let result = JSON.parse(data);

				dlzt=result.code;


				if (result.code==0) {
						
							token=result.data.token;
							phone=result.data.mobile;
							let maskedPhoneNumber=maskPhoneNumber(phone);

							console.log(`【登录状态】登录成功\n【用户账号】${dmphone}\n`);
							msg += `【登录状态】登录成功\n【用户账号】${dmphone}\n`

						}else{

							errormsg=result.msg;
						        }

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}

function chaxunqiandaozhuangtai(timeout = 3 * 1000) {
	return new Promise((resolve) => {
		let url = {
			url: `https://api.xianfengniao.com/api/score/sign-task/detail`,
			headers: {
    				"Host": "api.xianfengniao.com",
    				"Authorization": token
  },
			//body: '',

		}

		if (debug) {
			console.log(`\n【debug】=============== 这是 查询签到状态 请求 url ===============`);
			console.log(JSON.stringify(url));
		}

		$.get(url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n【debug】===============这是 查询签到状态 返回data==============`);
					console.log(data)
				}

				let result = JSON.parse(data);
				
				qdzt=result.data.entry_summary;
				tsmessage=result.data.message;
				
			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}

function qiaodao(timeout = 3 * 1000) {
	return new Promise((resolve) => {
		let url = {
			url: `https://api.xianfengniao.com/api/score/daily/sign`,
			headers: {
    				"Host": "api.xianfengniao.com",
    				"Authorization": token
  },
			body: '',

		}

		if (debug) {
			console.log(`\n【debug】=============== 这是 签到 请求 url ===============`);
			console.log(JSON.stringify(url));
		}

		$.post(url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n【debug】===============这是 签到 返回data==============`);
					console.log(data)
				}

				let result = JSON.parse(data);

				console.log(`【签到任务】成功，获得金币数：${result.data.score}\n`)
				msg += `【签到任务】成功，获得金币数：${result.data.score}\n`

			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}


function chaxunjibenjinxi(timeout = 3 * 1000) {
	return new Promise((resolve) => {
		let url = {
			url: `https://api.xianfengniao.com/api/user/account/info/detail`,
			headers: {
    				"Host": "api.xianfengniao.com",
    				"Authorization": token
  },
			//body: '',

		}

		if (debug) {
			console.log(`\n【debug】=============== 这是 查询基本信息 请求 url ===============`);
			console.log(JSON.stringify(url));
		}

		$.get(url, async (error, response, data) => {
			try {
				if (debug) {
					console.log(`\n\n【debug】===============这是 查询基本信息 返回data==============`);
					console.log(data)
				}

				let result = JSON.parse(data);
				
				console.log(`【金币余额】${result.data.score}\n`)
				msg += `【金币余额】${result.data.score}\n`


			} catch (e) {
				console.log(e)
			} finally {
				resolve();
			}
		}, timeout)
	})
}

//#region 固定代码 可以不管他
// ============================================变量检查============================================ \\
async function Envs() {
	if (xfn_data) {
		if (xfn_data.indexOf("\n") != -1) {
			xfn_data.split("\n").forEach((item) => {
				xfn_dataArr.push(item);
			});
		} else {
			xfn_dataArr.push(xfn_data);
		}
	} else {
		console.log(`\n 【${$.name}】：未填写变量 xfn_data`)
		return;
	}

	return true;
}

// ============================================发送消息============================================ \\
async function SendMsg(message) {
	if (!message)
		return;

	if (Notify > 0) {
		if ($.isNode()) {
			var strTitle=jsname;
			var notify = require('./sendNotify');
			await notify.sendNotify($.name,message);
			//await notify.sendNotifybyWxPucher(strTitle, `${msg}`);
		} else {
			$.msg(message);
		}
	} else {
		console.log(message);
	}
}

/**
 * 时间戳转换成日期
 */
function getTime(timestamp) {
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear(),
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
        D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()),
        h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()),
        m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()),
        s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
}

/**
 * 打码手机号
 */
function maskPhoneNumber(phoneNumber) {
  // 判断参数是否为字符串类型
  if (typeof phoneNumber !== 'string') {
    throw new Error('Invalid phone number');
  }

  // 判断手机号是否合法
  if (!/^1\d{10}$/.test(phoneNumber)) {
    throw new Error('Invalid phone number');
  }

dmphone=phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  return dmphone;
}

/**
 * 时间戳提取星期
 */
function getWeekdayFromTimestampBEijing(timestamp) {  
  const date = new Date(timestamp * 1000); // 将时间戳转换为毫秒级  
  const hours = date.getHours(); // 获取当前小时数  
  //const offset = hours >= 8 && hours < 16 ? 8 : -16; // 计算时区偏移量（北京时间偏移8小时）  
  const adjustedDate = new Date(date.getTime()); // 调整日期时间  
  const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']; // 星期数组  
  return days[adjustedDate.getDay()]; // 返回对应的星期字符串  
}  

/**
 * 判断字符串是否为html格式数据
 */
function isHTML(str) {  
    const htmlTagRegex = /<[^>]+>/g;  
    if (htmlTagRegex.test(str)) {
        dlzt = "yes";
        return "yes";  
    } else { 
        dlzt = "no"; 
        return "no";  
    }  
}  

/**
 * 随机数生成
 */
function randomString(e) {
	e = e || 32;
	var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
		a = t.length,
		n = "";
	for (i = 0; i < e; i++)
		n += t.charAt(Math.floor(Math.random() * a));
	return n
}

/**
 * 随机整数生成
 */
function randomInt(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

//每日网抑云
function wyy(timeout = 3 * 1000) {
	return new Promise((resolve) => {
		let url = {
			url: `https://keai.icu/apiwyy/api`
		}
		$.get(url, async (err, resp, data) => {
			try {
				data = JSON.parse(data)
				console.log(`\n 【网抑云时间】: ${data.content}  by--${data.music}`);

			} catch (e) {
				console.logErr(e, resp);
			} finally {
				resolve()
			}
		}, timeout)
	})
}

//#endregion


// prettier-ignore   固定代码  不用管他
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }