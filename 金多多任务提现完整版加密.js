/*
功能：每日签到+任务+自动提现 一天1.5 满5自动提现到微信
变量：jddck
host： https://www.jindd.shop   找到Cookie全部参数作为变量
cron：一天一次即可，如果报错，就多跑几次，是服务器不行
*/
var _0xodo='jsjiami.com.v7';const _0x25ba09=_0xf84c;function _0xf84c(_0xc80589,_0x580ec3){const _0x49131f=_0x53b4();return _0xf84c=function(_0x572626,_0x558e7e){_0x572626=_0x572626-0x132;let _0x53b41e=_0x49131f[_0x572626];if(_0xf84c['TxPLvQ']===undefined){var _0xf84ccb=function(_0x19216f){const _0x345826='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5cdef1='',_0x3550a1='',_0x255fa4=_0x5cdef1+_0xf84ccb;for(let _0x1782c9=0x0,_0xe42c09,_0xc6853a,_0x12f173=0x0;_0xc6853a=_0x19216f['charAt'](_0x12f173++);~_0xc6853a&&(_0xe42c09=_0x1782c9%0x4?_0xe42c09*0x40+_0xc6853a:_0xc6853a,_0x1782c9++%0x4)?_0x5cdef1+=_0x255fa4['charCodeAt'](_0x12f173+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0xe42c09>>(-0x2*_0x1782c9&0x6)):_0x1782c9:0x0){_0xc6853a=_0x345826['indexOf'](_0xc6853a);}for(let _0xb5f898=0x0,_0x28c369=_0x5cdef1['length'];_0xb5f898<_0x28c369;_0xb5f898++){_0x3550a1+='%'+('00'+_0x5cdef1['charCodeAt'](_0xb5f898)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3550a1);};const _0x112264=function(_0x45f866,_0x59f4f0){let _0xf5485a=[],_0x2f6507=0x0,_0x4a8744,_0x2fbda6='';_0x45f866=_0xf84ccb(_0x45f866);let _0x52b485;for(_0x52b485=0x0;_0x52b485<0x100;_0x52b485++){_0xf5485a[_0x52b485]=_0x52b485;}for(_0x52b485=0x0;_0x52b485<0x100;_0x52b485++){_0x2f6507=(_0x2f6507+_0xf5485a[_0x52b485]+_0x59f4f0['charCodeAt'](_0x52b485%_0x59f4f0['length']))%0x100,_0x4a8744=_0xf5485a[_0x52b485],_0xf5485a[_0x52b485]=_0xf5485a[_0x2f6507],_0xf5485a[_0x2f6507]=_0x4a8744;}_0x52b485=0x0,_0x2f6507=0x0;for(let _0x306eec=0x0;_0x306eec<_0x45f866['length'];_0x306eec++){_0x52b485=(_0x52b485+0x1)%0x100,_0x2f6507=(_0x2f6507+_0xf5485a[_0x52b485])%0x100,_0x4a8744=_0xf5485a[_0x52b485],_0xf5485a[_0x52b485]=_0xf5485a[_0x2f6507],_0xf5485a[_0x2f6507]=_0x4a8744,_0x2fbda6+=String['fromCharCode'](_0x45f866['charCodeAt'](_0x306eec)^_0xf5485a[(_0xf5485a[_0x52b485]+_0xf5485a[_0x2f6507])%0x100]);}return _0x2fbda6;};_0xf84c['OjQsRB']=_0x112264,_0xc80589=arguments,_0xf84c['TxPLvQ']=!![];}const _0xaff6cc=_0x49131f[0x0],_0x2331ac=_0x572626+_0xaff6cc,_0x3fddc1=_0xc80589[_0x2331ac];if(!_0x3fddc1){if(_0xf84c['ZvNXTk']===undefined){const _0x2163a6=function(_0x4b08a3){this['RAnCDl']=_0x4b08a3,this['WzaGsZ']=[0x1,0x0,0x0],this['iEYxSz']=function(){return'newState';},this['FpSPao']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['erVcCt']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2163a6['prototype']['yrDlBy']=function(){const _0x22c0a4=new RegExp(this['FpSPao']+this['erVcCt']),_0x1b4a25=_0x22c0a4['test'](this['iEYxSz']['toString']())?--this['WzaGsZ'][0x1]:--this['WzaGsZ'][0x0];return this['WLENqj'](_0x1b4a25);},_0x2163a6['prototype']['WLENqj']=function(_0x3f6b8e){if(!Boolean(~_0x3f6b8e))return _0x3f6b8e;return this['sUtYPf'](this['RAnCDl']);},_0x2163a6['prototype']['sUtYPf']=function(_0x1be7a2){for(let _0x6331d5=0x0,_0x461970=this['WzaGsZ']['length'];_0x6331d5<_0x461970;_0x6331d5++){this['WzaGsZ']['push'](Math['round'](Math['random']())),_0x461970=this['WzaGsZ']['length'];}return _0x1be7a2(this['WzaGsZ'][0x0]);},new _0x2163a6(_0xf84c)['yrDlBy'](),_0xf84c['ZvNXTk']=!![];}_0x53b41e=_0xf84c['OjQsRB'](_0x53b41e,_0x558e7e),_0xc80589[_0x2331ac]=_0x53b41e;}else _0x53b41e=_0x3fddc1;return _0x53b41e;},_0xf84c(_0xc80589,_0x580ec3);}function _0x53b4(){const _0xa8cfb3=(function(){return[_0xodo,'npDjswUGjXbiadRRmHbip.fuWcFAPomN.dvXt7BK==','W5zorq','m3tcVW','5ywZ5AYJ5Ps76yEq5lMV6lAo77+E5PAR6z6V5yAi5OY544g3','mEs5Q+I3GowmLq','zmkFlSkDW5S','dCo4wCkQW6W','W7DwWPVdOx8','j2lcNNFcGW','Ec/cGmkn','W5BdIHe+WRy','zs7cTCkwemoqWP7cJG','W5ldImkNW6/cNq','W7uQqmoPwW','W6xdKYayzJ1/cq','xmorjxhdQW','WPBdPCkb','ihddL8oBu8kjW4ldMKdcP8knW7JcJSkj','EIBcV8kdlG','5lYv6Acy5O6r542w55EP6k++5OU15yMV','WONcNW3cUG','pZBcJW','W73dKXq','WOhdLSoTlYC','5ysp5AYy5ysq5O6e5l6d6Aku6kYs5RkY5AEv6lwT77YW','WRHKWQBdUmkq','imoQjG','6i+s5y6+5l6F6AgH5PAz5O2U5AED6lAJ77YL','WPGmW7L+W6nVW73dUYHNW50','W6pcNSkwb1ubW49vgSoREW','W50yWRyNW6y','W5xdQmk1W6RcQG','56+s5yUd5OQT5yIP8k2SO+ImPEw8Ta','WR8AW7XMW7e','W7JdGCkQW7G','yGBcJHtcI1xcK8oI','zsNcG8km','W7D/zqpdKq','5ysb5A2T5ywF5O+v5l6s6Acn6k+s5Rcv5OUc5yQd776U','W4ldObWE','5l6/6AcV5O2B54+O55ws6k2u5Awh6lsC77+n','vCoQW5WTBhpcQhaXWRz3WQDqurtcMq','oCo2imkeWRzS','bWNcQSkDWODJWOK','WQxdMSofeGC','cgRcKrhdNq','k8oZWPtcPfpdQq','zSoLwHnCWOxdQmksWPFcGvC','W4Tsus8','BSkrka','5ysA5AYl5PAx6ysE5lIY6lsU77Ym5PEE6z2L5ywQ5O2244gF','v8oBpW','iCoGlmkeWR97W4VcNCkbjuJdLazqq8oQW7ZdMZ7cO8ozWOJcO8kCW7bVga','u+ImOEwmSEs+IoMIOUAxREAnRHblfq','5l+16AkO5OY8542y55ET6k+E5OQJ5yMM','5ywJ5A6x5yEr5O+l5l+J6Akl6k6L5Rgt5AE06lsX772e','WRnSWRK','uCooo3mB','WPCME8kUWQWDWRqjW4eWwa','6lwN5y2R44cd','vx3dHceo','qCkynSkIW7i','WQNdS8orhbq'].concat((function(){return['W6FdPmkYeYldJ8oFl8oFWRVdLCkA','zGJcJYZcJLRcGSoK','amojWQpdMea','iGhdK1FdRcNdO8kw','DIBcNSk6cq','WPFdRmkiWQNcUq','owlcRa','xSo8W4K4xW','W57dJsqkBa','pCo3WPpcSa','jfZcIahcQ3BdVSonW6zOW5xcL1zfW7NcMCoYW7/cNLaezLHhW7PpptRdL1/dJ8kafCoXzSkVuMRcVXxdJCkcWPNcVHKVW63cSCkUgmkFWPSIySoYzH/cVSkqW4G','EeFcQvRdHq','WQ3cReKYW4K','FCo6hNuU','W5Dsrq','WPG2WOjrfeBdVeT5hCk8','WOr7d8kxn8ktyCoobSoqWQRdGCob','W51pssldNa','D8kRW48diG','6iYK5y6R5yUKrG','nYCvtCoJ','CowpJ+I2Tos+J+MHSUApIEEmVoITQoAXOSkTEHe','chhcTSkIWOO','5B+G5yMm5yYe5O2h546O55I65yA25A695Pwq6yAf77YG','W7ddJ8k5','DYpdNIRdICoDWOlcG8kwz2Cqx0O','W5OQwCoeD8on','CmkZW4ye','W7/dRvZdLmkI','5REJ6kE95lIx5yMj56+Y','x8kmWR7dHvKJAIu','W6ZdGCkeW4hcSq','mfhcIqC','W78sWRm','W4XGW5y','DSkwkSkw','yg3cN37dVSoUWQ/cTq','B8knka','jZhcJwy','W4JdHHiEWOK','W4tdRmkjW6VcKG','5lYv6Acy5lMm6lwv77+w5PEP5RcW5OYG542u44gk','aaJcINhdIW','6i6V5y+D5yEf5A+V5PsV6ysI5AsC6ls/77Yv','W51OWOJdVhBdN8kyrq','WOGgW7z/W7r1','W7JdTftdNSk0','q8oOifeO','5l6g6AkE5OYo54Yq55Ei6k2C5Aw96lsk77Ya','gCoFfG','rmo1W581','W7RdO1pdGSkZWOurlCkVW6GS','W5LCWOG','WQ5aW6LBWQRdMhW','5l6g5z6A6ykC5OMj5zg2776V5Rox5PYWWRtcMUAcLUs7LUI/ToIJMo+9NW','W7xdQvpdLSkZWP8','CbqjW58rWPL5W5muemoAW4O','WOhcHhm','W5/cLSoCW4qPW4i','WOD+bSkAmSkvz8kslmoVWQpdSSohWQC','W495tb7dLW','W6ZdQSo1yvNcVCoGpq','ExVdTH4M','pSkiW4rlkG'].concat((function(){return['W5XAWP/cNa','W69oW6SKuq','gmodfG','pmkpW5O','t8oBe1RdMq','nN7cM3ZcK8kaWPZdN8kRFLDPyeiXWQ5kWRCUWONdRCobWPddMsqkW4Tlm8kjgSkGW73dQmosW7pdHmoBoKSnB8oB','bSoqWQy','DCkRj8kuW65KBvZdGW','nH8HvSowWRrmW6dcVgX+sSoKiCkdvSoWWR8fu8k/WR3dMSk9CtbWW6Owd8ozkmoIDSoFWQ4ZzSohW4JcK8ktWQDugNXpW5xdKsbJn8o6kSosfGFcIKddHCk6W5bPW78xd8okuSk6tuldSHlcHhJcPr4ZW6RdTSoFW6PLkXL+W4ruW4zDW7rerh1GWO7dK1HpWP3cJIBdOtFdTeJdOSoqWOpcVIeJWPZcLgDLzmkCW5WHgbhdJXWvWPy5WOuqWONcTSogjCooW4OrCmoRwmooBSk5W6/cVmooW6tcKahcMJ7dOsZcG8k2j17dGCoSv0VcOCkVpCkIjs/cS1aexmkxCNJdMSoahghcMYjQoCoqW5NdIY02WQvoW4eeWQZdVSozWR8BEmknbhbnW6SeWOzR','WPWYW6njW4y','z27dNfNdOCoWWQZcVWy','W69vW6CJuW','jSo7A8kDW6O','eglcUIJdNa','WQpdQ8oLwae','xmorla','DthcISk1jG','5lY05zYy6yoQ5OM35zov77Yu5RgX5P6OW6P15Ok+5lUX6l+a6kg7776j','rmowlNe','h8oDWQJdGuOp','jSk3gf8gWPG','e8ouWPlcH1u','W4/dG1ddOgODW4K4qCk5r8oZW4i','WPFdPCoMeZy','kCoqWQ/cN34','z8oDW4atza','lSkFAq','WOtcRv8IW7W','ts7dU8oUW5X2W4BdVhxdRc0','W4RdRG8','WORcJMa','WO7cLxmBW79sWPv7ndpdMwHUW4qXb8komHLAW5FdVSocDCkXk8kmW43dJYRdJSkHdeldICkbWPZcQvHkW7WjWR/dO8kvFa','W6PTWOxcHSk4','t8oejMJdVSoF','WQyts0jR','WP5SWOFdH8kl','6i+m5y6M5lYc6AkI5PEk5O625AsC6lEQ776t','u3RdRmoaW44','Bmk4a8kqW4S','jSo5zW','W5vEimoXW5S','WQZcT8o0xNNcIW','W5VcLmkAa15vWReL5B2k5Aw05OM36kc56lEj5y2JWPO','WPTfWR/dR8kX','vmoFp34','kbdcSCkBWRm','uuxdIHKN','WRFcVmoHra','amoxWQ4','5Q+h5AY+5OQB772z8kECQG','pNVcG2hcIq','gtZcTCkrWO0Mp0BcLMuUkW','W5HAWR/cNmkSqmoDWP4','wmotj3ldOa','ASkvlmkYW7u','W5FdMtCgW4iEW4KNgq','lCoZDa','uM/dS8oCW5zI','uCoomG','5ysM5A+15yAx5O6E5l6W6AkD6kYB5Roe5OIV5yM877+E','kSofWQhcN1K','W7xdNqCn'];}()));}()));}());_0x53b4=function(){return _0xa8cfb3;};return _0x53b4();};(function(_0x1d298f,_0x5f1455,_0x1945a4,_0x18075d,_0x2409d9,_0x2c4cca,_0x113640){return _0x1d298f=_0x1d298f>>0x1,_0x2c4cca='hs',_0x113640='hs',function(_0x58e536,_0x2c17ca,_0x20ee08,_0x1a4929,_0x4a450){const _0x44bf0f=_0xf84c;_0x1a4929='tfi',_0x2c4cca=_0x1a4929+_0x2c4cca,_0x4a450='up',_0x113640+=_0x4a450,_0x2c4cca=_0x20ee08(_0x2c4cca),_0x113640=_0x20ee08(_0x113640),_0x20ee08=0x0;const _0x2ec687=_0x58e536();while(!![]&&--_0x18075d+_0x2c17ca){try{_0x1a4929=-parseInt(_0x44bf0f(0x1d8,'2%sc'))/0x1*(-parseInt(_0x44bf0f(0x19a,'DpdK'))/0x2)+parseInt(_0x44bf0f(0x137,'4Q5t'))/0x3*(-parseInt(_0x44bf0f(0x16c,'tbF5'))/0x4)+-parseInt(_0x44bf0f(0x18b,'KInI'))/0x5*(-parseInt(_0x44bf0f(0x1c3,'6sno'))/0x6)+parseInt(_0x44bf0f(0x17d,'S16V'))/0x7*(parseInt(_0x44bf0f(0x18c,'jdbu'))/0x8)+-parseInt(_0x44bf0f(0x14e,'RP(p'))/0x9+parseInt(_0x44bf0f(0x17c,'w*Pe'))/0xa*(-parseInt(_0x44bf0f(0x160,'S16V'))/0xb)+-parseInt(_0x44bf0f(0x195,'&M$K'))/0xc;}catch(_0x2b066d){_0x1a4929=_0x20ee08;}finally{_0x4a450=_0x2ec687[_0x2c4cca]();if(_0x1d298f<=_0x18075d)_0x20ee08?_0x2409d9?_0x1a4929=_0x4a450:_0x2409d9=_0x4a450:_0x20ee08=_0x4a450;else{if(_0x20ee08==_0x2409d9['replace'](/[DXfpHKPFGunRWAtBbUwdN=]/g,'')){if(_0x1a4929===_0x2c17ca){_0x2ec687['un'+_0x2c4cca](_0x4a450);break;}_0x2ec687[_0x113640](_0x4a450);}}}}}(_0x1945a4,_0x5f1455,function(_0x33f780,_0x31e11e,_0x58e42e,_0xdc2c19,_0x334982,_0x916581,_0x59cd47){return _0x31e11e='\x73\x70\x6c\x69\x74',_0x33f780=arguments[0x0],_0x33f780=_0x33f780[_0x31e11e](''),_0x58e42e='\x72\x65\x76\x65\x72\x73\x65',_0x33f780=_0x33f780[_0x58e42e]('\x76'),_0xdc2c19='\x6a\x6f\x69\x6e',(0x16fa38,_0x33f780[_0xdc2c19](''));});}(0x18e,0xad419,_0x53b4,0xc9),_0x53b4)&&(_0xodo=0x9cb);console['log']('=========\x20金多多商城\x20========='),require('dotenv')['config']();const _0xf12efb=require(_0x25ba09(0x1aa,'2E]X'));async function _0x13c746(){const _0x3cda9b=_0x25ba09,_0x26bb4b={'NebAq':function(_0x14266a,_0x33ef75){return _0x14266a===_0x33ef75;},'ximzs':_0x3cda9b(0x1d3,'cOC@'),'paZXA':'ODEtG','JBuVj':_0x3cda9b(0x1b4,'viv3'),'ChNJf':_0x3cda9b(0x1a5,'GG*4'),'nggbp':_0x3cda9b(0x173,'ZFcq'),'INLkx':function(_0x39a9f5,_0x4ca47c,_0x1491b5){return _0x39a9f5(_0x4ca47c,_0x1491b5);},'CfyZL':function(_0x13186d){return _0x13186d();},'bLXIp':_0x3cda9b(0x1b2,'cOC@'),'xUtDm':function(_0x537efc,_0x1fb98e){return _0x537efc!==_0x1fb98e;},'LvvNE':_0x3cda9b(0x154,'cOC@'),'vUPqv':function(_0x1d32d0,_0x6f482a){return _0x1d32d0+_0x6f482a;},'noeGy':_0x3cda9b(0x1c4,'WHWP'),'ORird':_0x3cda9b(0x17f,'S16V'),'rYtRw':_0x3cda9b(0x171,'GG*4'),'frkyd':_0x3cda9b(0x1db,'4Q5t'),'ggxXk':function(_0x120890,_0x54cf4e){return _0x120890!==_0x54cf4e;},'XLWrb':'tjTYG','MvBSQ':'nuUeb','anlIK':'获取用户信息失败','sSFNf':'plugin.sign.Frontend.Modules.Sign.Controllers.sign.sign','VWrCt':function(_0xf7dad4,_0x597595){return _0xf7dad4==_0x597595;},'faaee':function(_0x28ae4e,_0x29d7ee){return _0x28ae4e===_0x29d7ee;},'VmIxp':_0x3cda9b(0x1c7,'KInI'),'Nhyvm':function(_0x14079f,_0x20ae7d){return _0x14079f<_0x20ae7d;},'lqjki':function(_0x5551fe,_0x1f0d78){return _0x5551fe!==_0x1f0d78;},'pFHNA':_0x3cda9b(0x147,'aAic'),'EShYe':_0x3cda9b(0x189,'O!lR'),'DWpvg':'plugin.qmtask.api.qmtask.confirm_qmtask','OAZDu':function(_0x213c02,_0x27a75b){return _0x213c02===_0x27a75b;},'gQtDQ':'任务变更成功!','iRVxE':function(_0x40301b,_0x2bc45a){return _0x40301b+_0x2bc45a;},'nFLhu':_0x3cda9b(0x190,'WHWP'),'SGlRa':'JVHRo','sVkNJ':_0x3cda9b(0x1c1,'&M$K'),'IHksZ':function(_0x201704,_0x3a6e38){return _0x201704===_0x3a6e38;},'CewJX':function(_0x5ba255,_0x21ae3f){return _0x5ba255(_0x21ae3f);},'bgzoR':function(_0x37b4da,_0x24f261){return _0x37b4da!==_0x24f261;},'SQbyE':_0x3cda9b(0x1e4,'CIVc'),'FXinf':_0x3cda9b(0x186,'S16V'),'nGzaL':'finance.balance-withdraw.page','MxwgZ':'Fbttk','hkcJK':_0x3cda9b(0x181,'$aMl'),'tDnEo':function(_0x1f186c,_0x731225){return _0x1f186c(_0x731225);},'KMNYE':function(_0x54004c,_0x5c7615){return _0x54004c>=_0x5c7615;},'zciFD':_0x3cda9b(0x191,'2%sc'),'Yefno':_0x3cda9b(0x143,'6sno'),'zttxV':'JPEBn','OqWfx':function(_0x2dfa1c,_0x2e11b2){return _0x2dfa1c!==_0x2e11b2;},'LBGXi':'JDSty'},_0x47d139=(function(){const _0x10861c={'Dykkf':'FKATQ'};let _0x2e43be=!![];return function(_0x3807d0,_0x148ba2){const _0xb70884=_0x2e43be?function(){const _0x48c4f6=_0xf84c;if(_0x148ba2){if(_0x10861c[_0x48c4f6(0x15e,'CKG0')]===_0x48c4f6(0x1c0,'iN5i')){if(_0xfb406c){const _0x4bdc31=_0x3237e1[_0x48c4f6(0x176,'O!lR')](_0x325b12,arguments);return _0x50a2fd=null,_0x4bdc31;}}else{const _0x562e13=_0x148ba2[_0x48c4f6(0x1ba,'hOYh')](_0x3807d0,arguments);return _0x148ba2=null,_0x562e13;}}}:function(){};return _0x2e43be=![],_0xb70884;};}()),_0x5c198e=_0x26bb4b[_0x3cda9b(0x1ea,'hOYh')](_0x47d139,this,function(){const _0x1825cd=_0x3cda9b;if(_0x26bb4b[_0x1825cd(0x1c9,'22!R')](_0x26bb4b[_0x1825cd(0x132,'&M$K')],_0x26bb4b[_0x1825cd(0x19b,'6JF0')]))_0x424110[_0x1825cd(0x157,'GG*4')](_0x1825cd(0x1a7,'hOYh')+_0x17fa6f);else return _0x5c198e[_0x1825cd(0x148,'RP(p')]()[_0x1825cd(0x1b6,'fX$r')](_0x26bb4b[_0x1825cd(0x187,'yUT7')])[_0x1825cd(0x14b,'f8R(')]()[_0x1825cd(0x159,'CKG0')](_0x5c198e)[_0x1825cd(0x1a9,'CKG0')]('(((.+)+)+)+$');});_0x26bb4b[_0x3cda9b(0x17a,'lLZE')](_0x5c198e);const _0xb1294b=process['env']['jddck'];if(!_0xb1294b){console[_0x3cda9b(0x1da,'4Q5t')](_0x26bb4b[_0x3cda9b(0x1d7,'4Q5t')]);return;}const _0x36c624=_0xb1294b[_0x3cda9b(0x1e1,'eZXZ')]('\x0a');console[_0x3cda9b(0x1d9,'aAic')](_0x3cda9b(0x18f,'*P$E')+_0x36c624[_0x3cda9b(0x196,'jdbu')]+_0x3cda9b(0x141,'RP(p'));for(let _0x2b4f07=0x0;_0x2b4f07<_0x36c624[_0x3cda9b(0x1b3,'2E]X')];_0x2b4f07++){if(_0x26bb4b['xUtDm']('XPfSQ',_0x26bb4b['LvvNE'])){const _0x488396=_0x36c624[_0x2b4f07][_0x3cda9b(0x18e,'hTg[')](','),_0x530081=_0x488396[0x0];console['log'](_0x3cda9b(0x1e6,'7ir0')+_0x26bb4b['vUPqv'](_0x2b4f07,0x1)+_0x3cda9b(0x1b1,'*P$E'));const _0x5ab447={'User-Agent':_0x26bb4b['noeGy'],'Cookie':_0x530081,'content-type':_0x3cda9b(0x166,'ZMbl')},_0x4e21ed={'i':'12','uuid':'0','type':'1','version':_0x26bb4b['ORird'],'basic_info':'1','route':_0x26bb4b['rYtRw']},_0x2983cb=_0x26bb4b[_0x3cda9b(0x18d,'Xxok')];try{if(_0x26bb4b[_0x3cda9b(0x156,'W74&')](_0x26bb4b[_0x3cda9b(0x1a4,'6JF0')],_0x3cda9b(0x1ca,'7ir0'))){let _0x1e10c8=await _0xf12efb[_0x3cda9b(0x1bc,'ZFcq')](_0x2983cb,_0x4e21ed,{'headers':_0x5ab447})[_0x3cda9b(0x151,'k#cB')](_0x5330a2=>_0x5330a2['data']);if(_0x26bb4b[_0x3cda9b(0x180,'RP(p')](_0x1e10c8[_0x3cda9b(0x1dd,'iN5i')],0x1)){if(_0x26bb4b['ggxXk'](_0x26bb4b[_0x3cda9b(0x179,'hOYh')],_0x26bb4b['MvBSQ']))_0x35fb82[_0x3cda9b(0x19d,'*P$E')](_0x3cda9b(0x165,'cOC@')+_0x851c4a);else{console[_0x3cda9b(0x194,'6JF0')](_0x26bb4b['anlIK']);continue;}}const _0x5492a9=_0x1e10c8['data'][_0x3cda9b(0x1eb,'w*Pe')][_0x3cda9b(0x1b0,'ZFcq')];console[_0x3cda9b(0x1d6,'Z3l2')](_0x3cda9b(0x178,'6sno')+_0x1e10c8['data'][_0x3cda9b(0x146,'RP(p')][_0x3cda9b(0x1a8,'d$#P')]+'---'+_0x5492a9+'】'),_0x4e21ed[_0x3cda9b(0x192,'2%sc')]=_0x26bb4b[_0x3cda9b(0x13c,'n1[)')],_0x1e10c8=await _0xf12efb[_0x3cda9b(0x16d,'Xxok')](_0x2983cb,_0x4e21ed,{'headers':_0x5ab447})[_0x3cda9b(0x197,'hTg[')](_0x58c9a1=>_0x58c9a1[_0x3cda9b(0x15f,'6JF0')]);if(_0x26bb4b['VWrCt'](_0x1e10c8[_0x3cda9b(0x1e5,'w*Pe')],0x1))console[_0x3cda9b(0x14d,'$aMl')](_0x3cda9b(0x15d,'fX$r')+_0x1e10c8[_0x3cda9b(0x13d,'f8R(')]['amount']+'元宝');else{if(_0x26bb4b[_0x3cda9b(0x198,'2E]X')](_0x3cda9b(0x1df,'W74&'),_0x26bb4b[_0x3cda9b(0x16a,'22!R')])){_0x4da0a8[_0x3cda9b(0x1ec,'DpdK')](_0x3cda9b(0x1cd,'S16V'));return;}else console['log'](_0x1e10c8[_0x3cda9b(0x13e,'Xxok')]+'🎉');}for(let _0x483866=0x0;_0x26bb4b[_0x3cda9b(0x149,'6JF0')](_0x483866,0x5);_0x483866++){if(_0x26bb4b[_0x3cda9b(0x17e,'DpdK')](_0x26bb4b[_0x3cda9b(0x1d4,'n1[)')],_0x26bb4b['EShYe'])){_0x4e21ed['route']=_0x26bb4b[_0x3cda9b(0x144,'d$#P')],_0x1e10c8=await _0xf12efb[_0x3cda9b(0x1ae,'ZMbl')](_0x2983cb,_0x4e21ed,{'headers':_0x5ab447})[_0x3cda9b(0x19f,'lLZE')](_0x450bbd=>_0x450bbd['data']);if(_0x26bb4b[_0x3cda9b(0x17b,'cOC@')](_0x1e10c8[_0x3cda9b(0x1bf,'nvNd')],_0x26bb4b[_0x3cda9b(0x1c5,'CKG0')]))console[_0x3cda9b(0x152,'iCAt')](_0x3cda9b(0x199,'ZFcq')+_0x26bb4b['iRVxE'](_0x483866,0x1)+_0x3cda9b(0x1ed,'cOC@')),await new Promise(_0x17e5a2=>setTimeout(_0x17e5a2,0x7d0));else{if(_0x26bb4b[_0x3cda9b(0x1e2,'lLZE')]===_0x26bb4b[_0x3cda9b(0x1d5,'ZMbl')])_0x3480b4[_0x3cda9b(0x1cb,'O!lR')](_0x3cda9b(0x13b,'X&G5')+_0x1cba24['msg']);else{console[_0x3cda9b(0x16e,'lLZE')](_0x1e10c8[_0x3cda9b(0x1ad,'lBda')]);break;}}}else return _0x35fa13[_0x3cda9b(0x134,'ZFcq')]()[_0x3cda9b(0x1cf,'DpdK')]('(((.+)+)+)+$')[_0x3cda9b(0x148,'RP(p')]()[_0x3cda9b(0x1af,'2E]X')](_0x542b23)['search'](aenAEF[_0x3cda9b(0x1d1,'n1[)')]);}_0x4e21ed['route']=_0x26bb4b[_0x3cda9b(0x1ab,'O!lR')],_0x1e10c8=await _0xf12efb[_0x3cda9b(0x1b5,'4Q5t')](_0x2983cb,{'headers':_0x5ab447,'params':_0x4e21ed})['then'](_0x1d4e0a=>_0x1d4e0a['data']);if(_0x26bb4b[_0x3cda9b(0x15c,'6JF0')](_0x1e10c8[_0x3cda9b(0x139,'eZXZ')],0x1)){if(_0x3cda9b(0x183,'ZMbl')===_0x3cda9b(0x1cc,'RP(p'))_0x2f6ec3[_0x3cda9b(0x18a,'Xxok')](_0x5c20ab[_0x3cda9b(0x13f,'22!R')]+'🎉');else{const _0x3aabbc=_0x26bb4b[_0x3cda9b(0x14a,'jdbu')](parseFloat,_0x1e10c8[_0x3cda9b(0x1e8,'O!lR')][_0x3cda9b(0x167,'GG*4')]);console[_0x3cda9b(0x13a,'iN5i')](_0x3cda9b(0x193,'d$#P')+_0x3aabbc);if(_0x3aabbc>=0x5){if(_0x26bb4b['bgzoR'](_0x26bb4b[_0x3cda9b(0x1a6,'iCAt')],_0x3cda9b(0x1e7,'W74&'))){let _0x4864e4={..._0x4e21ed,'change_value':_0x3aabbc,'withdraw_type':'4'};_0x4864e4['route']=_0x26bb4b[_0x3cda9b(0x1dc,'ZFcq')];const _0x3d56d3=await _0xf12efb[_0x3cda9b(0x182,'22!R')](_0x2983cb,{'headers':_0x5ab447,'params':_0x4864e4})[_0x3cda9b(0x1ce,'O!lR')](_0x70ccf2=>_0x70ccf2[_0x3cda9b(0x185,'n1[)')]);_0x26bb4b[_0x3cda9b(0x1bd,'KInI')](_0x3d56d3['result'],0x1)?console['log'](_0x3cda9b(0x163,'Z3l2')+_0x3d56d3[_0x3cda9b(0x1a1,'lLZE')]):console['log'](_0x3cda9b(0x174,'eZXZ')+_0x3d56d3);}else{const _0x41443c=_0x12f173?function(){const _0x5566d2=_0x3cda9b;if(_0x2f6507){const _0x3cb850=_0x306eec[_0x5566d2(0x145,'&M$K')](_0x2163a6,arguments);return _0x4b08a3=null,_0x3cb850;}}:function(){};return _0xf5485a=![],_0x41443c;}}else console[_0x3cda9b(0x1d6,'Z3l2')](_0x3cda9b(0x140,'O!lR'));}}else console[_0x3cda9b(0x1be,'lBda')]('获取元宝数量失败：'+_0x1e10c8);console[_0x3cda9b(0x14d,'$aMl')](_0x3cda9b(0x172,'n1[)')),_0x4e21ed['route']=_0x26bb4b[_0x3cda9b(0x1a3,'aAic')],_0x4e21ed['mid']=_0x5492a9,_0x1e10c8=await _0xf12efb[_0x3cda9b(0x170,'O!lR')](_0x2983cb,{'headers':_0x5ab447,'params':_0x4e21ed})[_0x3cda9b(0x1a2,'iCAt')](_0x2af93e=>_0x2af93e[_0x3cda9b(0x164,'aAic')]);if(_0x26bb4b['faaee'](_0x1e10c8[_0x3cda9b(0x16b,'n1[)')],0x1)){if(_0x26bb4b[_0x3cda9b(0x1e9,'X&G5')]===_0x26bb4b[_0x3cda9b(0x136,'lLZE')])_0xe34ae9[_0x3cda9b(0x175,'W74&')](_0x3cda9b(0x16f,'n1[)'));else{const _0x579003=_0x26bb4b[_0x3cda9b(0x1b8,'Xxok')](parseFloat,_0x1e10c8['data'][_0x3cda9b(0x168,'X&G5')]);console[_0x3cda9b(0x138,'6sno')]('获取余额数据成功：当前余额为'+_0x579003+'元');if(_0x26bb4b[_0x3cda9b(0x188,'4Q5t')](_0x579003,0x5)){console[_0x3cda9b(0x14d,'$aMl')](_0x26bb4b['zciFD']);let _0x4a2e4f={..._0x4e21ed,'withdraw_type':'1','withdraw_money':_0x579003,'route':'finance.balance-withdraw.withdraw'};const _0x1ae67f=await _0xf12efb[_0x3cda9b(0x1e3,'6sno')](_0x2983cb,{'headers':_0x5ab447,'params':_0x4a2e4f})[_0x3cda9b(0x161,'RP(p')](_0x625cca=>_0x625cca[_0x3cda9b(0x19c,'S16V')]);_0x26bb4b[_0x3cda9b(0x142,'lLZE')](_0x1ae67f[_0x3cda9b(0x1d0,'tbF5')],0x1)?_0x26bb4b[_0x3cda9b(0x15b,'*P$E')](_0x26bb4b['Yefno'],_0x26bb4b['zttxV'])?_0x36f865['log'](_0x3cda9b(0x158,'X&G5')+_0x2d9e77):console[_0x3cda9b(0x1c2,'Mg(9')](_0x3cda9b(0x150,'GG*4')):_0x26bb4b[_0x3cda9b(0x1c8,'6sno')](_0x3cda9b(0x1bb,'nvNd'),_0x3cda9b(0x14f,'RP(p'))?console[_0x3cda9b(0x153,'f8R(')](_0x3cda9b(0x1ac,'W74&')+_0x1ae67f):_0x23c208['log'](_0x26bb4b[_0x3cda9b(0x169,'cOC@')]);}else console[_0x3cda9b(0x19d,'*P$E')]('余额不足，无法提现。');}}else console[_0x3cda9b(0x1be,'lBda')](_0x3cda9b(0x1e0,'WHWP')+_0x1e10c8);}else _0x165688['log'](_0x3cda9b(0x155,'GG*4')+_0x50584d);}catch(_0x198361){if(_0x26bb4b[_0x3cda9b(0x184,'f8R(')](_0x26bb4b[_0x3cda9b(0x162,'Xxok')],_0x26bb4b[_0x3cda9b(0x1de,'BU4%')])){const _0x576323=_0x29656c[_0x3cda9b(0x14c,'iN5i')](_0x524c6c,arguments);return _0x5bd0ae=null,_0x576323;}else{console[_0x3cda9b(0x135,'iN5i')]('请求错误：'+_0x198361);continue;}}}else _0x59c5a7[_0x3cda9b(0x19e,'KInI')](_0x26bb4b['nggbp']);}}_0x13c746();var version_ = 'jsjiami.com.v7';