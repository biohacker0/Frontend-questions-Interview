function Stack() {
  var items = [];
  //other methods go here

  //Push an item in the Stack
  this.push = function (element) {
    items.push(element);
  };

  //Pop an item from the Stack
  this.pop = function () {
    return items.pop();
  };

  //Peek top item from the Stack
  this.peek = function () {
    return items[items.length - 1];
  };

  //Is Stack empty
  this.isEmpty = function () {
    return items.length === 0;
  };

  //Clear the Stack
  this.clear = function () {
    items.length = 0;
  };

  //Size of the Stack
  this.size = function () {
    return items.length;
  };
}

let s1 = new Stack();

for (let index = 0; index < 10; index++) {
  s1.push(index);
}
console.log(s1.peek());
