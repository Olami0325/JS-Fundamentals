
/* Write a script that prints two arguments passed to it, in the following format: “ is ”

You must use console.log(...) to print all output*/      

const concat = process.argv.slice(2)

if(concat[1]){
    console.log('c is cool')
}else if(concat[0]){
    console.log('c is undefined')
}else{
    console.log('undefined is undefined')
}

