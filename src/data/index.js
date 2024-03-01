const fs = ("fs")
const path = require("path")
module.exports ={
    loadData:(fiLenameJSON="productsDataBase")=>{
        const pathJSON = path.join(__dirname,`${fiLenameJSON}.json`);
        const dataJSON= fs.readFileSync(pathJSON ,"utf-8");
        const dataJS= JSON.parse(dataJSON);
        return dataJS
    },
    saveData:(data,fiLenameJSON="productsDataBase")=>{
    const pathJSON = path.join(__dirname,`${fiLenameJSON}.json`);
    const dataString= JSON.stringify(data,null ,3);
    fs.writeFileSync(pathJSON,dataString,"utf-8");
    }
}