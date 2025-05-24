
const toInteger = process.argv.slice(2);
if(toInteger[0]){
    console.log(`My number: ${parseInt(toInteger[0])}`)
}else{
    console.log('Not a number')
}
