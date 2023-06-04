import fs from "node:fs/promises"
import pg from 'pg'
const  {Pool} = pg;
import Papa from "papaparse"


const pool = new Pool({
    user: "postgres",
    password: "mysecretpwd",
    host: "localhost",
    database: "postgres"
    
});

const conn = await pool.connect();

const tables = [
'territories',
'order_details',
'employee_territories',
'us_states',
'customers',
'orders',
'employees',
'shippers',
'products',
'categories',
'suppliers',
'region',
'customer_demographics',
'customer_customer_demo'
];


tables.forEach(async (element)   => {
    const data = await conn.query(`select * from ${element}`)    
    const file = await fs.open(`../../data/pg/${element}.jsonl`, 'w+')
    for await (var row of data.rows){
        await file.write(JSON.stringify(row) + "\n")
    }
    await file.close()
    const file2 = await fs.open(`../../data/pg/${element}.json`, 'w+')
    await file2.write(JSON.stringify(data.rows,null, 4))
    file2.close();
    const csv = Papa.unparse(data.rows)
    await fs.writeFile(`../../data/pg/${element}.csv`, csv)
});


console.log("finish")


