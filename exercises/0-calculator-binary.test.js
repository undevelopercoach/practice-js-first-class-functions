// We have written a calculator (as a module) which can perform any sequence of binary operations
// but we didn't get time to actually write the operations, so need you to do that

const { calculate1: calculate } = require('../lib/calculator')

// Implement addition, subtraction, multiplication and division

// Bonus: implement any other binary operators you can think of!

const add = (a, b) => {
  return 0
}

const sub = (a, b) => {
  return 0
}

const mul = (a, b) => {
  return 0
}

const div = (a, b) => {
  return 0
}

it('can calculate 1 + 2 = 3', () => {
  const result = calculate([add], [1, 2])
  expect(result).toEqual(3)
})

it('can calculate 1 + 2 + 3 + 4 = 10', () => {
  const result = calculate([add, add, add], [1, 2, 3, 4])
  expect(result).toEqual(10)
})

it('can calculate 6 - 9 = -3', () => {
  const result = calculate([sub], [6, 9])
  expect(result).toEqual(-3)
})

it('can calculate ((10 - 1) - 1) - (-1) = 9', () => {
  const result = calculate([sub, sub, sub], [10, 1, 1, -1])
  expect(result).toEqual(9)
})

it('can calculate 2 * 3 = 6', () => {
  const result = calculate([mul], [2, 3])
  expect(result).toEqual(6)
})

it('can calculate 2 * 3 * 9 = 54', () => {
  const result = calculate([mul, mul], [2, 3, 9])
  expect(result).toEqual(54)
})

it('can calculate (2 * 3) / 2 = 3', () => {
  const result = calculate([mul, div], [2, 3, 2])
  expect(result).toEqual(3)
})
