# !/usr/bin/python3
# -- coding: utf-8 --
"""
青龙面板配置文件API脚本
cron: 32 7 * 7 *
const $ = new Env("青龙面板配置文件API-PY");
"""

import requests
import re
from json import dumps as jsonDumps


class qlconfig():
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

    def list(self) -> list:
        """获取配置文件列表

        :return: 源相应json
        """
        url = f"{self.address}/open/configs/files"
        headers = {"Authorization": self.auth}
        try:
            rjson = requests.get(url, headers=headers).json()
            if(rjson['code'] == 200):
                return rjson['data']
            else:
                self.log(f"获取配置文件列表错误：{rjson['message']}")
        except Exception as e:
            self.log(f"获取配置文件列表错误：{str(e)}")

    def value(self, file_name):
        """获取配置文件内容

        :param file_name: 文件名
        :return: 源相应json
        """
        url = f"{self.address}/open/configs/{file_name}"
        headers = {"Authorization": self.auth}
        try:
            rjson = requests.get(url, headers=headers).json()
            if(rjson['code'] == 200):
                return rjson['data']
            else:
                self.log(f"获取配置文件内容错误：{rjson['message']}")
        except Exception as e:
            self.log(f"获取配置文件内容错误：{str(e)}")


    def save(self, name, content):
        """保存配置文件

        :param name: 文件名
        :param content: 值
        :return: 源相应json
        """
        url = f"{self.address}/open/configs/save"
        headers = {"Authorization": self.auth}
        data = {
            "content": content,
            "name": name
        }
        try:
            rjson = requests.post(url, headers=headers, data=data).json()
            if(rjson['code'] == 200):
                self.log(f"保存配置文件成功：{rjson['message']}")
                return True
            else:
                self.log(f"保存配置文件失败：{rjson['message']}")
                return False
        except Exception as e:
            self.log(f"保存配置文件失败：{str(e)}{rjson}")
            return False

    def update_config_by_name(self, variable_name, new_value):
        """修改配置文件config.sh中的变量并保存配置文件

        :param variable_name: 文件中变量的名称
        :param new_value: 变量的值
        :return: 源相应json
        """
        url = f"{self.address}/open/configs/save"
        headers = {"Authorization": self.auth}

        pattern = re.compile(rf'export {variable_name}=".*?"', re.DOTALL)
        new_content = pattern.sub(f'export {variable_name}={new_value}', result)

        data = {
            "content": new_content,
            "name": "config.sh"
        }
        try:
            rjson = requests.post(url, headers=headers, data=data).json()
            if(rjson['code'] == 200):
                self.log(f"保存配置文件成功：{rjson['message']}")
                return True
            else:
                self.log(f"保存配置文件失败：{rjson['message']}")
                return False
        except Exception as e:
            self.log(f"保存配置文件失败：{str(e)}{rjson}")
            return False

if __name__ == "__main__":
 
    print(f"测试青龙配置文件API开始")
    ql_config = qlconfig()
    result = ql_config.list();
    print(f"{result[0]}")
    print(f"测试青龙配置文件API完成")
