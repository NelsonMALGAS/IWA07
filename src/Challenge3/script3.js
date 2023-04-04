const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

//-------------CONCATENATION--------------
const owed = parseFloat(-1* leoBalance) + parseFloat(-1 *sarahBalance) 
const leo =`${leoName} ${leoSurname}(Owed :R ${parseFloat(-1 * leoBalance).toFixed(2)})\n`
const sarah =`${sarahName}${sarahSurname}(Owed :R ${parseFloat(-1 * sarahBalance).toFixed(2)})\n` 
const total = `\nTotal amount owed:R${(owed).toFixed(2)}`
const result = leo + sarah + divider + divider + total   + '\n----------------------------------' + '----------------------------------'



console.log(result)

//CONCATENATION -> is the process of combining two or more strings
//into a single string. In JavaScript, you can use the concatenation operator
//`+` to concatenate strings.






