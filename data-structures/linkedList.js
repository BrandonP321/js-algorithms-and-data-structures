class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // create new node for value
        const newNode = new Node(val);
        
        // if there is no head node, set new node to head and tail
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // else set the tail's next value to the new node to add it to the end of the list and make new node the tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        // increment list length by 1
        this.length += 1
    }

    pop() {
        // if length of list is 0, return null
        if (this.length === 0) return undefined

        let current = this.head;
        let newTail = current;

        // while current has a next node, update current and newTail vars
        while(current.next) {
            newTail = current;
            current = current.next;
        }

        // using the updated values of current and newTail, set the new tail, remove it's next node, and decrement the length
        this.tail = newTail
        this.tail.next = null
        this.length--

        // if length is now 0, remove head and tail from list
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current.val
    }

    shift() {
        // if list has length 0, return undefined
        if (this.length === 0) return undefined

        const currentHead = this.head
        this.head = currentHead.next
        this.length--

        // if length is now 0, set tail to null (head is already null from old head's next val)
        if (this.length === 0) {
            this.tail = null
        }

        return currentHead.val
    }

    unshift(val) {
        const newNode = new Node(val)

        // if there is no head, set the head and tail to the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // point new node to head and set it as the new head
            newNode.next = this.head
            this.head = newNode
        }

        // increment length
        this.length++

        return this
    }

    get(index) {
        // if index is less than 0 or greate than or equal to lenght, return null
        if (index < 0 || index >= this.length) return null

        let currentNode = this.head
        // iterate through list up to the location of the given index
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next
        }

        return currentNode
    }

    set(index, value) {
        // use get method to get node at given index
        const node = this.get(index)

        // if no node found, return null
        if (!node) return false

        // set the node's value to the new value
        node.val = value

        return this
    }

    insert(index, value) {
        // if there is no head or index is greater than or equal to length, return false
        if (index < 0 || index > this.length) return false

        // if index is same as length, push new node to list
        if (index === this.length) this.push(value)
        
        // if index is 0, unshift to list
        else if (index === 0) this.unshift(value)
        
        // else get node before index to insert at
        else {
            const newNode = new Node(value)

            const nodeBefore = this.get(index - 1)

            // set node before's next to new node and set new node's next to before node's next
            newNode.next = nodeBefore.next
            nodeBefore.next = newNode

            // increment length
            this.length++
        }

        return this
    }

    remove(index) {
        // if index is equal to 0 or greater than or equal to length, return false
        if (index < 0 || index >= this.length) return false

        if (index === this.length - 1) {
            // if index is same as length, pop list
            return this.pop();
        } else if (index === 0) {
            // if index is 0, shift list
            return this.shift();
        } else {
            // get node before node to remove and node to remove
            const nodeBefore = this.get(index - 1)
            const nodeToRemove = nodeBefore.next

            // set next of nodeBefore to next node of node to remove
            nodeBefore.next = nodeToRemove.next

            // decrement length
            this.length--

            return nodeToRemove.val
        }

    }
    
    reverse() {
        // set current head to the tail
        this.tail = this.head
        this.tail.next = null
        
        let prevNode
        let currentNode
        let nextNode
        
        // iterate through all items in array starting at second item
        for (let i = 1; i < this.length; i++) {
            
        }
    }

    print() {
        let arr = [];
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
}

const myList = new SinglyLinkedList()

myList.push(5)
myList.push(0)
myList.push(1)

// console.log(myList.pop())
// console.log(myList.pop())
// console.log(myList.pop())
// console.log(myList.pop())

// console.log(myList.shift())
// console.log(myList.shift())
// console.log(myList.shift())
// console.log(myList.shift())

// myList.unshift(9)

// console.log(myList.get(0))

// myList.set(1, 3)

// console.log(myList.remove(2))

// myList.insert(3, 4)

myList.print()