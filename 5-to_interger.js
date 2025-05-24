
const toInteger = process.argv[2];
const number = parseInt(toInteger)
if(isNaN(number)){
    console.log('Not a number')
}else{
    console.log(`My number: ${number}`)
}

