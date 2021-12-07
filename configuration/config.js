const mysql = require('mysql2')

const query = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "SHOP",
    user: "root",
    password: "root"
})

module.exports = query