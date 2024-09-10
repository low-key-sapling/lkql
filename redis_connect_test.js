// 获取今天的日期 (以 YYYY-MM-DD 格式)
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 补0
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const redis = require('redis');
const today = getTodayDate();
const xijiu_sign = '';

// 创建 Redis 客户端
const client = redis.createClient({
  host: '192.168.100.3',
  port: 6379,
  password: 'foobared'  // 可选，如果没有密码验证则省略
});

// 连接到 Redis
client.on('connect', function() {
  console.log('已连接到 Redis 服务器');
});

// 获取设置的值
client.get('xijiu_sign', function(err, reply) {
if (err) {
  console.error('获取值时发生错误:', err);
  return;
}
console.log('获取到的值:', reply);
xijiu_sign = reply;
});

console.log('获取到xijiu_sign的值:', xijiu_sign)
if (xijiu_sign === today) {
    // 第二次点击，提示已经点击过
    console.log('今天已经点击过了！');
} else {
    // 第一次点击，记录状态
    // 设置 Redis 键值对
  client.set('xijiu_sign', today, function(err, reply) {
    if (err) {
      console.error('设置值时发生错误:', err);
      return;
    }
    console.log('值设置成功:', reply);
  }); // 保存今天的日期
    console.log('这是今天的第一次点击！');
}

// 关闭 Redis 连接
client.quit();
