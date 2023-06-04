import { createWriteStream } from 'node:fs';
import {Readable} from 'node:stream'
import { Writable } from 'node:stream';
import { Transform } from 'node:stream';
const cadena = [
    {id:1,
    name:334},
    {id:1},
    {id:1},
    {id:1},
    {id:1}
];

class Lector extends Readable {
    constructor (param) {
               
        super({objectMode: true})
        this.vector = param;
        this.index = 0;
    }
    _read(){
        if (this.index == this.vector.length)
        {
            this.push(null)
            return
        } 
        this.push(this.vector[this.index])
        this.index++
    }
}
class MyTransform extends Transform {
    constructor(){
        super({objectMode: true})

    }
    _transform(chunk, encoding, callback) {
        this.push(chunk)
        callback()
    }
    _flush(callback){
        //this.push("\n")
    }
}

class MyWrite extends Writable {
    constructor(name){
        super({objectMode: true})
        this.file = createWriteStream(name)
    }
    _write(chunk, encoding, callback) {
        console.log(chunk)
        this.file.write(`${JSON.stringify(chunk)}`, ()=>{
            callback()
        })
    }
    
}

new Lector(cadena).pipe(new MyTransform()).pipe(new MyWrite("./f.txt"))