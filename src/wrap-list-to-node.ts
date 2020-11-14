
// Wrap a list to a tree node by assigning it as node children
function wrapListToNode(list, childrenKey) {
  return { [childrenKey]: list }
}

export default wrapListToNode
