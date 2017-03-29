const Node = require("./node");

class BTree {
  constructor(){
    this.tree = null;
  }
  insertIntoTree(value, tree){
    if(value > tree.value){
      if(tree.right === null){
        tree.right = new Node(value);
      }else {
        return this.insertIntoTree(value, tree.right);
      }
    }else {
      if(tree.left === null){
        tree.left = new Node(value);
      }else {
        return this.insertIntoTree(value, tree.left);
      }
    }
    return this;
  }
  insert(value){
    if(this.tree === null){
      this.tree = new Node(value);
      return this;
    }
    return this.insertIntoTree(value, this.tree);
  }
  show(node){
    if(node === null){
      return;
    }
    console.log(node.value);
    this.show(node.left);
    this.show(node.right);
  }
  print(){
    this.show(this.tree);
  }
}
module.exports = BTree;
