function sum ( ...numers){
  return numers.reduce((accum, num) => accum + num)
}

console.info(sum( 4,5,3,4,8,7,9,))
  