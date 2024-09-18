# !/usr/bin/python3
# -- coding: utf-8 --
"""
青龙面板环境变量API脚本
"""


import requests
from json import dumps as jsonDumps
 
class QL:
    #def __init__(self, address: str, id: str, secret: str) -> None:
    def __init__(self) -> None:
        """
        初始化
        address = "http://www.lksapling.top:8005"
        client_id = "S-aL4AvQ_tQ-"
        client_secret = "9YYMRxvxZ7t9yi-8JzFsfnQc"
        """
        self.address = "http://www.lksapling.top:8005"
        self.id = "S-aL4AvQ_tQ-"
        self.secret = "9YYMRxvxZ7t9yi-8JzFsfnQc"
        self.valid = True
        self.login()
 
    def log(self, content: str) -> None:
        """
        日志
        """
        print(content)
 
    def login(self) -> None:
        """
        登录
        """
        url = f"{self.address}/open/auth/token?client_id={self.id}&client_secret={self.secret}"
        try:
            rjson = requests.get(url).json()
            if(rjson['code'] == 200):
                self.auth = f"{rjson['data']['token_type']} {rjson['data']['token']}"
            else:
                self.log(f"登录失败：{rjson['message']}")
        except Exception as e:
            self.valid = False
            self.log(f"登录失败：{str(e)}")
 
    def getEnvs(self) -> list:
        """
        获取环境变量
        """
        url = f"{self.address}/open/envs?searchValue="
        headers = {"Authorization": self.auth}
        try:
            rjson = requests.get(url, headers=headers).json()
            if(rjson['code'] == 200):
                return rjson['data']
            else:
                self.log(f"获取环境变量失败：{rjson['message']}")
        except Exception as e:
            self.log(f"获取环境变量失败：{str(e)}")
 
    def get_by_name(self, env):
        """
        获取环境变量

        :param env: 环境变量名
        :return: zip(环境变量ID,环境变量值) 使用for(id,value) in get_env(env)
        """
        url = f"{self.address}/open/envs?searchValue={env}"
        headers = {"Authorization": self.auth}
        res = requests.get(url, headers=headers).json().get("data")
        return res

    def get_by_id(self, id):
            """
            根据环境变量ID获取环境变量

            :param id: 环境变量ID
            :return: 响应结果json
            """
            url = f"{self.address}/open/envs/{id}"
            headers = {"Authorization": self.auth}
            res = requests.get(url, headers=headers).json()
            return res

    def deleteEnvs(self, ids: list) -> bool:
        """
        删除环境变量
        """
        url = f"{self.address}/open/envs"
        headers = {"Authorization": self.auth,"content-type": "application/json"}
        try:
            rjson = requests.delete(url, headers=headers, data=jsonDumps(ids)).json()
            if(rjson['code'] == 200):
                self.log(f"删除环境变量成功：{len(ids)}")
                return True
            else:
                self.log(f"删除环境变量失败：{rjson['message']}")
                return False
        except Exception as e:
            self.log(f"删除环境变量失败：{str(e)}")
            return False
 
    def addEnvs(self, envs: list) -> bool:
        """
        新建环境变量
        """
        url = f"{self.address}/open/envs"
        headers = {"Authorization": self.auth,"content-type": "application/json"}
        try:
            rjson = requests.post(url, headers=headers, data=jsonDumps(envs)).json()
            if(rjson['code'] == 200):
                self.log(f"新建环境变量成功：{len(envs)}")
                return True
            else:
                self.log(f"新建环境变量失败：{rjson['message']}")
                return False
        except Exception as e:
            self.log(f"新建环境变量失败：{str(e)}")
            return False
 
    def updateEnv(self, env: dict) -> bool:
        """
        更新环境变量
        """
        url = f"{self.address}/open/envs"
        headers = {"Authorization": self.auth,"content-type": "application/json"}
        try:
            rjson = requests.put(url, headers=headers, data=jsonDumps(env)).json()
            if(rjson['code'] == 200):
                self.log(f"更新环境变量成功")
                return True
            else:
                self.log(f"更新环境变量失败：{rjson['message']}")
                return False
        except Exception as e:
            self.log(f"更新环境变量失败：{str(e)}")
            return False
 
 
if __name__ == "__main__":

    self.log(f"测试青龙环境变量API开始")
    ql = QL()
    result = ql.get_by_name("JD_COOLIE");
    self.log(f"{result[0]}")
    self.log(f"测试青龙环境变量API完成")
