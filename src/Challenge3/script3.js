const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

//-------------INTERPOLATION--------------
const owed = parseFloat(-1* leoBalance) + parseFloat(-1 *sarahBalance) 
const leo =`${leoName} ${(leoSurname).trim()} (Owed :R ${parseFloat(-1 * leoBalance).toFixed(2)})\n`
const sarah =`${(sarahName).trim()} ${sarahSurname} (Owed :R ${parseFloat(-1 * sarahBalance).toFixed(2)})\n` 
const total = `\n\tTotal amount owed:R ${(owed).toFixed(2)}`
const result = leo + sarah + divider  + total   + '\n----------------------------------'




console.log(result)


/**
 * 
   String interpolation is a feature of modern JavaScript
   that allows you to embed variables and expressions directly into a string
   using placeholders, indicated by the ${} syntax.

 */






