SELECT DISTINCT teachers.name as teacher, cohorts.name as cohorts
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name ='JUL02'
ORDER BY teacher;
