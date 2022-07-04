function sum(a, b) {
  if (typeof(a) !== 'number' || typeof(b) !== 'number') {
    throw TypeError('The arguments culd be numbers')
  }
  console.log( a + b);
  return a + b;
}

module.exports = sum;