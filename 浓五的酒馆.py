#token抓取浓五的酒馆Authorization
#token2为抽奖小程序的Token 此参数短期有效

import os
import requests
import urllib3
import time
import json
from urllib.parse import urlparse, parse_qs
token=''#抓取浓五的酒馆Authorization
token2=''#抓取五粮浓香积分商城的Token 此参数短期有效 若不需要运行抽奖 不需要配置
num=0 #抽奖次数 一天6次
ku=1 #1为运行抽奖  需要配置token2

url1='https://stdcrm.dtmiller.com/scrm-promotion-service/promotion/sign/today?promotionId=PI65e0c0230791e3000a083cd4'
headers={
        "Authorization": token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129",
}
response = requests.get(url=url1,headers=headers)  # 签到
print(response.text)
#

if ku==1:
    url2='https://jf.wlnxjc.com/mini/Activity/Draw'
    headers2={
         "Token": token2,
         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/9129",
    }
    data2={'activityId':1784800720785117184}

    for i in range(1,num):
        response2 = requests.get(url=url2,headers=headers2,data=data2)#抽奖
        xiaoku=json.loads(response2.text)
        # print(response2.text)
        print(xiaoku["data"]["lottery"]["prizeName"])


    url0='https://jf.wlnxjc.com/mini/DrawRecord/GetUserList?page=1&rows=8&status=0&t1=1'
    response3 = requests.get(url=url0,headers=headers2)#获取红包列表
    print(response3.text)
    ku0 = json.loads(response3.text)
    kus=ku0["data"]["rows"]
    yus=[]
    for ku in kus:
        yus.append(ku["id"])


    url3='https://jf.wlnxjc.com/mini/DrawRecord/ReceiveLottery'
    for yu in yus:
        data3={'id':yu}
        response3 = requests.get(url=url3,headers=headers2,data=data3)#领取红包
        print(response3.text)