const average = (...numbers)=>{
  return (numbers.reduce((acumulador, numero)=> acumulador + numero, 0)/numbers.length).toFixed(2)
}


const weightedAverage = (...entries) => {
  const sum = entries.reduce((acumulador, {number, weight}) => acumulador + (number * (weight ?? 1)), 0
  )
  
  const weightSums = entries.reduce((acumulador, entry) => acumulador + (entry.weight ?? 1), 0)
  return (sum / weightSums).toFixed(2)
}


const median =  (...numbers) =>{
  const orderedNumbers = [...numbers].sort((a,b)=> a-b)

  const middle = Math.floor(orderedNumbers.length/2)
  if(orderedNumbers.length % 2 !== 0){
    return orderedNumbers[middle]
  }
  if(orderedNumbers.length % 2 === 0){
    const firstMedian = orderedNumbers[middle -1]
    const secondMedian = orderedNumbers[middle]
    
    return Math.floor(average(firstMedian, secondMedian))
  }
}

const mode = (...number)=>{
  
  const quantities = number.map(num => [
    num,
    number.filter(n => num === n).length
  ])
  quantities.sort((a,b)=> b[1]- a[1])
  return quantities[0][0]

}




console.log('Média aritmética: ', average(1,2,3,4,5,6))
console.log('Mediana:  ', median(1,2,3,4,4,4,5,5,6,6,7,8))
console.log('Moda: ', mode(1,1,1,1,1,1,4,4,5,5,6,6,6,7,7,7,7,7,7,7,7,7,7,7))
console.log('Média Ponderada:',  weightedAverage(
  {number: 9, weight: 3},
  {number: 7},
  {number: 10, weight:1}
  ))

