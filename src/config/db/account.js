var mysql= require('mysql2/promise');
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER_NAME,
  database: process.env.DB1,
  password: process.env.PASSWORD
})
  
console.log("Creating connection pool...")
module.exports = pool;