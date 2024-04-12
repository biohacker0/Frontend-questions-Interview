function createSubarray(arr, limit) {
  let copyArr = arr.slice(); // Create a copy of the original array
  let list = [];
  while (copyArr.length != 0) {
    let internalArr = [];
    for (let i = 0; i < limit && copyArr.length > 0; i++) {
      internalArr.push(copyArr.shift());
    }
    list.push(internalArr);
  }
  return list;
}

async function mapLimit(arr, limit, iteratie) {
  let subArray = createSubarray(arr, limit);

  let index = 0;
  let res = [];

  function processNext(item) {
    return new Promise((resolve, reject) => {
      if (index < item.length) iteratie(item[index], callback);
      else {
        index = 0;
        resolve();
      }

      function callback(error, nextNum) {
        if (error == true) {
          reject("Error occurred while processing");
        } else {
          res.push(nextNum);
          index++;
          processNext(item).then(resolve).catch(reject);
        }
      }
    });
  }

  for (let item of subArray) {
    let p1 = await processNext(item);
  }

  return res;
}

let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    // throw error
    if (num === 6) {
      callback(true);
    } else {
      callback(null, num);
    }
  }, 2000);
});
numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));
