class LinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
	}

	append(item) {
		var node = new Node(item);

		if (!this.head) {
			this.head = node;
		} else {
			var tail = this.head;
			while (tail.next !== null) {
				tail = tail.next;
			}
			tail.next = node;
		}
		this.length++;
	}

	removeLastNode(head) {
		if (head == null) return null;

		if (head.next == null) {
			return null;
		}

		var second_last = head;

		while (second_last.next.next != null) second_last = second_last.next;
		second_last.next = null;
		return head;
	}

	size() {
		return this.length;
	}
}

class Node {
	constructor(item) {
		this.item = item;
		this.next = null;
	}
}
