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

export async function enroll(req, res) {
    try {
      const { participant_id, program_id, enrollment_date } = req.body;
      console.log(participant_id, program_id, enrollment_date);
  
      // Execute the query and insert data into the Enrollment table
      const [add] = await pool.query(
        `INSERT INTO Enrollment (participant_id, program_id, enrollment_date, status) VALUES (?, ?, ?, "active")`,
        [participant_id, program_id, enrollment_date]
      );
  
      console.log(add);
  
      return res.status(201).send("User enrolled successfully");
    } catch (error) {
      console.error("Error enrolling user:", error);
      return res.status(500).send("Internal Server Error");
    }
  }
  
export async function payment(req,res){
   try{
      const { participant_id,program_id,amount,payment_date,PayMethod } = req.body;
      console.log(participant_id,program_id,amount,payment_date,PayMethod)
      const [add] = await pool.query(
        `INSERT INTO Payment (participant_id, program_id, amount, payment_date,PayMethod,status) VALUES (?, ?, ?, ?, ?, "completed")`,
        [participant_id, program_id, amount,payment_date,PayMethod]
      );
  
      console.log(add);
  
      return res.status(201).send("User paid successfully");

   }catch (error) {
      console.error("Error enrolling user:", error);
      return res.status(500).send("Internal Server Error");
    }
}
export async function feedback(req,res){
  try{
    const { participant_id,program_id,rating,comments } = req.body;
    console.log(participant_id,program_id,rating,comments)
      const [add] = await pool.query(
        `INSERT INTO Feedback (participant_id, program_id, rating, comments) VALUES (?, ?, ?, ?)`,
        [participant_id, program_id, rating, comments]
      );
  
      console.log(add);
  
      return res.status(201).send("Feedback sent successfully");

  }catch (error) {
      console.error("Error enrolling user:", error);
      return res.status(500).send("Internal Server Error");
    }
}
export async function healthrecord(req,res){
  try{
    const { participant_id,program_id,date,weight,bp,cholestrol,health_status,notes } = req.body;
    console.log(participant_id,program_id,date,weight,bp,cholestrol,health_status,notes)
      const [add] = await pool.query(
        `INSERT INTO HealthRecord (participant_id, program_id, date, weight, bp, cholestrol, health_status, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [participant_id, program_id, date, weight, bp, cholestrol,health_status,notes]
      );
  
      console.log(add);
  
      return res.status(201).send("Feedback sent successfully");

  }catch (error) {
      console.error("Error enrolling user:", error);
      return res.status(500).send("Internal Server Error");
    }
}


