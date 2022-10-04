const mysql = require("mysql");

var mySqlConnection = mysql.createConnection({
    host : 'PROCESS.ENV.DB_HOST',
    user : 'PROCESS.ENV.DB_USER',
    password : 'PROCESS.ENV.DB_HOST',
    database : 'pushassignment'
})

exports.getDataTest = (req, res) => {
    res.status(200).json({
        message : "Runnin' Good"
    })
}

exports.addDataToDB = (req, res) => {
    const {blockNumber, transactionHash, address} = req.body;
    const txndetails = {BlockHeight : blockNumber, TxnHash : transactionHash, Address : address}
    mySqlConnection.query("INSERT INTO pushassignment.txndetails SET ?", txndetails, (err) => {
        if(err){
            res.status(402).json({
                message : "Error saving to DB"
            })
        }
        else{
            res.status(200).json({
                message : "Saved successfully"
            })
        }
    })
}

exports.fetchData = (req, res) => {
    mySqlConnection.query("SELECT * FROM pushassignment.txndetails", (err, rows, fields) => {
        if(!err){
            res.status(200).json({
                message : "Succeful Fetching Data",
                data : rows
            })
        }
        else{
            res.status(402).json({
                message : "Error Fetching Data"
            })
        }
    })
}

exports.totalRows = (req, res) => {
    mySqlConnection.query("SELECT COUNT(*) AS COUNT FROM pushassignment.txndetails", (err, count) => {
        if(err){
            res.status(402).json({
                message : "Error findinf rows in DB"
            })
        }
        else{
            res.status(200).json({
                message : "fetched Successfully",
                count
            })
        }
    })
}
