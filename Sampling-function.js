function message() {
  console.log("hello");
}

function sampler(func, n) {
  let count = 0;
  return function () {
    if (count >= 3) {
      count = 0;
      message();
    }
    count++;
  };
}
const sample = sampler(message, 4);
sample();
sample();
sample();
sample();
sample();
sample();
sample();
sample();
