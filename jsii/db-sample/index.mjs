import fs from "node:fs"
import pg from 'pg'
const  {Pool} = pg;

const pool = new Pool({
    user: "postgres",
    password: "mysecretpwd",
    host: "localhost",
    database: "postgres"
    
});

const conn = await pool.connect();

const data = await conn.query("select * from customers")

// prueba de grabar un fichero con jsonl
const file = fs.createWriteStream('./customers.jsonl')

for (var row of data.rows){
    console.log(row)
    file.write(JSON.stringify(row) + "\n")
}




