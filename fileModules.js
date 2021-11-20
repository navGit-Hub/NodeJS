const {readFileSync, writeFileSync}=require('fs');

let first=readFileSync('./content/first.txt','utf8');
console.log(first);

writeFileSync('./content/second.txt','This is second file');


const {readFile,writeFile}=require('fs');

readFile('./content/first.txt','utf8',(err,result)=>{
if(err)
  throw err;
 const first=result;
 readFile('./content/second.txt','utf8',(error,result)=>{
if(error)
 throw error;
 
 const second=result;
writeFile('./content/result.txt',`${first} ${second}`,(err,result)=>{
if(err)
throw err;
console.log(result);
});

 });
});

