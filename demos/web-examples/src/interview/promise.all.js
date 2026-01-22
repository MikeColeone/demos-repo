Promise.all = function (promises) {
  let result;
  let length = promises.length;
  let count = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < length; i++) {
      Promise.resolve(promises[i]).then((res) => {
        count++;
        result[i] = res;
        if (count === length) {
          resolve(result);
        }
      }, reject);
    }
  });
};
