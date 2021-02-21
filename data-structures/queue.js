class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value)

        // if there is no first, set first and last node to new node
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            // else set current last's next node to the new node and set new node as last
            this.last.next = newNode;
            this.last = newNode;
        }

        // increment and return size
        return ++this.size
    }

    dequeue() {
        // if there is no first, return null
        if (!this.first) return null;

        const nodeToRemove = this.first

        // if there is only one item in queue, set first and last to null
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            // else remove first node from queue and set second node to first
            this.first = this.first.next;
            nodeToRemove.next = null;
        }

        // decrement and return size
        return ++this.size
    }

    print() {
        let currentNode = this.first;
        let arr = []

        while (currentNode) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }

        return arr
    }
}


let myQueue = new Queue()

myQueue.enqueue(5)
myQueue.enqueue(1)
myQueue.enqueue(99)
myQueue.enqueue(103)

myQueue.dequeue()

console.log(myQueue)
console.log(myQueue.print())