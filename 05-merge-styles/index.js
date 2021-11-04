const fs = require('fs')
const path = require('path')

function createBundle (){const pathTo = path.join(__dirname, 'styles')
const bandlePath = path.join(__dirname, 'project-dist', 'bundle.css')


fs.readdir(pathTo, (err, files)=>{
    if(err){
        throw err
    }
    for(let file of files){
        let idpath = path.join(__dirname, 'styles', file)

        if(path.parse(idpath).ext == '.css'){
            fs.writeFile(bandlePath, '', (err)=>{
                if(err){
                    throw err
                }
                let stream = fs.ReadStream(idpath, 'utf-8')
                stream.on('readable', ()=>{
                    const info = stream.read()
                    if(info != null)
                    {fs.appendFile(bandlePath, info, (err)=>{
                        if(err){
                            throw err
                        }
                    })}
                   
                })
            })
        }
    }
})}

fs.readFile((path.join(__dirname, 'project-dist', 'bundle.css')),'utf8', (err, data)=>{
    if(data){
        fs.unlink((path.join(__dirname, 'project-dist', 'bundle.css')),(err)=>{
            if(err){throw err}
        })
    }else{
        createBundle()
    }
})



