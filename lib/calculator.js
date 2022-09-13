const calculate1 = (operations, operands) => {
  if (operands.length !== operations.length + 1) throw new Error('Wrong number of operands')
  return operations.reduce((acc, op, index) => op(acc, operands[index + 1]), operands[0])
}

const calculate2 = (startValue, operations) =>
  operations.reduce((acc, op) => op(acc), startValue)

const interactive = (binaryOperators, unaryOperators) => {
  process.stdin.setRawMode(true)
  process.stdin.resume()
  process.stdin.setEncoding('utf8')

  let acc = 0

  console.log(acc)

  process.stdin.on('data', (keyPressed) => {
    // press escape or ctrl-c to quit
    if (keyPressed === '\u0003' || keyPressed === '\u001b') {
      console.log()
      console.log('Bye!')
      process.exit()
    }

    const [key, op] = binaryOperators.find(([key]) => keyPressed === key) || []
    if (op) {
      process.stdout.write(key)
    } else if (keyPressed >= '0' && keyPressed <= '9') {
      process.stdout.write(keyPressed)
    }
  })
}

module.exports = {
  calculate1,
  calculate2,
  interactive,
}
