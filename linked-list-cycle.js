/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let rabbit=head;
    let hare=head;

    while(rabbit && rabbit.next ) {
        rabbit = rabbit.next.next
        hare = hare.next
        if (rabbit === hare) {
            return true
        }
    }
    return false
};

// rabbit and hare method
// rabbit moves 2 steps at a time
// hare moves 1 step at a time
// if there is a cycle, they will meet at some point
// if there is no cycle, rabbit will reach the end of the list
// time complexity: O(n)
// space complexity: O(1)
