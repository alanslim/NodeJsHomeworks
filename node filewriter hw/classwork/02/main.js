const log = console.log;
import fs from "fs";

process.stdin.on('data', (buffer)=> {
    let prmt = buffer.toString().trim();
    // log(buffer);
    if(prmt == '/html'){
        fs.readFile('index.html', 'utf-8', (err, data) =>{
            if(err) throw err;
            log(data);
        } );
    } 
    else if(prmt == "/text"){
        let data = fs.readFileSync('index.txt','utf-8')
        log(data);
    }
    else if(prmt == "/dir") {
        fs.readdir(".", {withFileTypes: true}, (err, fileList) => {
            for (let x of fileList) {
                log(x);
            }
        });
    }
    else if(prmt.includes('/text?')){
        let newText = prmt.slice(6);
        let keyVal = newText.split('=');
        log(keyVal);
        let key =keyVal[0];
        let val =keyVal[1];
        fs.appendFile('index.txt', `${key}:${val}\n`, (err) =>{
            if(err) throw err;
            log(key);
        } );

        
    }
   
});
