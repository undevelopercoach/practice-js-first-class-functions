// We've redesigned our calcalator to work in a slightly different way.
// This time it performs a sequence of operations on an accumulator.
// Using currying, we can now express our calculations as a single array of partial functions.

const { calculate2: calculate } = require('../lib/calculator')

const add = (a) => (b) => {
  return 0
}

const sub = (a) => (b) => {
  return 0
}

const mul = (a) => (b) => {
  return 0
}

const div = (a) => (b) => {
  return 0
}

it('can calculate 1 + 2 = 3', () => {
  const result = calculate(1, [add(2)])
  expect(result).toEqual(3)
})

it('can calculate 1 + 2 + 3 + 4 = 10', () => {
  const result = calculate(1, [add(2), add(3), add(4)])
  expect(result).toEqual(10)
})

it('can calculate 6 - 9 = -3', () => {
  const result = calculate(6, [sub(9)])
  expect(result).toEqual(-3)
})

it('can calculate ((10 - 1) - 1) - (-1) = 9', () => {
  const result = calculate(10, [sub(1), sub(1), sub(-1)])
  expect(result).toEqual(9)
})

it('can calculate 2 * 3 = 6', () => {
  const result = calculate(2, [mul(3)])
  expect(result).toEqual(6)
})

it('can calculate 2 * 3 * 9 = 54', () => {
  const result = calculate(2, [mul(3), mul(9)])
  expect(result).toEqual(54)
})

it('can calculate (2 * 3) / 2 = 3', () => {
  const result = calculate(2, [mul(3), div(2)])
  expect(result).toEqual(3)
})
