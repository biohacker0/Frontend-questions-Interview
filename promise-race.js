function race(tasks) {
  return new Promise(function (resolve, reject) {
    let ans = [];
    let count = tasks.length;

    for (let i = 0; i < tasks.length; i++) {
      Promise.resolve(tasks[i]).then(result).catch(error);
      function result(val) {
        ans[i] = val;
        resolve(ans[i]);
      }

      function error(err) {
        ans[i] = err;
        reject(ans[i]);
      }
    }
  });
}

const test1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 40, "three");
});
race([test1, test2, test3])
  .then(function (value) {
    // first two resolve, 3rd fails, but promise2 is faster
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
