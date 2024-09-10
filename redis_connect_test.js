// 获取今天的日期 (以 YYYY-MM-DD 格式)
function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 补0
  const day = String(today.getDate()).padStart(2, '0');
  return `${year} -${month} -${day}`;
}

// 连接 Redis 并返回客户端实例
async function connectRedis() {
  const client = redis.createClient({
    url: 'redis://:foobared@192.168.100.3:6379'
  });

  client.on('error', (err) = > console.log('Redis Client Error', err));

  await client.connect(); // 等待连接
  console.log('已连接到 Redis 服务器');
  return client; // 返回连接好的 Redis 客户端
}

// 设置 Redis 的键值
async function setRedisValue(client, key, value) {
  await client.set(key, value);
  console.log(`已设置 ${key} 为 ${value}`);
}

// 获取 Redis 的值
async function getRedisValue(client, key) {
  const value = await client.get(key);
  console.log(`获取到的值为:${value}`);
  return value;
}

// 判断是否第二次提交
async function isSecondCommit() {
  const redis = require('redis');
  const today = getTodayDate();
  const client = await connectRedis(); // 获取 Redis 客户端实例
  let isSecondFlag = false;
  let xijiu_sign = await getRedisValue(client, 'xijiu_sign'); // 获取键值对
  let xijiu_sign_count = await getRedisValue(client, 'xijiu_sign_count'); // 获取键值对
  console.log('获取到xijiu_sign的值:', xijiu_sign)
  console.log('获取到xijiu_sign_count的值:', xijiu_sign_count)
  console.log('获取到today的值:', today)
  if (xijiu_sign === today) {
    // 第三次点击，提示已经点击过
    if(xijiu_sign_count > 2){
      console.log('今天已经点击过两次了！');   
    }else{
        //第二次点击
        await setRedisValue(client, 'xijiu_sign_count', '2');
        isSecondFlag = true;
        console.log('这是今天的第二次点击！');
    }
  } else {
    // 设置键值对 // 保存今天的日期// 第一次点击，记录状态
    await setRedisValue(client, 'xijiu_sign', today);
    await setRedisValue(client, 'xijiu_sign_count', '1');
    console.log('这是今天的第一次点击！');
  }

  await client.disconnect(); // 完成操作后断开连接
  return isSecondFlag;
}

// 主函数
async function main() {
    if(isSecondCommit()){
        console.log('今天已经点击过了！');   
    }
}

main().catch(console.error);
