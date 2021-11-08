const fs = require('fs')
const path = require('path')

function createBundle (){
    const pathTo = path.join(__dirname, 'styles')
    const bandlePath = path.join(__dirname, 'project-dist', 'style.css')

    if(!path.parse((__dirname + '\\project-dist')))
    {fs.mkdir((__dirname + '\\project-dist'), (err)=>{
        if(err){
            throw err
        }
    })}

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

fs.readFile((path.join(__dirname, 'project-dist', 'style.css')),'utf8', (err, data)=>{
    if(data){
        fs.unlink((path.join(__dirname, 'project-dist', 'style.css')),(err)=>{
            if(err){throw err}
        })
    }else{
        createBundle()
    }
})

const tempPath = path.join(__dirname, 'template.html')
const tempAdress = path.join(__dirname, 'project-dist', 'index.html')
const tempStream = fs.ReadStream(tempPath, 'utf-8')


let changeArr = ['{{header}}', '{{articles}}' , '{{footer}}']
tempStream.on('readable',()=>{
    let data = tempStream.read()    
    if(data != null){  
        fs.readFile((__dirname + '\\components' + '\\header.html'), 'utf-8', (err, infa)=>{
            if(err){
                throw err
            }
            data = data.replace('{{header}}', infa)

        })
        fs.readFile((__dirname + '\\components' + '\\articles.html'), 'utf-8', (err, infa)=>{
            if(err){
                throw err
            }
            data = data.replace('{{articles}}', infa)
   
            
        })
        fs.readFile((__dirname + '\\components' + '\\footer.html'), 'utf-8', (err, infa)=>{
            if(err){
                throw err
            }
            data = data.replace('{{footer}}', infa)
           
            
            fs.writeFile(tempAdress, data, '', (err)=>{
                if(err){
                    throw err
                }
            })
        })
        
}
})


function assets(){
    const fromPath = path.join(__dirname, 'assets')
    const toPath1 = path.join(__dirname, 'project-dist', 'assets', 'fonts')
    const toPath2 = path.join(__dirname, 'project-dist', 'assets', 'img')
    const toPath3 = path.join(__dirname, 'project-dist', 'assets', 'svg')

fs.mkdir(toPath1, {recursive:true}, (err)=>{
    if(err){
        throw err
    }
})
fs.mkdir(toPath2, {recursive:true}, (err)=>{
    if(err){
        throw err
    }
})
fs.mkdir(toPath3, {recursive:true}, (err)=>{
    if(err){
        throw err
    }
})


fs.readdir(fromPath, {withFileTypes: true} ,(err, data)=>{
    if(err){
        throw err
    }
    for(let item of data){
        fs.readdir(path.join(__dirname, 'assets' , item.name), {withFileTypes:true}, (err,inf)=>{
            if(err){
                throw err
            }
            for(let i of inf){
                let idPath1 = path.join(__dirname, 'assets' , item.name, i.name)
                let idPath2 = path.join(__dirname, 'project-dist', 'assets' , item.name, i.name)
                fs.copyFile(idPath1, idPath2, (err)=>{
                    if(err){
                        throw err
                    }
                })
            }
        })




       
    }
})
}
assets()

