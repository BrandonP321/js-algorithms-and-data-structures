class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);

        // if stack is empty, set new node as first and last
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // else set new node as first node
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp
        }

        // increment and return size
        return ++this.size       
    }

    pop() {
        // if stack is empty, return null
        if (this.size === 0) {
            return null
        }

        let poppedNode = this.first

        // if stack only has one item, set first and last as null
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            // else set first node as current first's next node
            this.first = poppedNode.next
            // set next of popped node to null
            poppedNode.next = null;
        }

        // decrement size
        this.size--

        return 
    }
}