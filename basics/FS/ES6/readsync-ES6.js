import fs from 'fs';
let data=fs.readFileSync("data.txt",'utf8')
//let data=fs.readFileSync("data.txt") if utf8 is not provided buffer byte values will display
console.log(data);