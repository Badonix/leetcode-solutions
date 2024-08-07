class LinkNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let first = new LinkNode(51, new LinkNode(12, new LinkNode(23)));

let iterate = (LinkedList) => {
  let curr = LinkedList;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
};
let push = (LinkedList) => {
  let curr = LinkedList;
  while (curr) {
    console.log(curr.val);
    if (curr.next == undefined) {
    }
    curr = curr.next;
  }
};

iterate(first);
