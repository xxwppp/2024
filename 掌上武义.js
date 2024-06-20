NAME = "掌上武义-北先生制造";
VALY = ["zswyck"];
VER = "1.0.2";
CK = "";
LOGS = 0;
usid = 0;
Notify = 1;

const 哇哈哈_0x1d3f24 = require("axios"),
      哇哈哈_0x56f91e = require("fs"),
      {
  v4: 哇哈哈_0x521786
} = require("uuid");

DCFHOST = process.env.DCFHOST;
dcfkey = encodeURIComponent(process.env.dcfkey);
IP = "";
IPCITY = "";

class 哇哈哈_0x22bd65 {
  constructor(_0x11601) {
    this.phone = _0x11601.split("#")[0];
    this.pwd = encodeURIComponent($.RSA(_0x11601.split("#")[1], "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB"));

    if (_0x11601.split("#")[2]) {
      this.ua = _0x11601.split("#")[2];
    } else {
      this.ua = "Mozilla/5.0 (Linux; Android 13; 2211133C Build/TKQ1.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.97 Mobile Safari/537.36;xsb_wuyi;xsb_wuyi;3.1.0;native_app;6.6.1";
    }

    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    this.message = "";
    this.logs = true;
  }

  async getcode() {
    let _0x4d5c30 = $.udid(1),
        _0x20e593 = $.HmacSHA(1, "HmacSHA256", "post%%/web/oauth/credential_auth?client_id=10024&password=" + decodeURIComponent(this.pwd) + "&phone_number=" + this.phone + "%%" + _0x4d5c30 + "%%", "yYkwYisnU30jiJYzm7HL"),
        _0x5c1143 = {
      "User-Agent": "ANDROID;13;10024;3.1.0;1.0;null;2211133C",
      "X-REQUEST-ID": _0x4d5c30,
      "X-SIGNATURE": _0x20e593
    },
        _0x5b4723 = "client_id=10024&password=" + this.pwd + "&phone_number=" + this.phone,
        _0x4d05f2 = await $.task("post", "https://passport.tmuyun.com/web/oauth/credential_auth", _0x5c1143, _0x5b4723),
        _0x114848 = _0x4d05f2.data.authorization_code.code;

    return _0x114848;
  }

  async login() {
    let _0x305a08 = $.time(13),
        _0x228f49 = await this.getcode(),
        _0x7b2baa = $.udid(1),
        _0x1f7269 = $.SHA_Encrypt(1, "SHA256", "/api/zbtxz/login&&6634deb5eb852e6ad994afae&&" + _0x7b2baa + "&&" + _0x305a08 + "&&FR*r!isE5W&&73"),
        _0x15856e = {
      "X-SESSION-ID": "6634deb5eb852e6ad994afae",
      "X-REQUEST-ID": _0x7b2baa,
      "X-TIMESTAMP": _0x305a08,
      "X-SIGNATURE": _0x1f7269,
      "X-TENANT-ID": "73",
      "User-Agent": "3.1.0;00000000-67f5-e880-0000-00004f27a48e;Xiaomi 2211133C;Android;13;Release;6.6.1"
    },
        _0x56e60c = "check_token=&code=" + _0x228f49 + "&token=&type=-1&union_id=",
        _0x318947 = await $.task("post", "https://vapp.tmuyun.com/api/zbtxz/login", _0x15856e, _0x56e60c);

    if (_0x318947.code == 0) {
      this.sessionid = _0x318947.data.session.id;
      this.accountid = _0x318947.data.account.id;
      this.name = _0x318947.data.account.nick_name;
      console.log("【" + this.name + "】登陆成功");
      this.logs = true;
    } else {
      this.logs = false;
    }
  }

  async getkey() {
    let _0x1677d2 = $.time(13),
        _0x5dc32a = $.udid(1),
        _0x250c23 = $.udid(1),
        _0x34965d = $.SHA_Encrypt(1, "SHA256", "app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&debug=0&&device_id=" + _0x5dc32a + "&&nonce_str=" + _0x250c23 + "&&source_type=app&&timestamp=" + _0x1677d2 + "&&token=" + this.sessionid + "&&userId=&&35c782a2"),
        _0x109e19 = {
      "access-module": "study",
      "access-device-id": _0x5dc32a,
      "access-auth-id": this.accountid,
      "access-api-signature": _0x34965d,
      "access-nonce-str": _0x250c23,
      "access-app-id": "vKmnytOp9GrPa7kLbWTx",
      "access-timestamp": _0x1677d2,
      "access-api-token": this.sessionid,
      "access-type": "app"
    },
        _0x5f6622 = "{\"debug\":0,\"userId\":\"\"}",
        _0x18b74c = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/member/login", _0x109e19, _0x5f6622);

    if (_0x18b74c.code == 0) {
      this.key = _0x18b74c.data.key;
      this.token = _0x18b74c.data.token;
    }
  }

  async getpageid() {
    let _0x1b5984 = $.time(13),
        _0x26a096 = $.udid(1),
        _0x55b681 = $.udid(1),
        _0x1f1762 = $.SHA_Encrypt(1, "SHA256", "app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&device_id=" + _0x26a096 + "&&id=171&&nonce_str=" + _0x55b681 + "&&source_type=app&&timestamp=" + _0x1b5984 + "&&token=" + this.sessionid + "&&35c782a2"),
        _0x1bcdab = {
      "access-module": "study",
      "access-device-id": _0x26a096,
      "access-auth-id": this.accountid,
      "access-api-signature": _0x1f1762,
      "access-nonce-str": _0x55b681,
      "access-app-id": "vKmnytOp9GrPa7kLbWTx",
      "access-timestamp": _0x1b5984,
      "access-api-token": this.sessionid,
      "access-type": "app"
    },
        _0x32a5e4 = await $.task("get", "https://op-api.cloud.jinhua.com.cn/api/study/detail?id=171", _0x1bcdab);

    if (_0x32a5e4.code == 0) {
      for (let _0x5e91a8 of _0x32a5e4.data.levels) {
        if (_0x5e91a8.status == 1) {
          let _0x468cac = _0x5e91a8.id;
          await this.getarticalid(_0x468cac);
        }
      }
    }
  }

  async getarticalid(_0x180bc8) {
    let _0x17fd65 = $.time(13),
        _0x191b55 = $.udid(1),
        _0x1b39b8 = $.udid(1),
        _0x59530e = $.SHA_Encrypt(1, "SHA256", "app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&device_id=" + _0x191b55 + "&&id=" + _0x180bc8 + "&&nonce_str=" + _0x1b39b8 + "&&source_type=app&&timestamp=" + _0x17fd65 + "&&token=" + this.sessionid + "&&" + this.key),
        _0x1012b5 = {
      "access-module": "study",
      "access-device-id": _0x191b55,
      "access-auth-id": this.accountid,
      "access-api-signature": _0x59530e,
      "access-nonce-str": _0x1b39b8,
      "access-app-id": "vKmnytOp9GrPa7kLbWTx",
      "access-timestamp": _0x17fd65,
      "access-api-token": this.sessionid,
      "access-type": "app",
      authorization: "Bearer " + this.token
    },
        _0x323fd6 = await $.task("get", "https://op-api.cloud.jinhua.com.cn/api/study/level?id=" + _0x180bc8, _0x1012b5);

    if (_0x323fd6.code == 0) {
      for (let _0x48b48e of _0x323fd6.data.tasks) {
        if (_0x48b48e.read == 0) {
          let _0x37db53 = _0x48b48e.id,
              _0x40c5cc = _0x48b48e.name,
              _0x20a521 = _0x48b48e.link;

          const _0x5790 = /id=(\d+)/,
                _0x31e934 = _0x20a521.match(_0x5790);

          if (_0x31e934 && _0x31e934[1]) {
            const _0x41532c = _0x31e934[1];
            await this.doread(_0x41532c, _0x37db53, _0x40c5cc);
          }
        }

        if (_0x48b48e.praise == 0) {
          let _0x4896c7 = _0x48b48e.id,
              _0x2aa53a = _0x48b48e.name,
              _0x14192c = _0x48b48e.link;

          const _0x53afe8 = /id=(\d+)/,
                _0x33473c = _0x14192c.match(_0x53afe8);

          if (_0x33473c && _0x33473c[1]) {
            const _0x54f9b0 = _0x33473c[1];
            await this.dopraise(_0x54f9b0, _0x4896c7, _0x2aa53a);
          }
        }
      }
    }
  }

  async articalinfo(_0x5092cb) {}

  async doread(_0x2d4827, _0x5de663, _0xd5c46d) {
    await this.articalinfo(_0x2d4827);
    await $.wait(5000, 10000);

    let _0x3ff67c = $.time(13),
        _0x5aa54f = $.udid(1),
        _0x540377 = $.SHA_Encrypt(1, "SHA256", "/api/article/read_time&&" + this.sessionid + "&&" + _0x5aa54f + "&&" + _0x3ff67c + "&&FR*r!isE5W&&73"),
        _0x5294cf = {
      "X-SESSION-ID": this.sessionid,
      "X-REQUEST-ID": _0x5aa54f,
      "X-TIMESTAMP": _0x3ff67c,
      "X-SIGNATURE": _0x540377,
      "X-TENANT-ID": "73",
      "User-Agent": "3.1.0;00000000-67f5-e880-0000-00004f27a48e;Xiaomi 2211133C;Android;13;Release;6.6.1"
    },
        _0x1f7f75 = await $.task("get", "https://vapp.tmuyun.com/api/article/read_time?channel_article_id=" + _0x2d4827 + "&read_time=3000", _0x5294cf);

    _0x1f7f75.code == 0 && (console.log("【" + this.name + "】完成文章《" + _0xd5c46d + "》阅读任务"), await this.dotask(_0x5de663));
  }

  async dotask(_0x311b1c) {}

  async dopraise(_0x57b879, _0x3d8179, _0x82b79d) {
    await this.articalinfo(_0x57b879);
    await $.wait(5000, 10000);

    let _0x1d505d = $.time(13),
        _0x5bad7c = $.udid(1),
        _0x39f1d0 = $.SHA_Encrypt(1, "SHA256", "/api/favorite/like&&" + this.sessionid + "&&" + _0x5bad7c + "&&" + _0x1d505d + "&&FR*r!isE5W&&73"),
        _0x3bb0f3 = {
      "X-SESSION-ID": this.sessionid,
      "X-REQUEST-ID": _0x5bad7c,
      "X-TIMESTAMP": _0x1d505d,
      "X-SIGNATURE": _0x39f1d0,
      "X-TENANT-ID": "73",
      "User-Agent": "3.1.0;00000000-67f5-e880-0000-00004f27a48e;Xiaomi 2211133C;Android;13;Release;6.6.1"
    },
        _0x19d6fc = "action=true&id=" + _0x57b879,
        _0x95e160 = await $.task("post", "https://vapp.tmuyun.com/api/favorite/like", _0x3bb0f3, _0x19d6fc);

    _0x95e160.code == 0 && (console.log("【" + this.name + "】完成文章《" + _0x82b79d + "》点赞任务"), await this.dotask(_0x3d8179));
  }

  async lotterycount() {
    let _0x3044c1 = $.time(13),
        _0xa61a87 = $.udid(1),
        _0xad4a69 = $.udid(1),
        _0xc59957 = $.SHA_Encrypt(1, "SHA256", "app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&device_id=" + _0xa61a87 + "&&id=1072&&module=study&&nonce_str=" + _0xad4a69 + "&&source_type=app&&timestamp=" + _0x3044c1 + "&&token=" + this.sessionid + "&&" + this.key),
        _0x383980 = {
      "access-module": "study",
      "access-device-id": _0xa61a87,
      "access-auth-id": this.accountid,
      "access-api-signature": _0xc59957,
      "access-nonce-str": _0xad4a69,
      "access-app-id": "vKmnytOp9GrPa7kLbWTx",
      "access-timestamp": _0x3044c1,
      "access-api-token": this.sessionid,
      "access-type": "app",
      authorization: "Bearer " + this.token
    },
        _0x458ac7 = "{\"id\":1072,\"module\":\"study\"}",
        _0x1f2570 = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/lotterybigwheel/_ac_lottery_count", _0x383980, _0x458ac7);

    if (_0x1f2570.code == 0 && _0x1f2570.data.count > 0) {
      this.count = _0x1f2570.data.count;
      await this.lottery();
    } else {
      _0x1f2570.code == 0 && _0x1f2570.data.count == 0 && console.log("【" + this.name + "】暂无抽奖机会");
    }
  }

  async lottery() {
    console.log("【" + this.name + "】当前可抽奖次数为:" + this.count + "次");

    for (let _0x47325e = 0; _0x47325e < this.count; _0x47325e++) {
      let _0x3a4ea8 = $.time(13),
          _0x255aa7 = $.udid(1),
          _0x43b15c = $.udid(1),
          _0x5e3c7b = $.SHA_Encrypt(1, "SHA256", "app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&device_id=" + _0x255aa7 + "&&id=1072&&module=study&&nonce_str=" + _0x43b15c + "&&optionHash=&&source_type=app&&timestamp=" + _0x3a4ea8 + "&&token=" + this.sessionid + "&&" + this.key),
          _0x4baa5 = {
        "access-module": "study",
        "access-device-id": _0x255aa7,
        "access-auth-id": this.accountid,
        "access-api-signature": _0x5e3c7b,
        "access-nonce-str": _0x43b15c,
        "access-app-id": "vKmnytOp9GrPa7kLbWTx",
        "access-timestamp": _0x3a4ea8,
        "access-api-token": this.sessionid,
        "access-type": "app",
        authorization: "Bearer " + this.token,
        "user-agent": this.ua
      },
          _0x24c6c0 = "{\"id\":1072,\"app_id\":\"vKmnytOp9GrPa7kLbWTx\",\"module\":\"study\",\"optionHash\":\"\"}",
          _0x586de8 = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/lotterybigwheel/_ac_lottery", _0x4baa5, _0x24c6c0);

      if (_0x586de8.code == 10000) {
        await this.getpicture();
      } else {
        _0x586de8.code == 0 && (console.log("【" + this.name + "】抽奖成功，恭喜抽到:" + _0x586de8.data.title), _0x586de8.data.goods_title == "随机红包" && (this.message += "【" + this.name + "】抽奖成功，恭喜抽到:" + _0x586de8.data.title), await $.wait(4000, 8000));
      }
    }
  }

  async getpicture() {
    let _0x2508ea = $.time(13),
        _0x650844 = $.udid(1),
        _0x4f8bd2 = $.udid(1),
        _0x5bfa31 = $.SHA_Encrypt(1, "SHA256", "activity_id=1072&&app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&device_id=" + _0x650844 + "&&module=bigWheel&&nonce_str=" + _0x4f8bd2 + "&&source_type=app&&timestamp=" + _0x2508ea + "&&token=" + this.sessionid + "&&35c782a2"),
        _0x1bf80f = {
      "access-module": "study",
      "access-device-id": _0x650844,
      "access-auth-id": this.accountid,
      "access-api-signature": _0x5bfa31,
      "access-nonce-str": _0x4f8bd2,
      "access-app-id": "vKmnytOp9GrPa7kLbWTx",
      "access-timestamp": _0x2508ea,
      "access-api-token": this.sessionid,
      "access-type": "app"
    },
        _0x13c7a5 = "{\"activity_id\":1072,\"module\":\"bigWheel\"}",
        _0x20235b = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/captcha/get", _0x1bf80f, _0x13c7a5),
        _0x223813 = _0x20235b.data.jigsawImageUrl,
        _0x21a4a4 = _0x20235b.data.originalImageUrl,
        _0x4af682 = _0x20235b.data.token,
        _0x55978a = _0x20235b.data.secretKey;

    await this.calculateBase64Values(_0x223813, _0x21a4a4, _0x4af682, _0x55978a);
  }

  async encodeImageToBase64(_0xcaa0b9) {
    try {
      const _0x3aa899 = await 哇哈哈_0x1d3f24.get(_0xcaa0b9, {
        responseType: "arraybuffer"
      }),
            _0x9fb00c = Buffer.from(_0x3aa899.data, "binary").toString("base64");

      return _0x9fb00c;
    } catch (_0x35d903) {
      console.error(_0x35d903);
      return null;
    }
  }

  async calculateBase64Values(_0x7aa1d0, _0x2a0e97, _0x3f0f87, _0x1d84f4) {
    let _0x5a10a9 = await this.encodeImageToBase64(_0x7aa1d0),
        _0x2e63ce = await this.encodeImageToBase64(_0x2a0e97);

    await this.hkinfo(_0x5a10a9, _0x2e63ce, _0x3f0f87, _0x1d84f4);
  }

  async hkinfo(_0xecc4d0, _0x49d33b, _0x110145, _0x34260e) {
    const _0x2e5de0 = {
      target_img: _0xecc4d0,
      bg_img: _0x49d33b
    };

    const _0x68f64a = JSON.stringify(_0x2e5de0),
          _0x437f28 = Buffer.from(_0x68f64a),
          _0x282d43 = _0x437f28.toString("base64");

    let _0x2dcda1 = _0x282d43,
        _0x382e7b = await $.task("post", "http://dcfocr.ym-club.pp.ua/slide/match/b64/json", {}, _0x2dcda1),
        _0x39ff2d = _0x382e7b.result.target,
        _0x347be8 = _0x39ff2d[0],
        _0xd7af53 = JSON.stringify({
      x: _0x347be8,
      y: 5
    }),
        _0x3d1d23 = $.DecryptCrypto("0", "AES", "ECB", "Pkcs7", _0xd7af53, _0x34260e, "");

    await $.wait(2000);
    await this.check(_0x347be8, _0x3d1d23, _0x110145, _0x34260e);
  }

  async check(_0x2c7f00, _0x581818, _0x49ecd2, _0x237f92) {
    let _0x3c633a = $.time(13),
        _0x3aacdf = $.udid(1),
        _0x4ad033 = $.udid(1),
        _0x53913e = $.SHA_Encrypt(1, "SHA256", "activity_id=1072&&app_id=vKmnytOp9GrPa7kLbWTx&&auth_id=" + this.accountid + "&&cap_token=" + _0x49ecd2 + "&&device_id=" + _0x3aacdf + "&&module=bigWheel&&nonce_str=" + _0x4ad033 + "&&point=" + _0x581818 + "&&source_type=app&&timestamp=" + _0x3c633a + "&&token=" + this.sessionid + "&&zuobiao={\"x\":" + _0x2c7f00 + ",\"y\":5}" + _0x237f92 + "&&" + this.key),
        _0x8359aa = {
      "access-module": "study",
      "access-device-id": _0x3aacdf,
      "access-auth-id": this.accountid,
      "access-api-signature": _0x53913e,
      "access-nonce-str": _0x4ad033,
      "access-app-id": "vKmnytOp9GrPa7kLbWTx",
      "access-timestamp": _0x3c633a,
      "access-api-token": this.sessionid,
      "access-type": "app",
      authorization: "Bearer " + this.token
    },
        _0x5dc0ba = "{\"activity_id\":1072,\"module\":\"bigWheel\",\"cap_token\":\"" + _0x49ecd2 + "\",\"zuobiao\":\"{\\\"x\\\":" + _0x2c7f00 + ",\\\"y\\\":5}" + _0x237f92 + "\",\"point\":\"" + _0x581818 + "\"}",
        _0x520742 = await $.task("post", "https://op-api.cloud.jinhua.com.cn/api/captcha/check", _0x8359aa, _0x5dc0ba);

    _0x520742.code == 0 && (console.log("【" + this.name + "】通过滑块验证，准备抽奖..."), await this.lottery());
  }

}

$ = 哇哈哈_0x3b4a73();
!(async () => {

  if (1 == 0) {
    console.log("【" + NAME + "】当前版本号：V" + VER + ",正在更新脚本，请稍等......");

    const _0x225676 = require("fs").promises,
          _0x91523e = process.argv[1];

    await _0x225676.writeFile(_0x91523e, _0x11db52.scriptData);
    console.log("脚本更新完成，请重新运行脚本");
  } else {
    if (1 == 1) {
      console.log("正在运行脚本：【" + NAME + "】V" + VER);
      console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");



      if (true) {



        await $.ExamineCookie();

          await $.Multithreading("login");

          let _0x228682 = $.cookie_list.filter(_0x1fdad9 => _0x1fdad9.logs == true);

          if (_0x228682.length == 0) {
            console.log("Cookie格式错误 或 账号被禁封");
            return;
          } else {
            await $.Multithreading("getkey");
            await $.Multithreading("getpageid");
            await $.Multithreading("lotterycount");
          }

      } else {
        if (_0x17e09d.message == "更新成功") {
          console.log("数据更新成功，请重新运行脚本");
          return;
        } else {
          let _0x493de5 = require("path"),
              _0x5156ce = _0x493de5.basename(__filename);

          console.log("无效卡密，停止运行文件[" + _0x5156ce + "]");
          return;
        }
      }
    } else {
      console.log("脚本更新失败，不进行覆盖操作，请稍后重试！");
      console.log("正在运行脚本：【" + NAME + "】V" + VER);
      console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");

      let _0x597711 = await $.getkami(),
          _0x586255 = await $.readUUID();

      if (_0x597711.dcfkey) {
        if (_0x597711.Notify != "") {
          console.log(_0x597711.Notify);
        }

        TSdata = $.time(13);

        if (_0x597711.MAC == null) {
          console.log("请提交正确的MAC地址后再运行脚本！");
          return;
        } else {
          if (_0x597711.MAC != null) {
            if (_0x597711.MAC != _0x586255) {
              let _0x25e0d2 = require("path"),
                  _0x36fff0 = _0x25e0d2.basename(__filename);

              console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x36fff0 + "]");
              return;
            }
          }
        }

        if (_0x597711.Delete == 1) {
          let _0x556431 = require("path"),
              _0x52fa92 = _0x556431.basename(__filename);

          console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0x52fa92 + "]");
          哇哈哈_0x56f91e.unlink(_0x52fa92, _0x41aeec => {});
          return;
        }

        if (TSdata <= _0x597711.Data) {
          console.log("尊贵的" + _0x597711.UserName + "小主,您的卡密有效期到：" + _0x597711.DataTime);
        } else {
          let _0x22653b = require("path"),
              _0x54f74f = _0x22653b.basename(__filename);

          console.log("卡密已过期，停止运行文件[" + _0x54f74f + "]");
          return;
        }

        await $.ExamineCookie(_0x597711);

        if ($.cookie_list.length < _0x597711.xianjin) {
          await $.Multithreading("login");

          let _0x1a5fc3 = $.cookie_list.filter(_0x3838c5 => _0x3838c5.logs == true);

          if (_0x1a5fc3.length == 0) {
            console.log("Cookie格式错误 或 账号被禁封");
            return;
          } else {
            await $.Multithreading("getkey");
            await $.Multithreading("getpageid");
            await $.Multithreading("lotterycount");
          }
        } else {
          console.log("账号数量超过限制，请减少账号数量后重试！或作者关闭了脚本功能");
        }
      } else {
        if (_0x597711.message == "更新成功") {
          console.log("数据更新成功，请重新运行脚本");
          return;
        } else {
          let _0x355521 = require("path"),
              _0x21a8e8 = _0x355521.basename(__filename);

          console.log("无效卡密，停止运行文件[" + _0x21a8e8 + "]");
          return;
        }
      }
    }
  }

  let _0x5dcf3c = [];

  for (let _0x12530d of $.cookie_list) {
    if (_0x12530d.message) {
      _0x5dcf3c.push(_0x12530d.message);
    }
  }

  if (_0x5dcf3c.length > 0) {
    await $.SendMsg(_0x5dcf3c.join("\n"));
  }
})().catch(_0x37185b => {
  console.log(_0x37185b);
}).finally(() => {});

function 哇哈哈_0x3b4a73() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }

    async Multithreading(_0x4144ed, _0x4d76fd, _0x199604) {
      let _0x13790c = [];
      !_0x199604 && (_0x199604 = 1);

      while (_0x199604--) {
        for (let _0x2b767b of $.cookie_list) {
          _0x13790c.push(_0x2b767b[_0x4144ed](_0x4d76fd));
        }
      }

      await Promise.allSettled(_0x13790c);
    }

    ExamineCookie() {
      let _0x13cd78 = process.env[VALY] || CK,
          _0x28bd91 = 0;

      if (_0x13cd78) {
        for (let _0x56cb64 of _0x13cd78.split("\n").filter(_0x2ce258 => !!_0x2ce258)) {
          $.cookie_list.push(new 哇哈哈_0x22bd65(_0x56cb64));
        }

        _0x28bd91 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }

      console.log("共找到" + _0x28bd91 + "个账号");
      return $.cookie_list;
    }

    task(_0x52641a, _0x15f2d2, _0x11efee, _0x280581, _0x18a286) {
      if (_0x52641a == "delete") {
        _0x52641a = _0x52641a.toUpperCase();
      } else {
        _0x52641a = _0x52641a;
      }

      if (_0x52641a == "post") {
        delete _0x11efee["content-type"];
        delete _0x11efee["Content-type"];
        delete _0x11efee["content-Type"];
        $.safeGet(_0x280581) ? _0x11efee["Content-Type"] = "application/json;charset=UTF-8" : _0x11efee["Content-Type"] = "application/x-www-form-urlencoded";
        _0x280581 && (_0x11efee["Content-Length"] = $.lengthInUtf8Bytes(_0x280581));
      }

      _0x52641a == "get" && (delete _0x11efee["content-type"], delete _0x11efee["Content-type"], delete _0x11efee["content-Type"], delete _0x11efee["Content-Length"]);
      _0x11efee.Host = _0x15f2d2.replace("//", "/").split("/")[1];
      return new Promise(async _0x463e8b => {
        if (_0x52641a.indexOf("T") < 0) {
          var _0x17ac40 = {
            url: _0x15f2d2,
            headers: _0x11efee,
            body: _0x280581,
            proxy: "http://" + _0x18a286
          };
        } else {
          var _0x17ac40 = {
            url: _0x15f2d2,
            headers: _0x11efee,
            form: JSON.parse(_0x280581),
            proxy: "http://" + _0x18a286
          };
        }

        if (!_0x18a286) {
          delete _0x17ac40.proxy;
        }

        this.request[_0x52641a.toLowerCase()](_0x17ac40, (_0x10e4c1, _0x46c709, _0x1f8073) => {
          try {
            if (_0x1f8073) {
              if (LOGS == 1) {
                console.log("================ 请求 ================");
                console.log(_0x17ac40);
                console.log("================ 返回 ================");

                if ($.safeGet(_0x1f8073)) {
                  console.log(JSON.parse(_0x1f8073));
                } else {
                  console.log(_0x1f8073);
                }
              }
            }
          } catch (_0x34e9d3) {
            console.log(_0x34e9d3, _0x15f2d2 + "\n" + _0x11efee);
          } finally {
            let _0x247a48 = "";

            if (!_0x10e4c1) {
              if ($.safeGet(_0x1f8073)) {
                _0x247a48 = JSON.parse(_0x1f8073);
              } else {
                _0x1f8073.indexOf("/") != -1 && _0x1f8073.indexOf("+") != -1 ? _0x247a48 = _0x1f8073 : _0x247a48 = _0x1f8073;
              }
            } else {
              _0x247a48 = _0x15f2d2 + "   API请求失败，请检查网络重试\n" + _0x10e4c1;
            }

            return _0x463e8b(_0x247a48);
          }
        });
      });
    }

    async readUUID() {
      const _0xd0a34b = "uuid.txt";
      await $.generateUUID(_0xd0a34b);

      try {
        const _0x142c00 = 哇哈哈_0x56f91e.readFileSync(_0xd0a34b, "utf8"),
              _0x1c7ace = _0x142c00.trim();

        return _0x1c7ace;
      } catch (_0x5d6a7e) {
        return null;
      }
    }

    generateUUID(_0x49063d) {
      if (哇哈哈_0x56f91e.existsSync(_0x49063d)) {
        return;
      }

      const _0x2de601 = 哇哈哈_0x521786();

      哇哈哈_0x56f91e.writeFile(_0x49063d, _0x2de601, "utf8", _0x3b5c6c => {
        if (_0x3b5c6c) {
          console.error("写入文件出错: " + _0x3b5c6c.message);
          return;
        }
      });
    }

    async getkami() {
      let _0x335db2 = await $.readUUID();

      await $.getCurrentIP();
      await $.getIPCITY();

      let _0x2fc68e = await $.task("get", "http://" + DCFHOST + "/querys?DCFKEY=" + dcfkey + "&MAC=" + _0x335db2 + "&JSHOST=" + IP + "&JSCITY=" + IPCITY, {});

      return _0x2fc68e;
    }

    async getIPCITY() {
      let _0x4ce1d0 = await $.task("get", "http://ip-api.com/json/" + IP + "?lang=zh-CN", {}),
          _0x1bbd17 = _0x4ce1d0.regionName + _0x4ce1d0.city;

      IPCITY = encodeURIComponent(_0x1bbd17);
    }

    async getCurrentIP() {
      let _0x9d6608 = await $.task("get", "https://httpbin.org/ip", {});

      IP = _0x9d6608.origin;
    }

    async SendMsg(_0xb8ebb3) {
      if (!_0xb8ebb3) {
        return;
      }

      if (Notify == 1) {
        var _0x4a3b4d = require("./sendNotify");

        await _0x4a3b4d.sendNotify(NAME, _0xb8ebb3);
      }
    }

    lengthInUtf8Bytes(_0x422853) {
      let _0x5df2f1 = encodeURIComponent(_0x422853).match(/%[89ABab]/g);

      return _0x422853.length + (_0x5df2f1 ? _0x5df2f1.length : 0);
    }

    randomArr(_0x252d68) {
      return _0x252d68[parseInt(Math.random() * _0x252d68.length, 10)];
    }

    wait(_0x42c5e2) {
      return new Promise(_0x52b5a2 => setTimeout(_0x52b5a2, _0x42c5e2));
    }

    time(_0x17b2e5) {
      return _0x17b2e5 == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }

    timenow() {
      const _0x303e08 = new Date(),
            _0xc6081 = _0x303e08.getFullYear(),
            _0x276131 = String(_0x303e08.getMonth() + 1).padStart(2, "0"),
            _0x3d7761 = String(_0x303e08.getDate()).padStart(2, "0"),
            _0x348e66 = _0xc6081 + "-" + _0x276131 + "-" + _0x3d7761;

      return _0x348e66;
    }

    udid(_0x45e833) {
      function _0x5a3fc1() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }

      let _0x51443c = _0x5a3fc1() + _0x5a3fc1() + "-" + _0x5a3fc1() + "-" + _0x5a3fc1() + "-" + _0x5a3fc1() + "-" + _0x5a3fc1() + _0x5a3fc1() + _0x5a3fc1();

      return _0x45e833 == 0 ? _0x51443c.toUpperCase() : _0x51443c.toLowerCase();
    }

    SHA_Encrypt(_0x13411a, _0x52f03f, _0x5ba190) {
      if (_0x13411a == 0) {
        return this.CryptoJS[_0x52f03f](_0x5ba190).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x52f03f](_0x5ba190).toString();
      }
    }

    safeGet(_0x3c581b) {
      try {
        if (typeof JSON.parse(_0x3c581b) == "object") {
          return true;
        }
      } catch (_0x35b312) {
        return false;
      }
    }

    RT(_0x82420e, _0x2c5201) {
      return Math.round(Math.random() * (_0x2c5201 - _0x82420e) + _0x82420e);
    }

    SHA256withRSA(_0x5a1786, _0x4535fe) {
      const _0x377599 = new rs.KJUR.crypto.Signature({
        alg: "SHA256withRSA"
      });

      _0x377599.init(_0x5a1786);

      _0x377599.updateString(_0x4535fe);

      const _0x193e4c = _0x377599.sign(),
            _0x12417b = rs.hextob64u(_0x193e4c);

      return _0x12417b;
    }

    RSA(_0x631c4b, _0xd0eb13) {
      const _0x5b9795 = require("node-rsa");

      let _0x2bb628 = new _0x5b9795("-----BEGIN PUBLIC KEY-----\n" + _0xd0eb13 + "\n-----END PUBLIC KEY-----");

      _0x2bb628.setOptions({
        encryptionScheme: "pkcs1"
      });

      return _0x2bb628.encrypt(_0x631c4b, "base64", "utf8");
    }

    HmacSHA(_0x1c7867, _0x4bef0a, _0x47894b, _0x19e9d6) {
      return _0x1c7867 == 0 ? this.CryptoJS[_0x4bef0a](_0x47894b, _0x19e9d6).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x4bef0a](_0x47894b, _0x19e9d6).toString();
    }

    DecryptCrypto(_0xde1425, _0x361855, _0x39a425, _0x1ece3c, _0x2381ce, _0x30ed61, _0x24056d) {
      if (_0xde1425 == 0) {
        const _0xcf853c = this.CryptoJS[_0x361855].encrypt(this.CryptoJS.enc.Utf8.parse(_0x2381ce), this.CryptoJS.enc.Utf8.parse(_0x30ed61), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x24056d),
          mode: this.CryptoJS.mode[_0x39a425],
          padding: this.CryptoJS.pad[_0x1ece3c]
        });

        return _0xcf853c.toString();
      } else {
        const _0x446ad3 = this.CryptoJS[_0x361855].decrypt(_0x2381ce, this.CryptoJS.enc.Utf8.parse(_0x30ed61), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x24056d),
          mode: this.CryptoJS.mode[_0x39a425],
          padding: this.CryptoJS.pad[_0x1ece3c]
        });

        return _0x446ad3.toString(this.CryptoJS.enc.Utf8);
      }
    }

    MD5Encrypt(_0x2d9fee, _0xd8d19b) {
      if (_0x2d9fee == 0) {
        return this.CryptoJS.MD5(_0xd8d19b).toString().toLowerCase();
      } else {
        if (_0x2d9fee == 1) {
          return this.CryptoJS.MD5(_0xd8d19b).toString().toUpperCase();
        } else {
          if (_0x2d9fee == 2) {
            return this.CryptoJS.MD5(_0xd8d19b).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x2d9fee == 3) {
              return this.CryptoJS.MD5(_0xd8d19b).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }

  }();
}
