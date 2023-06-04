import { createWriteStream } from 'node:fs';
import {Readable} from 'node:stream'
import { Writable } from 'node:stream';
import { Transform } from 'node:stream';
const cadena = [
    "linea1",
    "linea2",
    "linea2",
];

class Lector extends Readable {
    constructor (param) {
        
        super()
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
        super()
    }
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase())
        callback()
    }
    _flush(callback){
        //this.push("\n")
    }
}

class MyWrite extends Writable {
    constructor(name){
        super()
        this.file = createWriteStream(name)
    }
    _write(chunk, encoding, callback) {
        console.log(chunk.toString())
        this.file.write(chunk, ()=>{
            callback()
        })
    }
    
}

new Lector(cadena).pipe(new MyTransform()).pipe(new MyWrite("./f.txt"))