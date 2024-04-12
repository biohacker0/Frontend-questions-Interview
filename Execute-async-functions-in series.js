const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 1000 * i);
  });
};

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

async function asyncSeriesExecuter(promises) {
  try {
    for (let promise of promises) {
      let res = await promise;
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
}

asyncSeriesExecuter(promises);
