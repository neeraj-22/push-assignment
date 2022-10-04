const mysql = require("mysql");

var mySqlConnection = mysql.createConnection({
    host : 'PROCESS.ENV.DB_HOST',
    user : 'PROCESS.ENV.DB_USER',
    password : 'PROCESS.ENV.DB_PASSWORD',
    database : 'PROCESS.ENV.DB_NAME'
})

const connectDatabase = () => {
    mySqlConnection.connect((err) => {
        if(!err){
            console.log('DB Connected');
        }
        else{
            console.log('Error Connecting DB')
        }
    })
}

module.exports = connectDatabase
