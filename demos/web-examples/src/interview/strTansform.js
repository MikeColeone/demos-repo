// 下划线连接的字符串转换为驼峰形式
const str = "demo_tt";

function transform(str) {
  let temp = str.split("_");
  let t = temp[0];
  for (let i = 1; i < temp.length; i++) {
    t += upperFirstChar(temp[i]);
  }
  console.log(temp);
  return t;
}

function upperFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const camelStr = transform(str);
console.log("转换结果：", camelStr);
