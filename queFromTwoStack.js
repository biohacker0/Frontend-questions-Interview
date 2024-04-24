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
let s2 = new Stack();

function Que() {
  this.enqueue = function (element) {
    while (!s1.isEmpty()) {
      s2.push(s1.pop());
    }

    s2.push(element);

    while (!s2.isEmpty()) {
      s1.push(s2.pop());
    }
  };

  this.dequeue = function () {
    return s1.pop();
  };

  this.peek = function () {
    return s1.peek();
  };

  this.isEmpty = function () {
    return s1.isEmpty() && s2.isEmpty();
  };
}

const queue = new Que();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
