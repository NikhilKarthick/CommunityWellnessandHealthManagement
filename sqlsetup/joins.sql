      SELECT 
          participant.participant_id,
          participant.name AS participant_name,
          participant.email AS participant_email,
          participant.phone_no,
          participant.address,
          participant.date_of_birth,
          participant.age,
          participant.gender
      FROM 
          participant
      WHERE 
          participant.participant_id = 12;
 -- Retrieve related enrollment and program details
      SELECT 
          enrollment.enrollment_id,
          enrollment.enrollment_date,
          enrollment.status AS enrollment_status,
          program.name AS program_name,
          program.description,
          program.start_date,
          program.end_date
      FROM 
          enrollment
      JOIN program ON enrollment.program_id = program.program_id
      WHERE 
          enrollment.participant_id = 12;

      -- Retrieve feedback details
      SELECT 
          feedback.feedback_id,
          feedback.rating,
          feedback.comments
      FROM 
          feedback
      WHERE 
          feedback.participant_id = 12;

      -- Retrieve health records
      SELECT 
          healthrecord.record_id,
          healthrecord.date AS record_date,
          healthrecord.weight,
          healthrecord.bp,
          healthrecord.cholestrol,
          healthrecord.health_status,
          healthrecord.notes AS health_notes
      FROM 
          healthrecord
      WHERE 
          healthrecord.participant_id = 12;

      -- Retrieve payment details
      SELECT 
          payment.payment_id,
          payment.amount,
          payment.payment_date,
          payment.PayMethod,
          payment.status AS payment_status
      FROM 
          payment
      WHERE 
          payment.participant_id = 12;

      -- Retrieve session and instructor details
      SELECT 
          session.session_id,
          session.session_date,
          session.session_time,
          session.location,
          instructor.instructor_id,
          instructor.name AS instructor_name,
          instructor.email AS instructor_email,
          instructor.specialization
      FROM 
          session
      LEFT JOIN instructor ON session.instructor_id = instructor.instructor_id
      WHERE 
          session.participant_id = 12;
