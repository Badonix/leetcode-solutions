class MinStack {
  private stack: number[] = [];
  private length = 0;
  private minStack: number[] = [];
  constructor() {}
  push(val: number): void {
    if (this.stack) {
      this.stack.push(val);
    }
    this.length += 1;
    if (
      this.minStack.length == 0 ||
      this.minStack[this.minStack.length - 1] >= val
    ) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    if (this.length <= 0) {
      return;
    }
    if (
      this.minStack[this.minStack.length - 1] == this.stack[this.length - 1]
    ) {
      this.minStack.pop();
    }
    this.length -= 1;
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
