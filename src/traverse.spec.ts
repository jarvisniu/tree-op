import traverse from './traverse'

const treeList = [
  { age: 1, children: [
    { age: 11 },
    { age: 12 },
  ] },
  { age: 2, children: [
    { age: 20 },
    { age: 21 },
  ] },
]
const ageSum = 67
const nodeCount = 6
const ages = [1, 11, 12, 2, 20, 21]
const indexes = [0, 0, 1, 1, 0, 1]
const levels = [0, 1, 1, 0, 1, 1]
const parentAges = [null, 1, 1, null, 2, 2]
const listCount = [2, 2, 2, 2, 2, 2]

test('traverse everyone', async () => {
  let sum = 0
  let count = 0
  traverse(treeList, ({ node }) => {
    sum += node.age
    count += 1
  })
  expect(sum).toBe(ageSum)
  expect(count).toBe(nodeCount)
})

test('traverse props', () => {
  let i = 0
  traverse(treeList, ({ node, index, level, parent, list, count }) => {
    expect(node.age).toBe(ages[i])
    expect(index).toBe(indexes[i])
    expect(level).toBe(levels[i])
    expect(parent && parent.age).toBe(parentAges[i])
    expect(list.length).toBe(listCount[i])
    expect(count).toBe(listCount[i])
    i += 1
  })
})
