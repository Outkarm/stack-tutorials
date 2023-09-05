class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rare = 0;
  }
  enqueue(e) {
    if (this.isEmpty()) {
      this.front = 0;
      this.rare = 0;
    }
    this.items[this.rare] = e;
    this.rare++;
  }
  dequeue() {
    if (!this.isEmpty()) {
      this.removed = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return this.removed;
    }
    {
      return null;
    }
  }
  isEmpty() {
    return this.rare - this.front === 0;
  }
  size() {
    return this.rare - this.front;
  }
  peek() {
    return this.items[this.front];
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

console.log(queue.dequeue());
console.log(queue.size());
queue.enqueue(20);
console.log(queue.peek());
console.log(queue.isEmpty());
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.size());
queue.enqueue(40);
queue.enqueue(50);
queue.print();
