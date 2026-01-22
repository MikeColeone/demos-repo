const regions = [
  {
    name: "北京市",
    children: [{ name: "朝阳区" }, { name: "海淀区" }],
  },
  {
    name: "广东省",
    children: [
      {
        name: "深圳市",
        children: [{ name: "南山区" }, { name: "福田区" }],
      },
      {
        name: "广州市",
        children: [{ name: "天河区" }, { name: "越秀区" }],
      },
    ],
  },
];

function match(str, tar) {
  if (!str) return true;

  const searchStr = str.toLowerCase();
  const targetStr = tar.toLowerCase();

  let searchIndex = 0;

  for (const char of targetStr) {
    if (char === searchStr[searchIndex]) {
      searchIndex++;
      if (searchIndex === searchStr.length) {
        return true;
      }
    }
  }

  return false;
}

function mathContinus(str, tar) {
  if (tar.length === 0) {
    return false;
  }

  const strT = str.toLowerCase();
  const tarT = tar.toLowerCase();
  for (let i = 0; i < tarT.length; i++) {
    if (tarT.charAt(i) === strT.charAt(i)) {
      const curr = tarT.slice(i, i + str.length);
      if (curr === strT) return true;
    }
  }

  return false;
}

function mySearch(loc) {
  const results = [];
  function traverse(regions, parentPath = "") {
    for (const region of regions) {
      const currentPath = parentPath
        ? `${parentPath}${region.name}`
        : region.name;
      if (match(loc, region.name)) {
        results.push({
          name: region.name,
          fullPath: currentPath,
        });
      }

      if (region.children && region.children.length > 0) {
        traverse(region.children, currentPath);
      }
    }
  }

  traverse(regions);

  return results;
}

// ------------------------------
// 使用示例
// ------------------------------
console.log("=== 搜索示例 ===");

// 示例1：搜索"京"
console.log("1. 搜索关键词：'京'");
const result1 = mySearch("京");
console.log("匹配结果：", result1);

// 示例2：搜索"州"
console.log("\n2. 搜索关键词：'州'");
const result2 = mySearch("州");
console.log("匹配结果：", result2);

// 示例3：搜索"南"
console.log("\n3. 搜索关键词：'南'");
const result3 = mySearch("南");
console.log("匹配结果：", result3);

// 示例4：搜索空字符串（返回所有地区）
console.log("\n4. 搜索关键词：''（空字符串）");
const result4 = mySearch("");
console.log("匹配结果：", result4);
