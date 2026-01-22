function removeDuplicates(head) {
  if (!head) return null;

  let freq = new Map();
  let p = head;
  while (p) {
    freq.set(p.val, (freq.get(p.val) || 0) + 1);
    p = p.next;
  }

  let dummy = new ListNode(0);
  let tail = dummy;
  p = head;

  while (p) {
    if (freq.get(p.val) === 1) {
      tail.next = p;
      tail = tail.next;
    }
    p = p.next;
  }
  tail.next = null;

  return dummy.next;
}
