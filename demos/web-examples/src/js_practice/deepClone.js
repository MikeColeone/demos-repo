function deepClone(value) {
  const x_map = new Map();
  function _deepClone(value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    if (x_map.has(value)) {
      return x_map.get(value);
    }
    const result = Array.isArray(value) ? [] : {};
    x_map.set(value, result);
    for (const key in value) {
      result[key] = _deepClone(value[key]);
    }
    return result;
  }
  return _deepClone(value);
}

const test = {
  a: "ii",
  b: "jj",
};
test.self = test;
const ans = deepClone(test);
console.log(ans);
console.log(test);

const arr = [];
arr[0] = arr;
console.log(deepClone(arr));
