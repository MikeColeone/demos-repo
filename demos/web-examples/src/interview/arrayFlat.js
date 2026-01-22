let result = [];
function flat(data, result) {
  for (let i = 0; i < data.length; i++) {
    let temp = data[i];
    if (typeof temp === "number") {
      result.push(temp);
    } else {
      flat(temp, result);
    }
  }
}

let data = [1, [2, [[3, 4], 5], 6], 7];
flat(data, result);
console.log(result);
