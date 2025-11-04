type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }

    const head = this.head as Node<T>;
    this.head = head.prev;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  print(): void {
    let curr = this.head;
    const parts: string[] = [];
    while (curr) {
      parts.push(String(curr.value));
      curr = curr.prev;
    }

    console.log(parts.join("\n|\n"));
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

stack.print();
stack.pop();
stack.peek();
console.log("after operations");
stack.print();
