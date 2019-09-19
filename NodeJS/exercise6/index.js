//include the Client constructor from the pg module
const { Client } = require("pg");

//make a new instace of the Client constructor and specify wich db to connect to using the connectionString key
const client = new Client({
  connectionString: "postgresql://localhost/-pg-lesson-one"
});

//connect
client.connect();
async function createTable() {
  const results = await client.query(
    "CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT); INSERT INTO students(name) VALUES('Elie'); INSERT INTO students(name) VALUES('Michael'); INSERT INTO students(name) VALUES('Joel'); INSERT INTO students(name) VALUES('Matt');"
  );
}
//let's make a function to get all the rows in our students table!
async function getStudents() {
  const results = await client.query("SELECT * FROM students");
  console.log(results.rows);
}

async function addStudent(name) {
  const results = await client.query(
    "INSERT INTO students (name) VALUES ($1) RETURNING *",
    [name]
  );
  console.log(results.rows[0]);
}

//when we start using express, procees.exit will be a response from the server instead.
addStudent("Daniel").then(() => process.exit(0));

//let's get our students and then stop the node process
//when we start using express, process.exit will be a response from the erver instead
/* createTable().then(getStudents().then(() => process.exit(0))); */
