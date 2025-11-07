type Node2<T> = {
  value: T;
  prev?: Node2<T>;
  next?: Node2<T>;
};

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node2<T>;
  private tail?: Node2<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    const node: Node2<T> = { value: item };
    if (!this.head) {
      this.head = this.tail = node; // fix: set tail when first node
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  append(item: T): void {
    const node: Node2<T> = { value: item };
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx > this.length) throw new Error("index out of range");

    if (idx === 0) {
      this.prepend(item);
      return;
    }
    if (idx === this.length) {
      this.append(item);
      return;
    }

    // insert *before* node currently at idx
    const curr = this.getAt(idx)!; // safe due to range check
    const prev = curr.prev; // capture before rewiring
    const node: Node2<T> = { value: item, prev, next: curr };

    if (prev) prev.next = node; // link prev -> node
    curr.prev = node; // link node <-> curr
    this.length++;
  }

  remove(item: T): T | undefined {
    let curr = this.head;
    while (curr && curr.value !== item) curr = curr.next;
    if (!curr) return undefined;
    return this.removeNode(curr);
  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);
    if (!node) return undefined;
    return this.removeNode(node);
  }

  private getAt(idx: number): Node2<T> | undefined {
    if (idx < 0 || idx >= this.length) return undefined;
    // small optimization: walk from nearest end
    if (idx <= this.length / 2) {
      let i = 0,
        curr = this.head;
      while (i < idx && curr) {
        curr = curr.next;
        i++;
      }
      return curr;
    } else {
      let i = this.length - 1,
        curr = this.tail;
      while (i > idx && curr) {
        curr = curr.prev;
        i--;
      }
      return curr;
    }
  }

  private removeNode(node: Node2<T>): T {
    const { prev, next } = node;

    if (prev) prev.next = next;
    else this.head = next; // update head if needed
    if (next) next.prev = prev;
    else this.tail = prev; // update tail if needed

    // fully detach
    node.prev = undefined;
    node.next = undefined;

    this.length--;
    return node.value;
  }
}
