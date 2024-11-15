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
        CALL AddParticipant(?,?,?,?,?,?,?)`,[name,email,phone_no,address,date_of_birth,age,gender])
    
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
        `CALL EnrollParticipant(?, ?, ?, "active")`,
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
export async function session(req,res){
  try{
    const { program_id,instructor_id,session_date,session_time,location,participant_id} = req.body;
    console.log(program_id,instructor_id,session_date,session_time,location,participant_id)
      const [add] = await pool.query(
        `INSERT INTO Session (program_id, instructor_id, session_date, session_time, location, participant_id) VALUES (?, ?, ?, ?, ?, ?)`,
        [program_id,instructor_id,session_date,session_time,location,participant_id]
      );
  
      console.log(add);
  
      return res.status(201).send("Feedback sent successfully");

  }catch (error) {
      console.error("Error enrolling user:", error);
      return res.status(500).send("Internal Server Error");
    }
}
export async function generate(req, res) {
  try {
    const { participant_id } = req.query; // Use req.query for GET requests
    console.log(participant_id);

    // Execute the query using the participant_id from the query parameters
    const [add] = await pool.query(
      `
     SELECT 
    participant.participant_id,
    participant.name AS participant_name,
    participant.email AS participant_email,
    participant.phone_no,
    participant.address,
    participant.date_of_birth,
    participant.age,
    participant.gender,
    
    -- Aggregate enrollment and program details
    GROUP_CONCAT(DISTINCT CONCAT(enrollment.enrollment_id, ':', enrollment.enrollment_date, ':', enrollment.status) ORDER BY enrollment.enrollment_date) AS enrollment_details,
    GROUP_CONCAT(DISTINCT CONCAT(program.name, ':', program.description, ':', program.start_date, ':', program.end_date) ORDER BY program.start_date) AS program_details,

    -- Aggregate feedback details
    GROUP_CONCAT(DISTINCT CONCAT(feedback.feedback_id, ':', feedback.rating, ':', feedback.comments) ORDER BY feedback.feedback_id) AS feedback_details,

    -- Aggregate health record details
    GROUP_CONCAT(DISTINCT CONCAT(healthrecord.record_id, ':', healthrecord.date, ':', healthrecord.weight, ':', healthrecord.bp, ':', healthrecord.cholestrol, ':', healthrecord.health_status, ':', healthrecord.notes) ORDER BY healthrecord.date) AS health_record_details,

    -- Aggregate payment details
    GROUP_CONCAT(DISTINCT CONCAT(payment.payment_id, ':', payment.amount, ':', payment.payment_date, ':', payment.PayMethod, ':', payment.status) ORDER BY payment.payment_date) AS payment_details,

    -- Aggregate session and instructor details
    GROUP_CONCAT(DISTINCT CONCAT(session.session_id, ':', session.session_date, ':', session.session_time, ':', session.location, ':', instructor.name, ':', instructor.specialization) ORDER BY session.session_date) AS session_instructor_details

FROM 
    participant
LEFT JOIN enrollment ON participant.participant_id = enrollment.participant_id
LEFT JOIN program ON enrollment.program_id = program.program_id
LEFT JOIN feedback ON participant.participant_id = feedback.participant_id
LEFT JOIN healthrecord ON participant.participant_id = healthrecord.participant_id
LEFT JOIN payment ON participant.participant_id = payment.participant_id
LEFT JOIN session ON participant.participant_id = session.participant_id
LEFT JOIN instructor ON session.instructor_id = instructor.instructor_id
WHERE 
    participant.participant_id = ?
GROUP BY 
    participant.participant_id;

     
      `,
      [participant_id]
    );

    console.log(add);
    if (add.length > 0) {
      return res.status(200).json(add[0]); // Return the first item in the array
    } else {
      return res.status(404).json({ error: "Participant not found" });
    }
    
  } catch (error) {
    console.error("Error generating report:", error);
    return res.status(500).send("Internal Server Error");
  }
}
