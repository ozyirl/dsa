class RandomStorage {
  vals: number[] = [];
  pos: Map<number, number> = new Map();
}

class Inserter {
  private store: RandomStorage;
  constructor(store: RandomStorage) {
    this.store = store;
  }

  insert(val: number): boolean {
    if (this.store.pos.has(val)) return false;
    this.store.pos.set(val, this.store.vals.length);
    this.store.vals.push(val);

    return true;
  }
}

class Remover {
  private store: RandomStorage;
  constructor(store: RandomStorage) {
    this.store = store;
  }

  remove(val: number): boolean {
    if (!this.store.pos.has(val)) return false;

    const idx = this.store.pos.get(val)!;
    const lastidx = this.store.vals.length - 1;
    const lastval = this.store.vals[lastidx];

    this.store.vals[idx] = lastval;
    this.store.pos.set(lastval, idx);

    this.store.vals.pop();

    this.store.pos.delete(val);
    return true;
  }
}

class RandomPicker {
  private store: RandomStorage;
  constructor(store: RandomStorage) {
    this.store = store;
  }

  getrandom(): number {
    if (this.store.vals.length === 0) {
      throw new Error("No elements in storage");
    }

    const randIdx = Math.floor(Math.random() * this.store.vals.length);
    return this.store.vals[randIdx];
  }
}

const store = new RandomStorage();
const ins = new Inserter(store);
const rmv = new Remover(store);
const rand = new RandomPicker(store);
console.log(ins.insert(10)); // true
console.log(ins.insert(10)); // false (already present)
console.log(ins.insert(20)); // true
console.log(ins.insert(30));
console.log(store.vals); // [10, 20]

console.log(store.pos); // Map { 10 => 0, 20 => 1 }
console.log(rmv.remove(30));
console.log(store.vals); // [10, 20]

console.log(store.pos); // Map { 10 => 0, 20 => 1 }
console.log(rand.getrandom());
