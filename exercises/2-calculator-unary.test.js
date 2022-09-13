// Now that we have our calculator working with a sequence of operators, we are no longer
// limited to binary operations. We can also implement unary operations like squares, square roots
// negation and calculating absolute values

const { calculate2: calculate } = require('../lib/calculator')

const sqr = (a) => {
  return 0
}

// Hint: you can use the Math library for this one!
const sqrt = (a) => {
  return 0
}

// Hint: do not need a library here
const neg = (a) => {
  return 0
}

// Hint: do not need a library here
// Hint2: you might find it useful to use your neg function above
const abs = (a) => {
  return 0
}

// This is needed for the final test
const add = (a) => (b) => {
  return 0
}

it('can calculate sqrt(16) = 4', () => {
  const result = calculate(16, [sqrt])
  expect(result).toEqual(4)
})

it('can calculate 3² = 9', () => {
  const result = calculate(3, [sqr])
  expect(result).toEqual(9)
})

it('can calculate -(-3) = 3', () => {
  const result = calculate(-3, [neg])
  expect(result).toEqual(3)
})

it('can calculate -(6) = -6', () => {
  const result = calculate(6, [neg])
  expect(result).toEqual(-6)
})

it('can calculate |-3| = 3', () => {
  const result = calculate(-3, [abs])
  expect(result).toEqual(3)
})

it('can calculate |3| = 3', () => {
  const result = calculate(3, [abs])
  expect(result).toEqual(3)
})

it('can calculate the hypotenuse of a 3, 4, 5 triangle', () => {
  const a2 = calculate(3, [sqr])
  const result = calculate(4, [sqr, add(a2), sqrt])
  expect(result).toEqual(5)
})
