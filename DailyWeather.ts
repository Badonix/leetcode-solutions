function dailyTemperatures(temperatures: number[]): number[] {
  let output = new Array(temperatures.length).fill(0);
  let stack: { temp: number; index: number }[] = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1].temp < temperatures[i]) {
      const last = stack?.pop();
      if (last && last.index) {
        output[last.index] = i - last.index;
      }
    }
    stack.push({ temp: temperatures[i], index: i });
  }
  return output;
}
