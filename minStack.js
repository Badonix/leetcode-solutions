class MinStack {
  stack = [];
  length = 0;
  minStack = [];

  constructor() {}

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
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

  /**
   * @return {void}
   */
  pop() {
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

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin()); // return 0
minStack.pop();
console.log(minStack.top()); // return 2
console.log(minStack.getMin()); // return 1
