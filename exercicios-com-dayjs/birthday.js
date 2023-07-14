import dayjs from 'dayjs'
import CustomParseFormat from 'dayjs/plugin/customParseFormat.js'

dayjs.extend(CustomParseFormat)

function ageTotal(birthday, today){
  const diferenca = today.diff(birthday, 'month');
  const anos = Math.abs(birthday.diff(today, 'year'))
  const meses = diferenca %12 ;
  console.log(`Você tem ${anos} anos  e ${meses} meses de idade`)
}

function birthday(date){
 const birthday = dayjs(date, 'DD/MM/YYYY')
 const today = dayjs()
 const ageInYears = today.diff(birthday,"y")
 const nextBirthday = birthday.add(ageInYears + 1, 'year');
 const daysToNextBirthday = nextBirthday.diff(today, 'day') +1
 console.log(`Idade em anos: ${ageInYears}`)
 console.log(`Próximo aníversário: ${nextBirthday.format('DD/MM/YYYY')}`)
 ageTotal(birthday, today)
 console.log(`Dias para o próximo aniversário:  ${daysToNextBirthday}`)
}

birthday('15/03/2000')