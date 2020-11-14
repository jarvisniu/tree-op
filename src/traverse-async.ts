
import wrapListToNode from './wrap-list-to-node'

async function traverseAsync(rootNodeOrList, visit, childrenKey = 'children') {
  const rootIsList = Array.isArray(rootNodeOrList)
  const rootNode = rootIsList ? wrapListToNode(rootNodeOrList, childrenKey) : rootNodeOrList
  await _traverse(rootNode)

  async function _traverse(node, level = 0) {
    const list = node[childrenKey]
    if (list == null) return
    for(let i = 0; i < list.length; i++) {
      const item = list[i]
      await visit({
        node: item,
        index: i,
        level,
        parent: rootIsList && level === 0 ? null : node,
        list,
        count: list.length,
      })
      if (item[childrenKey]) {
        await _traverse(item, level + 1)
      }
    }
  }
}

export default traverseAsync
