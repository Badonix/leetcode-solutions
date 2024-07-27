const carFleet = () => {
  let target = 12;
  let position = [10, 8, 0, 5, 3];
  let speed = [2, 4, 1, 1, 3];

  let pairs = position.map((el, i) => {
    return { position: el, speed: speed[i] };
  });
  pairs = pairs.sort((a, b) => {
    return b.position - a.position;
  });
  console.log(pairs);
  let stack = [];
  for (let i = 0; i < pairs.length; i++) {
    let time = (target - pairs[i].position) / pairs[i].speed;

    if (stack.length === 0 || time > stack[stack.length - 1]) {
      stack.push(time);
    }
  }
  return stack.length;
};

console.log(carFleet());
