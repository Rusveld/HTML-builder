const path = require('path')
const fs = require('fs')


const pathTo = path.join(__dirname, 'secret-folder')

fs.readdir(pathTo, {withFileTypes: true} ,(err, data)=>{
    if(err){
        throw err
    }
    for(let item of data){
        if(item.isFile()){            
            let idPath = path.join(__dirname, 'secret-folder', item.name)
            fs.stat(idPath, (err, stats)=>{                
                if(err)throw err
                console.log(`${path.parse(item.name).name} - ${(path.parse(item.name).ext).substr(1)} - ${(stats.size / 1024).toFixed(2)}kb`)
            
            })
        }
        
        
    }
})