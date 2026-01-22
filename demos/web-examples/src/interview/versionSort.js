function sortVersion(arr) {
  return arr.sort((a, b) => {
    const arrA = a.split(".");
    const arrB = b.split(".");
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] === undefined) {
        return -1;
      } else if (arrB[i] === undefined) {
        return 1;
      } else if (parseInt(arrA[i]) === parseInt(arrB[i])) {
        continue;
      } else {
        return parseInt(arrA[i]) > parseInt(arrB[i]);
      }
    }
  });
}

function version(arr1, arr2) {}
