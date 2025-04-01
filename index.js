const fs=require("fs");

const Path=require("path");


const ruta = Path.join(_dirname,"_ulf-8");

let cadenaTxt=fs.readFileSync(ruta,"ulf-8");
let objetols=JSON.parse(cadenaTxt);

console.log(objetols);