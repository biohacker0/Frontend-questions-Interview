function myPromiseAll(tasks) {
  let arr = [];
  let count = tasks.length;

  return new Promise(function (resolve, reject) {
    for (let i = 0; i < tasks.length; i++) {
      let task = tasks[i];
      Promise.resolve(task).then(result).catch(error);

      function result(val) {
        arr[i] = val;
        count--;

        if (count == 0) resolve(arr);
      }

      function error(err) {
        reject(err);
      }
    }
  });
}

// Input :

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
const taskList = [task(1000), task(5000), task(3000)];
//run promise.all
myPromiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
