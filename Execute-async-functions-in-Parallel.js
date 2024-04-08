async function asyncParallel(taskList, callback) {
  const results = await Promise.all(taskList.map((task) => task()));
  callback(results);
}

// Test code
function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, value * 1000);
    });
}

const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

asyncParallel(taskList, (result) => {
  console.log("results", result);
});
