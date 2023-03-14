var express = require('express')
var cors = require('cors')
var mysql = require('mysql2')
require('dotenv').config()

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
res.json({test:5555})
})

app.get('/users', (req,res)=>{
    connection.query(
        'SELECT * FROM `users` ',
        function(err, results, fields) {
            res.json(results)
        
        }
      );

})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})