const print = console.log.bind(console);

function toggle(...args) {
  let index = 0;

  return function () {
    const value = args[index]; // Retrieve the value at the current index
    index = (index + 1) % args.length; // Update the index for the next invocation
    return value; // Return the retrieved value
  };
}

let hello = toggle("hello");
print(hello()); // "hello";
print(hello()); // "hello";
let onOff = toggle("on", "off");
print(onOff()); // "on"
print(onOff()); // "off"
print(onOff()); // "on"
