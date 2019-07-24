class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		var newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		else {
			var current = this.root;
			while(true) {
				if (value < current.value) {
					if(current.left=== null) {
						current.left = newNode;
						return this;
					}
					else {
						current = current.left;
					}
				}
				else if (Value > current.value) {
					if(current.right=== null) {
						current.right = newNode;
						return this;
					}
					else {
						current = current.right;
					}

				}
			}
		}
	}
	find(value) {
	   if (this.root === null) { return false; }
	   
	   var current = this.root;
	   var found = false;

	   while(current && !found) {
	       if (value < current.value) {
	           current = current.left;
	       } else if (value > current.value) {
	           current = current.right;
	       }else {
	           found = true;
	       }
	   }
	   if (!found) return false;
        return current;
	}
}

var tree = new BinarySearchTree();
tree.insert(2);
tree.insert(4);
tree.insert(1);