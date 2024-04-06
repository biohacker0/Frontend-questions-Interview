function any(tasks) {
  let arr = [];
  let count = tasks.length;

  return new Promise(function (resolve, reject) {
    for (let i = 0; i < tasks.length; i++) {
      let task = tasks[i];
      Promise.resolve(task).then(result).catch(error);

      function result(val) {
        arr[i] = val;
        resolve(arr[i]);
      }

      function error(err) {
        count--;
        if (count === 0) {
          reject(new Error("All promises rejected"));
        }
      }
    }
  });
}

const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, "two");
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});
any([test1, test2, test3])
  .then(function (value) {
    // first and third fails, 2nd resolves
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
