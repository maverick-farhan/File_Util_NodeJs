const fs = require('fs');
const path = require('path');
const color = require('colors');
const input = process.argv;
const dirPath = path.join(__dirname,'Files_Dir');
console.log('node file.js -h');

if(input[2]=='-a'){
    fs.writeFileSync(`${dirPath}/${input[3]}`,input[4]);
    console.log(`File ${input[3]} created`.green);
}
else if(input[2]=='-r'){
 for(let i = 3;i<input.length;i++){
    fs.unlinkSync(`${dirPath}/${input[i]}`);
    console.log(`File ${input[i]} removed`.red);
 }
}
else if(input[2]==='-h'){
    console.log(`node file.js -a fileToAdd "content to write")\n`.green);
    console.log(`node file.js -r fileToRemove (to delete)"\n`.red)
}
else{
    console.log('Command Not Found. -flag \n');
}