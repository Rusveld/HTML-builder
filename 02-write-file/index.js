const fs = require('fs')
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });


fs.writeFile((__dirname + '\\data.txt'), '',(err)=>{
    if(err){
        console.log('invalid data')
        throw err
    }
    console.log('Put your secrets here ')
    rl.on('line', (data)=>{
        if(data == 'exit'){
            console.log("Nobody will know!")
            rl.close()
        }else{
            fs.appendFile((__dirname + '\\data.txt'), data + '\n', (err)=>{
                if(err){
                    console.log('invalid data')
                    throw err
                }
            })
        }
    })

    rl.on('SIGINT', ()=>{
        console.log("Nobody will know!")
        rl.close()
    })
})