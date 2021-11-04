const fs = require('fs')


const stream = fs.ReadStream((__dirname + '\\text.txt'), 'utf-8')


stream.on('readable', ()=>{
    let data = stream.read()
    if(data != null && data){console.log(data)}
})
