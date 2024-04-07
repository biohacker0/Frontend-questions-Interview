function myPromise(executor) {
  let status = "Pending";
  let value = null;
  let reason = null;
  let onFulfilledCallback = null;
  let onRejectedCallback = null;

  function resolve(result) {
    if (status !== "Pending") return;
    status = "Fullfilled";
    value = result;
    if (onFulfilledCallback) onFulfilledCallback(result);
  }

  function reject(error) {
    if (status !== "Pending") return;
    status = "Rejected";
    reason = error;
    if (onRejectedCallback) onRejectedCallback(error);
  }

  this.then = function (onFullfilled) {
    if (status == "Fullfilled") onFullfilled(value);
    else onFulfilledCallback = onFullfilled;
  };

  this.catch = function (onRejected) {
    if (status == "Rejected") onRejected(reason);
    else onRejectedCallback = onRejected;
  };

  executor(resolve, reject);
}

let p1 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve-1");
  }, 1000);
});

setTimeout(() => {
  p1.then((res) => console.log(res));
}, 5000);
