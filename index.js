const BTree = require("./btree");


let tree = new BTree();

tree
  .insert(5)
  .insert(8)
  .insert(1)
  .insert(2)
  .insert(7);

tree.print();
