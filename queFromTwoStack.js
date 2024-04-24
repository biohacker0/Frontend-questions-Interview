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
    s1.push(element);
  };

  this.dequeue = function () {
    if (s2.isEmpty()) {
      while (!s1.isEmpty()) {
        s2.push(s1.pop());
      }
    }
    let element = s2.pop();

    //refill s1
    while (!s2.isEmpty()) {
      s1.push(s2.pop());
    }
    return element;
  };

  this.peek = function () {
    if (s2.isEmpty()) {
      while (!s1.isEmpty()) {
        s2.push(s1.pop());
      }
    }
    return s2.peek();
  };

  this.isEmpty = function () {
    return s1.isEmpty() && s2.isEmpty();
  };
}

const queue = new Que();
queue.enqueue(10);
queue.enqueue(20);

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.enqueue(30));
console.log(queue.enqueue(40));

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
