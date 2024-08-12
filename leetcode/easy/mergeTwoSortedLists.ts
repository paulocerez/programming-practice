// 21. Merge Two Sorted Lists
// Easy
// Topics
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/*
	Solution:
	> Creating a new linked list, combining elements of given lists in sorted order
	
	 1. creating dummy node as starting point for new LL > without data, but provides initial next pointer that can be updated easily

	 2. creating tail node that always points to last node of new merged list, initially pointing to the dummy node -> if new nodes are added, it is updated to always point to the last node

	 3. while loop to compare values of nodes pointed to by list 1 and 2 as long as they're both not null
	 	-> if list1.val < list2.val === current node in list1 should come next in merged list
			-> tail.next = list1, thereby adding list1's current node to the merged list
*/

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy: ListNode = new ListNode();
  let tail: ListNode = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  tail.next = list1 || list2;

  return tail.next;
}
