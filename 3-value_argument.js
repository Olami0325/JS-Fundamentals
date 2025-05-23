
/*Write a script that prints the first argument passed to it:

If no arguments are passed to the script, print “No argument”
You must use console.log(...) to print all output
You are not allowed to use length */

const noArg = process.argv.slice(2)
if(noArg[0]){
    console.log(noArg[0])
}else{
    console.log('No argument found')
}