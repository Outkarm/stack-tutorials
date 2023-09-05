class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(e) {
    this.items.push(e);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    } else {
      return null;
    }
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items);
  }
}
const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.print();
queue.enqueue(20);
queue.dequeue();
console.log(queue.size());
console.log(queue.peek());
console.log(queue.isEmpty());
queue.print();
