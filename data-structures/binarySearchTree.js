class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value, currentNode = this.root) {
        const newNode = new Node(value)

        // if there is no root, set new node as root
        if (!this.root) {
            this.root = newNode;
        } else if (currentNode.value === value) {
            // if value is same as current node, increase that node's frequency counter by 1
            currentNode.count++
        } else {
            // check if value is less than current node
            if (value < currentNode.value) {
                // if there is no node to the left, insert value at that location
                if (!currentNode.left) {
                    currentNode.left = newNode;
                } else {
                    // else there must be node to left, recursively call function to repeat process on left node
                    return this.insert(value, currentNode.left)
                }
            } else {
                // else check for node to right of current node
                if (!currentNode.right) {
                    // if no node to the right, insert value at that spot
                    currentNode.right = newNode;
                } else {
                    // else there must be a node to the right, recursively call function to reapeat process on right node
                    return this.insert(value, currentNode.right)
                }
            }
        }

        // if value has been inserted, return entire tree
        return this
    }

    find(key, currentNode=this.root) {
        // if current Node is null, return null
        if (!currentNode) {
            return null
        }

        // if current node's value is same as key, return that node
        if (currentNode.value === key) {
            return currentNode
        }

        // if key is less than current node's value, repeat process on left node
        if (key < currentNode.value) {
            return this.find(key, currentNode.left)
        } else {
            // else repeat process on right node
            return this.find(key, currentNode.right)
        }
    }
}


const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(10)
tree.insert(10)
tree.insert(5)
tree.insert(7)
tree.insert(7)
tree.insert(2)
tree.insert(20)
tree.insert(15)
tree.insert(11)

console.log(tree.find(5))

console.log(tree)