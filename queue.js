const LinkedList = require('./linkedlist');

class Queue {
  constructor() {
    this._list = new LinkedList();
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    this._list.addToTail(val);
    this.size = this._list.length;
    this.first = this._list.head;
    this.last = this._list.tail;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {
    const value = this._list.removeHead();
    this.size = this._list.length;
    this.first = this._list.head;
    this.last = this._list.tail;
    return value;
  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    return this._list.peekHead();
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    return this._list.isEmpty();
  }
}

module.exports = Queue;
