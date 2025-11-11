export type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  walk(curr.left, path);

  walk(curr.right, path);
  path.push(curr.value);

  return path;
}

export default function pre_order_search(
  head: BinaryNode<number> | null
): number[] {
  return walk(head, []);
}

const tree: BinaryNode<number> = {
  value: 10,
  left: {
    value: 5,
    left: { value: 2, left: null, right: null },
    right: { value: 7, left: null, right: null },
  },
  right: {
    value: 15,
    left: null,
    right: { value: 20, left: null, right: null },
  },
};

console.log(pre_order_search(tree));
console.log(pre_order_search(null));
