function reverseList(head: ListNode | null): ListNode | null {
  let arr = [];
  if (head == null) {
    return head;
  }
  while (head != undefined) {
    arr.push(head.val);
    head = head.next;
  }
  let answer = new ListNode(arr[arr.length - 1]);
  let newHead = answer;
  for (let i = arr.length - 2; i >= 0; i--) {
    newHead.next = new ListNode(arr[i]);
    newHead = newHead.next;
  }
  return answer;
}
