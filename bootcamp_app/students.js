const {Pool} = require('pg');
const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const month = args[0];
const limitNum = args[1];

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${month}%'
LIMIT ${limitNum || 5};
`)
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => console.error('query error', err.stack));

