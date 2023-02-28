const express = require('express');
const app = express();
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: "testdb.cxcixpar5ft2.us-east-1.rds.amazonaws.com",
    port: 5432,
    database: "postgres"
})
const port = 3000;
const host= "0.0.0.0"

app.listen(port,host)

//  const server = app.listen(5050, function () {
//      let host = server.address().address
//      let port = server.address().port
//      // Starting the Server at the port 3000
//  })
 app.get('/', (req, res) => {
     return res.json({ message: 'server is up' })
 })