// recreating the instancOf operator in JavaScript

function customInstanceOf(obj, target) {
  let proto = obj.__proto__;
  while (proto) {
    if (proto === target.prototype) return true;
    else proto = proto.__proto__;
  }
  return false;
}
