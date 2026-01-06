



type Node<T>={
    value:T
    prev?:Node<T>

}

export default class Stack<T>{
    public length:number
    private head?:Node<T>


    constructor(){
        this.head = undefined
        this.length = 0

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
peek(): T | undefined {
    return this.head?.value
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


  print():void{
    let curr = this.head;
    const parts: string[] =[]

    while(curr){
        parts.push(String(curr.value))
        curr = curr.prev
    }
     console.log(parts.join("\n|\n"));
  }
}

function dailyTemperatures(temperatures: number[]): number[] {
  const res = new Array(temperatures.length).fill(0);
  const st = new Stack<number>(); 

  for (let i = 0; i < temperatures.length; i++) {
    while (st.length > 0) {
      const top = st.peek()!;
      if (temperatures[i] <= temperatures[top]) break;

      st.pop();
      res[top] = i - top;
    }
    st.push(i);
  }

  return res;
}


const temperatures = [73,74,75,71,69,72,76,73]


console.log(dailyTemperatures(temperatures))