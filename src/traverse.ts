
import wrapListToNode from './wrap-list-to-node'

// Traverse all the tree nodes
function traverse(rootNodeOrList, visit, childrenKey = 'children') {
  const rootIsList = Array.isArray(rootNodeOrList)
  const rootNode = rootIsList ? wrapListToNode(rootNodeOrList, childrenKey) : rootNodeOrList
  _traverse(rootNode)

  function _traverse(node, level = 0) {
    const list = node[childrenKey]
    if (list == null) return
    list.forEach((item, index) => {
      visit({
        node: item,
        index,
        level,
        parent: rootIsList && level === 0 ? null : node,
        list,
        count: list.length,
      })
      if (item[childrenKey]) {
        _traverse(item, level + 1)
      }
    })
  }
}

export default traverse
