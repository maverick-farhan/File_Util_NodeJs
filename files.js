const fs = require('fs');
const path = require('path');
const color = require('colors');
const input = process.argv;
const dirPath = path.join(__dirname,'Files_Dir');
if(input[2]==='-a'){
    fs.writeFileSync(`${dirPath}/${input[3]}`,input[4]);
    console.log(`File ${input[3]} has been created`.green);
}

else if(input[2]==='-r'){
  
    fs.readdir(dirPath,(err,files)=>{
      files.forEach((file,index)=>{
      if(file===input[3]){
    fs.unlinkSync(`${dirPath}/${file}`)
    console.log(`File(s) ${file} has been removed`.red);
      }
      else{
        console.log(`Naah files not here`.bgCyan.white);
      }
      })
    })
  }
  else if(input[2]==='-rA'){
      fs.readdir(dirPath,(err,files)=>{
        files.forEach((file,index)=>{
        fs.unlinkSync(`${dirPath}/${file}`)
        })
          console.log(`File(s) ${files} has been removed`.red);
      })
  }

else if(input[2]==='-S'){
  fs.readdir(dirPath,(err,files)=>{
    if(files.length<=0){
      console.log(`Empty No Files found`.bgBlack.white)
    }
  files.map((elem,index)=>{
  console.log(`(${index+1}) ${elem}`.green);
  });
  });
}
else{
console.log(`Naah file not found`.black);
}