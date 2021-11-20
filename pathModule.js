const path=require('path');

console.log(path.sep);
const filePath=path.join('content','subfolder','file.txt');

const absolutPath=path.resolve(__dirname,'content','subfolder','file.txt');


console.log(path.basename(filePath));