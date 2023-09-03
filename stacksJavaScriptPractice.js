class Stack {
  constructor() {
    this.items = [];
  }
  add(e) {
    this.items.push(e);
  }
  remove() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
stack.add(10);
stack.add(20);
stack.add(30);
stack.add(40);
stack.add(50);
stack.print();
console.log(stack.remove());
stack.print();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
