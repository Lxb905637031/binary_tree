function BinarySearchTree() {
  const Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  let root = null
  this.insert = function(key) {
    const newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }
  this.inOrderTraverse = function(cb) {
    inOrderTraverseNode(root, cb)
  }
  this.preOrderTraverse = function(cb) {
    preOrderTraverseNode(root, cb)
  }
  this.postOrderTraverse = function(cb) {
    postOrderTraverseNode(root, cb)
  }
  this.search = function(key) {
    return searchNode(root, key)
  }
  this.min = function(root) {
    return minNode(root)
  }
  this.max = function(root) {
    return maxNode(root)
  }
  this.remove = function(key) {
    root = removeNode(root, key)
  }
}

function insertNode(node, newNode) {
  if (newNode.key < node.key) {
    if (newNode.left === null) {
      node.left = newNode
    } else {
      insertNode(node.left, newNode)
    }
  } else {
    if (newNode.right === null) {
      node.right = newNode
    } else {
      insertNode(node.right, newNode)
    }
  }
}
// 中序遍历
function inOrderTraverseNode(node, cb) {
  if (node !== null) {
    inOrderTraverseNode(node.left, cb)
    cb(node.key)
    inOrderTraverseNode(node.right, cb)
  }
}
// 先序遍历
function preOrderTraverseNode(node, cb) {
  if (node !== null) {
    cb(node.key)
    preOrderTraverse(node.left, cb)
    preOrderTraverse(node.right, cb)
  }
}
// 后续遍历
function postOrderTraverseNode(node, cb) {
  if (node !== null) {
    postOrderTraverse(node.left, cb)
    postOrderTraverse(node.right, cb)
    cb(node.key)
  }
}
// 搜索特定值
function searchNode(node, key) {
  if (node == null) return false
  if (key < node.key) {
    return searchNode(node.left, key)
  } else if (key > node.key) {
    return searchNode(node.right, key)
  } else {
    return true
  }
}
// 搜索最小值
function minNode(node) {
  if (node) {
    while(node && node.left !== null) {
      node = node.left
    }
    return node.key
  }
  return null
}
// 搜索最大值
function maxNode(node) {
  if (node) {
    while(node && node.right !== null) {
      node = node.right
    }
    return node.key
  }
  return null
}
// 移除节点
function removeNode(node, key) {
  if (node === null) {
    return null
  }
  if (key < node.key) {
    node.left = removeNode(node.left, key)
    return node
  } else if (key > node.key) {
    node.right = removeNode(node.right, key)
    return node
  } else {
    // 只有一个子节点的节点
    if (node.left === null) {
      node = node.right
      return node
    } else if(node.right === null) {
      node = node.left
      return node
    }
    // 有两个子节点情况
    let aux = findMinNode(node.right)
    node.key = aux.key
    node.right = removeNode(node.right, aux.key)
    return node
  }
}

function findMinNode(node) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }
  return null
}