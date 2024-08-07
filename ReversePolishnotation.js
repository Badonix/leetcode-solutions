function evalRPN() {
  let tokens = ["4", "-2", "/", "2", "-3", "-", "-"];
  let stack = [];
  let operators = "+-/*";
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    if (!operators.includes(token)) {
      stack.push(token);
    } else {
      let second = stack.pop();
      let first = stack.pop();
      if (token == "/") {
        let result = first / second;
        if (result > 0) {
          stack.push(Math.floor(result));
        } else {
          stack.push(Math.ceil(result));
        }
      } else {
        console.log(first, token, second);
        stack.push(eval(`${first}${token}${second}`));
      }
    }
  }
  return stack[0];
}

console.log(evalRPN());
