h1 = document.getElementsByTagName('h1')

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsClone = [...towns]
console.log('Towns:', {towns})
console.log('Towns Clone:', {townsClone})

townsClone.unshift('Rio de Janeiro')
console.info(townsClone)