# tree-op

Tree operation util functions

## Features

- Source language is TypeScript
- Unit tests
- Async traversal

## Main Operations

- `traverse(rootNodeOrList, visit, options)`: Traverse all the tree node, like `forEach` method.
- `removeOnce(rootNodeOrList, predict, options): bool`: Find a node, remove it, and stop finding. Returns if found.
- `clone(rootNodeOrList)`: Deep clone a whole tree.
- `pick(rootNodeOrList, [props])`: Deep clone a whole tree.

## Util Functions

- `buildFromList(list, options)`: Convert a list to an tree structure by `id` and `parentId` props.
- `flatToList(rootNodeOrList, options)`: Convert a tree to an list with `id` and `parentId` props.
- `wrapListToNode`: Wrap a list to a tree node by assigning it as node children.
- `config(options)`: Returns an object which is the same with initial `treeOp` but with options setting.

## Options

- `childrenKey`: The children prop key, default is `children`.
- `idKey`: The node id key, default is `id`.
- `parentIdKey`: The parent node id prop key, default is `parentId`.

## License

MIT
