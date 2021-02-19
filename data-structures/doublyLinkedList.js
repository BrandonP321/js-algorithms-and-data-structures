class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        // create new node with val
        const newNode = new Node(val);

        // if there is no head, set the head and tail as the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // else update the tail
            // set the current tail's next to the new node
            this.tail.next = newNode
            // set the newNode's prev to the current tail
            newNode.prev = this.tail;
            // set the new node as the tail
            this.tail = newNode
        }

        // increment the length
        this.length++

        return this
    }

    pop() {
        // if there is no head, return false
        if (!this.head) {
            return undefined
        }

        // get current tail's value for return
        const returnVal = this.tail.val

        if (this.length === 1) {
            // if there is only one item in the list, set head and tail to null
            this.head = null;
            this.tail = null;
        } else {
            // get the new tail (prev of current tail)
            const newTail = this.tail.prev

            // set the new tail's next to null, set the current tail's prev to null (sever all connections) and set it as the tail
            newTail.next = null;
            this.tail.prev = null
            this.tail = newTail
        }

        // decrement length
        this.length--

        return returnVal
    }

    shift() {
        // if there is no head, return undefined
        if (!this.head) {
            return undefined
        }

        const headToRemove = this.head

        // if length is 1, set head and tail to null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // else update head node
            const newHead = headToRemove.next
            newHead.prev = null;
            headToRemove.next = null;

            this.head = newHead
        }

        // decrement length
        this.length--

        return headToRemove.val
    }

    unshift(val) {
        const newNode = new Node(val)

        // if list is empty, set node to be head and tail
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            // else set current head's prev to new node
            this.head.prev = newNode;
            // set new head's next as current node in head
            newNode.next = this.head
            // set new node as head
            this.head = newNode
        }

        // increment length
        this.length++

        return this
    } 

    get(index) {
        // if index is invalid, return null
        if (index < 0 || index >= this.length) {
            return null
        }

        // get mid index of list
        const mid = Math.round(this.length / 2)

        let currentNode

        // if index is less than or equal to mid, move up through the list
        if (index <= mid) {
            // start at the head
            currentNode = this.head

            let currentIndex = 0
            while(currentIndex !== index) {
                currentNode = currentNode.next
                currentIndex++
            }
        } else {
            // else start at tail and work back through the list
            currentNode = this.tail

            let currentIndex = this.length - 1;
            while (currentIndex !== index) {
                currentNode = currentNode.prev
                currentIndex--
            }
        }

        return currentNode
    }

    set(index, value) {
        const nodeToUpdate = this.get(index)

        // if no node was found, return false
        if (!nodeToUpdate) {
            return false
        }

        // update node's value
        nodeToUpdate.val = value

        return true
    }

    insert(index, value) {
        // if index is less than 0 or greater than or equal to length, return false
        if (index < 0 || index > this.length) {
            return false
        } 

        // if inserting at end of list, just push val to list
        if (index === this.length) {
            this.push(value)
        } else if (index === 0) {
            // if inserting at beginning, just unshift value to list
            this.unshift(value)
        } else {
            const newNode = new Node(value)

            // get node at current index and node before index
            const nodeAtIndex = this.get(index)
            const nodeBefore = nodeAtIndex.prev

            // set node before's next to new node
            nodeBefore.next = newNode
            // set prev of current node at index to new node
            nodeAtIndex.prev = newNode
            // update next and prev of new node
            newNode.next = nodeAtIndex;
            newNode.prev = nodeBefore;
        }

        // increment length
        this.length++

        return true
    }

    remove(index) {
        // if index is invalid, return false
        if (index < 0 || index >= this.length) {
            return false
        }
        
        // if removing last item in list, pop list
        if (index === this.length - 1) {
            return this.pop()
        } else if (index === 0) {
            // if removing first item in list, shift list
            return this.shift()
        } else {
            const nodeToRemove = this.get(index);

            // else update next and prev of found node and those to it's left and right
            const prevNode = nodeToRemove.prev
            const nextNode = nodeToRemove.next

            prevNode.next = nextNode
            nextNode.prev = prevNode
            nodeToRemove.next = null;
            nodeToRemove.prev = null;
    
            // decrement length
            this.length--
    
            return nodeToRemove.val
        }

    }

    print() {
        let arr = []

        let currentNode = this.head
        while (currentNode) {
            arr.push(currentNode.val)
            currentNode = currentNode.next
        }

        return arr
    }
}

let list = new DoublyLinkedList()

list.push(5)
list.push(0)
list.push(3)
list.push(7)

// list.pop()
// list.pop()
// list.pop()
// list.pop()

// list.shift()
// list.shift()
// list.shift()
// list.shift()

// list.unshift(9)

console.log(list.get(2))

console.log(list.print())