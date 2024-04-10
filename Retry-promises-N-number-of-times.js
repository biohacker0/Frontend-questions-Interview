async function retryWithDelay(fn, retries) {
  const failErro = new Error("Retry Failed");
  const delay = 1000;

  try {
    let res = await fn();
    return Promise.resolve(res);
  } catch (error) {
    if (retries <= 0) return Promise.reject(failErro);

    console.log(`reties left ${retries}`);
    await new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
    await retryWithDelay(fn, retries - 1);
  }
}

function getTestFunc() {
  let callCounter = 0;
  return async function () {
    callCounter += 1;
    // if called less than 5 times
    if (callCounter < 5) {
      throw new Error("Not yet");
    } else return "its done ";
  };
}

// Test the code
async function test() {
  await retryWithDelay(getTestFunc(), 10);
  console.log("success");
  await retryWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here");
}

// Print the result
test().catch(console.error);
