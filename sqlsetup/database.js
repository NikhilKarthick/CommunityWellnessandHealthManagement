import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
}).promise()


export async function participate(req,res){
    const {name,email,phone_no,address,date_of_birth,age,gender} = req.body

    console.log(name,email,phone_no,address,date_of_birth,age,gender);
    
    const add = await pool.query(`
        INSERT INTO Participant (name,email,phone_no,address,date_of_birth,age,gender) values (?,?,?,?,?,?,?)`,[name,email,phone_no,address,date_of_birth,age,gender])
    
    console.log(add[0]);
    
    return res
    .send(`userregister`)
}


