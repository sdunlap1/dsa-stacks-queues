const LinkedList = require('./linkedlist');

class Stack {
  constructor() {
    this._list = new LinkedList();
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */
  push(val) {
    const newNode = { val, next: null }; // Directly create the new node object
    if (!this._list.head) {
      this._list.head = newNode;
      this._list.tail = newNode;
    } else {
      newNode.next = this._list.head;
      this._list.head = newNode;
    }
    this._list.length++;
    this.size = this._list.length;
    this.first = this._list.head;
    this.last = this._list.tail;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if (this._list.length === 0) {
      throw new Error("Stack is empty");
    }
    const removedNode = this._list.head;
    this._list.head = this._list.head.next;
    this._list.length--;
    this.size = this._list.length;
    this.first = this._list.head;
    this.last = this._list.tail;
    return removedNode.val;
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    return this._list.head.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return this._list.isEmpty();
  }
}

module.exports = Stack;
