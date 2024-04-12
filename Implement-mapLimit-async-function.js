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

async function mapLimit(arr, limit, iterate) {
  const subArray = createSubarray(arr, limit);
  const results = [];

  async function processNext(item) {
    return new Promise((resolve, reject) => {
      let index = 0; // Initialize index here

      function callback(error, nextNum) {
        if (error) {
          reject("Error occurred while processing");
        } else {
          results.push(nextNum);
          index++;
          processElement(); // Call processElement() after processing each element
        }
      }

      function processElement() {
        if (index < item.length) {
          iterate(item[index], callback);
          // Move to the next index
        } else {
          resolve(); // Resolve when all elements processed
        }
      }

      processElement(); // Start processing elements
    });
  }

  for (const item of subArray) {
    await processNext(item);
  }

  return results;
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
