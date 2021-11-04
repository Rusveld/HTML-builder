const fs = require('fs')
const path = require('path')

const fromPath = path.join(__dirname, 'files')
const toPath = path.join(__dirname, 'files-copy')

fs.mkdir(toPath, {recursive:true}, (err)=>{
    if(err){
        throw err
    }
})


fs.readdir(fromPath, {withFileTypes: true} ,(err, data)=>{
    if(err){
        throw err
    }
    for(let item of data){
        let idPath1 = path.join(__dirname, 'files' , item.name)
        let idPath2 = path.join(__dirname, 'files-copy' , item.name)
            fs.copyFile(idPath1, idPath2, (err)=>{
                if(err){
                    throw err
                }
            })
    }
})