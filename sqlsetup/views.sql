CREATE VIEW ParticipantEnrollmentView AS
SELECT 
    p.participant_id,
    p.name,
    p.email,
    p.phone_no,
    e.program_id,
    e.enrollment_date,
    e.status
FROM participant p
LEFT JOIN enrollment e ON p.participant_id = e.participant_id;

CREATE VIEW HealthRecordView AS
SELECT 
    p.participant_id,
    p.name,
    hr.date,
    hr.weight,
    hr.bp,
    hr.cholestrol,
    hr.health_status,
    hr.notes
FROM participant p
LEFT JOIN healthrecord hr ON p.participant_id = hr.participant_id;
