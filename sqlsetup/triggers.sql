DELIMITER $$

CREATE TRIGGER `participant_update_trigger`
AFTER INSERT ON `participant`
FOR EACH ROW
BEGIN
    INSERT INTO participant_audit_log (participant_id, name, email, phone_no, change_time)
    VALUES (NEW.participant_id, NEW.name, NEW.email, NEW.phone_no, NOW());
END$$

DELIMITER ;
