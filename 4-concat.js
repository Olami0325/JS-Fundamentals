
/* Write a script that prints two arguments passed to it, in the following format: “ is ”

You must use console.log(...) to print all output

guillaume@ubuntu:~/0x12$ node 4-concat.js c cool
c is cool
guillaume@ubuntu:~/0x12$ node 4-concat.js c
c is undefined
guillaume@ubuntu:~/0x12$ node 4-concat.js
undefined is undefined
guillaume@ubuntu:~/0x12$ */      

const concat = process.argv.slice(2)
console.log(`${concat[0]} is ${concat[1]}`)


