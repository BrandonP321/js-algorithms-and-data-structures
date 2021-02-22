const Queue = require('./queue')

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

    breadthFirstSearch(key) {
        // example here shows how it searches vs returning the key when found

        // let queue = []
        // let visited = [];

        // queue.push(this.root)

        // while (queue.length) {
        //     // dequeue node from queue
        //     const dequeuedNode = queue.shift()

        //     // add any left/right nodes of dequeued node to queue
        //     if (dequeuedNode.left) {
        //         queue.push(dequeuedNode.left)
        //     }
        //     if (dequeuedNode.right) {
        //         queue.push(dequeuedNode.right)
        //     }

        //     // push value of dequeued node to visited array
        //     visited.push(dequeuedNode.value)
        // }

        // return visited


        let queue = new Queue();
        // add root to queue
        queue.enqueue(this.root)

        // while queue has a length, iterate through nodes
        while(queue.size) {
            let dequeuedNode = queue.dequeue();

            // if removed node has same value as search key, return that node
            if (dequeuedNode.value === key) {
                return dequeuedNode;
            }
            // if removed node has a left node, add that node to the queue
            if (dequeuedNode.left) {
                queue.enqueue(dequeuedNode.left)
            }
            // if removed node has a right node, add that node to the queue
            if (dequeuedNode.right) {
                queue.enqueue(dequeuedNode.right)
            }
        }

        // if nothing has node not returned return undefined
        return undefined
    }

    depthFirstSearchPreOrder() {
        // call traverser helper function on root node
        let visited = BinarySearchTree.traversePreOrder(this.root)

        return visited
    }

    static traversePreOrder(node, visited=[]) {
        // store value of node in visited arr
        visited.push(node.value)

        // if node has a left node, recursively call function on that node
        if (node.left) {
            BinarySearchTree.traverse(node.left, visited)
        }
        // repeat process for any right node
        if (node.right) {
            BinarySearchTree.traverse(node.right, visited)
        }

        // return array of visited nodes
        return visited
    }

    depthFirstSearchPostOrder() {
        // for the sake of learning, this search returns the array of node values visited during search to see order in which search is done

        let visited = []

        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)

            visited.push(node.value);
        }

        traverse(this.root);
        return visited
    }

    depthFirstSearchInOrder() {
        // this search also only returns an array of the values of the nodes visited to see the order in which it searches through nodes

        let visited = []

        function traverse(node) {
            if (node.left) traverse(node.left)
            visited.push(node.value)
            if (node.right) traverse(node.right)
        }

        traverse(this.root);
        return visited
    }
}


const tree = new BinarySearchTree()

// tree.insert(10)
// tree.insert(10)
// tree.insert(10)
// tree.insert(5)
// tree.insert(7)
// tree.insert(7)
// tree.insert(2)
// tree.insert(20)
// tree.insert(15)
// tree.insert(11)

// console.log(tree.find(5))

tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

// console.log(tree.breadthFirstSearch(8))

// console.log(tree.depthFirstSearchPreOrder())

// console.log(tree.depthFirstSearchPostOrder())

console.log(tree.depthFirstSearchInOrder())

console.log(tree)