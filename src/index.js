
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  else {
    let m = array[0];
    for (let i = 1; i < array.length; i++) {
      if (m > array[i]) m = array[i];
    };
    return m;
  }
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  else {
    let m = array[0];
    for (let i = 1; i < array.length; i++) {
      if (m < array[i]) m = array[i];
    }
    return m;
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  else {
    let s = 0;
    for (let i = 0; i < array.length; i++) {
      s += array[i];
    }
    s = s / array.length
    return s;
  }
}