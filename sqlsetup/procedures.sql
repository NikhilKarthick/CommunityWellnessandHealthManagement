DELIMITER $$

CREATE PROCEDURE `AddParticipant`(
    IN p_name VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_phone_no VARCHAR(15),
    IN p_address VARCHAR(255),
    IN p_date_of_birth DATE,
    IN p_age INT,
    IN p_gender VARCHAR(10)
)
BEGIN
    INSERT INTO participant (name, email, phone_no, address, date_of_birth, age, gender)
    VALUES (p_name, p_email, p_phone_no, p_address, p_date_of_birth, p_age, p_gender);
END$$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE `EnrollParticipant`(
    IN p_participant_id INT,
    IN p_program_id INT,
    IN p_enrollment_date DATE,
    IN p_status ENUM('active', 'completed', 'cancelled')
)
BEGIN
    INSERT INTO enrollment (participant_id, program_id, enrollment_date, status)
    VALUES (p_participant_id, p_program_id, p_enrollment_date, p_status);
END$$

DELIMITER ;
