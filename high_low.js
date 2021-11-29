function findHighAndLow(array) {
  let low = +Infinity,
    high = -Infinity;

  for (let i = 0; i < array.length; i++) {
    console.log(i);
    if (low > array[i]) {
      low = array[i];
    } else if (high < array[i]) {
      high = array[i];
    }
  }
  let result = [high, low];
  return result;
}

function print() {
  let array1 = [2, 4, 1, 0, 2, -1];
  let array2 = [20, 50, 12, 6, 14, 8];
  let array3 = [0, 10, 10000, 5, -100 - Infinity, +Infinity];

  let result = findHighAndLow(array3);
  console.log("High: " + result[0] + " Low: " + result[1]);
}

print();
