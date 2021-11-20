const os=require('os');
console.log(os.uptime());

console.log(os.userInfo());

let sysInfo={
  
    type: os.type(),
    release: os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
};
console.log(sysInfo);