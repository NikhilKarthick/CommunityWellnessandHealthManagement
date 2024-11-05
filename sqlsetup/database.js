import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
}).promise()

export async function getNotes(){
    const[records] = await pool.query("select * from notes")
    return records
       
}
export async function getNote(id)
{
    const[records]= await pool.query(`
        SELECT *
        FROM NOTES
        WHERE id = ?
        `,[id]
    )
    return records[0]
}
export async function createNote(title,contents){
    const [result] = await pool.query(`
        INSERT INTO notes (title, contents)
        VALUES (?, ?)
        `,[title,contents])
        const id = result.insertId
        return getNote(id)
}
const result = await createNote('test','test')
console.log(result)

