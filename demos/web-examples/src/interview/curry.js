function sum() {
  let t = arguments;
  if (t.length === 2) {
    return t[0] + t[1];
  } else {
    return function (c) {
      return t[0] + c;
    };
  }
}
