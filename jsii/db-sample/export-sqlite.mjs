import fs from "node:fs/promises"
import Papa from "papaparse"
import { promisify } from "util";
import sqlite3 from 'sqlite3';


const dbName = "/Users/joseviejo/Library/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db"

const opendb = (name) => new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbName, (err) => {
        if (err) {
            reject (err)
        }
        resolve(db)
    })
});

const dball = (db, sql, ...params) => {
    return new Promise((resolve, reject) => {
      const p = params.length === 1 ? params[0] : params;
      db.all(sql, p, function (err, rows) {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }

const db = await opendb(dbName)






const tables = [
    'select AlbumId, Title, ArtistId from Album',
    'Artist',
    'Customer',
    'Employee',
    'Genre',
    'Invoice',
    'InvoiceLine',
    'MediaType',
    'Playlist',
    'PlaylistTrack',
    'Track',
];

async function exportTable(db, name) {
    console.log(name)
    if (name.startsWith("select")){
        const rows = await dball(db, name, [])
        return rows;
    }
    const rows = await dball(db, `SELECT * FROM ${name}`, [])
    return rows
}


tables.forEach(async (element)   => {
    const nombre = element.startsWith("select") ? element.split(" ").slice(-1) : element

    const file = await fs.open(`../../data/sqlite/${nombre}.jsonl`, 'w+')
    const rows = await exportTable(db, element)
    for await (var row of rows){
        await file.write(JSON.stringify(row) + "\n")
    }
    await file.close();

    await fs.writeFile(`../../data/sqlite/${nombre}.json`, JSON.stringify(rows, null, 4))    


    const csv = Papa.unparse(rows)
    await fs.writeFile(`../../data/sqlite/${nombre}.csv`, csv)
});





