const {Pool} = require('pg');
const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
const cohortName = args[0];


pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohorts
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = '${cohortName || 'JUL02'}'
ORDER BY teacher;
`)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohorts}: ${row.teacher}`);
    })
  })
  .catch(err => console.error('query error', err.stack));