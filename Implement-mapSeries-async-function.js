function mapSeries(arr, interator) {
  return new Promise((resolve, reject) => {
    let res = [];
    let index = 0;

    function processNext() {
      if (index < arr.length) interator(arr[index], callback);
      else resolve(res);
    }

    function callback(error, nextNum) {
      if (error == true) {
        reject("Error occurred while processing");
      } else {
        res.push(nextNum);
        index++;
        processNext();
      }
    }

    processNext();
  });
}

// Example usage:
let numPromise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    // throw error
    if (num === 12) {
      callback(true);
    } else {
      callback(null, num);
    }
  }, 1000);
});
numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));
