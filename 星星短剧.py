"""
 * 星星短剧
 * 注册地址： http://xingxing.cpjla.com/pages/register/index.html?invite_code=320147
 * 定时2或者4小时一次即可
 * 环境变量 XX_TOKEN , token#X-Device-ID  抓取 header 里面的 Authorization 值和X-Device-ID，去掉前面的 Bearer, 多账户使用&隔开, 青龙环境直接新建变量即可，本地环境直接填入下方ck中
"""

import hashlib
import os
import random
import secrets
import uuid

import requests
import json
import time
import hmac


ck = ""  # 本地环境ck

########买牛子配置#########
mnz = False  # True为自动购买，False为手动购买
lxbox = False  # True为连续开宝箱，False为运行一次开一次
########-------#########

class XX:
    def __init__(self, cki):
        self.hb = None
        self.sjcode = None
        self.zt = None
        self.ck = cki.split('#')[0]
        self.device_id = cki.split('#')[1]
        self.name = None
        self.phone = None
        self.dj = None
        self.jb = None
        self.jk = None
        self.ye = None
        self.id_list = []
        self.hd = {
            'User-Agent': "okhttp/4.9.2",
            'Connection': "Keep-Alive",
            'Accept-Encoding': "gzip",
            'Authorization': "Bearer " + self.ck,
            'X-Version-Code': "107",
            'X-Platform': "android",
            'X-System': "14",
            'X-Brand': "Redmi",
            'X-Device-ID': self.device_id,
            'Content-Type': "application/json; charset=utf-8"
        }

    @staticmethod
    def nonce():
        return str(uuid.uuid4()).replace("-", "")

    def sign(self, pa):
        try:
            url = 'http://mzkj666.cn:7891/api/xxdj_sign'
            data = {
                "params": pa,
                "sp_user_oaid": self.device_id
            }
            json_data = json.dumps(data)
            headers = {'Content-Type': 'application/json'}
            r = requests.post(url, headers=headers, data=json_data).json()
            if r["code"] == 200:
                return r['signature']
            else:
                print(f'获取签名失败:{r["msg"]}')
                return ''
        except Exception as e:
            print('获取签名失败')

    # 登录
    def login(self):
        url = "http://api.xx.xingdouduanju.com/api/user"
        params = {
            'include': "ThirdPartyAccount,AdditionalInfo.ParentInviteCode,Realname"
        }
        try:
            r = requests.get(url, params=params, headers=self.hd).json()
            if r["success"]:
                self.a()
                self.name = r["data"]["nickname"]
                self.sjcode = r["data"]["additionalInfo"]["parentInviteCode"]
                print(f"[{self.name}]登录成功\n💰金币余额===> {self.jb}\n🪙红包余额===> {self.hb}\n💸账户余额===> {self.ye}")
                return True
            else:
                print(f"[{self.name}]登录失败，原因==> {r['message']}")
                return None
        except Exception as e:
            print(e)

    def a(self):
        url = "http://api.xx.xingdouduanju.com/api/user/profile"
        try:
            r = requests.get(url, headers=self.hd).json()
            if r["success"]:
                self.jb = r["data"]["walletGold"]["balance"]
                self.hb = r["data"]["walletLuckyMoney"]["balance"]
                self.ye = r["data"]["wallet"]["balance"]
            else:
                print(f"[{self.name}]获取余额失败，原因==> {r['message']}")
        except Exception as e:
            print(e)

    # 查看任务完成情况
    def task_list(self):
        url = "http://api.xx.xingdouduanju.com/api/tasks"
        r = requests.get(url, headers=self.hd).json()
        tasks = r["data"]["tasks"]
        for task in tasks:
            name = task["name"]
            id1 = task["id"]
            finished = task["finished"]
            print(f"[{self.name}]{name}的完成情况 ===> {finished}")
            if "邀请" in name or "会员" in name:
                print(f"===跳过执行{name}")
            elif not finished:
                print(f"===开始执行{name}===")
                self.post(id1, name)
        print(f"[{self.name}]可执行任务已全部完成，跳过执行")

    # 通用请求
    def post(self, id, name):
        for v in range(999):
            url = "http://api.xx.xingdouduanju.com/api/tasks/complete"
            nonce = self.nonce()
            timestamp = str(int(time.time() * 1000))
            payload = {
                "timestamp": timestamp,
                "nonce": nonce,
                "id": id,
                "done": True,
            }
            sign = self.sign(payload)
            if not sign:
                print("获取签名失败，跳过执行")
                return
            payload["sign"] = sign
            payload = json.dumps(payload)
            try:
                r = requests.post(url, data=payload, headers=self.hd).json()
                if r["success"]:
                    print(f"[{self.name}] 执行[{name}]成功，获得==> {r['data']['reward']}")
                else:
                    print(f"[{self.name}] 执行[{name}]失败，原因==> {r['message']}")
                    return
            except Exception as e:
                print(e)
            time.sleep(2)

    # 开宝箱
    def box(self):
        url = "http://api.xx.xingdouduanju.com/api/gold_chests/receive_reward"
        nonce = self.nonce()
        timestamp = str(int(time.time() * 1000))
        payload = {
            "timestamp": timestamp,
            "nonce": nonce
        }
        sign = self.sign(payload)
        if not sign:
            print("获取签名失败，跳过执行")
            return
        payload["sign"] = sign
        payload = json.dumps(payload)
        try:
            r = requests.post(url, data=payload, headers=self.hd).json()
            if r["success"]:
                print(f"[{self.name}] 开宝箱成功，获得==> {r['data']['reward']},预计可得{r['data']['behaviorReward']}")
                self.box_vido()
            else:
                print(f"[{self.name}] 开宝箱失败，原因==> {r['message']}")
                return
        except Exception as e:
            print(e)
        time.sleep(2)

    def box_vido(self):
        url = "http://api.xx.xingdouduanju.com/api/gold_chests/receive_behavior"
        nonce = self.nonce()
        timestamp = str(int(time.time() * 1000))
        payload = {
            "timestamp": timestamp,
            "nonce": nonce
        }
        sign = self.sign(payload)
        if not sign:
            print("获取签名失败，跳过执行")
            return
        payload["sign"] = sign
        payload = json.dumps(payload)
        try:
            r = requests.post(url, data=payload, headers=self.hd).json()
            if r["success"]:
                print(f"[{self.name}] 看宝箱视频成功，获得==> {r['data']['reward']}")
                if lxbox:
                    a = random.randint(45, 50)
                    time.sleep(a)
                    self.box()
            else:
                print(f"[{self.name}] 看宝箱视频失败，原因==> {r['message']}")
                return
        except Exception as e:
            print(e)
            
    def exchange(self):
        url = "http://api.xx.xingdouduanju.com/api/livestocks/purchase"
        nonce = self.nonce()
        timestamp = str(int(time.time() * 1000))
        payload = {
            "timestamp": timestamp,
            "nonce": nonce,
            "id": 1,
        }
        sign = self.sign(payload)
        payload["sign"] = sign
        payload = json.dumps(payload)
        try:
            r = requests.post(url, data=payload, headers=self.hd).json()
            if r["success"]:
                print(f"[{self.name}]购买牛子成功，获得==> {r['data']['validCount']}")
            else:
                print(f"[{self.name}]购买牛子失败，原因==> {r['message']}")
        except Exception as e:
            print(e)

    def start(self):
        if self.login():
            print("===开始查看可执行任务===")
            self.task_list()
            time.sleep(2)
            print("===执行开宝箱===")
            self.box()
            time.sleep(2)
            if mnz:
                print("===开始买牛子===")
                self.exchange()
            else:
                print(f"[{self.name}]已设置不自动买牛子，跳过执行")

if __name__ == '__main__':
    if 'XX_TOKEN' in os.environ:
        cookie = os.environ.get('XX_TOKEN')
    else:
        print("环境变量中不存在[XX_TOKEN],启用本地变量模式")
        cookie = ck
    if cookie == "":
        print("本地变量为空，请设置其中一个变量后再运行")
        exit(-1)
    cookies = cookie.split("&")
    print("QQ交流群：795406340")
    print(f"星星短剧共获取到 {len(cookies)} 个账号")
    for i, ck in enumerate(cookies):
        print(f"======开始第{i + 1}个账号======")
        XX(ck).start()
        print("2s后进行下一个账号")
        time.sleep(2)