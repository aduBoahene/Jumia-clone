
 const {Pool} = require('pg');
  
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "bbbold90001",
    database: "jumia"
  });

  module.exports={
      query:(text,params)=>pool.query(text,params),
  }